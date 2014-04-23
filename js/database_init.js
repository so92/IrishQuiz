var mydb;

function initDB() {
    function openDB() {
        //Create the database the parameters are 1. the database name 2.version number 3. a description 4. the size of the database (in bytes) 1024 x 1024 = 1MB
        mydb = openDatabase("IRL_Quiz", "0.1", "IrishQuiz", 1024 * 1024);
        //create the tables using SQL for the database using a transaction
    }

    function createTables() {
        mydb.transaction(function (t) {
           t.executeSql("CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY ASC, fname TEXT, sname TEXT)");
           t.executeSql("CREATE TABLE IF NOT EXISTS scores (id INTEGER PRIMARY KEY ASC, user_id INTEGER, quiz_id INTEGER, score INTEGER, date DATE, FOREIGN KEY(user_id) REFERENCES user(id))");
           // t.executeSql("CREATE TABLE IF NOT EXISTS positions (number INTEGER, position TEXT)");
           // t.executeSql("CREATE TABLE IF NOT EXISTS myTeams (id_match INTEGER, position TEXT, id_players, FOREIGN KEY(id_match) REFERENCES match(id),FOREIGN KEY(id_players) REFERENCES players(id))");
           // t.executeSql("CREATE TABLE IF NOT EXISTS stats (id INTEGER PRIMARY KEY ASC, xC INT, yC INT, type TEXT, time TEXT, id_match INTEGER, half TEXT, FOREIGN KEY(id_match) REFERENCES match(id))");
           // t.executeSql("CREATE TABLE IF NOT EXISTS recordableStats (id INTEGER PRIMARY KEY ASC, statType TEXT)");
           //	t.executeSql("CREATE TABLE IF NOT EXISTS answer_bank (id INTEGER PRIMARY KEY ASC, answer_bank_id INTEGER, answer TEXT)");
       		t.executeSql("CREATE TABLE IF NOT EXISTS quiz_questions (id INTEGER PRIMARY KEY ASC, question TEXT, question_answer TEXT, mChoice1 TEXT, mChoice2 TEXT, mChoice3 TEXT, quiz_id INTEGER)");
		//	t.executeSql("DROP TABLE answer_bank");
		//	t.executeSql("DROP TABLE quiz_questions");   
			
        });
    }
    openDB();
    createTables();
}

initDB();
//prePopulate();
console.log("database init");
//quiz_questions();
//load_answer_bank();
//county_maps();

function county_maps(){
//Populating County Questions
	var countyMaps = ["images/derry.jpg","images/donegal.jpg","images/dublin.jpg","images/galway.jpg","images/kerry.jpg","images/kilkenny.jpg","images/leitrim.jpg","images/limerick.jpg","images/mayo.jpg","images/tyrone.jpg"];
	
					
	var countyAns = ['Derry','Donegal','Dublin','Galway','Kerry','Kilkenny','Leitrim','Limerick','Mayo','Tyrone'];
					
	var countyM1 = ['Derry','Donegal','Dublin','Galway','Kerry','Kilkenny','Leitrim','Limerick','Mayo','Tyrone'];
					
	var countyM2 = ['Derry','Donegal','Dublin','Galway','Kerry','Kilkenny','Leitrim','Limerick','Mayo','Tyrone'];
					
	var countyM3 = ['Derry','Donegal','Dublin','Galway','Kerry','Kilkenny','Leitrim','Limerick','Mayo','Tyrone'];

		for(var i=0, l = countyMaps.length; i < l; i++){
	    	console.log("Question -"+countyMaps[i]+ " Answer -"+countyAns[i]+ " Multiple choice 1 -"+countyM1[i]+ " Multiple choice 2 -"+countyM2[i]+ " Multiple choice 3 -"+countyM3[i]);
	    	var quiz_id = 2;
	    	var question = countyMaps[i];
	    	var answer = countyAns[i];
	    	var mChoice1 = countyM1[i];
	    	var mChoice2 = countyM2[i];
	    	var mChoice3 = countyM3[i];
	    	addToQuiz_Questions(question, answer, mChoice1, mChoice2, mChoice3, quiz_id);    	
		}
		
	alert("added");	

}

function quiz_questions(){
//Populating County Questions
	var countyQs = ['Largest County in Ireland ?',
					'Smallest County in Ireland ?',
					'Most Northerly County ?',
					'Most easterly County ?',
					'Most southerly County ?',
					'Most westerly County?',
					'County at Geographical Centre ?',
					'Most populated County?',
					'Least populated County?'];
					
	var countyAns = ['Cork','Louth','Donegal','Down','Cork','Kerry','Roscommon','Dublin','Leitrim'];
					
	var countyM1 = ['Mayo','Clare','Dery','Dublin','Kerry','Galway','Longford','Antrim','Meath'];
					
	var countyM2 = ['Dublin','Laois','Sligo','Wexford','Meath','Dublin','Wexford','Cork','Derry'];
					
	var countyM3 = ['Tyrone','Sligo','Down','Tipperary','Donegal','Clare','Louth','Leitrim','Dublin'];

		for(var i=0, l = countyQs.length; i < l; i++){
	    	console.log("Question -"+countyQs[i]+ " Answer -"+countyAns[i]+ " Multiple choice 1 -"+countyM1[i]+ " Multiple choice 2 -"+countyM2[i]+ " Multiple choice 3 -"+countyM3[i]);
	    	var quiz_id = 1;
	    	var question = countyQs[i];
	    	var answer = countyAns[i];
	    	var mChoice1 = countyM1[i];
	    	var mChoice2 = countyM2[i];
	    	var mChoice3 = countyM3[i];
	    	addToQuiz_Questions(question, answer, mChoice1, mChoice2, mChoice3, quiz_id);    	
		}
		
	alert("added");	
	var mountainQs = 	['What is the Highest Mountain in Ireland ?',
						'What is the Highest Mountain in Ulster ?',
						'What is the Highest Mountain in Leinster ?',
						'What is the Highest Mountain in Connacht ?',
						'What is the Highest Mountain in Munster ?'];
					
	var mountainAns = 	['Carrauntoohil','Slieve Donard','Lugnaquilla','Mweelrea','Carrauntoohil'];
	
	var mountainM1 = 	['Slieve Donard','Slieve Bearnagh','Mount Leinster','Croagh Patrick','Mullaghmore'];
	
	var mountainM2 = 	['Galtymore','Divis','Maulin','Ben Gorm','Sugarloaf'];

	var mountainM3 = 	['Cnoc na Péiste','Slemish','Slieveboy','Slievemore','Knockboy'];



		for(var i=0, l = mountainQs.length; i < l; i++){
	    	console.log("Question -"+mountainQs[i]+ " Answer -"+mountainAns[i]+ " Multiple choice 1 -"+mountainM1[i]+ " Multiple choice 2 -"+mountainM2[i]+ " Multiple choice 3 -"+mountainM3[i]);	    	
	    	var quiz_id = 1;
	    	var question = mountainQs[i];
	    	var answer = mountainAns[i];
	    	var mChoice1 = mountainM1[i];
	    	var mChoice2 = mountainM2[i];
	    	var mChoice3 = mountainM3[i];
	    	addToQuiz_Questions(question, answer, mChoice1, mChoice2, mChoice3, quiz_id);    	
		}
		
		alert("added");	

	var riverQs = ['Which River flows into the largest lake in Northern Ireland ?',
					'Name which river did the famous battle in 1690 take place involving William of Orange ?',
					'Name the river that flows through the City of Derry?',
					'Name the river that flows through Belfast?',
					'Name the river that flows through Cork?',
					'Which famous river runs through Dublin?',
					'Which River is the Longest in Ireland ?'];
					
	var riverAns = ['River Bann','River Boyne','River Foyle','River Lagan','River Lee','River Liffey','River Shannon'];
	
	var riverM1 = ['River Foyle','Arney River','River Moyola','River Bann','Munster Blackwater','Inch River','River Barrow'];
	var riverM2 = ['River Erne','River Moy','River Bann','Six Mile Water','River Roe','Devlin River','River Suir'];
	var riverM3 = ['River Lagan','River Nore','River Derry','River Bush','River Boyne','River Bann','River Bann'];

		for(var i=0, l = riverQs.length; i < l; i++){
			
			console.log("Question -"+riverQs[i]+ " Answer -"+riverAns[i]+ " Multiple choice 1 -"+riverM1[i]+ " Multiple choice 2 -"+riverM2[i]+ " Multiple choice 3 -"+riverM3[i]);	    	
	    	var quiz_id = 1;
	    	var question = riverQs[i];
	    	var answer = riverAns[i];
	    	var mChoice1 = riverM1[i];
	    	var mChoice2 = riverM2[i];
	    	var mChoice3 = riverM3[i];
	    	addToQuiz_Questions(question, answer, mChoice1, mChoice2, mChoice3, quiz_id);    	
		}
	alert("added");	

}

function addToQuiz_Questions(question, answer, mChoice1, mChoice2, mChoice3, quiz_id){
			    	 mydb.transaction(function (t) {
				     t.executeSql('INSERT INTO quiz_questions (question, question_answer, mChoice1, mChoice2, mChoice3, quiz_id) VALUES ("'+question+'","'+answer+'","'+mChoice1+'","'+mChoice2+'","'+mChoice3+'",'+quiz_id+')');        
					});}

/*
function load_answer_bank(){
	var counties = ['Cork','Louth','Donegal','Down','Kerry','Roscommon','Dublin','Leitrim','Derry','Tyrone','Mayo','Galway','Meath','Westmeath','Limerick','Antrim'];
		for(var i=0, l = counties.length; i < l; i++){
	 //   	console.log(counties[i]);
	    	var id = 1;
	    	var answer = counties[i];
	    	addToAnswerBank(id, answer);    	
		}

	var mountains = ['Carrauntoohil','Slieve Donard','Lugnaquilla','Mweelrea','Galtymore','Mount Leinster','Mount Errigal','Brandon Hill','Sawel Mountain','Slieve Gullion'];
		for(var i=0, l = mountains.length; i < l; i++){
	 //   	console.log(mountains[i]);
	    	var id = 2;
	    	var answer = mountains[i];
	    	addToAnswerBank(id, answer);    	
		}
		
	var rivers = ['River Bann','River Boyne','River Foyle','River Lagan','River Lee','River Liffey','River Shannon','River Swilly','River Erne','River Blackwater','River Nore','River Suir','River Barrow'];
		for(var i=0, l = rivers.length; i < l; i++){
	//		    	console.log(rivers[i]);
			    	var id = 3;
			    	var answer = rivers[i];
			    	addToAnswerBank(id, answer);    	
				}
}



function addToAnswerBank(id, answer){
			    	 mydb.transaction(function (t) {
				     t.executeSql('INSERT INTO answer_bank (answer_bank_id, answer) VALUES ('+id+',"'+answer+'")');        
					});}

*/













function prePopulate()
{
	 mydb.transaction(function (t) {
	     t.executeSql("INSERT INTO users (fname, sname) VALUES ('Sean','Owens')"); 
	     t.executeSql("INSERT INTO users (fname, sname) VALUES ('Frank','Smith')"); 
	     t.executeSql("INSERT INTO scores (user_id, quiz_id, score, date) VALUES (1, 3, 10, 27/05/2014)"); 
	     t.executeSql("INSERT INTO scores (user_id, quiz_id, score, date) VALUES (1, 2, 19, 27/05/2014)"); 
	     t.executeSql("INSERT INTO scores (user_id, quiz_id, score, date) VALUES (1, 5, 14, 27/05/2014)"); 
	     t.executeSql("INSERT INTO scores (user_id, quiz_id, score, date) VALUES (1, 5, 12, 27/05/2014)"); 
          
	});
}


function testing()
{
	   mydb.transaction(function (tx) {
 
			        tx.executeSql('SELECT * FROM scores WHERE user_id= "1"', [], function (tx, result) {
			 
			            dataset = result.rows;
			 
					            for (var i = 0, item = null; i < dataset.length; i++) {				 
					                item = dataset.item(i);	
					               
					               	
					               
					                score = item['score'];
					                alert (score);
					                
					   
					         //       var linkeditdelete =  item['id'] + ' , ' + item['date'] + ' , ' + item['date'] + ' , ' + item['venue']+ ' , ' + item['opposition'];
					        //        alert(linkeditdelete);
					            
					           
					            
					            }	
					            
					              
			        });
  			  });  
  			  
}



