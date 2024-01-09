let currentQuestion = 0;
let selected; // wird befüllt um die ausgwählte antwort in anderen funktionen aufrufen zu können
let idOfRightLetterbox;
let idOfPickedLetterbox;
let idOfRightAnswer;


function init() {
    document.getElementById('total-questions').innerHTML = questions.length; // zeigt an wie viele Fragen insgesammt
    showQuestion();
}

function showQuestion() { // rendert Frage und Antwortmöglichkeiten

    if (currentQuestion >= questions.length) {
        renderEndScreen();//show Endscreen
    } else {
        let actual = questions[currentQuestion];
        document.getElementById('actual-question').innerHTML = currentQuestion + 1;
        document.getElementById('question_text').innerHTML = actual['question'];
        document.getElementById('answer_1').innerHTML = actual['answer_1'];
        document.getElementById('answer_2').innerHTML = actual['answer_2'];
        document.getElementById('answer_3').innerHTML = actual['answer_3'];
        document.getElementById('answer_4').innerHTML = actual['answer_4'];

    }




}

function choosenAnswer(selectedAnswer) { // selected wird als Eingabeparameter per onlick übergeben
    let question = questions[currentQuestion]; // question wird definiert indem die 0 stelle des Arrays aufgerufen wird
    selected = selectedAnswer;
    console.log('Seleceted answer is', selected); // ausgabe der ausgewühlten anwort
    let selectedQuestionNumber = selected.slice(-1); // hier wird die letzte stelle des strings deklariert
    console.log('Selected number is', selectedQuestionNumber); // ausgabe der nummer der gegebenen Antwort
    console.log('Current question', question['right_answer']);// ausgabe der aktuellen der richtigen Antwort

    idOfRightAnswer = `answer_${question['right_answer']}`; // nimmt sich die nummer aus dem array, welche der ID der Anwort entspricht
    idOfRightLetterbox = `letterbox_${question['right_answer']}`; // bestimmt die id der dazugehörigen letterbox
    idOfPickedLetterbox = `letterbox_${selectedQuestionNumber}`;    // bestimmt die id der letterbox in der ausgewählten Antwort

    if (selectedQuestionNumber == question['right_answer']) { // wenn die ausgewählte Nummer der Anwort mit der Zahl in right answer übereinstimmt 
        console.log('right answer!')// ausgabe
        document.getElementById(selected).parentNode.classList.add('succeeded-answer-box'); // greift auf das parent element zu und gibt die klasse succeeded-answer..
        document.getElementById(idOfRightLetterbox).classList.add('bg-success'); // greift auf die Letterbox der richtigen Anwort zu und gibt die klasse bg-success
    } else { //anderfalls
        console.log('wrong answer!')// ausgabe
        document.getElementById(selected).parentNode.classList.add('failed-answer-box'); // greift auf das parent element zu und gibt die klasse failed answer..
        document.getElementById(idOfPickedLetterbox).classList.add('bg-danger');
        document.getElementById(idOfRightAnswer).parentNode.classList.add('succeeded-answer-box'); // makiert die richtige Antwort bei falscher Auswahl
    }
    document.getElementById('gonext-button').disabled = false;
}

function nextQuestion() {
    currentQuestion++; // wir von Stelle 0 auf 1 im Array erhöht
    document.getElementById('gonext-button').disabled = true;
    resetAnswers();
    showQuestion();



}

function resetAnswers() {
    document.getElementById(selected).parentNode.classList.remove('succeeded-answer-box'); // greift auf das parent element zu und gibt die klasse succeeded-answer..
    document.getElementById(idOfRightLetterbox).classList.remove('bg-success'); // greift auf die Letterbox der richtigen Anwort zu und gibt die klasse bg-succe
    document.getElementById(selected).parentNode.classList.remove('failed-answer-box'); // greift auf das parent element zu und gibt die klasse failed answer..
    document.getElementById(idOfPickedLetterbox).classList.remove('bg-danger');
    document.getElementById(idOfRightAnswer).parentNode.classList.remove('succeeded-answer-box'); // makiert die richtige Antwort bei falscher Auswahl

}

function renderEndScreen(){
    document.getElementById('end-screen').style = '';
    document.getElementById('question-screen').style = 'display: none';
    document.getElementById('end-screen-trophy').style = '';

}