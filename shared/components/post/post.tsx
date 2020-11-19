import React from "react";
import { SView } from "../../../platform-specific/view";
import { SText } from "../../../platform-specific/text";
import {IPost} from "../../model/post";

interface IPostProps {
    item: IPost;
}

const Post = (props: IPostProps) => {
    return (
        <SView>
            <SText text={props.item.description} />
        </SView>
    );
};

export {Post};
