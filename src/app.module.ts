import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { TimerModule } from './timer/timer.module';

@Module({
  imports: [TimerModule,PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
