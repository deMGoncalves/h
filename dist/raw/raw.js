import * as f from 'f';
import fragment from "../fragment/index";
import parser from "./parser";
export default (attributes, textChildren) => fragment(attributes, f.platten(parser(textChildren)));
