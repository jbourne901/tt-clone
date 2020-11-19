import {ISSelectionListProps} from "../shared/types/props";
import {SSelectionList} from "./selection-list";


function SVerticalList<T> (props: ISSelectionListProps<T>) {
    return SSelectionList<T>(props);
};
 
export {SVerticalList};
