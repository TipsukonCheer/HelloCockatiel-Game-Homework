import 'Phaser';

export default class ObjectWipcamp extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, key, type) {
      super(scene, x, y, key);
      this.scene = scene;
      this.scene.add.existing(this);
      this.scene.physics.world.enableBody(this, 0);
    }

      setObjectWorldbound(booleanVariable){
          this.body.setCollideWorldBounds(booleanVariable)
      }

    }
