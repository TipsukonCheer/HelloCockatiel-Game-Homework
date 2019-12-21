let phasers;
let player;
let keyA;
let keyD;
let keyW;
import 'phaser';

class GameScene extends Phaser.Scene {

    constructor(config) {
        super(config.scene)
        this.scene = config.scene;
        this.scene.add.existing(this);
        phasers = config.scene


    }

    preload() {
    }

    create() {
        keyA = phasers.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        keyD = phasers.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        keyW = phasers.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
        player = phasers.physics.add.sprite(200, 100, 'player').setScale(0.25);
        player.setCollideWorldBounds(true);
        phasers.anims.create({
            key: 'playerAni',
            frames: phasers.anims.generateFrameNumbers('player', {
                start: 0,
                end: 3
            }),
            framerate: 2,
            repeat: -1
        })


    }

    update() {
        if (keyA.isDown) {
            player.setVelocityX(-160);

        }
        else if (keyD.isDown) {
            player.setVelocityX(160);
            player.anims.play('playerAni', true);
        }
        else {
            player.setVelocityX(0);
            player.anims.play('playerAni', false);
        }
        if (keyW.isDown && player.body.touching.down) {
            player.setVelocityY(-330);
        }
    }
}

export default GameScene;
