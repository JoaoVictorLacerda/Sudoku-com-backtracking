import ColumnVerification from "./ColumnVerification";
import RowVerification from "./RowVerification";
import SubMatrixVerification from "./SubMatrixVerification";

const row = new RowVerification();
const column = new ColumnVerification();
const subMatrix = new SubMatrixVerification();

export default abstract class Verification{

    public static validationRules(tryCount:number, game:number[], rowPosition:number,columnPosition:number): boolean {
        if(!row.verify(tryCount, game, rowPosition)) return false;
        if(!column.verify(tryCount, game, columnPosition)) return false;

        return subMatrix.verify(game,rowPosition, columnPosition, tryCount);

    }


}
