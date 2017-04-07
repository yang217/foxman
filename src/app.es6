import Index from './index';
import updateNotifier from 'update-notifier';
import pkg from '../package';

updateNotifier({ pkg }).notify();

export default function(...args) {
	console.log('\n');

	console.log([
		' _____   _____  __    __      ___  ___       ___   __   _',
		'|  ___| /  _  \\ \\ \\  / /     /   |/   |     /   | |  \\ | | ',
		'| |__   | | | |  \\ \\/ /     / /|   /| |    / /| | |   \\| |',
		'|  __|  | | | |   }  {     / / |__/ | |   / / | | | |\\   |',
		'| |     | |_| |  / /\\ \\   / /       | |  / /  | | | | \\  |',
		'|_|     \\_____/ /_/  \\_\\ /_/        |_| /_/   |_| |_|  \\_|',
	].join('\n'));

	console.log('\n');
	Index(...args);
}
