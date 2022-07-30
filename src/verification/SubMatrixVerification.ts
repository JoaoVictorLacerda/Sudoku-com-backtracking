import Verification from "./Verification";

export default class SubMatrixVerification{

    private game:any;
    private columnPosition:number;
    private rowPosition:number;
    private subMatrix:any=undefined;

    public verify(game: any,rowPosition:number,columnPosition:number, enteredValue:number): boolean {
        this.game = game;
        this.columnPosition=columnPosition;
        this.rowPosition = rowPosition;

        this.getSubMatrix();
        return this.validation(enteredValue);
    }

    private validation(enteredValue:number){
        const resultOne = this.subMatrix["one"].indexOf(enteredValue) === -1;
        const resultTwo = this.subMatrix["two"].indexOf(enteredValue) === -1;
        const resultThree = this.subMatrix["three"].indexOf(enteredValue) === -1;

        return resultOne && resultTwo && resultThree;
    }

    private getSubMatrix(){
        this.coringa(1,2,3,0,1,2);
        this.coringa(1,2,3,3,4,5);
        this.coringa(1,2,3,6,7,8);
        this.coringa(4,5,6,0,1,2);
        this.coringa(4,5,6,3,4,5);
        this.coringa(4,5,6,6,7,8);
        this.coringa(7,8,9,0,1,2);
        this.coringa(7,8,9,3,4,5);
        this.coringa(7,8,9,6,7,8);

    }

    private coringa(r1:number, r2:number, r3:number, c1:number,c2:number,c3:number): void{
        const conditionRow = this.rowPosition === r1 || this.rowPosition === r2 || this.rowPosition === r3;
        const conditionColumn = this.columnPosition === c1 || this.columnPosition === c2 || this.columnPosition === c3

        if(conditionColumn && conditionRow){
            this.subMatrix = {
                "one":[this.game[`${r1}`][c1],this.game[`${r1}`][c2],this.game[`${r1}`][c3]],
                "two":[this.game[`${r2}`][c1],this.game[`${r2}`][c2],this.game[`${r2}`][c3]],
                "three":[this.game[`${r3}`][c1],this.game[`${r3}`][c2],this.game[`${r3}`][c3]]
            };
        }
    }



}