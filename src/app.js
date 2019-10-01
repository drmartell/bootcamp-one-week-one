// IMPORT CODE FROM OTHER MODULES
import { isYes } from './is-yes.js';
// REFERENCE NEEDED DOM ELEMENTS

// INITIALIZE APPLICATION STATE (variables)
const myButton = document.getElementById('start-quiz');
const quizResults = document.getElementById('quiz-results');

// ADD EVENT HANDLERS
myButton.addEventListener('click', () => {
    const participantName = prompt('Please enter your name');
    
    let participantConfirmation;

    if (confirm(`Great ${participantName}, are you sure you're up for this challenge?`)) {
        participantConfirmation = true;
    } else {
        participantConfirmation = false;
    }
    
    if (participantConfirmation) {
        alert(`Let's do this!`);
    } else {
        alert(`No worries, maybe later :)`);
        return;
    }

    const q1Answer = prompt(`Xena is a magical creature, but does she appear to be a cat to you?\n\nYes/No`);
    const q2Answer = prompt(`We recently got a buddy for Xena, her name is Waverly.  Waverly and Xena get along great but they probably wouldn't in a cartoon.  Do you think Waverly is also a cat?\n\nYes/No`);
    confirm(`FYI, Waverly is a mini Australian labadoodle`);
    const q3Answer = prompt(`I almost forgot about Alex, Xena is fascinated with Alex.  Would you agree that Alex is the coolest name you've ever heard for a betta fish?\n\nYes/No`);

    const pointTotal = (isYes(q1Answer) === true ? 1 : 0) + (isYes(q2Answer) === false ? 1 : 0) + (isYes(q3Answer) === true ? 1 : 0);
    console.log(pointTotal);
    quizResults.innerText = `Nice job ${participantName}, you got ${pointTotal}/3 correct, that's ${Math.floor(100 * pointTotal / 3)}%`;
    
    // Confirm that the user really wants to take the quiz. If not, return from your function.
});

// ADDITIONAL FUNCTIONS TO HELP DO WORK