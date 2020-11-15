import 'phaser';
import Phaser from 'phaser';
import GameOver from './scenes/GameOver';
import MainMenu from './scenes/MainMenu';
import GameScene from './scenes/GameScene';

const config = {
    // For more settings see <https://github.com/photonstorm/phaser/blob/master/src/boot/Config.js>
    type: Phaser.WEBGL,
    pixelArt: true,
    roundPixels: true,
    parent: 'content',
    width: 1280,
    height: 720,
    physics: {
        default: 'arcade',
        arcade: {
            debug: false,
            // gravity: {y:300}
        }
    },
    scene: [
        // MainMenu,
        GameScene,
        GameOver,
        
    ],
    
    
};

const game = new Phaser.Game(config);