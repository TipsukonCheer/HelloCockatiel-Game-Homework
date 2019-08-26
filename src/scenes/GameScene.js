let width
let height
let x
let y
let cursor
let player
let checkpoint
let platforms
class GameScene extends Phaser.Scene {
    constructor(test) {
        super({
            key: 'GameScene'
        });
    }

    preload() {
        this.load.image('bg','src/image/bg.jpg')
        this.load.spritesheet('ch','src/image/character.png',{frameWidth:416,frameHeight:454})
        this.load.image('ground','src/image/ground.png')
        this.load.image('path','src/image/long path.png')
        this.load.spritesheet('check','src/image/checkpoint.png',{frameWidth:164,frameHeight:414})
    }

    create() {

        
        console.log(this)
        width = this.scene.scene.physics.world.bounds.width
        height = this.scene.scene.physics.world.bounds.height
        x = width*0.5
        y = height*0.5
        this.add.image(x,y,'bg')
        
        platforms = this.physics.add.staticGroup()
        platforms.create(x,y,'ground')
        platforms.create(300,300,'path')
        checkpoint = this.physics.add.sprite(400,330,'check').setScale(0.2).setImmovable()
        player =  this.physics.add.sprite(100,475,'ch').setScale(0.3)
        player.setCollideWorldBounds(true)
        checkpoint.setCollideWorldBounds(true)
        //this.physics.add.collider(player,platforms)
        this.physics.add.collider(player,checkpoint)
        cursor = this.input.keyboard.createCursorKeys()

        this.anims.create({
            key:'right',
            frames:this.anims.generateFrameNumbers('ch',{start:0,end:3}),
            frameRate:10,
            repeat:-1

        })

        this.anims.create({
            key:'stop',
            frames:this.anims.generateFrameNumbers('ch',{start:0,end:0}),
            frameRate:10,
            repeat:-1

        })

        this.anims.create({
            key:'check',
            frames:this.anims.generateFrameNumbers('check',{start:0,end:3}),
            frameRate:10,
            repeat:-1
        })



        checkpoint.anims.play('check')

    }

    update() {
        if(cursor.left.isDown){
            player.setVelocityX(-330)
        }else if(cursor.right.isDown){
            player.setVelocityX(330)
            player.anims.play('right',true)
        }else if(cursor.up.isDown&&player.body.touching.down){
            player.setVelocityY(-330)
        }else if(cursor.down.isDown){
            player.setVelocityY(330)
        }else{
            player.setVelocityX(0)
            player.setVelocityY(0)
            player.anims.play('stop')
        }
            
        
    }
}

export default GameScene;
