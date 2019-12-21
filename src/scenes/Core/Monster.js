let phasers;
let monster;
let monsterGroup;
let player;

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
        // monster = phasers.physics.add.image(200,100,'Monster').setScale(0.6).setSize(100).setCollideWorldBounds(true).setOffset(1,2);
        monsterGroup = phasers.physics.add.group();
        event = phasers.time.addEvent({
            delay : 1000,
            callback : function (){
                monster = phasers.physics.add.image(Phaser.Math.Between(0,600),20,'Monster').setScale(0.4)
                monsterGroup.add(monster)
                monsterGroup.setVelocityY(200)
            },
            callbackScope : this,
            loop  : true,
            pause : false,
            timeScale:1,
            startAt:1000,
           
        })

        
        
    }

    hit(player){
            monster.destroy()
    }
   

    update() {
    
    }

}
export default GameScene;