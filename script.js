// 让电脑随机出石头剪刀布。
function  getComputerChoice() {
    // 随机数分成三份。
    const randomNumber = Math.floor(Math.random() * 3) + 1;

    if (randomNumber == 1) {
        return 'Rock';
    } else if (randomNumber == 2) {
        return 'Paper';
    } else {
        return 'Scissors'
    }
}

console.log(getComputerChoice());