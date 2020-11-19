import { suuid } from "../../platform-specific/uuid";

export interface IPost {
    id: string;
    description: string;
};

export const createPost = (description: string) => {
    const p: IPost = {
        description,
        id: suuid()
    };
    return p;
}

export const testPosts: IPost[] = [
    createPost("Test 1"),
    createPost("Test 2"),
    createPost("Test 3"),
];

