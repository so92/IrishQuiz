var correctAnswers = new Array();
var globalQs = new Array();
var quiz_id;

function showCounties(){
	var questions;
					    
	   mydb.transaction(function (tx) {
	   	var random = (Math.random() + 1) * 1111111;
			        tx.executeSql('SELECT * FROM quiz_questions WHERE quiz_id = 2 ORDER BY ROWID * "'+random+'" % 10000 LIMIT 5', [], function (tx, result) {	 
					               	// alert(images);
    							       							 		 
									for (var i = 0, item = null; i < result.rows.length; i++) {	
										var boxid = "question_"+i;

										//initialise the listitems variable
										var listitems = "";
										//get the player list holder ul
										var listholder = document.getElementById(boxid);
										//clear players list ul
										listholder.innerHTML = "";	
													 
					                	var row = result.rows.item(i);	
					                				                	
					                	var question = row.question;		           	
					                	var answer = row.question_answer;
					                	var mChoice1 = row.mChoice1;
					                	var mChoice2 = row.mChoice2;
					                	var mChoice3 = row.mChoice3;
					                	
					                  	questions = makeArray(answer, mChoice1, mChoice2, mChoice3);
					                  	
					                  	var correctAnswer;
					                  	if(questions[0] == answer){
					                  		correctAnswer = questions[0];
					                  		console.log("Found answer " + answer + " matching "+correctAnswer);	
					                  	}
					                  	else if(questions[1] == answer){
					                  		correctAnswer = questions[1];
					                  		console.log("Found answer " + answer + " matching "+correctAnswer);	
					                  	}
					                  	else if(questions[2] == answer){
					                  		correctAnswer = questions[2];
					                  		console.log("Found answer " + answer + " matching "+correctAnswer);	
					                  	}
					                  	else if(questions[3] == answer){
					                  		correctAnswer = questions[3];
					                  		console.log("Found answer " + answer + " matching "+correctAnswer);	
					                  	}

										correctAnswers[i]=correctAnswer;
										
										
									/*	 	$('.nextQ').click(function () {
									        $('#question_'+i).toggle();
									    });*/
									   

					         		 	listholder.innerHTML+=("<div class = 'question'><img src='"+question+"'/></div>");
					         		 	listholder.innerHTML+=("<div class = 'answers'");
										listholder.innerHTML+=("<input type='radio' value='a' name='question1'>a) " +questions[0]+".<br>");
										listholder.innerHTML+=("<input type='radio' value='b' name='question1'>b) " +questions[1]+".<br>");
										listholder.innerHTML+=("<input type='radio' value='c' name='question1'>c) " +questions[2]+".<br>");
										listholder.innerHTML+=("<input type='radio' value='d' name='question1'>d) " +questions[3]+".<br>");
										
										if(i<9){
										listholder.innerHTML+=("<button id='nextQ_"+(i+1)+"'>Next Question</button>");
										}
										else
										{
										listholder.innerHTML+=("<button id='nextQ_"+(i+1)+"'>Finish Quiz</button>");
										}
										
										listholder.innerHTML+=("</div><br>");
										
										//alert(boxid);
										
										//document.getElementById('question_'+i).style.visibility="visible";
										
										document.getElementById('question_'+i).style.visibility="visible";
									}	
								//	alert(correctchoices);				           					               
			        });
  			  });  
}

function showQuestions(quizType)
{		var questions;
	
		//	Hiding buttons and numerous other items
		$('#QuizMenu').toggle();

	
	
	
		quiz_id = quizType;
		
		var random = (Math.random() + 1) * 1111111;
		
		geography = 'SELECT * FROM quiz_questions WHERE quiz_id = "'+quizType+'" ORDER BY ROWID * "'+random+'" % 10000 LIMIT 10';
			    
	   mydb.transaction(function (tx) {
	   
			        tx.executeSql(geography, [], function (tx, result) {	 
					               	// alert(images);
    							       							 		 
									for (var i = 0, item = null; i < result.rows.length; i++) {	
										var boxid = "question_"+i;

										//initialise the listitems variable
										var listitems = "";
										//get the player list holder ul
										var listholder = document.getElementById(boxid);
										//clear players list ul
										listholder.innerHTML = "";	
													 
					                	var row = result.rows.item(i);	
					                				                	
					                	var question = row.question;		           	
					                	var answer = row.question_answer;
					                	var mChoice1 = row.mChoice1;
					                	var mChoice2 = row.mChoice2;
					                	var mChoice3 = row.mChoice3;
					                	
					                  	questions = makeArray(answer, mChoice1, mChoice2, mChoice3);
					                  	
					                  	var correctAnswer;
					                  	if(questions[0] == answer){
					                  		correctAnswer = questions[0];
					                  		console.log("Found answer " + answer + " matching "+correctAnswer);	
					                  	}
					                  	else if(questions[1] == answer){
					                  		correctAnswer = questions[1];
					                  		console.log("Found answer " + answer + " matching "+correctAnswer);	
					                  	}
					                  	else if(questions[2] == answer){
					                  		correctAnswer = questions[2];
					                  		console.log("Found answer " + answer + " matching "+correctAnswer);	
					                  	}
					                  	else if(questions[3] == answer){
					                  		correctAnswer = questions[3];
					                  		console.log("Found answer " + answer + " matching "+correctAnswer);	
					                  	}

										correctAnswers[i]=correctAnswer;
										globalQs[i] = question;
										
										 	
										 	
										
									   
									   
					         		 	listholder.innerHTML+=("<div class = 'question'><h3>"+question+"<h3></div>");
					         		 	listholder.innerHTML+=("<div class = 'answers'");
										listholder.innerHTML+=("<input type='radio' value='"+questions[0]+"' name='question_"+i+"'>a) " +questions[0]+".<br>");
										listholder.innerHTML+=("<input type='radio' value='"+questions[1]+"' name='question_"+i+"'>b) " +questions[1]+".<br>");
										listholder.innerHTML+=("<input type='radio' value='"+questions[2]+"' name='question_"+i+"'>c) " +questions[2]+".<br>");
										listholder.innerHTML+=("<input type='radio' value='"+questions[3]+"' name='question_"+i+"'>d) " +questions[3]+".<br>");
										
										var exp = "'" + question + "'";
										
										listholder.innerHTML+='    <img src="http://www.edgarcayce.org/Meditation/images/speaker_icon.gif" class="text-to-speech" alt="Click this image to read the text" />';
										
										var hidePrevious = i;
										var showNext;
										
										if(i<1){
										listholder.innerHTML+=("<button class='ButtonNext' id='nextQ_"+(i+1)+"'>Next Question</button>");
									//	document.getElementById('question_0').style.visibility="visible";
										$('#question_'+i).toggle();
										showNext = 1;
										
										}
										else if(i<9){
										listholder.innerHTML+=("<button class='ButtonNext' id='nextQ_"+(i+1)+"'>Next Question</button>");
										showNext = Number(i)+1;
										}
										else
										{
										listholder.innerHTML+=("<button class='ButtonNext' id='nextQ_"+(i+1)+"' onclick='checkAnswers()'>Finish Quiz</button>");
										showNext = 10;
										}
										
										listholder.innerHTML+=("</div><br>");
										
										  
										navigationB(showNext, hidePrevious);	
										navigationF(showNext);	
										
										//alert(boxid);
										
										//document.getElementById('question_'+i).style.visibility="visible";
										
									//	document.getElementById('question_'+i).style.visibility="visible";
									}	
								
												           					               
			        });
  			  });  
}

	function navigationF(showNext)
	{
		$('#nextQ_'+showNext).click(function () {
										        $('#question_'+showNext).toggle();
										    });
	}

	function navigationB(showNext, hidePrevious)
	{
		$('#nextQ_'+showNext).click(function () {
										        $('#question_'+hidePrevious).toggle();
										    });
	}

	

   function makeArray(answer, mChoice1, mChoice2, mChoice3) {
   	
   		console.log("Question Answer " +answer );

        var multipeChoice = new Array(4);
        multipeChoice[0] = answer;
        multipeChoice[1] = mChoice1;
        multipeChoice[2] = mChoice2;
        multipeChoice[3] = mChoice3;
     //   alert('here');

	multipeChoice.sort(function() {
		return 0.5 - Math.random();
		}); //Array elements now scrambled
	
	
        return multipeChoice;
   }




function checkAnswers()
{
	var count = 0;

    if ($('input[type="radio"][name=question_0]:checked').val() == correctAnswers[0]) {
        count++;
    }
    if ($('input[type="radio"][name=question_1]:checked').val() == correctAnswers[1]) {
        count++;
    }
        if ($('input[type="radio"][name=question_2]:checked').val() == correctAnswers[2]) {
        count++;
    }
    if ($('input[type="radio"][name=question_3]:checked').val() == correctAnswers[3]) {
        count++;
    }
        if ($('input[type="radio"][name=question_4]:checked').val() == correctAnswers[4]) {
        count++;
    }
    if ($('input[type="radio"][name=question_5]:checked').val() == correctAnswers[5]) {
        count++;
    }
        if ($('input[type="radio"][name=question_6]:checked').val() == correctAnswers[6]) {
        count++;
    }
    if ($('input[type="radio"][name=question_7]:checked').val() == correctAnswers[7]) {
        count++;
    }
            if ($('input[type="radio"][name=question_8]:checked').val() == correctAnswers[8]) {
        count++;
    }
    if ($('input[type="radio"][name=question_9]:checked').val() == correctAnswers[9]) {
        count++;
    }


    
   
      //  alert(PlayerName+ " you Scored " +count);
showAnswers();
submitScrore(count);
       
    
}

function submitScrore(count)
{

 //check to ensure the mydb object has been created
    if (mydb) {
        //get the values of the label text inputs
		var user = PlayerName;
		var qi = quiz_id;
		var score = count;
		var date = new Date();
		var dateString = (new Date()).toLocaleDateString();
		
            //Insert the user entered details into the players table, note the use of the ? placeholder, these will replaced by the data passed in as an array as the second parameter
            mydb.transaction(function (t) {
            	alert(user+ quiz_id +score+ dateString);
                //      alert(fname+sname+dob+position);
                t.executeSql("INSERT INTO scores (user, quiz_id, score, date) VALUES (?, ?, ?, ?)", [user, qi, score, dateString]);
                outputUsers();
                fname.value = "";
                sname.value = "";

                //     alert("Added Sucesfully");
            });
         
    } else {
        alert("db not found, your browser does not support web sql!");
    }
  
}

function showAnswers(){
	
		var listitems = "";
		//get the player list holder ul
		var listholder = document.getElementById("answers");
		//clear players list ul
		listholder.innerHTML = "";	
		for(i=0;i<correctAnswers.length;i++){
		listholder.innerHTML+=("<li>"+globalQs[i]+" "+correctAnswers[i]+"</li>");
		}
		listholder.innerHTML+= '<button id="ShowLeaderBoard" onclick="showLeaderBoard_AQ();">Show Leaderboard</button>';
		listholder.innerHTML+= '<button id="ReturnToQuizMenu" onclick="returnToQuizMenu();">Return to Quiz Menu</button>';
}

function returnToQuizMenu(){
	$('#answers').toggle();
	$('#QuizMenu').fadeToggle();

}



