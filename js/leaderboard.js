function ReturnToQuizMenu_LB(){
	$('#leaderboard').toggle();
	$('#QuizMenu').fadeToggle();

}

function showLeaderboard(){
	$('#QuizMenu').toggle();
	queryLeaderboard();
}

function showLeaderBoard_AQ(){
	$('#answers').toggle();
	$('#playersScore').toggle();
	queryLeaderboard();
}

function queryLeaderboard() {
    //check to ensure the mydb object has been created
    if (mydb) {
        //Get all the players from the database with a select statement, set outputPlayerList as the callback function for the executeSql command
        mydb.transaction(function (t) {
            t.executeSql("SELECT * FROM scores", [], updateLeaderboard);
        });
    } else {
        alert("db not found, your browser does not support web sql!");
    }

    
}


//function to output the list of players in the database
function updateLeaderboard(transaction, results) {


	var tableRef = document.getElementById("leaderTable").getElementsByTagName('tbody')[0];

	tableRef.innerHTML = "";

    var i;
    //Iterate through the results
    for (i = 0; i < results.rows.length; i++) {
        //Get the current row
        var row = results.rows.item(i);

      		var newRow   = tableRef.insertRow(tableRef.rows.length);
			// Insert a cell in the row at index 0
			var newCell0  = newRow.insertCell(0);
			var newCell1  = newRow.insertCell(1);
			var newCell2  = newRow.insertCell(2);
			var newCell3  = newRow.insertCell(3);

			// Append a text node to the cell
			var user  = document.createTextNode(row.user);		
			var score = document.createTextNode(row.score);
  			var date  = document.createTextNode(row.date);
  			var quiz;
  			if (row.quiz_id == 1){
  				 quiz  = document.createTextNode("Geography Quiz");
  			}
  			else if (row.quiz_id == 3){
  				 quiz  = document.createTextNode("History Quiz");
  			}
  			
  			
			newCell0.appendChild(user);
			newCell1.appendChild(score);
			newCell2.appendChild(date);
			newCell3.appendChild(quiz);
		
    
    }
    
    
    $('#leaderboard').fadeToggle();
}