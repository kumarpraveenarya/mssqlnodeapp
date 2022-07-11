var http = require("http");
var emp = require("../controllers/employee");
var settings = require("../settings");
var httpMsgs = require("./httpMsgs");

http.createServer(function (req, res) {
    switch (req.method) {
        case "GET":
            if (req.url === "/") {
                httpMsgs.showHome(req, res);
            } else if(req.url === "/employees") {
                emp.getList(req,res);
            } else {
                var emppat = "[0-9]+";
                var patt = new RegExp("/employees/" + emppat);
                if (patt.test(req.url)) {
                    patt = new RegExp(emppat);
                    var empid = patt.exec(req.url);
                    emp.get(req, res, empid);
                } else {
                    httpMsgs.show404(req,res);
                }
            }            
            break;
        case "POST":
            if (req.url === "/employees") {
                var reqBody = '';
                req.on("data", function (data) {
                    reqBody += data;
                    if (reqBody.length > 1e7) //10MB
                    {
                        httpMsgs.show413(req, res);
                    }
                });
                req.on("end", function () {
                    emp.add(req, res, reqBody);
                });                
            } else {
                httpMsgs.show404(req,res);
            }
            break;
        case "PUT":
            break;
        case "DELETE":
            break;
        default:
            httpMsgs.show405(req, res);
            break;    
    }

}).listen(settings.webPort, function () {
    console.log("Server has been started : " + settings.webPort);
});