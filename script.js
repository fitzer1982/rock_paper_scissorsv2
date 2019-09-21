let playerScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById('playScore');
const computerScore_span = document.getElementById ('computerScore');
const playerChoice_span = document.querySelector('.playerChoice');
const computerChoice_span = document.querySelector('.computerChoice');
const rock_button = document.getElementById('r');
const paper_button = document.getElementById('p');
const scissors_button = document.getElementById('s');
const reset_button = document.getElementById('re');

function win(userChoice,computerChoice){
    playerScore++;
    userScore_span.innerHTML = playerScore;
    computerScore_span.innerHTML = computerScore;

}

function loss(userChoice,computerChoice){
    computerScore++;
    userScore_span.innerHTML = playerScore;
    computerScore_span.innerHTML = computerScore;
    
}

function getComputerChoice(){
    const choices = ['r','p','s'];
    const randNumber = Math.floor(Math.random()*3);
    return choices[randNumber];
}

function game(userChoice){
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice){
            case 'rs':
            case 'pr':
            case 'sp':
                win(userChoice, computerChoice);
                break;
            case 'rp':
            case 'ps':
            case 'sr':
                loss(userChoice, computerChoice);
                break;
            case 'rr':
            case 'pp':
            case 'ss':
                draw(userChoice, computerChoice);
                break;           
    }

}

function main(){

    rock_button.addEventListener('click', function(){
        game('r');
    })

    paper_button.addEventListener('click', function(){
        game('p');
    })

    scissors_button.addEventListener('click', function(){
        game('s');
    })
}

main();