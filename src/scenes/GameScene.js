import BG from './Core/bg'
import Player from './Core/Player'
import Object from './Core/Object'
import Score from './core/Score'
 import Monster from './Core/Monster' 
let bg
let player;
let ground_1, ground_2, groundS_1, groundS_2, bg
let object,coin
let score;
let monster
let sth
class GameScene extends Phaser.Scene {
    constructor(config) {
        super({
            key: 'GameScene'
        });
    }

    preload() {
        this.load.spritesheet('player', './src/image/character.png', { frameWidth: 416, frameHeight: 454 })
        this.load.image('Monster','src/image/flyMan_stand.png' , {frameWidth :122 , frameHeight:139}) 
        bg.preload();
        bg = new BG({scene: this});
        object.preload();
        object = new Object({scene: this});
    }
    create() {
        player = new Player({ scene: this});
        player.create();
        bg.create();
       object.create();
        score = new Score({ scene: this})
        score.create();
        monster = new Monster({ scene : this});
        monster.create();
    }

    update() {
        bg.update();
       player.update();
        score.update();
        if(sth){
            monster.hit(player)
        }
    }
}

export default GameScene;
