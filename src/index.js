import display from './display.js';
import './styles.css';
import './main.js'
import { postData } from './main.js';

const formInput = document.getElementById('my-form')
const refresh = document.getElementById('refresh')



document.addEventListener('DOMContentLoaded', () => {
   refresh.addEventListener('click', async () => {
    display();
  });

  formInput.addEventListener('submit', async (e) => {
    e.preventDefault();
    const playerName = document.getElementById("username").value
    const outcome = document.getElementById("score").value
    postData();
    playerName =="";
    outcome == "";
  });
  display();
});