//click to flip

const cards = document.querySelectorAll('.card');

let hasFilppedCard = false;
let lockDeck = false;
let firstCard, secondCard;


function flipCard(){

	if(lockDeck){
		return;
	}

	this.classList.add('flip');

	if(!hasFilppedCard){
		firstCard = this;
		hasFilppedCard = true;

		console.log(firstCard);
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
}

function disableCards() {
	firstCard.removeEventListener("click", flipCard);
	secondCard.removeEventListener("click", flipCard);
		//console.log('match');

	setTimeout(()=>{
		$(firstCard).find('.back').addClass('match');
		$(secondCard).find('.back').addClass('match');
	}, 500);
}

function unflip() {
	lockDeck = true;
	setTimeout(()=>{
			firstCard.classList.remove('flip');
			secondCard.classList.remove('flip');
			lockDeck = false;
		}, 1000);
	
}

cards.forEach(card => card.addEventListener('click', flipCard));