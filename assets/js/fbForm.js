//Fetching screen width (to adjust for mobile)
const width = window.innerWidth
  || document.documentElement.clientWidth
  || document.body.clientWidth;
const smallScr = width < 768;

//Create arrays for multi-select category lists
var uID = [
  "",           //Empty value
  "The Rock",
  "Bill Gates",
  "Morpheus",
  "The Joker",
];

//Fetch HTML element by ID
const formSpace = document.getElementById('feedback');

//Add a bit of space at the top
formSpace.appendChild(document.createElement('br'));

//Add logo and title
var theLogo = document.createElement('img');
theLogo.setAttribute("src", "./assets/img/favicon/apple-touch-icon-57x57.png");
theLogo.setAttribute("alt", "Quick Feedback dot i o logo");
formSpace.appendChild(theLogo);

var theTitle = document.createElement('span');
var titleText = document.createTextNode(" quickFeedback.io");
theTitle.style.fontWeight = "700";
theTitle.style.color = "#2792bc";
theTitle.style.fontSize = "32px";
theTitle.style.verticalAlign = "middle";
theTitle.appendChild(titleText);
formSpace.appendChild(theTitle);

//Create new form element, name element
var theForm = document.createElement('form');
theForm.setAttribute("id", "feedbackForm");
theForm.setAttribute("name", "feedbackForm");

//Set action attribute on form
theForm.setAttribute("action", "https://www.getform.org/f/8c8145d9-3959-4f6f-b869-85e301cd1824");
theForm.setAttribute("method", "POST");
//Make the launching to the GetForm.org Thank You page in a new window
theForm.setAttribute("target", "_blank");
formSpace.appendChild(theForm);


//-------------------------------------------------
//Form Heading
var heading = document.createElement('h3');
heading.innerHTML = "So, about Venmo...";
theForm.appendChild(heading);


//-------------------------------------------------
//User Name
var nameLabel = document.createElement('label');
nameLabel.innerHTML = "Nickname: &nbsp;";
theForm.appendChild(nameLabel);

if (smallScr) theForm.appendChild(document.createElement('br'));

var nameInput = document.createElement('select');
nameInput.setAttribute("name", "userID");

for (var i = 0; i < uID.length; i++) {
  var tempVal = document.createElement('option');
  tempVal.setAttribute("value", uID[i]);
  tempVal.innerHTML = uID[i];

  nameInput.appendChild(tempVal);
}

theForm.appendChild(nameInput);
theForm.appendChild(document.createElement('br'));
theForm.appendChild(document.createElement('br'));


//-------------------------------------------------
//Have you used Venmo since last visit?
var recentUseText = document.createElement('div');
if (!smallScr) recentUseText.setAttribute("style", "margin-left: 28%;");
else recentUseText.setAttribute("style", "margin-left: 0%");
recentUseText.innerHTML = "Have you used Venmo since you were here last?";
theForm.appendChild(recentUseText);

var recentUseLabel = document.createElement('label');
recentUseLabel.setAttribute("class", "switch");
if (!smallScr) recentUseLabel.setAttribute("style", "margin-left: 28%");
else recentUseLabel.setAttribute("style", "margin-left: 0%");

var recentUseInput = document.createElement('input');
recentUseInput.setAttribute("type", "checkbox");
recentUseInput.setAttribute("name", "recentUse");
recentUseLabel.appendChild(recentUseInput);

var recentUseSpan = document.createElement('span');
recentUseSpan.setAttribute("class", "slider round");
recentUseLabel.appendChild(recentUseSpan);

theForm.appendChild(recentUseLabel);
theForm.appendChild(document.createElement('br'));

var removableBreak1 = document.createElement('br');
theForm.appendChild(removableBreak1);


//-------------------------------------------------
//How many times Venmo used?
var haveUsedText = document.createElement('div');
if (!smallScr) haveUsedText.setAttribute("style", "margin-left: 28%;");
else haveUsedText.setAttribute("style", "margin-left: 0%");
haveUsedText.innerHTML = "How many times have you used Venmo to...";
theForm.appendChild(haveUsedText);


//-------------------------------------------------
//How many times did you use Venmo to send money?
var sendMoneyLabel = document.createElement('label');
sendMoneyLabel.innerHTML = "Send money?&nbsp;";
theForm.appendChild(sendMoneyLabel);

var sendMoneyCount = document.createElement('input');
sendMoneyCount.setAttribute("type", "number");
sendMoneyCount.setAttribute("min", "0");
sendMoneyCount.setAttribute("name", "sendMoneyCount");
theForm.appendChild(sendMoneyCount);

var removableBreak2 = document.createElement('br');
theForm.appendChild(removableBreak2);


//-------------------------------------------------
//How many clicks did it take to send money?
var removableBreak2b = document.createElement('br');
theForm.appendChild(removableBreak2b);

var moneyClicksText = document.createElement('div');
if (!smallScr) moneyClicksText.setAttribute("style", "margin-left: 28%;");
else moneyClicksText.setAttribute("style", "margin-left: 0%");
moneyClicksText.innerHTML = "On average, about how many clicks did it take<br />to send money each time?";
theForm.appendChild(moneyClicksText);

//-------------------------------------------------
//How many times did you use Venmo to send money?
var moneyClicksLabel = document.createElement('label');
moneyClicksLabel.innerHTML = "# of clicks?&nbsp;";
theForm.appendChild(moneyClicksLabel);

var moneyClicksCount = document.createElement('input');
moneyClicksCount.setAttribute("type", "number");
moneyClicksCount.setAttribute("min", "0");
moneyClicksCount.setAttribute("name", "moneyClicksCount");
theForm.appendChild(moneyClicksCount);

var removableBreak2c = document.createElement('br');
theForm.appendChild(removableBreak2c);
var removableBreak2d = document.createElement('br');
theForm.appendChild(removableBreak2d);

//-------------------------------------------------
//Did you use Venmo to view others' transactions?
var browseActivityLabel = document.createElement('label');
browseActivityLabel.innerHTML = "Browse activity?&nbsp;";
theForm.appendChild(browseActivityLabel);

var browseActivityCount = document.createElement('input');
browseActivityCount.setAttribute("type", "number");
browseActivityCount.setAttribute("min", "0");
browseActivityCount.setAttribute("name", "browseActivityCount");
theForm.appendChild(browseActivityCount);

var removableBreak3 = document.createElement('br');
theForm.appendChild(removableBreak3);


//-------------------------------------------------
//Did you use Venmo to invite friends to join?
var inviteOthersLabel = document.createElement('label');
inviteOthersLabel.innerHTML = "Invite others?&nbsp;";
theForm.appendChild(inviteOthersLabel);

var inviteOthersCount = document.createElement('input');
inviteOthersCount.setAttribute("type", "number");
inviteOthersCount.setAttribute("min", "0");
inviteOthersCount.setAttribute("name", "inviteOthersCount");
theForm.appendChild(inviteOthersCount);

var removableBreak4 = document.createElement('br');
theForm.appendChild(removableBreak4);


//-------------------------------------------------
//Did you adjust any account settings in Venmo?
var adjustSettingsLabel = document.createElement('label');
adjustSettingsLabel.innerHTML = "Adjust settings?&nbsp;";
theForm.appendChild(adjustSettingsLabel);

var adjustSettingsCount = document.createElement('input');
adjustSettingsCount.setAttribute("type", "number");
adjustSettingsCount.setAttribute("min", "0");
adjustSettingsCount.setAttribute("name", "adjustSettingsCount");
theForm.appendChild(adjustSettingsCount);

var removableBreak5 = document.createElement('br');
theForm.appendChild(removableBreak5);


//-------------------------------------------------
//Submit Button
var removableBreak6 = document.createElement('br');
theForm.appendChild(removableBreak6);

var submit = document.createElement('button');
submit.setAttribute("type", "button");
submit.setAttribute("class", "btn btn-primary");
submit.setAttribute("onclick", "validateAndSubmit()");
if (!smallScr) submit.setAttribute("style", "margin-left: 28%;");
else submit.setAttribute("style", "margin-left: 0%");
submit.innerHTML = "Submit";
theForm.appendChild(submit);

//Spacer line breaks to move the button off the bottom of screen if needed
var removableBreak7 = document.createElement('br');
theForm.appendChild(removableBreak7);
var removableBreak8 = document.createElement('br');
theForm.appendChild(removableBreak8);
var removableBreak9 = document.createElement('br');
theForm.appendChild(removableBreak9);


//-------------------------------------------------
//Event Listener for Slider/Checkbox to show data collection
var slider = document.querySelector("input[name=recentUse]");
slider.addEventListener('change', function() {
  if (this.checked) {
    removableBreak1.style.display = "";
    haveUsedText.style.display = "";
    sendMoneyLabel.style.display = "";
    sendMoneyCount.style.display = "";
    removableBreak2.style.display = "none";
    moneyClicksText.style.display = "none";
    moneyClicksLabel.style.display = "none";
    moneyClicksCount.style.display = "none";
    removableBreak2b.style.display = "none";
    removableBreak2c.style.display = "none";
    removableBreak2d.style.display = "none";
    browseActivityLabel.style.display = "";
    browseActivityCount.style.display = "";
    removableBreak3.style.display = "";
    inviteOthersLabel.style.display = "";
    inviteOthersCount.style.display = "";
    removableBreak4.style.display = "";
    adjustSettingsLabel.style.display = "";
    adjustSettingsCount.style.display = "";
    removableBreak5.style.display = "";
    removableBreak6.style.display = "";
    removableBreak7.style.display = "";
    removableBreak8.style.display = "";
    removableBreak9.style.display = "";
  }
  else {
    removableBreak1.style.display = "none";
    haveUsedText.style.display = "none";
    sendMoneyLabel.style.display = "none";
    sendMoneyCount.style.display = "none";
    sendMoneyCount.value = 0;
    removableBreak2.style.display = "none";
    moneyClicksText.style.display = "none";
    moneyClicksLabel.style.display = "none";
    moneyClicksCount.style.display = "none";
    moneyClicksCount.value = 0;
    removableBreak2b.style.display = "none";
    removableBreak2c.style.display = "none";
    removableBreak2d.style.display = "none";
    browseActivityLabel.style.display = "none";
    browseActivityCount.style.display = "none";
    browseActivityCount.value = 0;
    removableBreak3.style.display = "none";
    inviteOthersLabel.style.display = "none";
    inviteOthersCount.style.display = "none";
    inviteOthersCount.value = 0;
    removableBreak4.style.display = "none";
    adjustSettingsLabel.style.display = "none";
    adjustSettingsCount.style.display = "none";
    adjustSettingsCount.value = 0;
    removableBreak5.style.display = "none";
    removableBreak6.style.display = "none";
    removableBreak7.style.display = "none";
    removableBreak8.style.display = "none";
    removableBreak9.style.display = "none";
  }
});


//-------------------------------------------------
//Event Listener for number input on times money sent
var moneyCnt = document.querySelector("input[name=sendMoneyCount]");
moneyCnt.addEventListener('change', function() {
  if (this.value > 0) {
    removableBreak2.style.display = "";
    moneyClicksText.style.display = "";
    moneyClicksLabel.style.display = "";
    moneyClicksCount.style.display = "";
    removableBreak2b.style.display = "";
    removableBreak2c.style.display = "";
    removableBreak2d.style.display = "";
  }
  else {
    removableBreak2.style.display = "none";
    moneyClicksText.style.display = "none";
    moneyClicksLabel.style.display = "none";
    moneyClicksCount.style.display = "none";
    moneyClicksCount.value = 0;
    removableBreak2b.style.display = "none";
    removableBreak2c.style.display = "none";
    removableBreak2d.style.display = "none";
  }
});


colapseAll();
function colapseAll() {
  removableBreak1.style.display = "none";
  haveUsedText.style.display = "none";
  sendMoneyLabel.style.display = "none";
  sendMoneyCount.style.display = "none";
  removableBreak2.style.display = "none";
  moneyClicksText.style.display = "none";
  moneyClicksLabel.style.display = "none";
  moneyClicksCount.style.display = "none";
  removableBreak2b.style.display = "none";
  removableBreak2c.style.display = "none";
  removableBreak2d.style.display = "none";
  browseActivityLabel.style.display = "none";
  browseActivityCount.style.display = "none";
  removableBreak3.style.display = "none";
  inviteOthersLabel.style.display = "none";
  inviteOthersCount.style.display = "none";
  removableBreak4.style.display = "none";
  adjustSettingsLabel.style.display = "none";
  adjustSettingsCount.style.display = "none";
  removableBreak5.style.display = "none";
  removableBreak6.style.display = "none";
  removableBreak7.style.display = "none";
  removableBreak8.style.display = "none";
  removableBreak9.style.display = "none";
}

//-------------------------------------------------
//Form Validation & Submission Function
function validateAndSubmit() {
  var personIndx = document.forms["feedbackForm"]["userID"].selectedIndex;
  if (personIndx < 1) {
    alert("Please identify your nickname to help us figure out who you are :D");
    return;
  }
  //Submit the form
  document.feedbackForm.action="https://www.getform.org/f/8c8145d9-3959-4f6f-b869-85e301cd1824";
  document.feedbackForm.submit();

  var info = "<div class=\"text-center\"><hr><h3>You're all set!</h3><br />";
  info += "<h4>Everthing looks good, thank  you! The form is on it's way.<br /><br />";
  info += "<big><big>&#128515;</big></big></h4>";
  formSpace.innerHTML = info;
}
