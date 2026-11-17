// 让电脑随机出石头剪刀布。
function  getComputerChoice() {
    // 随机数分成三份。
    const randomNumber = Math.floor(Math.random() * 3) + 1;

    if (randomNumber === 1) {
        return 'Rock';
    } else if (randomNumber === 2) {
        return 'Paper';
    } else {
        return 'Scissors'
    }
}

// 收集玩家的选项。
function getHumanChoice() {
    let humanChoice = prompt('请从Scissors（剪刀），Rock（石头），Paper（布）里面选择一个')
    return humanChoice
}
let humanChoice = getHumanChoice()
