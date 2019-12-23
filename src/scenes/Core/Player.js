
import 'Phaser';
import ObjectWipcamp from './ObjectWipCamp';

export default class Player extends ObjectWipcamp{
    constructor(scene, x, y, key) {
      super(scene, x, y, key);
    this.key = key;
      this.scene = scene;
      this.scene.add.existing(this);
      this.scene.physics.world.enableBody(this, 0);

      this.setData("speed", 200);
      

    }

      moveUp() {
        this.body.velocity.y = -this.getData("speed");
      }
      moveDown() {
        this.body.velocity.y = this.getData("speed");
      }
      moveLeft() {
        this.body.velocity.x = -this.getData("speed");
      }
      moveRight() {
        this.body.velocity.x = this.getData("speed");
      }

    
    
    createAnimationPlayer(){
        this.scene.anims.create({
            key: 'playerAni',
            frames: this.scene.anims.generateFrameNumbers(this.key,{
                start: 0,
                end: 3
            }),
            frameRate: 400,
            repeat: -1
          });
    }

    setSize(size){
        this.setScale(size)
    }

    createTimeEventPlayer(){
        this.scene.time.addEvent({
            delay : 1000,
            callback : function (){
            console.log('testPlayerEvent');
            },
            callbackScope :this,
            loop : true,
            pause : false,
            timeScale:1,
        })
    }

    }


