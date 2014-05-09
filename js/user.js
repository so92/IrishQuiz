var PlayerName;

function outputUsers() {
    //check to ensure the mydb object has been created
    if (mydb) {
        //Get all the players from the database with a select statement, set outputUserList as the callback function for the executeSql command
        mydb.transaction(function(t) {
            t.executeSql("SELECT * FROM users", [], updateUserList);
        });
    } else {
        alert("db not found, your browser does not support web sql!");
    }
}

//function to output the list of USERS in the database
function updateUserList(transaction, results) {
    //initialise the listitems variable
    //   var listitems = "";
    //get the user list holder ul
    //   var listholder = document.getElementById("userlist");
    var tableRef = document.getElementById("userTable").getElementsByTagName('tbody')[0];

    tableRef.innerHTML = "";

    //clear players list ul
    var i;
    //Iterate through the results
    for (i = 0; i < results.rows.length; i++) {
        //Get the current row
        var row = results.rows.item(i);

        var newRow = tableRef.insertRow(tableRef.rows.length);
        // Insert a cell in the row at index 0
        var newCell0 = newRow.insertCell(0);
        var newCell1 = newRow.insertCell(1);
        var newCell2 = newRow.insertCell(2);

        // Append a text node to the cell
        var name = document.createTextNode(row.fname + " " + row.sname);
        var deleteButton = "<a href='javascript:void(0);' onclick='deleteUser(" + row.id + ");'><img src='images/delete.png'/></a>";
        var proceed = "<a onclick='selectUser(" + row.id + ");'>Select User</a>";

        newCell0.appendChild(name);
        newCell1.innerHTML = deleteButton;
        newCell2.innerHTML = proceed;

    }
}

//function to add the user to the database
function addUser() {
    //check to ensure the mydb object has been created
    if (mydb) {
        //get the values of the label text inputs
        var fname = document.getElementById("fname").value;
        var sname = document.getElementById("sname").value;

        //Test to ensure that the user has entered all required fields
        if (fname !== "" && sname !== "") {
            //Insert the user entered details into the players table, note the use of the ? placeholder, these will replaced by the data passed in as an array as the second parameter
            mydb.transaction(function(t) {
                t.executeSql('INSERT INTO users (fname, sname) VALUES (?, ?)', [fname, sname], querySuccess);

            });

        } else {
            alert("You must enter ALL DETAILS!");
        }
    } else {
        alert("db not found, your browser does not support web sql!");
    }
    document.getElementById("fname").value = "";
    document.getElementById("sname").value = "";
    outputUsers();

}

function querySuccess(t, results) {
    selectUser(results.insertId);
    return;

}

function newUser() {

    $('#NewUserHolder').fadeToggle();
    $('#ExistingUserButton').fadeToggle();
    $('#homeHelp').fadeToggle();

    var button = document.getElementById("NewUserButton");
    if (button.innerHTML == "New User") {
        button.innerHTML = "Return to Main Menu";
        button.style.backgroundColor = "red";
    } else if (button.innerHTML == "Return to Main Menu") {
        button.innerHTML = "New User";
        button.style.backgroundColor = "limegreen";
    }
}

function existingUsers() {
    $('#ExistingUserHolder').fadeToggle();
    $('#NewUserButton').fadeToggle();
    $('#homeHelp').fadeToggle();

    var button = document.getElementById("ExistingUserButton");
    if (button.innerHTML == "Existing Users") {
        button.innerHTML = "Return to Main Menu";
        button.style.backgroundColor = "red";
    } else if (button.innerHTML == "Return to Main Menu") {
        button.innerHTML = "Existing Users";
        button.style.backgroundColor = "darksalmon";
    }
}

//function to remove a user from the database, passed the row id as it's only parameter
function deleteUser(id) {
    //check to ensure the mydb object has been created
    if (mydb) {
        //Get all the users from the database with a select statement, set outputUserList as the callback function for the executeSql command
        mydb.transaction(function(t) {
            t.executeSql("DELETE FROM users WHERE id=?", [id], outputUsers);
        });
    } else {
        alert("db not found, your browser does not support web sql!");
    }
}

//function to remove a user from the database, passed the row id as it's only parameter
function selectUser(id) {
    // alert("you are here "+id);
    var user_id = id;
    sql = 'SELECT * FROM users WHERE id = "' + user_id + '"';

    mydb.transaction(function(tx) {

        tx.executeSql(sql, [], function(tx, result) {
            // alert(images);
            for (var i = 0, item = null; i < result.rows.length; i++) {
                var row = result.rows.item(i);
                PlayerName = row.fname + " " + row.sname;
                var holder = "<h1>Welcome " + PlayerName + "</h1>";
                document.getElementById("PlayerNameHolder").innerHTML = holder;
                }

        });
    });

    $('#UserSelect').toggle();
    $('#PlayQuiz').fadeToggle();

}

function ReturnToMainMenu() {
    $('#PlayQuiz').toggle();
    $('#UserSelect').fadeToggle();
}

outputUsers();