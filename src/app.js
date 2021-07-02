// Write your code on this file. Please don't change the existing code
// unless absolutely needed.

//Initial price of the burger
var wholeWheatBun = 10;

//Ingredients of the burger along with the price
// Clue: the name is same as the textcontent of the button. Will be useful later on :)
var ingredients = {
    Patty: 80,
    Cheese: 10,
    Tomatoes: 20,
    Onions: 20,
    Lettuce: 20
};

//Current state of the ingredients in the burger
var state = {
    Patty: true,
    Cheese: true,
    Tomatoes: true,
    Onions: true,
    Lettuce: true
};

// This function renders the entire screen everytime the state changes accordingly
function renderAll() {
    renderPatty();
    renderCheese();
    renderTomatoes();
    renderOnions();
    renderLettuce();
    renderButtons();
    renderIngredientsBoard();
    renderPrice();
}

//changeVisibility method is used to change the visibility of the items in ingredients list
function changeVisibility(ingredientsClass, ingredientsState, price){
    let priceElement = document.querySelector(".price-details");
    let totalPrice = Number(priceElement.innerHTML)
    let ingredients = document.querySelector(`. {ingredientsClass}`)
    if(ingredientsState){
        ingredients.style.display = "block";
        priceElement.innerHTML = totalPrice+price
    }
    else{
        ingredients.style.display="none";
        price.priceElement.innerHTML=totalPrice-price
    }
}

function renderPatty() {
    let  patty = document.querySelector("#patty");
    let pattyButton = document.querySelector(".btn-patty")
    //you can also use getElementById
    state.Patty=!state.Patty;
    if (state.Patty) {

        patty.style.display = "inherit";
        pattyButton.classList.add(" active");
    } else {
         patty.style.display = "none";
        pattyButton.classList.remove(" active")
    }
    changeVisibility("Patty", state.Patty,ingredients.Patty)
}

function renderCheese() {
    //Trial 1 - Change the visibility of cheese based on state by manipulating the DOM
    state.Cheese=!state.Cheese
    let cheese = document.querySelector("#cheese");
    let cheeseButton = document.querySelector(".btn-cheese")
    //you can also use getElementById
    if (state.cheese) {
         cheese.style.display = "inherit";
        cheeseButton.classList.add(" active");
    } else {
         cheese.style.display = "none";
        cheeseButton.classList.remove(" active");
    }
    changeVisibility("Cheese", Cheese.ingredients.Cheese)
}


function renderTomatoes() {
    //Trial 1 - Change the visibility of Tomatoes based on state by manipulating the DOM
    let  tomatoes = document.querySelector("#tomato");
    state.Tomatoes=!state.Tomatoes;
    let tomatoButton = document.querySelector(".btn-tomatoes")
    //you can also use getElementById
    if (state.tomatoes) {
         tomatoes.style.display = "inherit";
         tomatoButton.classList.add(" active")
    } else {
         tomatoes.style.display = "none";
         tomatoButton.classList.remove(" active");
    }
    changeVisibility("Tomato",state.Tomatoes, ingredients.Tomatoes)
}


function renderOnions() {
    //Trial 1 - Change the visibility of Onions based on state by manipulating the DOM
    state.Onions=!state.Onions;
    let  onions = document.querySelector("#onion");
    let onionButton = document.querySelector(".btn-onions")
    //you can also use getElementById
    if (state.onions) {
        onions.style.display = "inherit";
        onionButton.classList.add("active");
    } else {
        onions.style.display = "none";
        onionButton.classList.remove("active");
    }
    changeVisibility("Onion", state.Onions, ingredients.Onions);
}

function renderLettuce() {
    //Trial 1 - Change the visibility of Lettuce based on state by manipulating the DOM
    let  Lettuce = document.querySelector("#lettuce");
    state.Patty=!state.Patty;
    let lettuceButton = document.querySelector("btn-lettuce");
    //you can also use getElementById
    if (state.Lettuce) {
         Lettuce.style.display = "inherit";
         lettuceButton.classList.add("active")
    } else {
         Lettuce.style.display = "none";
         lettuceButton.classList.remove("active")
    }
    changeVisibility("Lettuce",state.Lettuce,ingredients.Lettuce)
}

document.querySelector(".btn-patty").onclick = function() {
    state.Patty = !state.Patty;
    renderPatty();
};

// Trial 2 - Setup event listener for the cheese button
document.querySelector(".btn-cheese").onclick = function() {
    var cheese = document.querySelector(".btn-cheese")
    cheese.addEventListener("click",renderCheese)
    // state.cheese = !state.cheese;
    // renderAll();
};

// Trial 2 - Setup event listener for the tomatoes button
document.querySelector(".btn-tomatoes").onclick = function() {
    var tomato = document.querySelector(".btn-tomatoes")
    cheese.addEventListener("click",renderTomatoes)
    // state.tomatoes = !state.tomatoes;
    // renderAll();
};

// Trial 2 - Setup event listener for the onion button
document.querySelector(".btn-onions").onclick = function() {
    var onion = document.querySelector(".btn-onions")
    onion.addEventListener("click",renderOnions)
    // state.onions = !state.onions;
    // renderAll();
};

// Trial 2 - Setup event listener for the lettuce button
document.querySelector(".btn-lettuce").onclick = function() {
    var lettuce =document.querySelector(".btn-lettuce")
    lettuce.addEventListener("click", renderLettuce)
};

//Challenge 1 - Add/Remove the class active to the buttons based on state
// state.Cheese = !state.Lettuce;
    function renderButtons(){
        let buttonPatty = document.querySelector(".btn-patty");
        let buttonCheese = document.querySelector(".btn-cheese");
        let buttonTomatoes = document.querySelector(".btn-tomatoes");
        let buttonOnions = document.querySelector(".btn-onions");
        let buttonLettuce = document.querySelector(".btn-lettuce");
        if(state.Cheese){buttonCheese.classList.add(" active")}
        else {buttonCheese.classList.remove("active")}
        if(state.Patty){buttonPatty.classList.add(" active")}
        else {buttonPatty.classList.remove("active")}if(state.Onions){buttonOnions.classList.add(" active")}
        else {buttonOnions.classList.remove("active")}if(state.Lettuce){buttonLettuce.classList.add(" active")}
        else {buttonLettuce.classList.remove("active")}if(state.Tomatoes){buttonTomatoes.classList.add(" active")}
        else {buttonTomatoes.classList.remove("active")}
    }

//Challenge 2 - Render only the items selected in the ingredients board based on the state
function renderIngredientsBoard(){
    if(state.Patty){
        document.querySelector('items')[0].style.visibility = 'visible';  }
    else{
        document.getElementsByClassName('items')[0].style.visibility='hidden';
    }
    if(state.Cheese){
        document.querySelector('items')[1].style.visibility = 'visible';  }
    else{
        document.getElementsByClassName('items')[1].style.visibility='hidden';
    }
    if(state.Tomatoes){
        document.querySelector('items')[2].style.visibility = 'visible';  }
    else{
        document.getElementsByClassName('items')[2].style.visibility='hidden';
    }
    if(state.Onions){
        document.querySelector('items')[3].style.visibility = 'visible';  }
    else{
        document.getElementsByClassName('items')[3].style.visibility='hidden';
    }
    if(state.Lettuce){
        document.querySelector('items')[4].style.visibility = 'visible';  }
    else{
        document.getElementsByClassName('items')[4].style.visibility='hidden';
    }
}

//Judgement 1
//In the p element having price-details as the class, display the calculated
//price based on ingredients

function renderPrice(){
    var total = 20
    if(state.Patty) {
        total = total + ingredients.Patty
    }
    if(state.Cheese) {
        total = total + ingredients.Cheese
    }
    if(state.Onions) {
        total = total + ingredients.Onions
    }
    if(state.Tomatoes) {
        total = total + ingredients.Tomatoes
    }
    if(state.Lettuce) {
        total = total + ingredients.Lettuce
    }
    
}
