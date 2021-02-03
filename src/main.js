import Phaser from 'phaser'

import StarterScene from './scenes/StarterScene'
const config = {
	type: Phaser.AUTO,
	width: 800,
	height: 600,
	physics: {
		default: 'arcade',
		arcade: {
		}
	},
	scene: [StarterScene]
}

export default new Phaser.Game(config)
