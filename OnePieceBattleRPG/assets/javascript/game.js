
$(document).ready(function() {


	let characters = {
			'Luffy': {
					name: 'Luffy',
					health: 120,
					attack: 8,
					imageUrl: "assets/images/Hero1.png",
					enemyAttackBack: 15
			}, 
			'Crocodile': {
					name: 'Crocodile',
					health: 100,
					attack: 14,
					imageUrl: "assets/images/Enemy1.png",
					enemyAttackBack: 5
			}, 
			'Lucci': {
					name: 'Lucci',
					health: 150,
					attack: 8,
					imageUrl: "assets/images/Enemy2.png",
					enemyAttackBack: 20
			}, 
			'Katakuri': {
					name: 'Katakuri',
					health: 180,
					attack: 7,
					imageUrl: "assets/images/Enemy3.png",
					enemyAttackBack: 20
			}
	};
	
	var currSelectedCharacter;
	var currDefender;
	var combatants = [];
	var indexofSelChar;
	var attackResult;
	var turnCounter = 1;
	var killCount = 0;
	
	
