let connection = require("./connection")

let orm = {
    selectAll: function() {
        let query = "SELECT * FROM burgers";
        connection.query(query, function(err, result) {
            if (err) throw err;
            console.log(result);
        })
    },
    insertOne: function(name) {
        let query = "INSERT INTO burgers (burger_name) VALUES (?)";
        connection.query(query, [name], function(err, result) {
            if (err) throw err;
            console.log(result);
        })
    },
    updateOne: function(name, newname) {
        let query = "UPDATE burger SET ? = ?";
        connection.query(query, [name, newname], function(err, result) {
            if (err) throw err;
            console.log(result)
        })
    }
}

module.exports = orm;