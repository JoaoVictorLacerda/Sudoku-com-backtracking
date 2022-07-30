export default class ColumnVerification {

    public verify(enteredValue:number, game:any, columnPosition:number): boolean {

        for (let i = 1; i <= 9; i++) {
            const number = game[`${i}`][columnPosition];
            if(number === enteredValue){
                return false;
            }
        }
        return true;
    }

}