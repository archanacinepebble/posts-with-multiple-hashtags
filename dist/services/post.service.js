"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
let PostService = class PostService {
    constructor(connection) {
        this.connection = connection;
    }
    async getPostsWithHashtags() {
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
};
exports.PostService = PostService;
exports.PostService = PostService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeorm_1.Connection])
], PostService);
//# sourceMappingURL=post.service.js.map