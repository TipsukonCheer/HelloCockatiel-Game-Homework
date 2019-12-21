let phasers;

import 'phaser' ;

class Gamescene extends Phaser.Scene {
    constructor(config){
        super(config.scene);
        this.scene = config.scene;
        this.scene.add.existing(this);
        phasers = config.scene
    }

    preload(){
        
    }

    creat(){

    }

    update(){

    }

}
export default Gamescene;