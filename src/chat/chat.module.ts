import { Module } from '@nestjs/common';
import { ChatGateway } from './chat.gateway';
import { AuthenticationModule } from '../authentication/authentication.module';
import { ChatService } from './chat.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import Message from './message.entity';
import { UsersModule } from '../users/users.module';

@Module({
  imports: [
    AuthenticationModule,
    UsersModule,
    TypeOrmModule.forFeature([Message]),
  ],
  controllers: [],
  providers: [ChatGateway, ChatService],
})
export class ChatModule {}
