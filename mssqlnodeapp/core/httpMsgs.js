var settings = require('../settings');

exports.show500 = function (req, res, err) {
    if (settings.httpMsgFormat == "HTML") {
        res.writeHead(500, "Internal error occured", { "Content-Type": "text/html" });
        res.write("<html><head><title>500</title></head><body>500 : Internal server " + err + "</body></html>");        
    } else {
        res.writeHead(500, { "Content-Type": "application/json" });
        res.write(JSON.stringify({ data: "Error Occurred" + err }));        
    }
    res.end();
}

exports.sendJson = function (req, res, data) {
    res.writeHead(200, { "Content-Type": "application/json" });
    if (data) {
        res.write(JSON.stringify(data));
    }
    res.end();
}

exports.sendJson = function (req, res, data) {
    res.writeHead(200, { "Content-Type": "application/json" });
    if (data) {
        res.write(JSON.stringify(data));
    }
    res.end();
}

exports.show405 = function (req, res) {
    if (settings.httpMsgFormat == "HTML") {
        res.writeHead(405, "Internal error occured", { "Content-Type": "text/html" });
        res.write("<html><head><title>405</title></head><body>405 : Method not supported </body></html>");
    } else {
        res.writeHead(405, { "Content-Type": "application/json" });
        res.write(JSON.stringify({ data: "method Not Supported "}));
    }
    res.end();
}

exports.show404 = function (req, res) {
    if (settings.httpMsgFormat == "HTML") {
        res.writeHead(404, "Internal error occured", { "Content-Type": "text/html" });
        res.write("<html><head><title>405</title></head><body>404 : Resource not found </body></html>");
    } else {
        res.writeHead(404, { "Content-Type": "application/json" });
        res.write(JSON.stringify({ data: "Resource not found "}));
    }
    res.end();
}

exports.show413 = function (req, res) {
    if (settings.httpMsgFormat == "HTML") {
        res.writeHead(413, "Internal error occured", { "Content-Type": "text/html" });
        res.write("<html><head><title>405</title></head><body>404 : Request Entity is too large </body></html>");
    } else {
        res.writeHead(413, { "Content-Type": "application/json" });
        res.write(JSON.stringify({ data: "request entity is too large "}));
    }
    res.end();
}

exports.send200 = function (req, res) {   
    res.writeHead(200, { "Content-Type": "application/json" });     
    res.end();
}

exports.showHome = function (req, res) {
    if (settings.httpMsgFormat == "HTML") {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write("<html><head><title>Home Page</title></head><body>Valid End Points :<br/> /employees to list all employees <br> /employee/empno to search any employee no</body></html>");
    } else {
        res.writeHead(200, { "Content-Type": "application/json" });
        res.write(JSON.stringify([
            { url: "/employees", operation: "to get all employees" },
            { url: "/employees/empno", operation: "to get all employees by empid" }
        ]));
    }
    res.end();
}