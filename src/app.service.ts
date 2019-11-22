import {Injectable} from '@nestjs/common'
import {getCurrentSiteMenu} from 'src/scraping/beresalexandra/converted-menu'
import {FoodData} from './scraping/beresalexandra/utils/FoodData'
@Injectable()
export class AppService {
  async beresAlexandraFoodDataForWeek(): Promise<FoodData[]> {
    return await getCurrentSiteMenu()
  }
}
