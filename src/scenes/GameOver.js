import Phaser from "phaser";
let gameOverbg;

//Input from keyboard
let keyENTER;

class GameOver extends Phaser.Scene {
    constructor(test) {
        super({
            key: 'GameOver'
        });
    }

    preload() {
        this.load.image('gameover','src/image/game-over.png');
    }

    create() {
        gameOverbg = this.add.image(0, 0,'gameover').setOrigin(0,0);
        
        //Input enter
        keyENTER = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER);
    }
    
    
    update(delta, time) {
        if (keyENTER.isDown) {
            this.scene.start('MainMenu');
        }
    }
}

export default GameOver;
