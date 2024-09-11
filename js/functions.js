const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
  
  const rollDice = () => {
    const randomNumber = getRandomNumber(1, 6);  
    const diceImage = document.querySelector('#dice img');
    
    diceImage.src = `./img/${randomNumber}.png`;
  };
  
  document.querySelector('#dice').addEventListener('click', rollDice);
  