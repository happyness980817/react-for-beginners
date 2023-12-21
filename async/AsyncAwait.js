// async & await
// clear style of using promise

// 1. async

async function fetchUser() {
        // network request in 10 sec
        return 'ellie';
}

/* 
얘랑 같음
function fetchUser() {
    return new Promise((resolve, reject) => {
        // network request in 10 sec
        resolve('ellie');
    });
} */

const user = fetchUser();
user.then(console.log);
console.log(user);

//2. await

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve,ms));
}

async function getApple() {
    await delay(1000);
    return 'Apple';
}

async function getBanana() {
    await delay(1000);
    return 'Banana';
}

async function pickFruits () {
    const applePromise = getApple(); // 프로미스 생성시 즉시 프로미스 내부 코드 실행
    const bananaPromise = getBanana(); // 프로미스 호출로 병렬적으로 실행
    const apple = await getApple();
    const banana = await getBanana();
    return `${apple} + ${banana}`; // return delay = 1000ms
}

pickFruits().then(console.log);

// 3. useful Promise APIs
function pickAllFruits() {
    return Promise.all([getApple(),getBanana()]).then(fruits =>
        fruits.join(' + ')
    );
}

pickAllFruits().then(console.log);