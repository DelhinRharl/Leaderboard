const myArray = [
  {
    Name: 'Xander',
    Score: 97,
  },
  {
    Name: 'Xavier',
    Score: 97,
  },
  {
    Name: 'Leila',
    Score: 98,
  },
  {
    Name: 'Lexa',
    Score: 99,
  },
  {
    Name: 'Delhin',
    Score: 99,
  },
];
const fetch = () => myArray;
const leaderBoard = document.querySelector('#container');

const display = () => {
  const data = fetch();
  const myList = data.map((item) => {
    const listItems = `<li class="content"><p>${item.Name}:</p> <p>${item.Score}</p></li>`;
    return listItems;
  });
  leaderBoard.innerHTML = myList.join('');
};

export default display;
