export default class ShowGame{

    public static showGame(game:any):void{
        for (let i = 1; i <= 9; i++) {
            let gameRow = ""
            for (let j = 0; j < 9; j++) {
               gameRow += game[`${i}`][j]+" ";
            }
            console.log(gameRow);
        }
        console.log("\n")
    }

}