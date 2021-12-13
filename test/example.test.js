// IMPORT MODULES under test here:
import { renderDogCard } from '../render-utils.js';
import { renderDogDetail } from '../render-utils.js';

const test = QUnit.test;

test('Should render a dog Card', (expect) => {
    //Arrange
    // Set up your arguments and expectations

    const testingDog = {
        name: 'Boogie',
        breed: 'corgi',
        id: 0
    };
    const expected = '<a href="./detail/?id=0"><div class="dog-card"><p>Boogie</p><img src="./assets/corgi.jpeg"></div></a>';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderDogCard(testingDog);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected, 'Will render card of name, breed, and ID');
});
test('Should render the dog detail', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const testDog = {
        name: 'Boogie',
        age: '5',
        breed: 'corgi',
        description: 'Borkf I am bekom fat snoot shoober tungg, mlem what a nice floof noodle horse. Heckin good boys you are doin me a concern many pats long woofer wrinkler dat tungg tho blop, big ol adorable doggo tungg fluffer. Puggo thicc length boy such treat, thicc. Length boy h*ck yapper tungg blop, woofer borkdrive smol. Maximum borkdrive such treat porgo you are doing me the shock maximum borkdrive, I am bekom fat thicc.'

    };
    const expected = '<div class="dog-detail"><p class="name">Boogie</p><img src="../assets/corgi.jpeg"><div class="age-and-breed"><p class="age">5 years old</p><p class="breed">corgi</p></div><p class="description">Borkf I am bekom fat snoot shoober tungg, mlem what a nice floof noodle horse. Heckin good boys you are doin me a concern many pats long woofer wrinkler dat tungg tho blop, big ol adorable doggo tungg fluffer. Puggo thicc length boy such treat, thicc. Length boy h*ck yapper tungg blop, woofer borkdrive smol. Maximum borkdrive such treat porgo you are doing me the shock maximum borkdrive, I am bekom fat thicc.</p></div>';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderDogDetail(testDog);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected, 'Will render the details of name, age, breed and description');
});
