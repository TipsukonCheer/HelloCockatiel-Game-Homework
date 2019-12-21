 import Monster from './Core/Monster' 
let monster
let sth


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
        if(sth){
            monster.hit(player)
        }
    }
}

export default GameScene;
