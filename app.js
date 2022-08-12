// import functions and grab DOM elements

// let state

// set event listeners
// get user input
// use user input to update state
// update DOM to reflect the new state

const submit = document.getElementById('submit');
const questionContainer = document.getElementById('question-container');
const fortuneContainer = document.getElementById('fortune');
const result = document.getElementById('result');
const retry = document.getElementById('retry');
const answers = [
    'kiss her you fool',
    'uhhhhh busy rn',
    'my family kicked me out',
    "don't die idiot",
    'i love to bully my gf',
    'call your mother',
    'use a love potion',
    'once i literally followed a demon girl to hell',
    'what was the question again?',
    "no kamilla don't look in that folder",
    'someday i will be a demon princess',
    'demons are so handsome',
    'check out those horns',
    'ffffffffffffffffffffffffffffffffff sat on keyboard',
    'yellow is a good color for sweater dresses',
    'i could disguise myself as anyone',
    'look behind you',
    'spiders want to be me',
    'handholding',
];

submit.addEventListener('click', () => {
    questionContainer.classList.toggle('hide');
    fortuneContainer.classList.toggle('hide');
    const randNum = Math.floor(Math.random() * answers.length);
    const randomAnswer = answers[randNum];
    result.textContent = randomAnswer;
});

retry.addEventListener('click', () => {
    questionContainer.classList.toggle('hide');
    fortuneContainer.classList.toggle('hide');
});
