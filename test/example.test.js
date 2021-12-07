// IMPORT MODULES under test here:
import { renderGame, renderTeam } from '../render-utils.js';

const test = QUnit.test;

test('time to test a function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    let game = {};
    const expected = '<div class="game"><div><p></p><p></p></div><div><p></p><p></p></div></div>';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderGame(game).outerHTML;


    const expected1 = true;
    const actual1 = renderTeam(game).outerHTML.includes('div');

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
    expect.equal(actual1, expected1);
});
