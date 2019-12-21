import Object from './Core/Object'
let ground_1, ground_2, groundS_1, groundS_2, bg
let object,coin

class GameScene extends Phaser.Scene {
    constructor(test) {
        super({
            key: 'GameScene'
        });
    }

    preload() {
        object = new Object({scene: this});
        object.preload();
    }

    create() { 
       object.create();
    }

    update() {
   
    }
}

export default GameScene;
