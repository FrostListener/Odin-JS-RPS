let humanScore = 0.     // 玩家初始分
let computerScore = 0.  //电脑初始分

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
    };
}

// 收集玩家的选项。
function getHumanChoice() {
    let choice = prompt('请从Scissors（剪刀），Rock（石头），Paper（布）里面选择一个');
    return choice
}

// 转化大小写，方便玩家输入。
function capitalizeFirst(str) {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

// 单次回合。
function playRound(humanChoice,computerChoice) {
    humanChoice = capitalizeFirst(humanChoice);
    computerChoice = capitalizeFirst(computerChoice);
    if (humanChoice === computerChoice) {
        console.log('平局！')
    } else if ((humanChoice==='Rock' && computerChoice==='Scissors') || 
            (humanChoice==='Scissors' && computerChoice==='Paper') ||
            (humanChoice==='Paper' && computerChoice==='Rock')) {
                console.log('你赢了！')
                humanScore++;
        }
    else {
            console.log('你输了！');
            computerScore++;
    }
}

// 构建五个回合的整体游戏。
function playGame() {
    let gameRound = 0

    // 一段循环。
    while (gameRound != 5) {
        const humanSelection = getHumanChoice()
        const computerSelection = getComputerChoice()
        console.log(gameRound)
        console.log(humanSelection,computerSelection)
        console.log(playRound(humanSelection,computerSelection))
        gameRound++
    }

    if (humanScore > computerScore) {
        console.log('你赢了！');
    } else if (humanScore < computerScore) {
        console.log('你输了！')
    } else {
        console.log('平手！')
    }
}
playGame()

