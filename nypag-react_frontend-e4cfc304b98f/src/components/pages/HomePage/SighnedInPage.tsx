import PostGallery from "../../organisms/PostGallery";
import {useEffect, useState} from "react";
import {ImagePostDTO} from "../../../types/models/ImagePost.model";
import PostImageService from "../../../Services/PostImageService";


export default function SighnedInPage() {
    const [posts, setPosts] = useState<ImagePostDTO[]>([]);

    useEffect(() => {
        const fetchPosts = async () => {
            const data = await PostImageService.getAllImagePosts();
            setPosts(data);
        };
        fetchPosts();
    }, []);

    return (
        <PostGallery
        posts={posts}
        />
    )
}