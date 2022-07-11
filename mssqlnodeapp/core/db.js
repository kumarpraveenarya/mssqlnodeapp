var sqldb = require('mssql');
var settings = require('../settings');

exports.executeSql = function (sql, callback) {
    var con = new sqldb.Connection(settings.dbconfig);
    con.connect().then(function () {
        var req = new sqldb.Request(con);
        req.query(sql)
        .then(function (rs) {
            callback(rs);
        }).catch(function (err) {
            console.log(err);
            callback(null, err);
        })
    }).catch(function (err) {
        console.log(err);
        callback(null, err);
    });
}

