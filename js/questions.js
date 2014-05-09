var correctAnswers = new Array();
var globalQs = new Array();
var quiz_id;

function showQuestions(quizType) {
    var questions;

    //	Hiding buttons and numerous other items
    $('#QuizMenu').toggle();

    var answers = document.getElementById("answers");
    var scores = document.getElementById("playersScore");

    answers.style.display = "none";
    scores.style.display = "none";

    quiz_id = quizType;

    var random = (Math.random() + 1) * 1111111;

    geography = 'SELECT * FROM quiz_questions WHERE quiz_id = "' + quizType + '" ORDER BY ROWID * "' + random + '" % 10000 LIMIT 10';

    mydb.transaction(function(tx) {

        tx.executeSql(geography, [], function(tx, result) {
            // alert(images);
            for (var i = 0, item = null; i < result.rows.length; i++) {
                var boxid = "question_" + i;

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
                if (questions[0] == answer) {
                    correctAnswer = questions[0];
                    console.log("Found answer " + answer + " matching " + correctAnswer);
                } else if (questions[1] == answer) {
                    correctAnswer = questions[1];
                    console.log("Found answer " + answer + " matching " + correctAnswer);
                } else if (questions[2] == answer) {
                    correctAnswer = questions[2];
                    console.log("Found answer " + answer + " matching " + correctAnswer);
                } else if (questions[3] == answer) {
                    correctAnswer = questions[3];
                    console.log("Found answer " + answer + " matching " + correctAnswer);
                }

                correctAnswers[i] = correctAnswer;
                globalQs[i] = question;

                listholder.innerHTML += ("<div class = 'question'><h4>" + (i + 1) + "/10 </h4><h3>" + question + "<h3></div>");
                listholder.innerHTML += ("<div class = 'answers'");

                listholder.innerHTML += ("<input type='radio' value='" + questions[0] + "' name='question_" + i + "'><h6>a) " + questions[0] + ".</h6><br>");
                listholder.innerHTML += ("<input type='radio' value='" + questions[1] + "' name='question_" + i + "'><h6>b) " + questions[1] + ".</h6><br>");
                listholder.innerHTML += ("<input type='radio' value='" + questions[2] + "' name='question_" + i + "'><h6>c) " + questions[2] + ".</h6><br>");
                listholder.innerHTML += ("<input type='radio' value='" + questions[3] + "' name='question_" + i + "'><h6>d) " + questions[3] + ".</h6><br>");

                var exp = "'" + question + "'";

                var hidePrevious = i;
                var showNext = "";

                if (i < 1) {
                    listholder.innerHTML += ("<button class='ButtonNext' id='nextQ_" + (i + 1) + "'>Next Question</button>");
                    listholder.innerHTML += '<img class="Help" src="images/help.png" onclick="showHelp(4);"/>';

                    //	document.getElementById('question_0').style.visibility="visible";
                    $('#question_' + i).toggle();
                    showNext = 1;

                } else if (i < 9) {
                    listholder.innerHTML += ("<button class='ButtonNext' id='nextQ_" + (i + 1) + "'>Next Question</button>");
                    listholder.innerHTML += '<img class="Help" src="images/help.png" onclick="showHelp(4);"/>';
                    showNext = Number(i) + 1;
                } else {
                    listholder.innerHTML += ("<button class='ButtonNext' id='endQuizButton' onclick='checkAnswers()'>Finish Quiz</button>");
                    listholder.innerHTML += '<img class="Help" src="images/help.png" onclick="showHelp(5);"/>';
                    showNext = 10;
                }

                listholder.innerHTML += ("</div><br>");

                navigationB(showNext, hidePrevious);
                //			navigationF(showNext);	
                //alert(boxid);
                //document.getElementById('question_'+i).style.visibility="visible";
                //	document.getElementById('question_'+i).style.visibility="visible";
                }

        });
    });
}

function navigationF(showNext) {
    $('#nextQ_' + showNext).click(function() {
        $('#question_' + showNext).toggle();
    });
}

function navigationB(showNext, hidePrevious) {
    $('#nextQ_' + showNext).click(function() {
        $('#question_' + showNext).toggle();
        $('#question_' + hidePrevious).toggle();
    });

    $('#endQuizButton').click(function() {

        $('#question_' + hidePrevious).toggle();
        var answers = document.getElementById("answers");
        var scores = document.getElementById("playersScore");

        answers.style.display = "block";
        scores.style.display = "block";
        //	queryLeaderboard();
        });

}

function makeArray(answer, mChoice1, mChoice2, mChoice3) {

    console.log("Question Answer " + answer);

    var multipeChoice = new Array(4);
    multipeChoice[0] = answer;
    multipeChoice[1] = mChoice1;
    multipeChoice[2] = mChoice2;
    multipeChoice[3] = mChoice3;
    //   alert('here');
    multipeChoice.sort(function() {
        return 0.5 - Math.random();
    });
    //Array elements now scrambled
    return multipeChoice;
}

function checkAnswers() {
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
    submitScrore(count);
    showAnswers();

}

function submitScrore(count) {

    //check to ensure the mydb object has been created
    if (mydb) {
        //get the values of the label text inputs
        var user = PlayerName;
        var qi = quiz_id;
        var score = count;
        var date = new Date();
        var dateString = (new Date()).toLocaleDateString();
        var scoreHolder = document.getElementById("playersScore");

        var clipArt;

        if (score <= 4) {
            clipArt = '<br><img class="clipArt" src="images/bad.png" />';

        } else if (score >= 5) {
            clipArt = '<br><img class="clipArt" src="images/good.png" />';
        }

        scoreHolder.innerHTML = user + " you scored " + score + clipArt;

        //Insert the user entered details into the players table, note the use of the ? placeholder, these will replaced by the data passed in as an array as the second parameter
        mydb.transaction(function(t) {
            //alert(user+ quiz_id +score+ dateString);
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

function showAnswers() {

    var listitems = "";
    //get the answer list holder ul
    var listholder = document.getElementById("answers");
    //clear sanswers list ul
    listholder.innerHTML = "";
    for (i = 0; i < correctAnswers.length; i++) {
        listholder.innerHTML += ("<li>" + globalQs[i] + "<br>      " + correctAnswers[i] + "</li><br>");
    }
    listholder.innerHTML += '<button id="ShowLeaderBoard" onclick="showLeaderBoard_AQ(' + quiz_id + ');">Show Leaderboard</button>';
    listholder.innerHTML += '<button id="ReturnToQuizMenu" onclick="returnToQuizMenu();">Return to Quiz Menu</button>';
    listholder.innerHTML += '<img class="Help" src="images/help.png" onclick="showHelp(6);"/>';

}

function returnToQuizMenu() {

    $('#QuizMenu').fadeToggle();
    var scores = document.getElementById("playersScore");

    answers.style.display = "none";
    scores.style.display = "none";
}