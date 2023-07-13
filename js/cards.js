const cards=[
	"./img/BALL.jpg",
	"./img/beefish.jpg",
	"./img/tropicalfish.jpg",
	"./img/i.jpg",
	"./img/lodka.jpg",
	"./img/starf.jpg",
	"./img/lad.jpg",
	"./img/medusa.jpg",
	"./img/rub.jpg"
	
];

export const back=[
"./img/865178.jpg",
"./img/back2.jpg"
]

export class Card{
	img;
	back = cards[8];
	status=false;
	constructor(img){
		this.img=img;
	}
}

export const createCards = (lvl) =>{
	const array =[];
	for(let i = 0; i<lvl/2; i++) {
		array.push(new Card(cards[i]));
		array.push(new Card(cards[i]));
	}
	for (let i =0; i<lvl; i++){
		let a = array[i];
		let r = Math.floor(Math.random()*(lvl-1));
		array[i] = array[r];
		array[r] = a
	}
	return array;
}

