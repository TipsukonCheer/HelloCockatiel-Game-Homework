import Phaser from "phaser";
//Charactor and Background
let background;
let p1;
let shark;
let skybox;
let bullet;
let bomb;
let event_bomb;
//Speed 
let bulletSpeed = 400;
// let sharkSpeed = 300;

//Bullet
let bulletGroup;

//Controller  
let keyUP;
let keyDOWN;
let keyLEFT;
let keyRIGHT;
let keyFire;

//Score
let scoreText;
let score; 

//Sound
let tridentsound;
let gamesound;
let enermydie;
//Overlap
    // let sharkOverlaptest = false;
    // let bombOverlaptest = false;

class GameScene extends Phaser.Scene {
    constructor(test) {
        super({
            key: 'GameScene'
        });
    }

    preload() {
        this.load.image('bg', 'src/image/bg_ver2.png')
        this.load.spritesheet('player','src/image/Mermaid.png',
        { frameWidth: 528 , frameHeight: 458});
        this.load.spritesheet('shark','src/image/shark.png',
        {frameWidth: 580 , frameHeight: 284});
        this.load.image('sky','src/image/Skybg.png');
        this.load.image('trident','src/image/trident-shoot.png');
        this.load.spritesheet('bomb', 'src/image/bomb.png',{frameWidth: 404.8, frameHeight: 582});
        this.load.audio('bulletSound', 'src/sound/Trident.mp3');
        this.load.audio('bgsound','src/sound/GameBG.mp3');
        this.load.audio('dead','src/sound/EnermyKill.mp3');
    }

    create() {
        score = 0;
        
        //Create sound;
        gamesound = this.sound.add('bgsound');
        gamesound.loop = true;
        gamesound.play();
        background = this.add.tileSprite(0, 0, 1600, 720, 'bg').setOrigin(0,0);
        tridentsound = this.sound.add('bulletSound');
        enermydie = this.sound.add('dead');

        //Create charactor
        skybox = this.physics.add.image(750, 0, 'sky')
            .setScale(1.5)
            .setVisible()
            .setImmovable();
        p1 = this.physics.add.sprite(100, 360, 'player')
            .setScale(0.25)
            .setSize(400, 229)
            .setOffset(50, 100);
        p1.setCollideWorldBounds(true);
        this.physics.add.collider(p1, skybox);


        //Bomb Animation
        this.anims.create({
            key: 'BombAni',
            frames: this.anims.generateFrameNumbers('bomb', {
                start: 0,
                end: 1
            }),
            framerate: 1,
            repeat: -1
        })
        
        //Player Control
        keyUP = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
        keyDOWN = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
        keyFire = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
       
        //Time event
            // sharkGroup = this.physics.add.group();
        event = this.time.addEvent({
            delay: 800,
            callback: function () {
                shark = this.physics.add.sprite(1280, Phaser.Math.Between(220 , 
                    700), 'shark').setScale(0.35);
                shark.anims.play('sharkAni', true);
                shark.setVelocityX((Math.floor(Math.random() * -600))-300);

                //Speed increse
                    // shark.setVelocityX(sharkSpeed);
                this.physics.add.overlap(bulletGroup, shark, sharkDestroy);
                this.physics.add.overlap(p1, shark, ()=>{
                    gamesound.stop();
                    this.scene.start('GameOver')
                });
                
            },
            callbackScope: this,
            loop: true,
            paused: false
        })
        
        event_bomb = this.time.addEvent({
            delay: Phaser.Math.Between(1000, 3000),
            callback: function () {
                bomb = this.physics.add.sprite(1280, 
                    Phaser.Math.Between(220 , 700), 'bomb')
                    .setScale(0.5)
                    .setSize(160, 160)
                    .setOffset(170, 180);
                bomb.anims.play('BombAni', true);
                bomb.setVelocityX(-200);
                this.physics.add.overlap(p1, bomb, ()=>{
                    gamesound.stop();
                    this.scene.start('GameOver')
                })
            },
            callbackScope: this,
            loop: true,
            paused: false
        })


        //Create Score
        scoreText = this.add.text(1100, 50, 'score: 0', 
        { fontSize: '15px', fill: '#000' }).setDepth(10).setScale(2);

        function sharkDestroy(bulletGroup, shark){
            enermydie.play();
            shark.destroy();
            bulletGroup.destroy();
            score+=10;
        }
        
        //Bullet
        bulletGroup = this.add.group();
        
    }
    
    
    
    update(delta, time) {
        //Score
        scoreText.setText('Score: ' + score);
        
        background.tilePositionX += 1.65;

        //Animation
        p1.anims.play('mermaidAni', true);
        
        //Input from keyboard
        if(keyUP.isDown){
            p1.setVelocityY(-500);
        } 
        else if(keyDOWN.isDown){
            p1.setVelocityY(500);
        }
        else{
            p1.setVelocityY(0);
        }
        if(keyLEFT.isDown){
            p1.setVelocityX(-300);
        }
        else if(keyRIGHT.isDown){
            p1.setVelocityX(300);
        }
        else{
            p1.setVelocityX(0);
        }

        //Fire a bullet
        if(Phaser.Input.Keyboard.JustDown(keyFire)){
            bullet = this.physics.add.sprite(p1.x + 50, p1.y + 10, 'trident')
            .setScale(0.15);
            bullet.body.velocity.x = bulletSpeed;
            bulletGroup.add(bullet);
            tridentsound.play();            
        }
        
        for(let i = 0; i < bulletGroup.getChildren().length; i++){
            if(bulletGroup.getChildren()[i].x > 1280){
                bulletGroup.getChildren()[i].destroy();
            }      
        }
        
        //Speed up when time increse
            // sharkSpeed = Phaser.Math.GetSpeed(-300,1)*delta;
        

    }
}

export default GameScene;
