//Fetching screen width (to adjust for mobile)
const width = window.innerWidth
  || document.documentElement.clientWidth
  || document.body.clientWidth;
const smallScr = width < 768;

const moodData = {
  POSITIVE: "Positive",
  NEUTRAL: "Neutral",
  NEGATIVE: "Negative",
};


//Create arrays for multi-select category lists
var uID = [
  "",           //Empty value
  "Aaron",
  "Heejun",
  "Jiatao",
  "Monica",
];

//Fetch HTML element by ID
const formSpace = document.getElementById('feedback');

//Add a bit of space at the top
formSpace.appendChild(document.createElement('br'));

//-------------------------------------------------
//Logo & Title
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

//-------------------------------------------------
//Create the Form
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
recentUseText.innerHTML = "How did you most recently use Venmo?";
theForm.appendChild(recentUseText);


//-------------------------------------------------
//Send money?
var sendMoneyLabel = document.createElement('label');
sendMoneyLabel.innerHTML = "Send money?&nbsp;";
theForm.appendChild(sendMoneyLabel);


var moneyBlankLabel = document.createElement('label');
moneyBlankLabel.setAttribute("class", "switch");
moneyBlankLabel.setAttribute("style", "margin-left: 0%");

var sendMoneyCheckbox = document.createElement('input');
sendMoneyCheckbox.setAttribute("type", "checkbox");
sendMoneyCheckbox.setAttribute("name", "sendMoney");
moneyBlankLabel.appendChild(sendMoneyCheckbox);

var sendMoneySpan = document.createElement('span');
sendMoneySpan.setAttribute("class", "slider round");
moneyBlankLabel.appendChild(sendMoneySpan);

theForm.appendChild(moneyBlankLabel);

// var bufferSpan1 = document.createElement('span');
// bufferSpan1.innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"
// theForm.appendChild(bufferSpan1);
theForm.appendChild(document.createElement('br'));


//-------------------------------------------------
//Did you use Venmo to view others' transactions?
// var browseActivityLabel = document.createElement('label');
// browseActivityLabel.innerHTML = "Browse activity?&nbsp;";
// theForm.appendChild(browseActivityLabel);
//
// var browseBlankLabel = document.createElement('label');
// browseBlankLabel.setAttribute("class", "switch");
// browseBlankLabel.setAttribute("style", "margin-left: 0%");
//
// var browseCheckbox = document.createElement('input');
// browseCheckbox.setAttribute("type", "checkbox");
// browseCheckbox.setAttribute("name", "browseTransactions");
// browseBlankLabel.appendChild(browseCheckbox);
//
// var browseSpan = document.createElement('span');
// browseSpan.setAttribute("class", "slider round");
// browseBlankLabel.appendChild(browseSpan);
//
// theForm.appendChild(browseBlankLabel);
// theForm.appendChild(document.createElement('br'));


//-------------------------------------------------
//Receive money?
var receiveMoneyLabel = document.createElement('label');
receiveMoneyLabel.innerHTML = "Receive money?&nbsp;";
theForm.appendChild(receiveMoneyLabel);


var moneyBlank2Label = document.createElement('label');
moneyBlank2Label.setAttribute("class", "switch");
moneyBlank2Label.setAttribute("style", "margin-left: 0%");

var receiveMoneyCheckbox = document.createElement('input');
receiveMoneyCheckbox.setAttribute("type", "checkbox");
receiveMoneyCheckbox.setAttribute("name", "receiveMoney");
moneyBlank2Label.appendChild(receiveMoneyCheckbox);

var receiveMoneySpan = document.createElement('span');
receiveMoneySpan.setAttribute("class", "slider round");
moneyBlank2Label.appendChild(receiveMoneySpan);

theForm.appendChild(moneyBlank2Label);
// var bufferSpan2 = document.createElement('span');
// bufferSpan2.innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"
// theForm.appendChild(bufferSpan2);
theForm.appendChild(document.createElement('br'));


//-------------------------------------------------
//Did you use Venmo to invite friends to join?
// var inviteOthersLabel = document.createElement('label');
// inviteOthersLabel.innerHTML = "Invite/add friends?&nbsp;";
// theForm.appendChild(inviteOthersLabel);
//
// var inviteBlankLabel = document.createElement('label');
// inviteBlankLabel.setAttribute("class", "switch");
// inviteBlankLabel.setAttribute("style", "margin-left: 0%");
//
// var inviteCheckbox = document.createElement('input');
// inviteCheckbox.setAttribute("type", "checkbox");
// inviteCheckbox.setAttribute("name", "inviteFriends");
// inviteBlankLabel.appendChild(inviteCheckbox);
//
// var inviteSpan = document.createElement('span');
// inviteSpan.setAttribute("class", "slider round");
// inviteBlankLabel.appendChild(inviteSpan);
//
// theForm.appendChild(inviteBlankLabel);
// theForm.appendChild(document.createElement('br'));


//-------------------------------------------------
//Request money?
var requestMoneyLabel = document.createElement('label');
requestMoneyLabel.innerHTML = "Request money?&nbsp;";
theForm.appendChild(requestMoneyLabel);


var moneyBlank3Label = document.createElement('label');
moneyBlank3Label.setAttribute("class", "switch");
moneyBlank3Label.setAttribute("style", "margin-left: 0%");

var requestMoneyCheckbox = document.createElement('input');
requestMoneyCheckbox.setAttribute("type", "checkbox");
requestMoneyCheckbox.setAttribute("name", "requestMoney");
moneyBlank3Label.appendChild(requestMoneyCheckbox);

var requestMoneySpan = document.createElement('span');
requestMoneySpan.setAttribute("class", "slider round");
moneyBlank3Label.appendChild(requestMoneySpan);

theForm.appendChild(moneyBlank3Label);
// var bufferSpan3 = document.createElement('span');
// bufferSpan3.innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"
// theForm.appendChild(bufferSpan3);
theForm.appendChild(document.createElement('br'));
theForm.appendChild(document.createElement('br'));


//-------------------------------------------------
//Did you adjust any account settings in Venmo?
// var adjustSettingsLabel = document.createElement('label');
// adjustSettingsLabel.innerHTML = "Adjust settings?&nbsp;";
// theForm.appendChild(adjustSettingsLabel);
//
// var settingsBlankLabel = document.createElement('label');
// settingsBlankLabel.setAttribute("class", "switch");
// settingsBlankLabel.setAttribute("style", "margin-left: 0%");
//
// var settingsCheckbox = document.createElement('input');
// settingsCheckbox.setAttribute("type", "checkbox");
// settingsCheckbox.setAttribute("name", "updateSettings");
// settingsBlankLabel.appendChild(settingsCheckbox);
//
// var settingsSpan = document.createElement('span');
// settingsSpan.setAttribute("class", "slider round");
// settingsBlankLabel.appendChild(settingsSpan);
//
// theForm.appendChild(settingsBlankLabel);
// theForm.appendChild(document.createElement('br'));
// theForm.appendChild(document.createElement('br'));


//-------------------------------------------------
//How many clicks did it take heading?
var clicksText = document.createElement('div');
if (!smallScr) clicksText.setAttribute("style", "margin-left: 28%;");
else clicksText.setAttribute("style", "margin-left: 0%");
clicksText.innerHTML = "In total, about how many clicks did it take?";
theForm.appendChild(clicksText);

//-------------------------------------------------
//How many clicks?
var clickCountLabel = document.createElement('label');
clickCountLabel.innerHTML = "# of clicks?&nbsp;";
if (!smallScr) theForm.appendChild(clickCountLabel);

var clickCountData = document.createElement('input');
clickCountData.setAttribute("type", "number");
clickCountData.setAttribute("min", "0");
clickCountData.setAttribute("name", "clickCount");
theForm.appendChild(clickCountData);

theForm.appendChild(document.createElement('br'));
theForm.appendChild(document.createElement('br'));


//-------------------------------------------------
//How was the experience?
var moodText = document.createElement('div');
if (!smallScr) moodText.setAttribute("style", "margin-left: 28%;");
else moodText.setAttribute("style", "margin-left: 0%");
moodText.innerHTML = "Overall, how are you feeling at this moment?";
theForm.appendChild(moodText);

var moodInputHidden = document.createElement('input');
moodInputHidden.setAttribute("type", "text");
moodInputHidden.setAttribute("name", "mood");
theForm.appendChild(moodInputHidden);

var positiveButton = document.createElement('input');
positiveButton.setAttribute("type", "button");
positiveButton.style.background = "url(./assets/img/happy.png)";
positiveButton.style.width = "72px";
positiveButton.style.height = "72px";
positiveButton.style.border = "none";
if (!smallScr) positiveButton.style.marginLeft = "28%";
else positiveButton.style.marginLeft = "0%";
positiveButton.setAttribute("onclick", "positiveClick()");
theForm.appendChild(positiveButton);


var neutralButton = document.createElement('input');
neutralButton.setAttribute("type", "button");
neutralButton.style.background = "url(./assets/img/ok.png)";
neutralButton.style.width = "72px";
neutralButton.style.height = "72px";
neutralButton.style.border = "none";
neutralButton.style.marginLeft = "10%";
neutralButton.setAttribute("onclick", "neutralClick()");
theForm.appendChild(neutralButton);


var negativeButton = document.createElement('input');
negativeButton.setAttribute("type", "button");
negativeButton.style.background = "url(./assets/img/sad.png)";
negativeButton.style.width = "72px";
negativeButton.style.height = "72px";
negativeButton.style.border = "none";
negativeButton.style.marginLeft = "10%";
negativeButton.setAttribute("onclick", "negativeClick()");
theForm.appendChild(negativeButton);

var bufferSpan6 = document.createElement('span');
theForm.appendChild(document.createElement('br'));
theForm.appendChild(document.createElement('br'));


//-------------------------------------------------
//General notes?
var notesLabel = document.createElement('label');
notesLabel.innerHTML = "Any notes?&nbsp;";
theForm.appendChild(notesLabel);

var notesData = document.createElement('textarea');
// notesData.setAttribute("type", "text");
notesData.setAttribute("min", "0");
notesData.setAttribute("name", "notes");
theForm.appendChild(notesData);

theForm.appendChild(document.createElement('br'));


//-------------------------------------------------
//Submit Button
theForm.appendChild(document.createElement('br'));

var submit = document.createElement('button');
submit.setAttribute("type", "button");
submit.setAttribute("class", "btn btn-primary");
submit.setAttribute("onclick", "validateAndSubmit()");
if (!smallScr) submit.setAttribute("style", "margin-left: 28%;");
else submit.setAttribute("style", "margin-left: 0%");
submit.innerHTML = "Submit";
theForm.appendChild(submit);

//Spacer line breaks to move the button off the bottom of screen if needed
theForm.appendChild(document.createElement('br'));
theForm.appendChild(document.createElement('br'));
theForm.appendChild(document.createElement('br'));


colapseAll();
function colapseAll() {
  moodInputHidden.style.display = "none";
}


//-------------------------------------------------
//Methods for mood button handlers
function positiveClick() {
  // alert("Positive Click Triggered");
  //Set other buttons to hidden.
  neutralButton.style.display = "none";
  negativeButton.style.display = "none";

  //Set moodInputHidden to correct enum
  moodInputHidden.value = moodData.POSITIVE;
}

function neutralClick() {
  // alert("Neutral Click Triggered");
  //Set other buttons to hidden
  positiveButton.style.display = "none";
  negativeButton.style.display = "none";

  //Ensure button position is ok
  if (!smallScr) neutralButton.style.marginLeft = "28%";
  else neutralButton.style.marginLeft = "0%";

  //Set moodInputHidden to correct enum
  moodInputHidden.value = moodData.NEUTRAL;
}

function negativeClick() {
  // alert("Negative Click Triggered");
  //Set other buttons to hidden
  positiveButton.style.display = "none";
  neutralButton.style.display = "none";

  //Ensure button position is ok
  if (!smallScr) negativeButton.style.marginLeft = "28%";
  else negativeButton.style.marginLeft = "0%";

  //Set moodInputHidden to correct enum
  moodInputHidden.value = moodData.NEGATIVE;
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
