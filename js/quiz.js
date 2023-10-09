// Phuc Tran
// quiz.js handles quiz logic

// Constants 
const path = "../pictures/";
const pictures = new Map([
    [0, ["Toprock.jpg", "Footwork.jpg", "Freeze.jpg", "Power.jpg"]],
    [1, ["Dynamic.jpg", "Explosive.jpg", "Character.jpg", "Musicality.jpg"]],
    [2, ["Asia.jpg", "Europe.jpg", "SouthAmerica.jpg", "NorthAmerica.jpg"]],
    [3, ["Grimy.jpg", "Beatkill.jpg", "Soulful.jpg", "RedBull.jpg"]],
    [4, ["WinRedBull.jpg", "Impresshaters.jpg", "Silencehaters.jpg", "Formyself.jpg"]]]);

// Callbacks
document.getElementById("submit").onclick = function(){
    checkSubmit();    
}


// Events
function checkSubmit(){
    var choices = document.getElementsByName("first_question");
    for(var i = 0; i < choices.length; i++){
        if (choices[i].checked){
            alert(choices[i].value)
            alert(choices[i].src)
        }
    }
    updateChoices(4);

function updateChoices(imageIndex){
    let newPictures = pictures.get(imageIndex);
    for(var i = 0; i < newPictures.length; i++){
        let completePath = path + newPictures[i] + "?" + new Date().getTime();
        choice = document.getElementById("choice" + i.toString());
        choice.src = completePath;
    }
}

}
