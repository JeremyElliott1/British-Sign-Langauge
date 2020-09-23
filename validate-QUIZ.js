  function validate()
   {

   	var finalCounter = 0;
    //Name input
    var namePrompt = document.getElementById("UserInfo");
  	var name = document.forms[0].UserInfo.value;
    if (name === ''){
      UserInfo.style.backgroundColor="yellow";
      alert("Please enter your name");
      return false;
    }
    else {
      UserInfo.style.backgroundColor="white";
      finalCounter += 1;
    }

    //Question 1
  	var Q1Prompt = document.getElementById("Q1");
    var Q1Answer = document.forms[0].Q1.value;
    if(Q1Answer === ""){
      Q1Prompt.style.backgroundColor="yellow";
      alert("Please submit an answer for Question 1")
      return false;
    }
    else{
      Q1Prompt.style.backgroundColor="white";
      finalCounter += 1;
    }

    //Question 2
    var Q2AnswerCounter = 0;
    var Q2AnswerA = document.forms[0].Q2a.checked;
    var Q2AnswerB = document.forms[0].Q2b.checked;
    var Q2AnswerC = document.forms[0].Q2c.checked;
    var Q2AnswerD = document.forms[0].Q2d.checked;
    
    if (Q2AnswerA === true){
      Q2AnswerCounter += 1;
    }
    if (Q2AnswerB === true){
      Q2AnswerCounter += 1;
    }
    if (Q2AnswerC === true){
      Q2AnswerCounter += 1;
    }
    if (Q2AnswerD === true){
      Q2AnswerCounter += 1;
    }
    if (Q2AnswerCounter == 2){
      Q2.style.backgroundColor = "white";
      finalCounter += 1;
    }
    else {
      Q2.style.backgroundColor = "yellow";
      alert("Please select only two answer for question 2");
      return false;
    }

    //Question 3:
    var Q3Prompt = document.getElementById("Q3");

    var Q3AnswerA = document.forms[0].Q3a.checked;
    var Q3AnswerB = document.forms[0].Q3b.checked;
    var Q3AnswerC = document.forms[0].Q3c.checked;
    var Q3AnswerD = document.forms[0].Q3d.checked;

    if(!Q3AnswerA && !Q3AnswerB && !Q3AnswerC && !Q3AnswerD){
      Q3Prompt.style.backgroundColor="yellow";
      alert("Please select an answer for question 3");
      return false;
    }
    else {
      Q3Prompt.style.backgroundColor="white";
      finalCounter += 1;
    }

    //Question 4:
    var Q4Prompt = document.getElementById("Q4");
    var Q4Answer = document.forms[0].Q4.value;

    if (Q4Answer === ""){
      Q4.style.backgroundColor="yellow";
      alert("Please submit an answer for question 4")
      return false;
    }
    else{
    	Q4.style.backgroundColor="white";
    	finalCounter += 1;
    }

    //Scoring
    var score = 0;
    if (Q1Answer === "c"){
      score++;
    }
    if (Q2AnswerA === true){
      score++;
    }
    if (Q2AnswerC === true){
      score++;
    }
    if (Q3AnswerB === true){
      score++;
    }
    if(Q4Answer.toLowerCase()=== "british, australian and new zealand sign language"){
      score++;
    }
    var scoreMessage = "You scored "+ score +" out of 5";

    var scoreStr = String(score);
	var thisScore = document.forms[0].thisScore.value = scoreStr;

    if (finalCounter == 5){
    	alert (scoreMessage);
    	return true;
    }
    else{
    	return false;
    }

 }


