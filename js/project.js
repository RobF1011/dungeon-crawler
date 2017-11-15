let playerHealth = 20;
let blobHealth = 20;

$('#p-health').text(playerHealth);
$('#attack-btn').on("click", fightBlob);

function fightBlob () {
	if (playerHealth <= 0) {
		$('#action').text('You cannot attack because you are dead!');
	}
	else if (blobHealth > 0) {
		$('#attack-btn').off();
		$('#attack-btn').text('Wait...');
		let youHit = Math.floor(Math.random() * 10);
		blobHealth = blobHealth - youHit;
		$('#action').text('You attack the green blob for ' + youHit + ' damage! ' + blobHealth + ' health left!');	
		$('#slice').css('height', '40%');
		$('figure').css('background-color', 'red');
		setTimeout(function() {
		$('#slice').css('display', 'none');	
		$('#slice').css('height', '0');
		$('figure').css('background-color', 'darkolivegreen');
		},700);
		setTimeout(function() {
		$('#slice').css('display', 'initial');
		},800);
		if (blobHealth <= 0) {
			setTimeout(function() {
			$('#action').text('The green blob is defeated!');
			$('.blob').fadeOut();
			$('#attack-btn').on("click", fightBlob);
			$('#attack-btn').text('Attack');
			$('#center-alert')
			.text('You win!')
			.fadeIn();
			},2000);
		}
		else {
			let blobHit = Math.floor(Math.random() * 10);
			playerHealth = playerHealth - blobHit;
			setTimeout(function() {
			$('#action').text('The green blob attacks! ' + blobHit + ' damage!');
			$('.click-anim').css('transform', 'scale(1.2)');
			$('#burst-8').fadeIn();
			setTimeout(function() {
			$('.click-anim').css('transform', 'scale(1.0)');
			$('#burst-8').fadeOut();
			},700);
			$('#p-health').text(playerHealth);
			},2000);
			if (playerHealth > 0) {
				setTimeout(function() {
				 $('#action').text('Your Turn!');
				 $('#attack-btn').on("click", fightBlob);
				 $('#attack-btn').text('Attack');
				},4000);
			}
			else {
				setTimeout(function() {
				 $('#action').text('The green blob defeats you!');
				 $('#attack-btn').on("click", fightBlob);
				 $('#attack-btn').text('Attack');
				 $('#center-alert')
				.text('You are dead!')
				.fadeIn();
				},4000);
			}
		}
	}
	else {
		$('#action').text('You swing your sword and slice the empty air!');
	}
}
