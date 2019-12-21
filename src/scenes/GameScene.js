 import Monster from './Core/Monster' 
let monster

class GameScene extends Phaser.Scene {
    constructor(test) {
        super({
            key: 'GameScene'
        });
    }

    preload() {
        this.load.image('Monster','src/image/flyMan_stand.png' , {frameWidth :122 , frameHeight:139}) 

    }

    create() {
        monster = new Monster({ scene : this});
        monster.create();
    }

    update() {
   
    }
}

export default GameScene;
