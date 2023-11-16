import { PostService } from 'src/services/post.service';
export declare class PostController {
    private readonly postService;
    constructor(postService: PostService);
    getPostsWithHashtags(): Promise<{
        id: number;
        content: string;
        hashtags: string;
    }[]>;
}
