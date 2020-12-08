import React, {useState} from "react";
import { SCenter } from "../../../platform-specific/center";
import { SText } from "../../../platform-specific/text";
import { SVideo } from "../../../platform-specific/video";
import {IPost} from "../../model/post";

interface IPostProps {
    post: IPost;
}

const Post = (props: IPostProps) => {
    const [post, setPost] = useState<IPost>(props.post);
    const [isPlaying, setPlaying] = useState<boolean>(false);
    return (
        <SCenter
            onPress = { () => setPlaying(!isPlaying) }
        >
            <SVideo 
                source={props.post.videoUri}
            />
            <SText text={props.post.description} />
        </SCenter>
    );
};

export {Post};
