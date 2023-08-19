import "./css/style.css";
import hello_word from './hello.js'
import world_word from './world.js'

document.querySelector('#root').innerHTML = "About ${hello_word} ${world_word}";