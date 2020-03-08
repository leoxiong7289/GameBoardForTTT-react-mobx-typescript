// This is a pure functional component
// import players array
// output gameBoard array

interface inputPlayers {
  name: any;
  score: any;
  rank: any;
}

interface CompetitionConfig {
  name: string,
  mode: string,
  style: string,
}

export default (inputPlayers: inputPlayers[],competition:CompetitionConfig) => {
  //读取players名单，并存为数组
  let players = inputPlayers.map((player: any) => {
    return player.name;
  });
  // console.log(players);
  //设置比赛轮数 round
  let round = 0;
  //设置‘比赛对阵表’变量，outputGames
  var outputGames = [];
  //设置跳数，既每次‘1’往后跳的间隔值
  let distance = 0;
  //方便计算，读取players的总人数
  let count = players.length;
  //方便计算，设置seat变量，表示每轮比赛共有多少个位置
  let seat = 0;
  //总人数不同，distance的数值不同-from 贝格尔编排法
  if (count <= 4) {
    distance = 1;
  } else if (count === 5 || count === 6) {
    distance = 2;
  } else if (count === 7 || count === 8) {
    distance = 3;
  } else if (count === 9 || count === 10) {
    distance = 4;
  }
  //总人数为奇偶不同时，总轮数和每轮比赛的位置均有不同
  //奇数时有轮空，轮空需要占位，偶数时，最后一个player也需要特殊设置seat值
  count % 2 === 0 ? (round = count - 1) : (round = count);
  count % 2 === 0 ? (seat = count) : (seat = count + 1);
  //设置临时变量，记录当前轮次比赛的对阵情况
  let roundGame = [];
  // 生成比赛对阵表
  for (let r = 1; r <= round; r++) {
    //  如果是奇数队，则按照轮数设置0占位，奇数轮0在末位，偶数轮0在首位
    if (count % 2 === 1) {
      if (r % 2 === 1) {
        roundGame[count] = '0';
      } else {
        roundGame[0] = '0';
      }
    }
    //如果队伍数量是偶数,则设置最后一位选手占位，奇数轮在末位，偶数轮在首位
    if (count % 2 === 0) {
      if (r % 2 === 1) {
        roundGame[count - 1] = players[count - 1];
      } else {
        roundGame[0] = players[count - 1];
      }
    }

    //遍历roundGame数组，写入每轮比赛对阵情况
    //奇数情况下：
    if (count % 2 === 1) {
      for (let i = 0; i < seat; i++) {
        //判断是否遇到轮空位(奇数)，遇到则略过
        if (!roundGame[i]) {
          //固定遍历roundGame，按照规则去寻找相应的player，
          roundGame[i] = players[(i - (r - 1) * distance + count * r) % count];
        }
      }
    }
    //偶数情况下：
    if (count % 2 === 0) {
      for (let i = 0; i < seat; i++) {
        //判断是否遇到高位，遇到则略过
        if (roundGame[i] !== players[count - 1]) {
          //遍历roundGame,按规则匹配player，这是由于高位已经固定，则去除plyaers清单中到高位选手
          roundGame[i] = players.slice(0, -1)[Math.abs(i - (r - 1) * distance + (count - 1) * r) % (count - 1)];
        }
      }
    }
    // console.log('第' + r + '轮的对阵情况');
    // for (let j = 0; j < seat / 2; j++) {
    //   console.log('第' + (j + 1) + '场: ' + roundGame[j] + ' VS ' + roundGame[seat - j - 1]);
    // }
    for (let k = 0; k < seat / 2; k++) {
      let tempGame = {
        player1: roundGame[k],
        score1: 0,
        gameID: k + ((r - 1) * seat) / 2,
        score2: 0,
        player2: roundGame[seat - k - 1]
      };
      if (tempGame.player1 !== '0' && tempGame.player2 !== '0') {
        outputGames.push(tempGame);
      }
    }
    roundGame = [];
    // 重置所有gameID，从1开始
    outputGames.map((game, index) => {
      return (game.gameID = index + 1);
    });
    // console.log(outputGames)
  }
  // 按需设置为双循环模式
  if (competition.style === 'double') {
    let double = [];
    for (let game of outputGames) {
      double.push({
        player1: game.player2,
        score1: 0,
        gameID: game.gameID + outputGames.length,
        score2: 0,
        player2: game.player1
      });
    }
    // console.log(double);
    outputGames = outputGames.concat(double);
    // console.log(outputGames);
  }
  return outputGames
};
