import {ISSelectionListProps} from "../shared/types/props";
import {SSelectionList} from "./selection-list";


function SHorizontalList<T> (props: ISSelectionListProps<T>) {
    return SSelectionList<T>({...props, horizontal: true});
};
 
export {SHorizontalList};
