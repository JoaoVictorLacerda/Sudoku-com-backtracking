export default class IsGameOver{

    public static isGameOver(game:any):boolean {
        for(let i = 1 ; i <= 9; i++){
            if(game[`${i}`].indexOf(0) !== -1){
                return false;
            }
        }
        return true;
    }

}