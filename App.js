//Variable to get from the user
const adj1=document.getElementById("adj1");
const noun1=document.getElementById("noun1");
const adj2=document.getElementById("adj2");
const clothing=document.getElementById("clothing");
const bodyPart=document.getElementById("bodyPart");
const verb=document.getElementById("verb");
const food=document.getElementById("food");

//variable to display the madLib
const madLibDisplay=document.querySelector('.mad-lib');
//variable for the form
const form=document.querySelector('form')
console.log(form)
//variable for the madLib Story
const story=` My name is Ibeh Joy chinwendu, <b>${adj1}</b> love watching <b>${noun1}</b> especially science fiction, <b>${adj2}</b> fell in love with Technnology the first day i saw computer and always imagine myself sitting and typing on one when i grow up, I am not a good dresser ,  but will give anything for a <b>${clothing}</b> that has pink color, because pink is my favorite color. Most sensity part of my body is my  <b>${bodyPart}</b>, i feel this is the first thing people see before getting to know you. I am an <b>${verb}</b>, listener and my favourite food <b>${food}</b> `
//
form.addEventListener("submit", function(event){
    event.preventDefault();

    if(adj1.value==""){
        alert(`${adj1.name} must be filled out!`);
        adj1.focus();
    }else if(noun1.value==""){
        alert(`${noun1.name} must be filled out!`);
        noun1.focus();
    }
    else if(adj2.value==""){
        alert(`${adj2.name} must be filled out!`);
        adj2.focus();
    }
    else if(clothing.value==""){
        alert(`${clothing.name} must be filled out!`);
        clothing.focus()
    }
    else if(bodyPart.value==""){
        alert(`${bodyPart.name} must be filled out!`);
        bodyPart.focus()
    }
    else if(verb.value==""){
        alert(`${verb.name} must be filled out!`);
        verb.focus()
    }
    else if(food.value==""){
        alert(`${food.name} must be filled out!`);
        food.focus()
    }
    else{
        madLibStoryDisplay()
    }
})

function madLibStoryDisplay(){
    madLibDisplay.innerHTML=story
        .replace(`${adj1}`,adj1.value)
        .replace(`${noun1}`,noun1.value)
        .replace(`${adj2}`,adj2.value)
        .replace(`${clothing}`,clothing.value)
        .replace(`${bodyPart}`,bodyPart.value)
        .replace(`${verb}`,verb.value)
        .replace(`${food}`,food.value)
}