var util = require('util');
var db = require("../core/db");
var httpmsg = require('../core/httpMsgs');

exports.getList = function (req, res) {
    db.executeSql("Select * from ordermaster", function (data, err) {
        if (err) {
            httpmsg.show500(req, res, err);            
        } else {
            httpmsg.sendJson(req, res, data);
        }
    });
}

exports.get = function (req, res, orderid) {
    db.executeSql("Select * from orderdetails where order_no="+orderid, function (data, err) {
        if (err) {
            httpmsg.show500(req, res, err);
        } else {
            httpmsg.sendJson(req, res, data);
        }
    });
}

exports.add = function (req, res, reqbody) {
    try {
        if (!reqbody) throw new Error("Input no valid");
        var data = JSON.parse(reqbody);
        if (data) {
            var sql = "insert into ordermaster(table_id,description,waiter_name) values";
            sql += util.format("('%s', %d, %d)", data.tableid, data.description, data.waitername);
            db.executeSql(sql, function (data, err) {
                if (err) {
                    httpmsg.show500(req, res, err); 
                } else {
                    httpmsg.send200(req, res);
                }
            });
        } else {
            throw new Error("Input no valid");
        }
    } catch (ex) {
        httpmsg.show500(req, res, err);      
    }
}

exports.update = function (req, res, reqbody) {

}

exports.delete = function (req, res, reqbody) {

}