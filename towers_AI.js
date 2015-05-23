// 1. get numbers of discs
// 2. if number of discs == 1, move disc to target
// 3. if number of discs > 1, move all but the bottom disc to non-target tower,
//    move bottom disc to target tower, move everything on non-target tower to
//    target tower.
function towerSolver(sourceTower, workingTower, targetTower) {
  var moves = [];
  if (sourceTower.length === 1) {
    targetTower.push(sourceTower.pop());
    return [[1, 3]];
  } else {
    console.log('passing forward', sourceTower.slice(1), targetTower, workingTower);
    var movesToWorking = workingFlipper(towerSolver(sourceTower.slice(1), targetTower, workingTower));
    moves = moves.concat(movesToWorking);
    sourceTower = [sourceTower[0]];

    var moveBottomToTarget = towerSolver(sourceTower, workingTower, targetTower);
    moves = moves.concat(moveBottomToTarget);

    var moveWorkingToTarget = finalFlipper(towerSolver(workingTower, sourceTower, targetTower));
    moves = moves.concat(moveWorkingToTarget);

    return moves;
  }
}

function workingFlipper(arr) {
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr[0].length; j++) {
      if (arr[i][j] === 2) {
        arr[i][j] = 3;
      } else if (arr[i][j] === 3) {
        arr[i][j] = 2;
      }
    }
  }

  return arr;
}

function finalFlipper(arr) {
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr[0].length; j++) {
      if (arr[i][j] === 1) {
        arr[i][j] = 2;
      } else if (arr[i][j] === 2) {
        arr[i][j] = 1;
      }
    }
  }

  return arr;
}

console.log(towerSolver([3, 2, 1], [], []));
