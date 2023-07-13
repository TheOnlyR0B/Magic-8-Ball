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
  