const greetings = ['Hello', 'Greetings', 'Great', 'Firework', 'I wish you good health', 'Chao', 'Hello', 'Shalom '];
const wish = ['good', 'have a nice', 'great', 'wonderful',];
const time = ['evenings', 'day', 'week', 'month', 'morning', 'year'];

const newArr = () => {
    let newOneArr = greetings[Math.floor(Math.random()*7)];
    let newTwoArr = wish[Math.floor(Math.random()*3)]
    let NewThreeArr = time[Math.floor(Math.random()*5)]
    return `${newOneArr}, ${newTwoArr} ${NewThreeArr}!`
   };
   
   console.log(newArr());