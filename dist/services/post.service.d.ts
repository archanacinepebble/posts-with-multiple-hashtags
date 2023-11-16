import { Connection } from 'typeorm';
export declare class PostService {
    private readonly connection;
    constructor(connection: Connection);
    getPostsWithHashtags(): Promise<{
        id: number;
        content: string;
        hashtags: string;
    }[]>;
}
