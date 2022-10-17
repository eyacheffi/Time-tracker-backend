import { Controller, Post ,Get,Body} from '@nestjs/common';
import { TimerService } from './timer.service';
import { CreateTimerDto } from './dto';
@Controller('timer')
export class TimerController {
    constructor(private timerService: TimerService ){}
    @Post('')
    async createTimer(@Body() time: CreateTimerDto ){
        return  await this.timerService.createTimer(time)
    }
    @Get('')
    async  getTimer(){
        return await this.timerService.getTimer()

    }

}