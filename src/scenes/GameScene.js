import BG from './Core/bg'
let bg

import Player from './Core/Player'
let player;
import Object from './Core/Object'
let ground_1, ground_2, groundS_1, groundS_2, bg
let object,coin
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
        object = new Object({scene: this});
        object.preload();
    }
    create() {
        player = new Player({ scene: this});
        player.create();
        bg.create();
       object.create();
    }

    update() {
        bg.update();
       player.update();
    }
}

export default GameScene;
