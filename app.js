// import functions and grab DOM elements
import { renderGame } from './render-utils.js';
const currentGameEl = document.getElementById('current-game-container');
const pastGamesEl = document.getElementById('past-games-container');

const nameForm = document.getElementById('name-form');
const teamOneAddButton = document.getElementById('team-one-add-button');
const teamTwoAddButton = document.getElementById('team-two-add-button');
const teamOneSubtractButton = document.getElementById('team-one-subtract-button');
const teamTwoSubtractButton = document.getElementById('team-two-subtract-button');
const finishGameButton = document.getElementById('finish-game-button');
const teamOneLabel = document.getElementById('team-one-name');
const teamTwoLabel = document.getElementById('team-two-name');

// create an array to hold on to the state of past games

let name1 = '';
let name2 = '';
let score1 = 0;
let score2 = 0;

let pollArr = [];

// let gameObj = 
// {
//     name1,
//     name2,
//     score1,
//     score2
// };

nameForm.addEventListener('submit', (e) => {
    // don't forget to prevent the default form behavior!
    e.preventDefault();
    // get the name data from the form
    let data = new FormData(nameForm);
    // set the state to this data from the form
    name1 = data.get('team-one');
    name2 = data.get('team-two');
    console.log(name1, name2);


    // reset the form values
    // nameForm.reset()

    displayCurrentGameEl();
});


teamOneAddButton.addEventListener('click', () => {
    // increment the current state for team one's score
    score1++;
    console.log(score1);
    displayCurrentGameEl();});
    
teamTwoAddButton.addEventListener('click', () => {
    // increment the current state for team two's score
    score2++;
    displayCurrentGameEl();
});

teamOneSubtractButton.addEventListener('click', () => {
    // decrement the current state for team one's score
    score1--;
    console.log(score1);
    displayCurrentGameEl();
});

teamTwoSubtractButton.addEventListener('click', () => {
    // decrement the current state for team two's score
    score2--;
    displayCurrentGameEl();
});

finishGameButton.addEventListener('click', () => {
    
    // add the current game to an array of games in state.
    const gameObj = 
        {
            name1,
            name2,
            score1,
            score2
        }
    ;
    // console.log();
    pollArr.push(gameObj);
    console.log(pollArr, 'final arr');
    // HINT: it will be helpful to keep track of these games as objects with 4 properties, one for each piece of state we're tracking

    displayAllGames();

    // reset the initial state to start with a new form
    
    displayCurrentGameEl();
    // nameForm.reset()
    // score1 = 0
    // score2 = 0

    nameForm.reset()
    score1 = 0;
    score2 = 0;
});


function displayCurrentGameEl() {
    // clear out the current game div

    let gameObj = 
    {
        name1,
        name2,
        score1,
        score2

    };
    // console.log(gameObj);
    // console.log(name1, name2, 'team names');

    // pastGamesEl.innerHTML = '';
    currentGameEl.innerHTML = '';
    // // change the label to show team one's name;
    // let team1title = document.createElement('p')
    // team1title.textContent = name1;
    // // change the label to show team two's name;
    // let team2title = document.createElement('p')
    // team2title.textContent = name2;

    teamOneLabel.textContent = name1;
    teamTwoLabel.textContent = name2;


    // call the render game function to create a game element
    // console.log(pollArr, '----------');
    let games = renderGame(gameObj);
    // append the element to the cleared out current game div
    currentGameEl.append(games);
    // console.log(pollArr);
}


function displayAllGames() {
    // clear out the past games list in the DOM
    pastGamesEl.textContent = '';
 
    // loop through the past games in state
    // render and append a past game for each past game in state

    for (let game of pollArr) {
        console.log(game, 'loop of all games');
        let games = renderGame(game);
        console.log(games, '------ this is our games ------');
        pastGamesEl.append(games);
        console.log(pastGamesEl);

        // pastGamesEl.append(currentGameEl)
    }
}


// displayCurrentGameEl();
