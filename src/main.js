const createGame = () => {
  fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name: 'Alot' }),
  });
};
const playerName = document.getElementById('username');
const outcome = document.getElementById('score');
const postData = () => {
  fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/W2osN9zK6F6EOlamB6Gs/scores/', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ user: playerName.value, score: outcome.value }),
  });
};
const getResults = async () => {
  const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/W2osN9zK6F6EOlamB6Gs/scores/';
  const data = await fetch(url);
  const items = await data.json();
  return items.result;
};
export { postData, getResults };
export default createGame;
