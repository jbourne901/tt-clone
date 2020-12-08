import {ISListProps} from "../shared/types/props";
import {SScrollList} from "./scroll-list";

function SHorizontalList<T> (props: ISListProps<T>) {
    const props1 = {...props, horizontal: true};
    return SScrollList(props1)
};
 
export {SHorizontalList};
