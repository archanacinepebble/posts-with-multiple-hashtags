import { Injectable } from '@nestjs/common';
import { Connection, QueryRunner } from 'typeorm';
@Injectable()
export class PostService {
    constructor(private readonly connection: Connection) {}
    async getPostsWithHashtags(): Promise<{ id: number; content: string; hashtags: string }[]> {
        const queryRunner = this.connection.createQueryRunner();
        const rawData = await queryRunner.query(`
            SELECT posts.id, posts.content, GROUP_CONCAT(hashtags.name SEPARATOR ', ') AS hashtags
            FROM posts
            INNER JOIN posts_hashtags ON posts.id = posts_hashtags.post_id
            INNER JOIN hashtags ON posts_hashtags.hashtag_id = hashtags.id
            GROUP BY posts.id, posts.content;
        `);
    
        await queryRunner.release();
    
        return rawData.map(row => ({
            id: row.id,
            content: row.content,
            hashtags: row.hashtags,
        }));
    }
   
}
