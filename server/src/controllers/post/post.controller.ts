import { Controller, Delete, Get, Query } from '@nestjs/common';
import { PostService } from 'src/services/post/post.service';

@Controller('post')
export class PostController {
    constructor(private PostService: PostService){}
 
    
    @Get('/all')
    public async testPost(){
        return await this.PostService.getAllPost();
    }
    @Get('/')
    public async getPostById(@Query('id') id:string){
        return await this.PostService.getPostById(id);
    }
    @Delete('/delete')
    public async deletePost(@Query('id') id:string){
        return await this.PostService.deletePost(id);
    }
}