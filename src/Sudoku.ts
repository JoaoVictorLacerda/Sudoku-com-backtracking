import Backtracking from "./utils/Backtracking";
import Verification from "./verification/Verification";
import IsGameOver from "./utils/IsGameOver";
import ShowGame from "./utils/ShowGame";
export default class Sudoku{

    public static sudoku(game: any, rowPosition:number, columnPosition:number, positionValid:any): void{

        while(positionValid[`${rowPosition}`][columnPosition] === 1){
            if(columnPosition === 8){
                rowPosition++;
                columnPosition = 0
            }else{
                columnPosition++;
            }
        }
        let tryCount = game[`${rowPosition}`][columnPosition] + 1;
        if(tryCount > 9){
            return Backtracking.backtracking(game, rowPosition, columnPosition, positionValid);
        }


        while(!Verification.validationRules(tryCount, game,rowPosition,columnPosition)){
            tryCount++;
            if(tryCount > 9) {
                return Backtracking.backtracking(game, rowPosition, columnPosition, positionValid);
            }
        }
        game[`${rowPosition}`][columnPosition] = tryCount;
        if(IsGameOver.isGameOver(game)) {
            console.log("Resolucao Final:");
            ShowGame.showGame(game);
            return;
        }
         if(columnPosition === 8){
            return Sudoku.sudoku(game,rowPosition+1,0, positionValid);
        }

        return Sudoku.sudoku(game,rowPosition,columnPosition+1,positionValid);

    }
}
