import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CqrsModule } from '@nestjs/cqrs';
import CommentsController from './comments.controller';
import { CreateCommentHandler } from './commands/handlers/createComment.handler';
import { GetCommentsHandler } from './queries/handlers/getComments.handler';
import Comment from './comment.entity';
@Module({
  imports: [TypeOrmModule.forFeature([Comment]), CqrsModule],
  controllers: [CommentsController],
  providers: [CreateCommentHandler, GetCommentsHandler],
})
export class CommentsModule {}
