// IMPORT MODULES under test here:
// import example from '../src/example.js';

import { isYes } from '../src/is-yes.js';
const test = QUnit.test;

test(`should return true if the participant answers variants of yes:  'yes', 'y', 'yep', 'yy'`, function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const userAnswer = 'yes';
    //Act 
    // Call the function you're testing and set the result to a const
    const userAnswerIsCorrect = isYes(userAnswer);
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(userAnswerIsCorrect, true);
});

test(`should return false if the participant answers 'no'`, function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const userAnswer = 'no';
    //Act 
    // Call the function you're testing and set the result to a const
    const userAnswerIsCorrect = isYes(userAnswer);
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(userAnswerIsCorrect, false);
});

test(`should return false if the participant answers 'n'`, function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const userAnswer = 'n';
    //Act 
    // Call the function you're testing and set the result to a const
    const userAnswerIsCorrect = isYes(userAnswer);
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(userAnswerIsCorrect, false);
});