import Phaser from "phaser";
let gameOverbg;
let click;
//Input from keyboard
// let keyENTER;

let gameOvermp3

class GameOver extends Phaser.Scene {
    constructor(test) {
        super({
            key: 'GameOver'
        });
    }

    preload() {
        this.load.image('gameover','src/image/game-over.png');
        this.load.audio('gameoverSound','src/sound/GameOver.mp3');
        this.load.image('click','src/image/click (1).png')
    }

    create() {
        gameOverbg = this.add.image(0, 0,'gameover').setOrigin(0,0);
        gameOvermp3 = this.sound.add('gameoverSound');
        gameOvermp3.play();
        
        click = this.add.image(this.game.renderer.width-280, 623, 'click')
             .setScale(0.25);

        click.setInteractive();
        click.on('pointerup', () => {
            gameOvermp3.stop()
            this.scene.start('MainMenu');
        });

        //Input enter
        // keyENTER = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER);
    }
    
    
    update(delta, time) {
        
        // if (keyENTER.isDown) {
        //     this.scene.start('MainMenu');
        //     gameOvermp3.stop();
        // }
    }
}

export default GameOver;
