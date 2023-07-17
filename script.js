const answers = [
    "It is certain.",
    "It is decidedly so.",
    "Without a doubt.",
    "Yes definitely.",
    "You may rely on it.",
    "As I see it, yes.",
    "Most likely.",
    "Outlook good.",
    "Yes.",
    "Signs point to yes",
    "Reply hazy, try again",
    "Ask again later.",
    "Better not tell you now",
    "Cannot predict now.",
    "Concentrate and ask again.",
    "Don't count on it",
    "My reply is no",
    "My sources say no",
    "Outlook not so good",
    "Very doubtful"
  ];
  
  function getAnswers() {
    const index = Math.floor(Math.random() * answers.length);
    const answer = answers[index];
  
    const answerDisplay = document.getElementById("answer-display");
    const answerDiv = document.getElementById("white_circle");
    const eightBallDiv = document.getElementById("image_div");
    answerDiv.style.visibility = 'visible';
    eightBallDiv.style.visibility = 'hidden';
    answerDisplay.textContent = answer;
  }
  function question_change(question) {
    const button = document.getElementById("button");
  
    if (question.value.trim() !== "") {
      button.disabled = false; // enable the button
    } else {
      button.disabled = true; // disable the button
    }
  }  

  function toggleDarkLightMode(mode) {
    console.log(mode);
    if(mode==="dark") {
      document.body.classList.remove("light-theme");
      document.body.classList.add("dark-theme");
    } else {
      document.body.classList.remove("dark-theme");
      document.body.classList.add("light-theme");
    }
  }
  function clearInput() {
    var getValue = document.getElementById("question");
    var answerDisplay = document.getElementById("answer-display");
    var answerDiv = document.getElementById("white_circle");
    var eightBallDiv = document.getElementById("image_div");
  
    if (getValue.value !== "") {
      getValue.value = "";
      answerDisplay.textContent = ""; // Clear the answer display
      answerDiv.style.visibility = "hidden"; // Hide the white_circle
      eightBallDiv.style.visibility = "visible"; // Show the 8-ball image
    }
  }
