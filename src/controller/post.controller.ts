import { Controller, Get } from '@nestjs/common';
import {PostService} from 'src/services/post.service';
@Controller('posts')
export class PostController {
    constructor(private readonly postService: PostService) {}

    @Get('with-hashtags')
    async getPostsWithHashtags(): Promise<{ id: number; content: string; hashtags: string }[]> {
        var result = this.postService.getPostsWithHashtags();
        console.log(result);
        return await this.postService.getPostsWithHashtags();
    }
}
