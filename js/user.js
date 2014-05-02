var PlayerName;

function outputUsers() {
    //check to ensure the mydb object has been created
    if (mydb) {
        //Get all the players from the database with a select statement, set outputPlayerList as the callback function for the executeSql command
        mydb.transaction(function (t) {
            t.executeSql("SELECT * FROM users", [], updateUserList);
        });
    } else {
        alert("db not found, your browser does not support web sql!");
    }
}

//function to output the list of players in the database
function updateUserList(transaction, results) {
    //initialise the listitems variable
    var listitems = "";
    //get the player list holder ul
    var listholder = document.getElementById("userlist");

    //clear players list ul
    listholder.innerHTML = "";

    var i;
    //Iterate through the results
    for (i = 0; i < results.rows.length; i++) {
        //Get the current row
        var row = results.rows.item(i);

        listholder.innerHTML += "<li>" + "" + row.fname + " " + row.sname +  "<a href='javascript:void(0);' onclick='deleteUser(" + row.id + ");'><img src='images/delete.png'/></a>"+  "<a onclick='selectUser(" + row.id + ");'>select user</a>";

    }
}


//function to add the player to the database
function addUser() {
    //check to ensure the mydb object has been created
    if (mydb) {
        //get the values of the label text inputs
        var fname = document.getElementById("fname").value;
        var sname = document.getElementById("sname").value;
        

        //Test to ensure that the user has entered all required fields
        if (fname !== "" && sname !== "") {
            //Insert the user entered details into the players table, note the use of the ? placeholder, these will replaced by the data passed in as an array as the second parameter
            mydb.transaction(function (t) {
                //      alert(fname+sname+dob+position);
                t.executeSql("INSERT INTO users (fname, sname) VALUES (?, ?)", [fname, sname]);
                outputUsers();
                fname.value = "";
                sname.value = "";

                //     alert("Added Sucesfully");
            });
        } else {
            alert("You must enter ALL DETAILS!");
        }
    } else {
        alert("db not found, your browser does not support web sql!");
    }
}


function newUser(){
	
	 $('#NewUserHolder').fadeToggle();
}

function existingUsers(){
	$('#ExistingUserHolder').fadeToggle();
}

//function to remove a players from the database, passed the row id as it's only parameter
function deleteUser(id) {
    //check to ensure the mydb object has been created
    if (mydb) {
        //Get all the players from the database with a select statement, set outputPlayerList as the callback function for the executeSql command
        mydb.transaction(function (t) {
            t.executeSql("DELETE FROM users WHERE id=?", [id], outputUsers);
        });
    } else {
        alert("db not found, your browser does not support web sql!");
    }
}

//function to remove a players from the database, passed the row id as it's only parameter
function selectUser(id) {
  // alert("you are here "+id);
   
   	var user_id = id;
   	sql = 'SELECT * FROM users WHERE id = "'+user_id+'"';
			    
	   mydb.transaction(function (tx) {
	   
			        tx.executeSql(sql, [], function (tx, result) {	 
					               	// alert(images);
    							       							 		 
									for (var i = 0, item = null; i < result.rows.length; i++) {	
										var row = result.rows.item(i);	
										PlayerName = row.fname + " " +row.sname;
										var holder = "Welcome "+PlayerName;
										document.getElementById("PlayerNameHolder").innerHTML = holder;
										//alert(PlayerName);
									}	
								
												           					               
			        });
  			  });  

       
        $('#UserSelect').toggle();
        $('#PlayQuiz').fadeToggle();
  
   
   
}





outputUsers();
