import './style.scss';
import Phaser from 'phaser';
import rules from './universe/rules';
import LoadScene from './scenes/LoadScene';

const body = document.querySelector('body')

const form = document.createElement('form')

const nameInput = document.createElement('input')
nameInput.type = 'text'
nameInput.placeholder = 'Enter Text Please...'
form.appendChild(nameInput)

const submitBtn = document.createElement('input')
submitBtn.type = 'submit'
submitBtn.value = "Enter Text"
submitBtn.onclick = (e) => {
  e.preventDefault()
  alert(nameInput.value)
}
form.appendChild(submitBtn)

body.appendChild(form)

class Game extends Phaser.Game {
  constructor() {
    super();

    this.scene.add('Boot', LoadScene);

    this.scene.start('Boot');
  }
}

window.game = new Game();
