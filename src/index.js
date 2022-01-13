/* eslint-disable no-unused-expressions */
import display from './display.js';
import './styles.css';
import { postData } from './main.js';

const formInput = document.getElementById('my-form');
const refresh = document.getElementById('refresh');

document.addEventListener('DOMContentLoaded', () => {
  refresh.addEventListener('click', async () => {
    display();
  });

  formInput.addEventListener('submit', async (e) => {
    e.preventDefault();
    const playerName = document.getElementById('username');
    const outcome = document.getElementById('score');
    postData();
    playerName.value = '';
    outcome.value = '';
  });
  display();
});