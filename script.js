const answers = [
    {"key": "It is certain.", "type": "positive"},
    {"key": "It is decidedly so.", "type": "positive"},
    {"key": "Without a doubt.", "type": "positive"},
    {"key": "Yes definitely.", "type": "positive"},
    {"key": "You may rely on it.", "type": "positive"},
    {"key": "As I see it, yes.", "type": "positive"},
    {"key": "Most likely.", "type": "positive"},
    {"key": "Outlook good.", "type": "positive"},
    {"key": "Yes.", "type": "positive"},
    {"key": "Signs point to yes", "type": "positive"},
    {"key": "Reply hazy, try again", "type": "neutral"},
    {"key": "Ask again later.", "type": "neutral"},
    {"key": "Better not tell you now", "type": "neutral"},
    {"key": "Cannot predict now.", "type": "neutral"},
    {"key": "Concentrate and ask again.", "type": "neutral"},
    {"key": "Don't count on it", "type": "negative"},
    {"key": "My reply is no", "type": "negative"},
    {"key": "My sources say no", "type": "negative"},
    {"key": "Outlook not so good", "type": "negative"},
    {"key": "Very doubtful", "type": "negative"},
  ];

  
  function getAnswers() {
    const index = Math.floor(Math.random() * answers.length);
    const answer = answers[index];
  
    const answerDisplay = document.getElementById("answer-display");
    const answerDiv = document.getElementById("white_circle");
    const eightBallDiv = document.getElementById("image_div");
    var questionValue = document.getElementById("question");
    answerDiv.style.visibility = 'visible';
    eightBallDiv.style.visibility = 'hidden';
    answerDisplay.textContent = answer.key;
    if (localStorage.statistics) {
      const localArray = JSON.parse(localStorage.statistics);
      const result = localArray.filter(statistic => statistic.question === questionValue.value);
      if (result && result.length > 0) {
        result[0].answers.push(answer);
      } else {
        localArray.push({"question": questionValue.value, answers: [answer]});
        console.log(questionValue.value);
      }
      localStorage.statistics = JSON.stringify(localArray);
    } else {
      statistic = [{"question": questionValue.value, answers: [answer]}];
      localStorage.statistics =  JSON.stringify(statistic);
    }
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

  function checkCookie() {
    var overlayCookie = getCookie('showOverlay');
    console.log(overlayCookie);
    if(overlayCookie==="1") {
      document.getElementById("overlayHelp").style.visibility="hidden";
      document.getElementById("overlayBoxHelp").style.visibility="hidden";
      document.getElementById("hideOverlayHelp").style.visibility="hidden";  //Overlay is show when there is no Cookie
    } else {
      showOverlay();
    }}

    function showOverlayHelp() {                                              //Overlay IS show when there is a cookie
      document.getElementById("overlayHelp").style.visibility="visible";
      document.getElementById("overlayBoxHelp").style.visibility="visible";
      document.getElementById("hideOverlayHelp").style.visibility="visible";
    } 

    function hideOverlayHelp() {
      setCookie("showOverlay", "1", 30);
      document.getElementById("overlayHelp").style.visibility="hidden";
      document.getElementById("overlayBoxHelp").style.visibility="hidden";
      document.getElementById("hideOverlayHelp").style.visibility="hidden";
    }

  function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

  function setCookie(cname,cvalue,exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }
  function showOverlayCredits() {
    document.getElementById("credits_overlay").style.visibility='visible';
    document.getElementById("credits_box").classList.add('active');
  }


  function showOverlayStatistics() {
    const localArray = JSON.parse(localStorage.statistics);
    const answersArray = localArray.map(statistic => statistic.answers).flat();
    console.log(answersArray);
    const questionNum = localArray.length;
    const positiveNum = answersArray.filter(answer => answer.type === 'positive').length;
    const neutralNum = answersArray.filter(answer => answer.type === 'neutral').length;
    const negativeNum = answersArray.filter(answer => answer.type === 'negative').length;
    document.getElementById("questionNum").innerHTML = questionNum;
    document.getElementById("positiveNum").innerHTML = positiveNum;
    document.getElementById("neutralNum").innerHTML = neutralNum;
    document.getElementById("negativeNum").innerHTML = negativeNum;
    document.getElementById("overlayStatistics").classList.add("active");
    document.getElementById("overlayStatistics").style.visibility="visible";
    document.getElementById("overlayBoxStatistics").style.visibility="visible";
    document.getElementById("hideOverlayStatistics").style.visibility="visible";
  }

  function hideOverlayStatistics() {
    document.getElementById("overlayStatistics").style.visibility="hidden";
    document.getElementById("overlayBoxStatistics").style.visibility="hidden";
    document.getElementById("hideOverlayStatistics").style.visibility="hidden";
  }
  function hideCredits() {
    document.getElementById("credits_overlay").style.visibility='hidden';
    document.getElementById("credits_box").classList.remove('active');
  }