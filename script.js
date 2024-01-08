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
    document.getElementById('total-questions').innerHTML = questions.length;
    showQuestion();
}

function showQuestion(){
    let actual = questions[currentQuestion];
    document.getElementById('question_text').innerHTML = actual['question'];
    document.getElementById('answer_1').innerHTML = actual['answer_1'];
    document.getElementById('answer_2').innerHTML = actual['answer_2'];
    document.getElementById('answer_3').innerHTML = actual['answer_3'];
    document.getElementById('answer_4').innerHTML = actual['answer_4'];
}

function choosenAnswer(selected){
    let question = questions[currentQuestion];
    console.log('Seleceted answer is', selected);
    let selectedQuestionNumber = selected.slice(-1);
    console.log('Selected number is', selectedQuestionNumber);
    console.log('Current question', question['right_answer']);

    if(selectedQuestionNumber == question['right_answer']){
        console.log('right answer!')
    } else{
        console.log('wrong answer!')
    }

}