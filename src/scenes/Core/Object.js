let ground_1
let coin
let phasers;
import 'phaser';
class GameScene extends Phaser.Scene {
    constructor(config) {
        super(config.scene);
        this.scene = config.scene;
        this.scene.add.existing(this);
        phasers = config.scene
    }
    preload() {
        
        phasers.load.image('ground_1', 'src/image/Odject/ground_grass.png')
        
        phasers.load.image('coin', 'src/image/Odject/coin_gold.png')

    }

    create() {
        coin = phasers.add.image(100,400,'coin').setOrigin(0, 0).setScale(1)
        ground_1 = phasers.add.image(-60, 500, 'ground_1').setOrigin(0, 0).setScale(2)
        // phasers.physics.add.collider(player, ground_1)
        // coins = phasers.physics.add.group();

        // event = phasers.time.addEvent({
        //     delay: 1000,
        //     callback: function () {
        //         coin = phasers.physics.add.sprite(Phaser.Math.Between(0, 600), 0, 'coin').setScale(2).setSize(15, 15).setOffset(0, 3)
        //         coins.add(coin)
        //         coins.setVelocityY(200)

        //     },
        //     callbackScope: this,
        //     loop: true,
        //     paused: false,
        //     startAt: 1000,
        //     timeScale: 1
        // })
    }



    update() {

    }
}
export default GameScene;