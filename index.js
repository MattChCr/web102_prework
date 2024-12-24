/*****************************************************************************
 * Challenge 2: Review the provided code. The provided code includes:
 * -> Statements that import data from games.js
 * -> A function that deletes all child elements from a parent element in the DOM
*/

// import the JSON data about the crowd funded games from the games.js file
import GAMES_DATA from './games.js';

// create a list of objects to store the data about the games using JSON.parse
const GAMES_JSON = JSON.parse(GAMES_DATA)
// remove all child elements from a parent element in the DOM
function deleteChildElements(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

/*****************************************************************************
 * Challenge 3: Add data about each game as a card to the games-container
 * Skills used: DOM manipulation, for loops, template literals, functions
*/

// grab the element with the id games-container
const gamesContainer = document.getElementById("games-container");

// create a function that adds all data from the games array to the page
function addGamesToPage(games, unfunded) {

    // loop over each item in the data
    for (let i = 0; i < games.length; i++) {
        let element = document.createElement('div');
        element.classList.add("game-card");
        const regDisplay = `
            <img src = ${games[i].img} class = "game-img">
            <a href="${games[i].img}" class = "game-text" target="blank"><h3> ${games[i].name} <h3> <a>
            <h5> ${games[i].description} <h5>
            <h5> Backers: ${games[i].backers} <h5>
           `;
        const unfundedDisplay = `
           <img src = ${games[i].img} class = "game-img">
           <a href="${games[i].img}" class = "game-text" target="blank"><h3> ${games[i].name} <h3> <a>
           <h5> ${games[i].description} <h5>
           <h5> Left till goal: $${(games[i].goal - games[i].pledged).toLocaleString()} <h5>
           <h5> Backers: ${games[i].backers} <h5>
          `;
        const display = `${unfunded ? unfundedDisplay : regDisplay} `;
        element.innerHTML = display;
        gamesContainer.append(element);
    }

        // create a new div element, which will become the game card


        // add the class game-card to the list


        // set the inner HTML using a template literal to display some info 
        // about each game
        // TIP: if your images are not displaying, make sure there is space
        // between the end of the src attribute and the end of the tag ("/>")


        // append the game to the games-container

}

// call the function we just defined using the correct variable
// later, we'll call this function using a different list of games
addGamesToPage(GAMES_JSON, false);

/*************************************************************************************
 * Challenge 4: Create the summary statistics at the top of the page displaying the
 * total number of contributions, amount donated, and number of games on the site.
 * Skills used: arrow functions, reduce, template literals
*/

// grab the contributions card element
const contributionsCard = document.getElementById("num-contributions");

// use reduce() to count the number of total contributions by summing the backers

const reducerCon = (acc, game) => {return acc + game.backers};
const totalCon = GAMES_JSON.reduce(reducerCon, 0);

// set the inner HTML using a template literal and toLocaleString to get a number with commas

contributionsCard.innerHTML = `
            <p]> ${totalCon.toLocaleString()} <p>
           `; 

// grab the amount raised card, then use reduce() to find the total amount raised
const raisedCard = document.getElementById("total-raised");

const reducerRaised = (acc, game) => {return acc + game.pledged};
const totalRaised = GAMES_JSON.reduce(reducerRaised, 0);

// set inner HTML using template literal
 
raisedCard.innerHTML = `
            <p> $${totalRaised.toLocaleString()} <p>
           `;


// grab number of games card and set its inner HTML
const gamesCard = document.getElementById("num-games");

const gamesNum = GAMES_JSON.length;
gamesCard.innerHTML = `
            <p> ${gamesNum} <p>
           `;

/*************************************************************************************
 * Challenge 5: Add functions to filter the funded and unfunded games
 * total number of contributions, amount donated, and number of games on the site.
 * Skills used: functions, filter
*/

// show only games that do not yet have enough funding
function filterUnfundedOnly() {
    deleteChildElements(gamesContainer);

    // use filter() to get a list of games that have not yet met their goal
    const filterSystem = (game) => { return game.goal > game.pledged}; 
    const filtered = GAMES_JSON.filter(filterSystem); 
    // use the function we previously created to add the unfunded games to the DOM
    addGamesToPage(filtered, true);
}

// show only games that are fully funded
function filterFundedOnly() {
    deleteChildElements(gamesContainer);

    // use filter() to get a list of games that have met or exceeded their goal
    const filterSystem = (game) => { return game.goal <= game.pledged}; 
    const filtered = GAMES_JSON.filter(filterSystem); 

    // use the function we previously created to add unfunded games to the DOM
    addGamesToPage(filtered, false);
}

// show all games
function showAllGames() {
    deleteChildElements(gamesContainer);

    //add all games from the JSON data to the DOM
    addGamesToPage(GAMES_JSON, false);
}

// select each button in the "Our Games" section
const unfundedBtn = document.getElementById("unfunded-btn");
const fundedBtn = document.getElementById("funded-btn");
const allBtn = document.getElementById("all-btn");

// add event listeners with the correct functions to each button
unfundedBtn.addEventListener("click", filterUnfundedOnly);
fundedBtn.addEventListener("click", filterFundedOnly);
allBtn.addEventListener("click", showAllGames);


/*************************************************************************************
 * Challenge 6: Add more information at the top of the page about the company.
 * Skills used: template literals, ternary operator
*/

// grab the description container
const descriptionContainer = document.getElementById("description-container");

// use filter or reduce to count the number of unfunded games
const filterSystem = (game) => { return game.goal <= game.pledged}; 
const filtered = GAMES_JSON.filter(filterSystem).length; 

// create a string that explains the number of unfunded games using the ternary operator
const singleDescrip = `
                   A total of $${totalRaised.toLocaleString()} has been raised 
                   for ${GAMES_JSON.length - filtered}. Currently, 1 game remains unfunded. 
                   We need your help to fund this amazing game!
                   `;

const pluralDescrip = `
                    A total of $${totalRaised.toLocaleString()} has been raised 
                    for ${GAMES_JSON.length - filtered}. Currently, ${filtered} games remain unfunded. 
                    We need your help to fund these amazing games!
                    `;

const newDescrip = `${filtered == 1 ? singleDescrip : pluralDescrip} `;

// create a new DOM element containing the template string and append it to the description container
const element = document.createElement('div');
element.innerHTML = newDescrip;
descriptionContainer.append(element);

/************************************************************************************
 * Challenge 7: Select & display the top 2 games
 * Skills used: spread operator, destructuring, template literals, sort 
 */

const firstGameContainer = document.getElementById("first-game");
const secondGameContainer = document.getElementById("second-game");

const sortedGames = [...GAMES_JSON].sort( (item1, item2) => {
    return item2.pledged - item1.pledged;
});

// use destructuring and the spread operator to grab the first and second games
const [first, ...rest] = sortedGames;
const [second, ...others] = rest;
const firstPlace = first.name;
const secondPlace = second.name;

// create a new element to hold the name of the top pledge game, then append it to the correct element
const winner = document.createElement('div');
winner.innerHTML =  `
                    <p> ${firstPlace} <p>
                    `;
firstGameContainer.append(winner);

// do the same for the runner up item
const runnerup = document.createElement('div');
runnerup.innerHTML = `
                    <p> ${secondPlace} <p>
                    `;
secondGameContainer.append(runnerup);

// Search bar functionality
const searchbar = document.getElementById("searchInput");
searchbar.addEventListener("keyup", function () {
    deleteChildElements(gamesContainer);
    if (searchbar.value.length > 0) {
        searchSystem()
    }

    else {
        addGamesToPage(GAMES_JSON, false)
    }
}
);


function searchSystem() {
    // Declare variables

    const input = searchbar.value.toLowerCase();
    // Loop through all list items, and hide those who don't match the search query
    const filterSystem = (game) => {return game.name.toLowerCase().includes(input)}; 
    const filtered = GAMES_JSON.filter(filterSystem); 
    
    addGamesToPage(filtered, false);
  }