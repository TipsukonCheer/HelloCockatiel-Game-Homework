let phasers;
let bg;
let bg_cloud
let mountain

import 'phaser' ;

class Gamescene extends Phaser.Scene {
    constructor(config){
        super(config.scene);
        this.scene = config.scene;
        this.scene.add.existing(this);
        phasers = config.scene
    }

    preload(){
        phasers.load.image('bg','src/image/sky_lightened.png')
        phasers.load.image('bg_cloud', 'src/image/clouds_BG.png')
        phasers.load.image('mountain', 'src/image/mountains_lightened.png')
    }

    create(){
        bg = phasers.add.tileSprite(0, 0, 384, 216, 'bg').setOrigin(0, 0).setSize(800, 600).setScale(2.8)
        bg_cloud = phasers.add.tileSprite(0, 0, 384, 216, 'bg_cloud').setOrigin(0, 0).setSize(800, 600).setScale(2.8)
        mountain = phasers.add.image(400,300 , 'mountain').setScale(2.8)
    }

    update(){
        bg_cloud.tilePositionX += 0.5
    }

}
export default Gamescene;