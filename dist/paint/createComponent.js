import * as f from 'f';
import executeComponent from "./executeComponent";
import executeComponentAndActivate from "./executeComponentAndActivate";
import isPristine from "./isPristine";
export default f.cond([isPristine, executeComponentAndActivate], [f.T, executeComponent]);
