import Phaser from "phaser";
let how;
// let click;
//Sound
let menusound;

//Input from keyboard
// let keyENTER;

class Tutorial extends Phaser.Scene {
    constructor(test) {
        super({
            key: 'Tutorial'
        });
    }

    preload() {
        this.load.image('how','src/image/how v2.png');
        this.load.audio('menusound','src/sound/MenuBG.mp3')
        this.load.image('click','src/image/click (1).png')
    }

    create() {
        menusound = this.sound.add('menusound')
        menusound.loop = true;
        menusound.play();
        how = this.add.image(0, 0,'how').setOrigin(0,0).setScale(0.24);
        // click = this.add.image(this.game.renderer.width-280, 623, 'click')
        //     .setScale(0.25);
        
        how.setInteractive();
        how.on('pointerup', () => {
            menusound.stop()
            this.scene.start('MainMenu');
        });

        
        //Input enter
        // keyENTER = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER);

    }
    
    
    update(delta, time) {
        // if (keyENTER.isDown) {
        //     menusound.stop();
        //     this.scene.start('MainMenu');
        // }
    }
}

export default Tutorial;
