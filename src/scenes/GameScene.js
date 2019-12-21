import Player from './Core/Player'
let player;
class GameScene extends Phaser.Scene {
    constructor(config) {
        super({
            key: 'GameScene'
        });
    }

    preload() {
        this.load.spritesheet('player', './src/image/character.png', { frameWidth: 416, frameHeight: 454 })
    }

    create() {
        player = new Player({ scene: this});
        player.create();

    }

    update() {
       player.update();
    }
}

export default GameScene;
