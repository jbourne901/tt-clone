import React, {useState, useEffect} from "react";
import { SCenter } from "../../../platform-specific/center";
import { SBody } from "../../../platform-specific/body";
import {SVerticalList} from "../../../platform-specific/vertical-list";
import {IPost, createPost} from "../../model/post";
import {Post} from "../post";
import {db, IDocs} from "../../../platform-specific/firebase";

const Home = () => {
    
    const [posts, setPosts] = useState<IPost[]>([]);
    const loadPosts = (docs: IDocs) => {
        const pp: IPost[] = [];
        for(let d of docs) {
            const data = d.data();
            const p = createPost(d.id, data.description, data.videoUri);
            pp.push(p);
        }
        setPosts(pp)
    }
    useEffect( () => {
        const fetchData = () => {
            db.collection("posts")
              .onSnapshot( (snapshot) => loadPosts(snapshot.docs) );
        };
        fetchData();
    }, []);

    return (
        <SBody>
            <SCenter>
                <SVerticalList 
                    list = {posts}
                    keyExtractor = {(item, index) => item.id}
                    showScrollbar = {false}                    
                    renderItem = {(item, index) => <Post post={item} />}
                />
            </SCenter>
        </SBody>
    );
};

export {Home};
