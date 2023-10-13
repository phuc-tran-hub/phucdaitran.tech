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

const bboy_pictures = new Map([
    ["Tiro", "tiro.jpg"],
    ["Wigor", "wigor.jpg"],
    ["PhilWizard", "phil.jpg"],
    ["Hong10", "hong10.jpg"],
    ["Issin", "issin.jpg"],
    ["Allef", "allef.jpg"],
    ["KidKaram", "kidkaram.jpg"],
    ["X-Rain", "xrain.jpg"],
    ["Kastrito", "kastrito.jpg"],
    ["Jeffro", "jeffro.jpg"]]);

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
    [4, ["Win Red Bull BC One", "Impress the Crowd", "Silent the Haters", "For Myself"]]]);

const bboys = new Map([
    ["Tiro", [1, 0, 1, 2, 3]],
    ["Wigor", [3, 1, 1, 0, 3]],
    ["PhilWizard", [2, 2, 3, 1, 1]],
    ["Hong10", [2, 0, 0, 3, 0]],
    ["Issin", [3, 1, 0, 1, 0]],
    ["Allef", [0, 2, 2, 2, 1]],
    ["KidKaram", [3, 1, 1, 1, 0]],
    ["X-Rain", [3, 1, 0, 1, 2]],
    ["Kastrito", [3, 1, 3, 3, 2]],
    ["Jeffro", [0, 2, 3, 2, 3]]]);

// Updates
var panelIndex = 0;
var user_inputs = [];

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
        bboy = calculateWinner();
        displayWinner(bboy);
        restoreDatastructures();
    }
    else{
        hideWinner();
    }

    updateQuestion(panelIndex);
    updateChoices(panelIndex);
}


function displayWinner(bboy){
    document.getElementById("final_result").style.display = "block";
    document.getElementById("bboyname").innerHTML = "You are .. B-Boy " + bboy;
    document.getElementById("result_img").src = pictures_path + bboy_pictures.get(bboy);
}


function hideWinner(){
    document.getElementById("final_result").style.display = "none";
}

function restoreDatastructures(){
    user_inputs = [];
}

function calculateWinner(){
    let counter = new Map([
        ["Tiro", 0],
        ["Wigor", 0],
        ["PhilWizard", 0],
        ["Hong10", 0],
        ["Issin", 0],
        ["Allef", 0],
        ["KidKaram", 0],
        ["X-Rain", 0],
        ["Kastrito", 0],
        ["Jeffro", 0]]);
    for(var i = 0; i < user_inputs.length; i++){
        for(let [key, value] of bboys){
            bboy_characteristics = value;
            if (user_inputs[i] == bboy_characteristics[i]){
                counter.set(key, counter.get(key) + 1);
            }
        }
    }


    let max = 0;
    let maxKey = "";
    
    for(let [char, count] of counter){
        if(count > max){
            max = count;
            maxKey = char;
        }
    }
    
    return maxKey;
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


