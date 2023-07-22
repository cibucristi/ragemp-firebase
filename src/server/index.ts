import './setup';
import './database';
import { SHARED_CONSTANTS } from '@shared/constants';
import { db } from './database'

mp.events.add('playerReady', (player) => {
	console.log(`${player.name} is ready!`);

	player.customProperty = 1;

	player.customMethod = () => {
		console.log('customMethod called.');
	};

	player.customMethod();
});

console.log(SHARED_CONSTANTS.HELLO_WORLD);


mp.events.addCommand('adduser', async (player: PlayerMp, _, username) => {
	const userRef = db.collection('accounts').doc('Rd3F3FoyVaUSt2ORMdlL')
	const res = await userRef.set({
		[username]: status
	})
})