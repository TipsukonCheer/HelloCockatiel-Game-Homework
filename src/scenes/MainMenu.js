import Phaser from "phaser";
import renderer from "phaser/src/renderer";

let bgmenu;
let mermaid;
let shark;
let rock;
let startbutton;
let tutorial;
let seaweed1;
let seaweed2;
let seaweed3;
let seaweed4;

//Sound
let menusound;
class MainMenu extends Phaser.Scene {
    constructor(test) {
        super({
            key: 'MainMenu'
        });
    }

    preload() {
        this.load.image('bgmenu', 'src/image/bg_ver2.png');
        this.load.image('howtobotton','src/image/main how to play.png');
        this.load.image('bottonstart','src/image/main play.png');
        this.load.spritesheet('mermaid','src/image/Mermaid.png',
        { frameWidth: 528 , frameHeight: 458});
        this.load.spritesheet('shark','src/image/shark.png',
        {frameWidth: 580 , frameHeight: 284});
        this.load.image('rock','src/image/02.png');
        this.load.spritesheet('seaweed1','src/image/seaweed1.png',
        {frameWidth: 233.3, frameHeight: 247});
        this.load.spritesheet('seaweed2','src/image/seaweed2.png',
        {frameWidth: 200, frameHeight: 247})
        this.load.spritesheet('seaweed3','src/image/seaweed1.png',
        {frameWidth: 233.3, frameHeight: 247});
        this.load.spritesheet('seaweed4','src/image/seaweed2.png',
        {frameWidth: 200, frameHeight: 247})
        this.load.image('logo','src/image/main name.png');
        this.load.audio('menusound','src/sound/MenuBG.mp3')
    }

    create() {
        menusound = this.sound.add('menusound')
        menusound.loop = true;
        menusound.play();
        bgmenu = this.add.tileSprite(0, 0, 1600, 720, 'bgmenu').setOrigin(0,0);
        mermaid = this.add.sprite(190, 360, 'mermaid').setScale(0.5);
        shark = this.add.sprite(1100, 340, 'shark').setScale(0.5);
        tutorial = this.add.image(this.game.renderer.width/2, (this.game.renderer.height/2)+150, 'howtobotton')
            .setScale(0.25);
        rock = this.add.image(this.game.renderer.width/4, 700, 'rock').setScale(0.6);
        seaweed1 = this.add.sprite(this.game.renderer.width-300, 660, 'seaweed1').setScale(0.5);
        seaweed2 = this.add.sprite(200, 660, 'seaweed2').setScale(0.5);
        seaweed3 = this.add.sprite(this.game.renderer.width-100, 640, 'seaweed3').setScale(0.7);
        seaweed4 = this.add.sprite(300, 660, 'seaweed4').setScale(0.4);
        name = this.add.image(this.game.renderer.width/2, (this.game.renderer.height/2)-200, 'logo').setScale(0.2);

        
        //Animation
        this.anims.create({
            key: 'mermaidAni',
            frames: this.anims.generateFrameNumbers('mermaid', {
                start: 0,
                end: 3
            }),
            duration: 500,
            framerate: 1,
            repeat: -1
        })
        
        this.anims.create({
            key: 'sharkAni',
            frames: this.anims.generateFrameNumbers('shark', {
                start: 0,
                end: 2
            }),
            duration: 600,
            framerate: 1,
            repeat: -1
        })

        this.anims.create({
            key: 'seaweedAni1',
            frames: this.anims.generateFrameNumbers('seaweed1', {
                start: 0,
                end: 2
            }),
            duration: 700,
            framerate: 1,
            repeat: -1
        })

        this.anims.create({
            key: 'seaweedAni2',
            frames: this.anims.generateFrameNumbers('seaweed2', {
                start: 0,
                end: 2
            }),
            duration: 700,
            framerate: 1,
            repeat: -1
        })

        this.anims.create({
            key: 'seaweedAni3',
            frames: this.anims.generateFrameNumbers('seaweed3', {
                start: 0,
                end: 2
            }),
            duration: 700,
            framerate: 1,
            repeat: -1
        })

        this.anims.create({
            key: 'seaweedAni4',
            frames: this.anims.generateFrameNumbers('seaweed4', {
                start: 0,
                end: 2
            }),
            duration: 700,
            framerate: 1,
            repeat: -1
        })

        //Botton console
        startbutton = this.add.image(this.game.renderer.width/2, 
            this.game.renderer.height/2, 'bottonstart')
            .setScale(0.2);
        startbutton.setInteractive();    
        startbutton.on('pointerup', () => {
            menusound.stop()
            this.scene.start('GameScene');
        });

        tutorial.setInteractive();
        tutorial.on('pointerup', () => {
            menusound.stop()
            this.scene.start('Tutorial');
        });
    }
    
    
    update(delta, time) {
        bgmenu.tilePositionX += 1.65;
        mermaid.anims.play('mermaidAni', true);
        shark.anims.play('sharkAni', true);
        seaweed1.anims.play('seaweedAni1', true);
        seaweed2.anims.play('seaweedAni2', true);
        seaweed3.anims.play('seaweedAni3', true);
        seaweed4.anims.play('seaweedAni4', true);
    }
}

export default MainMenu;

//nabill_mack(Easter Egg <3)