var mydb;




function initDB() {
    function openDB() {
        //Create the database the parameters are 1. the database name 2.version number 3. a description 4. the size of the database (in bytes) 1024 x 1024 = 1MB
        mydb = openDatabase("IRL_Quiz", "0.1", "IrishQuiz", 1024 * 1024);
        //create the tables using SQL for the database using a transaction
    }

    function createTables() {
        mydb.transaction(function (t) {
      //  	t.executeSql("DROP TABLE quiz_questions");
        	
           t.executeSql("CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY ASC, fname TEXT, sname TEXT)");
           t.executeSql("CREATE TABLE IF NOT EXISTS scores (id INTEGER PRIMARY KEY ASC, user TEXT, quiz_id INTEGER, score INTEGER, date STRING)");
           // t.executeSql("CREATE TABLE IF NOT EXISTS positions (number INTEGER, position TEXT)");
           // t.executeSql("CREATE TABLE IF NOT EXISTS myTeams (id_match INTEGER, position TEXT, id_players, FOREIGN KEY(id_match) REFERENCES match(id),FOREIGN KEY(id_players) REFERENCES players(id))");
           // t.executeSql("CREATE TABLE IF NOT EXISTS stats (id INTEGER PRIMARY KEY ASC, xC INT, yC INT, type TEXT, time TEXT, id_match INTEGER, half TEXT, FOREIGN KEY(id_match) REFERENCES match(id))");
           // t.executeSql("CREATE TABLE IF NOT EXISTS recordableStats (id INTEGER PRIMARY KEY ASC, statType TEXT)");
           //	t.executeSql("CREATE TABLE IF NOT EXISTS answer_bank (id INTEGER PRIMARY KEY ASC, answer_bank_id INTEGER, answer TEXT)");
       		t.executeSql("CREATE TABLE IF NOT EXISTS quiz_questions (id INTEGER PRIMARY KEY ASC, question TEXT, question_answer TEXT, mChoice1 TEXT, mChoice2 TEXT, mChoice3 TEXT, quiz_id INTEGER)");

			//t.executeSql("DROP TABLE quiz_questions");   
			
        });
    }
    openDB();
    createTables();
}

initDB();
//prePopulate();
console.log("database init");





//load_answer_bank();
//county_maps();
sampleuser();
Geography_quiz_questions();
History_quiz_questions();


 function sampleuser() {
        mydb.transaction(function (t) {
        	
        	t.executeSql("DROP TABLE quiz_questions");   
			t.executeSql("CREATE TABLE IF NOT EXISTS quiz_questions (id INTEGER PRIMARY KEY ASC, question TEXT, question_answer TEXT, mChoice1 TEXT, mChoice2 TEXT, mChoice3 TEXT, quiz_id INTEGER)");

			
        });
    }


/*
 * Quiz Ids
 * 1 - Geography
 * 2 - County Maps
 * 3 - History
 */



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

function Geography_quiz_questions(){
//Populating County Questions
	var geographyQs = ['Largest County in Ireland ?',
					'Smallest County in Ireland ?',
					'Most Northerly County ?',
					'Most easterly County ?',
					'Most southerly County ?',
					'Most westerly County?',
					'County at Geographical Centre ?',
					'Most populated County?',
					'Least populated County?',
					'What is the Highest Mountain in Ireland ?',
					'What is the Highest Mountain in Ulster ?',
					'What is the Highest Mountain in Leinster ?',
					'What is the Highest Mountain in Connacht ?',
					'What is the Highest Mountain in Munster ?',
					'Which River flows into the largest lake in Northern Ireland ?',
					'Name which river did the famous battle in 1690 take place involving William of Orange ?',
					'Name the river that flows through the City of Derry?',
					'Belfast is built on what river?',
					'Name the river that flows through Cork?',
					'Which famous river runs through Dublin?',
					'Which River is the Longest in Ireland ?',
					'Where is the giants causeway located?',
					'In what county is Mizen Head?',
					'Rathlin Island lies off the coast of what Ulster County?',
					'What is the second smallest county in Ireland?', 
					'In what city is St. Canice’s cathedral ?',
					'Off what county is Tory Island?',
					'In what county are the Cliffs of Moher?',
					'In what county is the Cooley Peninsula?',
					'In what county are the Blue Stack Mountains?',
					'Slieve Donard is the highest peak in what mountain range?'];
					
	var geographyAns = ['Cork',
						'Louth',
						'Donegal',
						'Down',
						'Cork',
						'Kerry',
						'Roscommon',
						'Dublin',
						'Leitrim',
						'Carrauntoohil',
						'Slieve Donard',
						'Lugnaquilla',
						'Mweelrea',
						'Carrauntoohil',
						'River Bann',
						'River Boyne',
						'River Foyle',
						'River Lagan',
						'River Lee',
						'River Liffey',
						'River Shannon',
						'Antrim',
						'Cork',
						'Antrim',
						'Carlow',
						'Kilkenny',
						'Donegal',
						'Clare',
						'Louth',
						'Donegal',
						'Mourne Mts'];
					
	var geographyM1 = ['Mayo',
						'Clare',
						'Dery','Dublin',
						'Kerry',
						'Galway',
						'Longford',
						'Antrim',
						'Meath',
						'Slieve Donard',
						'Slieve Bearnagh',
						'Mount Leinster',
						'Croagh Patrick',
						'Mullaghmore',
						'River Foyle',
						'Arney River',
						'River Moyola',
						'River Bann',
						'Munster Blackwater',
						'Inch River',
						'River Barrow',
						'Donegal',
						'Donegal',
						'Derry',
						'Louth',
						'Derry',
						'Kerry',
						'Galway',
						'Wexford',
						'Derry',
						'Sperrin Mts'];
					
	var geographyM2 = ['Dublin',
						'Laois',
						'Sligo',
						'Wexford',
						'Meath',
						'Dublin',
						'Wexford',
						'Cork',
						'Derry',
						'Galtymore',
						'Divis',
						'Maulin',
						'Ben Gorm',
						'Sugarloaf',
						'River Erne',
						'River Moy',
						'River Bann',
						'Six Mile Water',
						'River Roe',
						'Devlin River',
						'River Suir',
						'Galway',
						'Dublin',
						'Donegal',
						'Mayo',
						'Armagh',
						'Antrim',
						'Sligo',
						'Limerick',
						'Kerry',
						'Antrim Plateau'];
					
	var geographyM3 = ['Tyrone',
						'Sligo',
						'Down',
						'Tipperary',
						'Donegal',
						'Clare',
						'Louth',
						'Leitrim',
						'Dublin',
						'Cnoc na Péiste',
						'Slemish',
						'Slieveboy',
						'Slievemore',
						'Knockboy',
						'River Lagan',
						'River Nore',
						'River Derry',
						'River Bush',
						'River Boyne',
						'River Bann',
						'River Bann',
						'Down',
						'Mayo',
						'Down',
						'Tyrone',
						'Lisburn',
						'Wicklow',
						'Westmeath',
						'Sligo',
						'Down',
						'MacGillycuddy Reeks'];

		for(var i=0, l = geographyQs.length; i < l; i++){
	    	console.log("Question -"+geographyQs[i]+ " Answer -"+geographyAns[i]+ " Multiple choice 1 -"+geographyM1[i]+ " Multiple choice 2 -"+geographyM2[i]+ " Multiple choice 3 -"+geographyM3[i]);
	    	var quiz_id = 1;
	    	var question = geographyQs[i];
	    	var answer = geographyAns[i];
	    	var mChoice1 = geographyM1[i];
	    	var mChoice2 = geographyM2[i];
	    	var mChoice3 = geographyM3[i];
	    	addToQuiz_Questions(question, answer, mChoice1, mChoice2, mChoice3, quiz_id);    	
		}


}

function History_quiz_questions(){
//Populating County Questions
	var historyQs = ['When did St Patrick arrive in Ireland ?',
					'In what year did the Pope visit Ireland?',
					'In what year did Ireland join the E.U.?',
					'In what city is there an area known as “The Bogside.”?',
					'Where was the 1947 All Ireland Football final held?',
					'The Battle of the Boyne took place on July 1st in what year?',
					'In what year did the Normans invade Ireland?',
					'In what town was the G.A.A. founded?',
					'In what year was the GAA founded?',
					'In what year was the Titanic built in Belfast?',
					'In what county are the passage graves at Newgrange?'];
					
	var historyAns = 	['432 AD',
						'1979',
						'1973',
						'Derry',
						'New York',
						'1690',
						'1169',
						'Thurles',
						'1884',
						'1912',
						'Meath'];
					
	var historyM1 = 	['1800 AD',
						'1905',
						'1990',
						'Belfast',
						'London',
						'1960',
						'1684',
						'Athlone',
						'1205',
						'1802',
						'Louth'];
					
	var historyM2 = 	['1014 AD',
						'1950',
						'1960',
						'Cork',
						'Amsterdam',
						'1196',
						'1763',
						'Dungiven',
						'2009',
						'1967',
						'Roscommon'];
					
	var historyM3 = 	['13 AD',
						'2001',
						'2003',
						'Dublin',
						'Paris',
						'1906',
						'1894',
						'Omagh',
						'1647',
						'2010',
						'Tipperary'];

		for(var i=0, l = historyQs.length; i < l; i++){
	    	console.log("Question -"+historyQs[i]+ " Answer -"+historyAns[i]+ " Multiple choice 1 -"+historyM1[i]+ " Multiple choice 2 -"+historyM2[i]+ " Multiple choice 3 -"+historyM3[i]);
	    	var quiz_id = 3; //history id number
	    	var question = historyQs[i];
	    	var answer = historyAns[i];
	    	var mChoice1 = historyM1[i];
	    	var mChoice2 = historyM2[i];
	    	var mChoice3 = historyM3[i];
	    	addToQuiz_Questions(question, answer, mChoice1, mChoice2, mChoice3, quiz_id);    	
		}
		
	

}


function addToQuiz_Questions(question, answer, mChoice1, mChoice2, mChoice3, quiz_id){
			    	 mydb.transaction(function (t) {
				     t.executeSql('INSERT INTO quiz_questions (question, question_answer, mChoice1, mChoice2, mChoice3, quiz_id) VALUES ("'+question+'","'+answer+'","'+mChoice1+'","'+mChoice2+'","'+mChoice3+'",'+quiz_id+')');        
					});}















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



