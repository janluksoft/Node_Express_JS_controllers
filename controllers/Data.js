//controllers/PagesController

let aCounter = 0;
let aCountAb = 0;
let aCountLog = 0;
aCountLog= 0;

exports.getTable = () => {
    const tnames =  [
        {name: 'Emma',sex: 'woman', age: 25},
        {name: 'Amelia',sex: 'woman', age: 26},
        {name: 'Isabella',sex: 'woman', age: 19},
        {name: 'Helena',sex: 'woman', age: 24},
        {name: 'Elizabeth',sex: 'woman', age: 19},
        {name: 'Aleksandra',sex: 'woman', age: 20},
        {name: 'Peter',sex: 'man', age: 25},
        {name: 'Mark',sex: 'man', age: 28},
        {name: 'Dawid',sex: 'man', age: 31},
        {name: 'Gregory',sex: 'man', age: 33},
        {name: 'Tom',sex: 'man', age: 34},
        {name: 'Adam',sex: 'man', age: 27}
        ];
    return(tnames);
}

exports.addAndGetCountLog = (xnAdd) => {
    aCountLog += xnAdd;
    return(aCountLog);
};

//import { getTable } from './Data.js'