import Player from './Core/Player'
import Monster from './Core/Monster' 
let player;
let monster;
let playerAni;
class GameScene extends Phaser.Scene {
    constructor(config) {
        super({
            key: 'GameScene'
        });
    }

    preload() {
        this.load.spritesheet('player', './src/image/character.png', { frameWidth: 416, frameHeight: 454 })
        this.load.image('Monster','src/image/flyMan_stand.png' , {frameWidth :122 , frameHeight:139}) 
        
    }
    create() {
        

        player = new Player(this,
            200,
            300,
            "player"
            
          );
          player.setWorldBounds();
          player.setGravity();

          console.log(player);
          this.keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
          this.keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
          this.keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
          this.keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
           player.createAnimationPlayer();
           player.setSize(0.1)
           player.createTimeEventPlayer()
    }

    update() {
        player.play("playerAni",true);
        if (this.keyW.isDown) {
            player.moveUp();
          }
          else if (this.keyS.isDown) {
            player.moveDown();
          }
          else if (this.keyA.isDown) {
            player.moveLeft();
          }
          else if (this.keyD.isDown) {
            player.moveRight();
          }else{
            player.body.velocity.x = 0;
            player.body.velocity.y = 0;
          }
    }
}

export default GameScene;
