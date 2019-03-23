//click to flip

const cards = document.querySelectorAll('.card');

let hasFilppedCard = false; //flag for first or second card
let lockDeck = false;
let firstCard, secondCard;


function flipCard(){

	if(lockDeck){
		return;
	}
    //avoiding double click on same card makes match
	if(this === firstCard){
		return;
	}

	this.classList.add('flip');

	if(!hasFilppedCard){
		firstCard = this;
		hasFilppedCard = true;

		//console.log(firstCard);
	}else{
		hasFilppedCard = false;
		secondCard = this;
		checkMatch();
	}
}


function checkMatch(){
	if(firstCard.getAttribute('data-name')===secondCard.getAttribute('data-name')){
		//is a match
		disableCards();
			//not a match(flip the card)	
	}else {
		unflip();
	}
	//reset();
}

function disableCards() {
	firstCard.removeEventListener("click", flipCard);
	secondCard.removeEventListener("click", flipCard);
		//console.log('match');

	//change css class for match card
	setTimeout(()=>{
		$(firstCard).find('.back').addClass('match');
		$(secondCard).find('.back').addClass('match');
		reset();
	}, 500);
	
}

function unflip() {
	lockDeck = true; //before unflip unmatch card, lock deck
	setTimeout(()=>{
			firstCard.classList.remove('flip');
			secondCard.classList.remove('flip');
			lockDeck = false;
			reset();
		}, 1000);
}

//reset deck after each round
function reset(){
	firstCard = null;
	secondCard = null;
	lockDeck = false;
	hasFilppedCard = false;
}

function shuffleCard(){
	cards.forEach(card => {
		let randomNum = Math.floor(Math.random()*16);
		console.log(randomNum);
		card.style.order = randomNum;
	});
}


	cards.forEach(card =>card.addEventListener('click', flipCard));
	shuffleCard();

	//document.getElementById("btn-new").addEventListener("click", location.reload);
	

