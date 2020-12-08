import {ISListProps} from "../shared/types/props";
import {SScrollList} from "./scroll-list";

function SVerticalList<T> (props: ISListProps<T>) {
    const props1 = {...props};
    return SScrollList(props1)
};
 
export {SVerticalList};
