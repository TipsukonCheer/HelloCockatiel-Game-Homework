import Phaser from "phaser";
let how;

//Input from keyboard
let keyENTER;

class Tutorial extends Phaser.Scene {
    constructor(test) {
        super({
            key: 'Tutorial'
        });
    }

    preload() {
        this.load.image('how','src/image/how.png');
    }

    create() {
        how = this.add.image(0, 0,'how').setOrigin(0,0).setScale(0.24);
        
        //Input enter
        keyENTER = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER);
    }
    
    
    update(delta, time) {
        if (keyENTER.isDown) {
            this.scene.start('MainMenu');
        }
    }
}

export default Tutorial;
