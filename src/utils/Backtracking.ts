import Sudoku from "../Sudoku";

export default class Backtracking{

    public static backtracking(game: any, rowPosition:number, columnPosition:number, positionValid:any): void {
        game[`${rowPosition}`][columnPosition] = 0;
        if(columnPosition===0 && rowPosition > 1 ){
            rowPosition -= 1;
            columnPosition = 8;
        }else{
            columnPosition-=1;
        }
        while(positionValid[`${rowPosition}`][columnPosition] === 1){
            if(columnPosition===0 && rowPosition > 1 ){
                rowPosition -= 1;
                columnPosition = 8;
            }else{
                columnPosition-=1;
            }
        }
        const data = game[`${rowPosition}`][columnPosition];
        if(columnPosition===0 && rowPosition > 1 && data !== 0){
            game[`${rowPosition}`][columnPosition] = 0;
            return Sudoku.sudoku(game,rowPosition-1,8,positionValid);
        }
        return Sudoku.sudoku(game,rowPosition,columnPosition,positionValid);

    }
}