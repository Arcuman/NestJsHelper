import { Module } from '@nestjs/common';
import EmailSchedulingController from './email-scheduling.controller';
import EmailSchedulingService from './email-scheduling.service';
import { EmailModule } from '../email/email.module';

@Module({
  imports: [EmailModule],
  controllers: [EmailSchedulingController],
  providers: [EmailSchedulingService],
})
export class EmailSchedulingModule {}
