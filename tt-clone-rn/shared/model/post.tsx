import { suuid } from "../../platform-specific/uuid";

export interface IPost {
    id: string;
    description: string;
    likes?: number;
    videoUri: string;
};

export const createPost = (id: string|undefined, description: string, videoUri: string) => {
    const p: IPost = {
        description,
        videoUri,
        likes: 0,
        id: id || suuid(),
    };
    return p;
}

