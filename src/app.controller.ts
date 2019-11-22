import {Controller, Get} from '@nestjs/common'
import {AppService} from './app.service'
import {FoodData} from './scraping/beresalexandra/utils/FoodData'

@Controller('beresalexandra')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getHello(): Promise<FoodData[]> {
    return await this.appService.beresAlexandraFoodDataForWeek()
  }
}
