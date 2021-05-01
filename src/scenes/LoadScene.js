import { Scene } from 'phaser';
import Sky from '../assets/ice.png';
import Ground from '../assets/ground.png';

export default class LoadScene extends Scene {
  constructor() {
    super('Boot');
  }

  preload() {
    console.log('load preload');
    this.load.image('sky', Sky);
    this.load.image('ground', Ground);
    // this.load.image('logo', Background);
  }

  create() {
    console.log('load create')
    this.scene.start('Port');
  }
}