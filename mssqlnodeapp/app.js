require("./core/server");
/*
function geturldata(url) {
    var con = new sql.Connection(config);
    con.connect().then(function () {
        var req = new sql.Request(con);
        req.input('url', sql.NVarChar, url);
        req.input('siteid', sql.Int, 6);
        req.execute('usp_get_url_data', function (err, rs) {
            if (err) {
                console.log(err);
                con.close();
                return;
            }
            console.log(rs.length);
            console.log(rs);
            con.close();
        });
    })
    
}

function getproducts() {
    var con = new sql.Connection(config);

    con.connect().then(function () {
        var req = new sql.Request(con);
        req.query("Select top 10 prodid,name,price from product_master").then(function (rs) {
            console.log(rs);
            con.close();
        }).catch(function (err) {
            console.log(err);
            con.close();
        });
    });
}

//getproducts();
geturldata('deluxe-masks-on-stick');

*/
//# sourceMappingURL=app.js.map