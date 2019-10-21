class GameScene extends Phaser.Scene {
    constructor(test) {
        super({
            key: 'GameScene'
        });
    }

    preload() {
        this.load.spritesheet('ch','src/image/character.png',{frameWidth:416,frameHeight:454})
    }

    create() {

    }

    update() {
   
    }
}

export default GameScene;
