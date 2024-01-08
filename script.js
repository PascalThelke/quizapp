let currentQuestion = 0;

function init(){
    document.getElementById('total-questions').innerHTML = questions.length; // zeigt an wie viele Fragen insgesammt
    showQuestion();
}

function showQuestion(){ // rendert Frage und Antwordmöglichkeiten
    let actual = questions[currentQuestion];
    document.getElementById('question_text').innerHTML = actual['question'];
    document.getElementById('answer_1').innerHTML = actual['answer_1'];
    document.getElementById('answer_2').innerHTML = actual['answer_2'];
    document.getElementById('answer_3').innerHTML = actual['answer_3'];
    document.getElementById('answer_4').innerHTML = actual['answer_4'];
}

function choosenAnswer(selected){ // selected wird als Eingabeparameter per onlick übergeben
    let question = questions[currentQuestion]; // question wird definiert indem die 0 stelle des Arrays aufgerufen wird
    console.log('Seleceted answer is', selected); // ausgabe der ausgewühlten anwort
    let selectedQuestionNumber = selected.slice(-1); // hier wird die letzte stelle des strings deklariert
    console.log('Selected number is', selectedQuestionNumber); // ausgabe der nummer der gegebenen Antwort
    console.log('Current question', question['right_answer']);// ausgabe der aktuellen der richtigen Antwort

    if(selectedQuestionNumber == question['right_answer']){ // wenn die ausgewählte Nummer der Anwort mit der Zahl in right answer übereinstimmt 
        console.log('right answer!')// ausgabe
        document.getElementById(selected).parentNode.classList.add('bg-success');
    } else{ //anderfalls
        console.log('wrong answer!')// ausgabe
        document.getElementById(selected).parentNode.classList.add('bg-danger');
    }

}