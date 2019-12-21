[]
let phasers;
let player;
let keyA;
let keyD;
let keyW;
import 'phaser';

class GameScene extends Phaser.Scene {
    constructor(config) {
        super(config.Scene){
            this.scene = config.scene;
            this.scene.add.existing(this);
            phasers = config.scene
        }

    }

    preload() {
        this.load.spritesheet('player','src/image/character.png' ,{frameWidth: 416, frameHeight: 454})
    }

    create() {
        player = this.physics.add.sprite(200,100,'player').setScale(0.25);
        player.setCollideWorldBounds(true);
        this.anims.create({
            key: 'playerAni',
            frames: this.anims.generateFrameNumbers('player', {
                start: 0,
               end: 3
            }),
           framerate: 2,
            repeat: -1
        })


    }

    update() {
   if (keyA.isDown){
            player.setVelocityX(-160);
            
        }
        else if (keyD.isDown) {
            player.setVelocityX(160);
            player.anims.play('playerAni', true);
        }
        else{
            player.setVelocityX(0);
            player.anims.play('playerAni', false);
        }
        if (keyW.isDown && player.body.touching.down)
        {
            player.setVelocityY(-330);
        }
    }
}

export default GameScene;
