const pup = require('puppeteer');

let solver = async ()=>{
    const browser = await pup.launch();
    const pg = await browser.newPage();
    await pg.goto("https://www.nytimes.com/games/wordle/index.html");
    let answer = await pg.evaluate(()=>{
        let game_info = JSON.parse(window.localStorage.getItem('nyt-wordle-state'));
        return game_info.solution;
    })
    console.log(answer);
    process.exit();
}

solver();