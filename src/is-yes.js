export const isYes = (participantAnswer = '') => {
    const yesArray = ['yes', 'y', 'yep', 'yy'];
    return yesArray.includes(participantAnswer.toLocaleLowerCase());
};