import Score from './core/Score'
let score;
class GameScene extends Phaser.Scene {
    constructor(test) {
        super({
            key: 'GameScene'
        });
    }

    preload() {

    }

    create() {
        score = new Score({ scene: this})
        score.create();
    }

    update() {
        score.update();
    }
}

export default GameScene;
