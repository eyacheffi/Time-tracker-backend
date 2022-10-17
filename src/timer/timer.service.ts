import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateTimerDto } from './dto';




@Injectable()
export class TimerService {
    constructor(private  prisma:PrismaService){}
    async getTimer(){
        
        return await this.prisma.timer.findMany();
    };
    async createTimer( time: CreateTimerDto){
        return await this.prisma.timer.create({
        data :time 
        });
    }
}
