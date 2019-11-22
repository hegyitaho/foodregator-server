import {Test, TestingModule} from '@nestjs/testing'
import request from 'supertest'
import {AppModule} from './../src/app.module'

describe('AppController (e2e)', () => {
  let app

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile()

    app = moduleFixture.createNestApplication()
    await app.init()
  })

  it.skip('beresalexandra returns food data', () => {
    return request(app.getHttpServer())
      .get('/beresalexandra')
      .expect(200)
      .then(({body}) => expect(body).toEqual([]))
  })
})
