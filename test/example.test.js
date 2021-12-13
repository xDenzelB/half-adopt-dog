// IMPORT MODULES under test here:
import { renderDogCard } from '../render-utils.js';
import { renderDogDetail } from '../render-utils.js';

const test = QUnit.test;

test('Should render a dog Card', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = '<a href=\"./detail/?id=undefined\"><div class=\"dog-card\"><p></p><img src=\"./assets/undefined.jpeg\"></div></a>';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderDogCard('Boogie');

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected,);
});
test('Should render the dog detail', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = '<div class=\"dog-detail\"><p class=\"name\"></p><img src=\"../assets/undefined.jpeg\"><div class=\"age-and-breed\"><p class=\"age\">undefined years old</p><p class=\"breed\"></p></div><p class=\"description\"></p></div>';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderDogDetail('Boogie');

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected,);
});
