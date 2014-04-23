var correctAnswers = new Array();
var globalQs = new Array();

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


function showQuestions()
{		var questions;

		queryString = "SELECT * FROM quiz_questions WHERE (quiz_id = 1) ORDER BY RANDOM() LIMIT 5";

		queryString = "SELECT *, RANDOM() AS rnd FROM quiz_questions WHERE (quiz_id = 1) ORDER BY rnd LIMIT 5";	
			
			    
	   mydb.transaction(function (tx) {
	   	var random = (Math.random() + 1) * 1111111;
			        tx.executeSql('SELECT * FROM quiz_questions WHERE quiz_id = 1 ORDER BY ROWID * "'+random+'" % 10000 LIMIT 10', [], function (tx, result) {	 
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
									   
									   
					         		 	listholder.innerHTML+=("<div class = 'question'><h3>"+question+"<h3></div>");
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


function showQuestions()
{		var questions;

		queryString = "SELECT * FROM quiz_questions WHERE (quiz_id = 1) ORDER BY RANDOM() LIMIT 5";

		queryString = "SELECT *, RANDOM() AS rnd FROM quiz_questions WHERE (quiz_id = 1) ORDER BY rnd LIMIT 5";	
			
			    
	   mydb.transaction(function (tx) {
	   	var random = (Math.random() + 1) * 1111111;
			        tx.executeSql('SELECT * FROM quiz_questions WHERE quiz_id = 1 ORDER BY ROWID * "'+random+'" % 10000 LIMIT 10', [], function (tx, result) {	 
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
									   
									   
					         		 	listholder.innerHTML+=("<div class = 'question'><h3>"+question+"<h3></div>");
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


function showAnswers(){
	
		var listitems = "";
		//get the player list holder ul
		var listholder = document.getElementById("answers");
		//clear players list ul
		listholder.innerHTML = "";	
		for(i=0;i<correctAnswers.length;i++){
		listholder.innerHTML+=("<li>"+correctAnswers[i]+"</li>");
		}
}

function gradeit(){
	var incorrect=null
	for (q=1;q<=totalquestions;q++){
		var thequestion=eval("document.myquiz.question"+q)
		for (c=0;c<thequestion.length;c++){
			if (thequestion[c].checked==true)
			actualchoices[q]=thequestion[c].value
			}
			
		if (actualchoices[q]!=correctAnswers[q]){ //process an incorrect choice
			if (incorrect==null)
			incorrect=q
			else
			incorrect+="/"+q
			}
		}
	
	if (incorrect==null)
	incorrect="a/b"
	document.cookie='q='+incorrect
	if (document.cookie=='')
	alert("Your browser does not accept cookies. Please adjust your browser settings.")
	else
	window.location="results.htm"
	}
	
function checkAnswers()
{
	
}
