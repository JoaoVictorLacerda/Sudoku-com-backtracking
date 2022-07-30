import Verification from "./Verification";

export default class RowVerification{
    public verify(enteredValue:number,game: any, rowPosition:number): boolean {
        const row = game[`${rowPosition}`];
        for (let i = 0; i < 9; i++) {
            if(row[i] === enteredValue){
                return false;
            }
        }
        return true
    }

}