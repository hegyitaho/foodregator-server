import {Test, TestingModule} from '@nestjs/testing'
import request from 'supertest'
import Joi from '@hapi/joi'
import {AppModule} from 'src/app.module'
import { FoodType } from 'src/scraping/beresalexandra/utils/conversion'

describe('AppController (e2e)', () => {
  let app

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile()

    app = moduleFixture.createNestApplication()
    await app.init()
  })

  it('beresalexandra returns food data', () => {
    return request(app.getHttpServer())
      .get('/beresalexandra')
      .expect(200)
      .then(({body}) => responseSchema.validateAsync(body))
  })
})


const foodDataSchema = Joi.object({
    carbohydrate: Joi.number().required(),
    date: Joi.date().required(),
    fat: Joi.number().required(),
    kcal: Joi.number().required(),
    name: Joi.string().required(),
    price: Joi.number().required(), 
    protein: Joi.number().required(),
    type: Joi.valid(...Object.values(FoodType))
  })

const responseSchema = Joi.array().items(foodDataSchema)

/*
{'carbohydrate': '21', 'date': new Date(2019, 4, 27), 'fat': '3', 'kcal': '154', 'name': 'Parajfőzelék', 'price': '580', 'protein': '10', 'type': 'FOZELEK'},
*/