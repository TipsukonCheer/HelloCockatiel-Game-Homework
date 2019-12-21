import BG from './Core/bg'
let bg

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
        bg.preload();
        bg = new BG({scene: this});
    }   
    create() {
        player = new Player({ scene: this});
        player.create();

        bg.create();
    }

    update() {
        bg.update();
       player.update();
    }
}

export default GameScene;
