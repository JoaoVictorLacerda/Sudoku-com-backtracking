import Sudoku from "./Sudoku";
import ShowGame from "./utils/ShowGame";

class Main {
    constructor() {
        this.startGame();
    }
    public startGame(): void{
        const { game, positionValid } = this.initArrays();
        Sudoku.sudoku(game, 1,0,positionValid);
    }




    private initArrays(): any{
        const game = {
            "1":[4,0,0,  3,0,8,  0,0,6],
            "2":[2,3,0,  0,6,0,  4,0,0],
            "3":[0,0,9,  4,0,0,  7,0,0],

            "4":[8,9,0,  7,0,0,  0,0,0],
            "5":[5,0,0,  0,0,0,  9,1,0],
            "6":[0,6,0,  0,0,0,  0,0,7],

            "7":[0,0,8,  0,1,0,  0,4,0],
            "8":[0,4,1,  0,0,0,  0,0,0],
            "9":[0,0,0,  8,0,0,  0,7,0]
        }

        const positionValid = {
            "1":[1,0,0,  1,0,1,  0,0,1],
            "2":[1,1,0,  0,1,0,  1,0,0],
            "3":[0,0,1,  1,0,0,  1,0,0],

            "4":[1,1,0,  1,0,0,  0,0,0],
            "5":[1,0,0,  0,0,0,  1,1,0],
            "6":[0,1,0,  0,0,0,  0,0,1],

            "7":[0,0,1,  0,1,0,  0,1,0],
            "8":[0,1,1,  0,0,0,  0,0,0],
            "9":[0,0,0,  1,0,0,  0,1,0]

        }
        return {
            game,
            positionValid
        }
    }

}

new Main();