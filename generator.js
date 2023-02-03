const greetings = ['Hello', 'Greetings', 'Great', 'Firework', 'I wish you good health', 'Chao', 'Hello', 'Shalom '];
const wish = ['good', 'have a nice', 'great', 'wonderful',];
const time = ['evenings', 'day', 'week', 'month', 'morning', 'year'];

let oneArr;
    oneArr = greetings[Math.floor(Math.random()*7)];

let twoArr;
    twoArr = wish[Math.floor(Math.random()*3)]

let threeArr;
    threeArr = time[Math.floor(Math.random()*5)]

    const genArr = () => {
        return `${oneArr}, ${twoArr} ${threeArr}!`
    };
    console.log(genArr()) 
    

