// const getRow = (puzzle, row) => puzzle[row];
// const getColumn = (puzzle, col) => puzzle.map(row => row[col]);
// const getSection = (puzzle, x, y) => puzzle.slice(y*3, (y+1)*3).map(row => row.slice(x*3, (x+1)*3)).flat();
// const includes1to9 = (arr) => Array(9).fill().every((_, i) => arr.includes(i+1));
// const sudokuIsValid = (puzzle) => Array(9).fill().map((_, i) => [...getRow(puzzle, i), ...getColumn(puzzle, i)]).concat(...Array(3).fill().map((_, x, arr) => arr.map((_, y) => getSection(puzzle, x, y)))).every(check => includes1to9(check));
// const isSame = (puzzle1, puzzle2) => puzzle1.flat().every((x, i) => puzzle2.flat()[i] === x);

function getRow(puzzle, row) { return puzzle[row]; };
function getColumn(puzzle, col) {
    let column = [];
    for (let i = 0; i < puzzle.length; i++) {
        let row = puzzle[i];
        column.push(row[col]);
    }
    return column;
}
// if x is 0: start at col #0, end before col #3
// if x is 1: start at col #3, end before col #6
// if x is 2: start at col #6, end before col #9
// start = x * 3, end(exclusive) = x * 3 + 3

// if y is 0: start at row #0, end before row #3
// if y is 1: start at row #3, end before row #6
// if y is 2: start at row #6, end before row #9
// start = y * 3, end(exclusive) = y * 3 + 3
function getSection(puzzle, x, y) {
    let section = [];
    for (let row = y * 3; row < y * 3 + 3; row++)
        // for (let col = x * 3; col < x * 3 + 3; col++) {
        //   section.push(puzzle[row][col]);
        // }
        section.push(...puzzle[row].slice(x * 3, x * 3 + 3))
    return section;
}

function includes1to9(arr) {
    for (let num = 1; num <= 9; num++)
        if (arr.indexOf(num) === -1) return false;
    return true;
}

// function sudokuIsValid(puzzle) {
//   for (let i = 0; i < 9; i++)
//     if (!includes1to9(getRow(puzzle, i)) || !includes1to9(getColumn(puzzle, i))) return false;
//   for (let y = 0; y < 3; y++)
//     for (let x = 0; x < 3; x++)
//       if (!includes1to9(getSection(puzzle, x, y))) return false;
//   return true;
// }

function sudokuIsValid(puzzle) {
    for (let i = 0; i < 9; i++)
        if (!includes1to9(getRow(puzzle, i)) || !includes1to9(getColumn(puzzle, i)) || !includes1to9(getSection(puzzle, i % 3, Math.floor(i / 3)))) return false;
    return true;
}

// function isSame(puzzle1, puzzle2) {
//   for (let row = 0; row < 9; row++)
//     for (let col = 0; col < 9; col++)
//       if (puzzle1[row][col] !== puzzle2[row][col]) return false;
//   return true;
// }

function isSame(puzzle1, puzzle2) {
    for (let i = 0; i < 81; i++)
        if (puzzle1[Math.floor(i / 9)][i % 9] !== puzzle2[Math.floor(i /9)][i % 9]) return false;
    return true;
}


let puzzle = [[4,1,5,3,7,8,2,9,6],
                [2,3,7,1,6,9,4,5,8],
                [6,8,9,4,2,5,7,3,1],
                [8,9,2,7,3,1,5,6,4],
                [5,7,3,6,8,4,9,1,2],
                [1,6,4,5,9,2,3,8,7],
                [3,5,8,2,1,7,6,4,9],
                [7,4,1,9,5,6,8,2,3],
                [9,2,6,8,4,3,1,7,5]];

    let p8zzle = [[ 8,9,5,7,4,2,1,3,6 ],
        [ 8,7,1,9,6,3,4,8,5 ],
        [ 4,6,3,5,8,1,7,9,2 ],
        [ 9,3,4,6,1,7,2,5,8 ],
        [ 5,1,7,2,3,8,9,6,4 ],
        [ 6,8,2,4,5,9,3,7,1 ],
        [ 1,5,9,8,7,4,6,2,3 ],
        [ 7,4,6,3,2,5,8,1,9 ],
        [ 3,2,8,1,9,6,5,4,7 ]];

console.log(sudokuIsValid(puzzle))