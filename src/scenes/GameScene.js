import BG from './Core/bg'

let bg
// let bg_cloud

class GameScene extends Phaser.Scene {
    constructor(test) {
        super({
            key: 'GameScene'
        });
    }

    preload() {
        // this.load.image('bg','src/image/sky_lightened.png')
        // this.load.image('bg_cloud', 'src/image/clouds_BG.png')
        bg = new BG({scene: this});
        bg.preload();
    }   

    create() {
        // bg = this.add.tileSprite(0, 0, 384, 216, 'bg').setOrigin(0, 0).setSize(800, 600).setScale(2.8)
        // bg_cloud = this.add.tileSprite(0, 0, 384, 216, 'bg_cloud').setOrigin(0, 0).setSize(800, 600).setScale(2.8)

        bg.create();
    }

    update() {
        bg.update();
    }
}

export default GameScene;
