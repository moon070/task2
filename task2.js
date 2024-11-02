// 1.


const users = [
    {name: 'Temo', age: 25},
    {name: 'Lasha', age: 21},
    {name: 'Ana', age: 28}
];

function findYoungest(usersArray) {
    let youngestAge = usersArray[0].age;
    let youngestName = usersArray[0].name;
    
    for(let i = 1; i < usersArray.length; i++) {
        if(usersArray[i].age < youngestAge) {
            youngestAge = usersArray[i].age;
            youngestName = usersArray[i].name;
        }
    }
    
    return youngestName;
}

console.log("Users:", users);
console.log("Youngest person is:", findYoungest(users));


// 2.


function copyUser(user) {
    let newUser = {};
    for(let key in user) {
        newUser[key] = user[key];
    }
    return newUser;
}

const testUser = {name: 'Temo', age: 25};
const copiedUser = copyUser(testUser);

console.log("Original user:", testUser);
console.log("Copied user:", copiedUser);


// 3.

function diceGame() {
    let playerA = {
        name: 'Player A',
        rolls: 0
    };
    let playerB = {
        name: 'Player B',
        rolls: 0
    };
    
    function rollDice() {
        return Math.floor(Math.random() * 6) + 1;
    }
    
    
    while(true) {
        playerA.rolls++;
        let rollA = rollDice();
        console.log(`Player A roll ${playerA.rolls}: got ${rollA}`);
        if(rollA === 3) break;
    }
    
    
    while(true) {
        playerB.rolls++;
        let rollB = rollDice();
        console.log(`Player B roll ${playerB.rolls}: got ${rollB}`);
        if(rollB === 3) break;
    }
    
    
    if(playerA.rolls < playerB.rolls) {
        return `Player A wins! (${playerA.rolls} rolls vs ${playerB.rolls} rolls)`;
    } else if(playerB.rolls < playerA.rolls) {
        return `Player B wins! (${playerB.rolls} rolls vs ${playerA.rolls} rolls)`;
    } else {
        return `It's a tie! (${playerA.rolls} rolls each)`;
    }
}

console.log(diceGame());