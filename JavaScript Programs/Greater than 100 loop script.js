outer: for(let i = 0; i < 100; i++){
    let input = prompt('Enter a number greater than 100?', 0);
    if (!input || input > 100) break outer;
    console.log(`${input}`); // output the entered value to the console
}