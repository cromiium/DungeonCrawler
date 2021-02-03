import Phaser from 'phaser'

const PLAYER_KEY = 'player';
export default class StarterScene extends Phaser.Scene {
    constructor() {
        super('starter')

        this.player = undefined;
        this.cursors = undefined;
    }

    preload() {

        this.load.image('level', 'Assets/tilemap.png');

        this.load.spritesheet(PLAYER_KEY, 'Assets/Blue Knight.png', {
            frameWidth: 32,
            frameHeight: 48
        });

    }


    create() {
        this.cameras.main.setBounds(0,0,800,600);

        this.add.image(400, 300, 'level');

        this.player = this.createPlayer();

        this.cursors = this.input.keyboard.createCursorKeys();

        this.cameras.main.startFollow(this.player, true, 1, 1);

        this.cameras.main.setZoom(3);
    }

    createPlayer() {
        const player = this.physics.add.sprite(100, 450, PLAYER_KEY);
        player.setBounce(0.2);
        player.setCollideWorldBounds(true);

        return player;
    }


    update() {
        this.player.setVelocity(0);
        if (this.cursors.left.isDown) {
            this.player.setVelocityX(-100);
        } else if (this.cursors.right.isDown) {
            this.player.setVelocityX(100);
        } else if (this.cursors.up.isDown) {
            this.player.setVelocityY(-100);
        } else if (this.cursors.down.isDown) {
            this.player.setVelocityY(100);
        }

    }
}


// TODO: Create Walls
// TODO: Add Enemies
// TODO: Create random Map Generation
// TODO: Apply it with walls
// TODO: Add pathfinding to enemies
// TODO: Add Attack(s)
// TODO: Add Inventory and Weapons
// TODO: Add HP to both Enemies and Player
// TODO: Add Stats to Player
// TODO: Add Game Over State
// TODO: Create Room Generation 
// TODO: Create Random Exit Location
// TODO: Create Multiple Floors