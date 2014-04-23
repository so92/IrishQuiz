
function showQuestions()
{
		
		var questions;
 				//initialise the listitems variable
			    var listitems = "";
			    //get the player list holder ul
			    var listholder = document.getElementById("questions");
			    //clear players list ul
			    listholder.innerHTML = "";	
			    
	   mydb.transaction(function (tx) {
 
			        tx.executeSql('SELECT * FROM quiz_questions', [], function (tx, result) {
			 
			  				    	 
					               	// alert(images);
       							 
       							 		 
									for (var i = 0, item = null; i < result.rows.length; i++) {				 
					                	var row = result.rows.item(i);	
					                				                	
					                	var answerBank = row.answer_bank_id;					                	
					                	var cAnswer = row.question_answer;
					                	
					                	
					                  	questions = makeArray(cAnswer, answerBank);


					         		 	listholder.innerHTML+=("<div class = 'question'><h3>"+row.question+answerBank+"<h3></div>");
					         		 	listholder.innerHTML+=("<div class = 'answers'");
										listholder.innerHTML+=("<input type='radio' value='a' name='question1'>a) " +questions[0]+".<br>");
										listholder.innerHTML+=("<input type='radio' value='b' name='question1'>b) " +questions[1]+".<br>");
										listholder.innerHTML+=("<input type='radio' value='c' name='question1'>c) " +questions[2]+".<br>");
										listholder.innerHTML+=("<input type='radio' value='d' name='question1'>d) " +questions[3]+".<br>");
										listholder.innerHTML+=("</div><br>");
									}
					            
					               
			        });
  			  });  
  			  
}


   function makeArray(cAnswer, answerBank) {
   	
   		console.log(" id " +answerBank + "  Question Answer " +cAnswer );
   		
   		var returnArray = new Array();
   		var sean;
   		
		

		console.log(returnArray + " " + sean);

        var multipeChoice = new Array(4);
        multipeChoice[0] = "sean";
        multipeChoice[1] = "owens";
        multipeChoice[2] = cAnswer;
        multipeChoice[3] = "testanswer";
     //   alert('here');
        
        
        var value = multipeChoice[Math.floor(Math.random() * multipeChoice.length)];
     //   alert(value);
        
        
        return multipeChoice;
   }





//testing2();

function testing2()
{
		 	var questions = new Array();
        	var answer = new Array();
        	var mchoices = new Array();
        	
        	
        	
	   mydb.transaction(function (tx) {
 
			        tx.executeSql('SELECT * FROM quiz_questions, answer_bank WHERE quiz_questions.answer_bank_id = answer_bank.answer_bank_id AND answer_bank.answer_bank_id = 3 AND quiz_questions.question_answer != answer_bank.answer', [], function (tx, result) {
			 
       							 		 
					            for (var i = 0, item = null; i < result.rows.length; i++) {				 
  									var row = result.rows.item(i);
					               	question = row.question;
					               	question_answer = row.question_answer;
					               	id = row.id;
					             //   answer = item['answer'];
					         
					         
					         	
					         			console.log(id +" Question " +question + "  Question Answer " +question_answer );

					         		
					         
					         
					           
					            
					            }	
					            
					              
			        });
  			  });  
  			  
}







function testing4()
{
		 	var questions = new Array();
        	var answer = new Array();
        	var mchoices = new Array();
        	
        	
        	
	   mydb.transaction(function (tx) {
 
			        tx.executeSql('SELECT question, question_answer, answer FROM quiz_questions, answer_bank WHERE quiz_questions.answer_bank_id = answer_bank.answer_bank_id AND answer_bank.answer_bank_id = 3 AND quiz_questions.question_answer != answer_bank.answer', [], function (tx, result) {
			 
       							 dataset = result.rows;			 
					            for (var i = 0, item = null; i < dataset.length; i++) {				 
					                item = dataset.item(i);
  	
					               	question = item['question'];
					               	question_answer = item['question_answer'];
					             //   answer = item['answer'];
					         
					         
					         	
					         			console.log("Question " +question + "  Question Answer " +question_answer );

					         		
					         
					         
					           
					            
					            }	
					            
					              
			        });
  			  });  
  			  
}