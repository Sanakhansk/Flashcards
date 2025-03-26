document.addEventListener('DOMContentLoaded', () => {
    const FlashCard = [
        {question: "What is the capital of France?", answer: "Paris"},
        {question: "What is 2+3?", answer: "5"},
        {question: "What is the capital of Japan?", answer:"Tokyo" },
    ];
    let currentCard =0;

    const FlashCardElement = document.getElementById('FlashCard');
    const questionElement = document.getElementById('Question');
    const answerElement = document.getElementById('Answer');

    function displayCard(){
        questionElement.textContent=FlashCard[currentCard].question;
        answerElement.textContent=FlashCard[currentCard].answer;
        FlashCardElement.classList.remove('is-flipped');
    }

    document.getElementById('flip-card').addEventListener('click', () =>{
        FlashCardElement.classList.toggle('is-flipped');
    });

    document.getElementById('next-flashcard').addEventListener('click', ()=>{
        currentCard = (currentCard +1)%FlashCard.length;
        displayCard();
    })
    displayCard();
});
