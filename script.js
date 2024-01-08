let questions = [
    {
        "question": "Wer hat HTML erfunden?",
        "answer_1": "Robbie Williams",
        "answer_2": "Tim Berners-Lee",
        "answer_3": "Robert Kotick",
        "answer_4": "Hakon Wium Lie",
        "right_answer": 2,
        
    },
    {
        "question": "Welches HTML-Element wird verwendet, um einen Hyperlink zu erstellen?",
        "answer_1": " <link>",
        "answer_2": " <a>",
        "answer_3": " <href>",
        "answer_4": " <url>",
        "right_answer": 2,
    },
    {
        "question": "Was bedeutet die Abkürzung HTML?",
        "answer_1": "Hypertext Markup Language",
        "answer_2": "Hyperlink and Text Markup Language",
        "answer_3": "High Tech Modern Language",
        "answer_4": "Home Tool Markup Language",
        "right_answer": 1,
    },
    {
        "question": "Welches HTML-Element wird verwendet, um eine geordnete Liste zu erstellen?",
        "answer_1": " <ul>",
        "answer_2": " <ol>",
        "answer_3": " <li>",
        "answer_4": " <dl>",
        "right_answer": 2,
    },
    {
        "question": "Was ist der Zweck des HTML-Elements ' <head>'?",
        "answer_1": "Es enthält den Hauptinhalt der Webseite.",
        "answer_2": "Es definiert den Header-Bereich der Webseite.",
        "answer_3": "Es enthält Metainformationen über das Dokument.",
        "answer_4": "Es stellt multimediale Inhalte dar.",
        "right_answer": 3,
    },
];

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
    } else{ //anderfalls
        console.log('wrong answer!')// ausgabe
    }

}