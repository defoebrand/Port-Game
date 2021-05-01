import { Scene } from 'phaser';

export default class LoadScene extends Scene {
  constructor() {
    super('Boot');
  }

  preload() {
    console.log('load preload')
    // this.load.image('logo', Background);
  }

  create() {
    console.log('load create')
    // this.scene.start('Preloader');
  }
}