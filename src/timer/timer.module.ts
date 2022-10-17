import { Module } from '@nestjs/common';
import { TimerService } from './timer.service';
import { TimerController } from './timer.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
    imports:[PrismaModule],
    providers: [TimerService],
    controllers: [TimerController]
  })
  export class TimerModule {}
  