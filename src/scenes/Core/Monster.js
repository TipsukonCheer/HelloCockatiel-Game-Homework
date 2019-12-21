let phasers
let monster

import 'phaser';

class GameScene extends Phaser.Scene {
    constructor(config) {
        super(config.scene);
        this.scene = config.scene;
        this.scene.add.existing(this);
        phasers = config.scene
    }

    preload() {

    }

    create() {

    }

    update() {
   
    }

}
export default GameScene;