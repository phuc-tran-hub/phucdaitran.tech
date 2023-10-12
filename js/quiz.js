// Phuc Tran
// quiz.js handles quiz logic

// Globals
// Constants  
const pictures_path = "../pictures/";
const pictures = new Map([
    [0, ["Toprock.jpg", "Footwork.jpg", "Freeze.jpg", "Power.jpg"]],
    [1, ["Dynamic.jpg", "Explosive.jpg", "Character.jpg", "Musicality.jpg"]],
    [2, ["Asia.jpg", "Europe.jpg", "SouthAmerica.jpg", "NorthAmerica.jpg"]],
    [3, ["Grimy.jpg", "Beatkill.jpg", "Soulful.jpg", "RedBull.jpg"]],
    [4, ["WinRedBull.jpg", "Impresshaters.jpg", "Silencehaters.jpg", "Formyself.jpg"]]]);

const questions = new Map([
    [0, "What's your favorite element of breaking?"],
    [1, "What's the most important trait of your style?"],
    [2, "Where are you located?"],
    [3, "What's your favorite breaking music?"],
    [4, "Why do you break?"]]);

const answers = new Map([
    [0, ["Toprock", "Footwork", "Freeze", "Power"]],
    [1, ["Dynamic", "Explosive", "Character", "Musicality"]],
    [2, ["Asia", "Europe", "South America", "North America"]],
    [3, ["Grimy", "Beatkill", "Soulful", "Red Bull"]],
    [4, ["Win RedBull", "Impress the Crowd", "Silent the Haters", "For Myself"]]]);

const bboys = new Map([
    ["Tiro", [1, 0, 1, 2, 3]],
    ["Wigor", [3, 1, 1, 0, 3]],
    ["PhilWizard", [2, 2, 3, 1, 1]],
    ["Hong10", [2, 0, 0, 3, 0]],
    ["Issin", [3, 1, 0, 1, 0],
    ["Allef", [0, 2, 2, 2, 1]],
    ["KidKaram", [3, 1, 1, 1, 0]],
    ["X-Rain", [3, 1, 0, 1, 2]],
    ["Kastrito", [3, 1, 3, 3, 2]],
    ["Jeffro", [0, 2, 3, 2, 3]]]]);

const user_inputs = [];
// Updates
var panelIndex = 0;

// Callbacks
document.getElementById("submit").onclick = function(){
    checkSubmit();    
}


// Events
function checkSelection(){
    var choices = document.getElementsByName("first_question");
    for(var i = 0; i < choices.length; i++){
        choice = document.getElementById("choice" + i.toString());
        text = document.getElementById("text" + i.toString());

        if (choices[i].checked){
            user_inputs.push(i);
        }
    }
}


function checkCurrentSelect(){
    var choices = document.getElementsByName("first_question");
    for(var i = 0; i < choices.length; i++){
        choice = document.getElementById("choice" + i.toString());

        if (choices[i].checked){
            choice.style.opacity = 0.8;
        } else{
            choice.style.opacity = 0.5;
        }
    }
}


function checkSubmit(){
    checkSelection();
    panelIndex++;
    panelIndex = panelIndex % (pictures.size);
    if (panelIndex == 0){
        panelIndex = 0;
        alert("You are ..");
    }

    updateQuestion(panelIndex);
    updateChoices(panelIndex);
}


function calculateWinner(){

}

function updateQuestion(questionIndex){
    document.getElementById("quiz_question").innerHTML = questions.get(questionIndex);
}


function updateChoices(imageIndex){
    let newPictures = pictures.get(imageIndex);
    for(var i = 0; i < newPictures.length; i++){
        let completePath = pictures_path + newPictures[i] + "?" + new Date().getTime();
        choice = document.getElementById("choice" + i.toString());
        choice.src = completePath;

        text = document.getElementById("text" + i.toString());
        text.innerHTML = answers.get(imageIndex)[i];
    }
}


