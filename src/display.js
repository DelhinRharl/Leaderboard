import "./main.js"
import { getResults} from "./main.js";
const leaderBoard = document.querySelector('#container');

const display = async () => {
  leaderBoard.innerHTML ='';
  const data = await getResults();
  const myList = data.map((item) => {
    const listItems = `<li class="content"><p>${item.user}:</p> <p>${item.score}</p></li>`;
    return listItems;
  });
  leaderBoard.innerHTML = myList.join('');
};

export default display;

