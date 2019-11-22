import {fozelek} from './converted-menu';
import {loadBeresAlexandraBody} from './utils/test-utils';

describe('', () => {
  let $: CheerioStatic
  beforeAll(() => {
    $ = loadBeresAlexandraBody()
  })
  test('get fozelek food data from site', () => {
    expect(fozelek($)).toEqual([
      {'carbohydrate': '21', 'date': new Date(2019, 4, 27), 'fat': '3', 'kcal': '154', 'name': 'Parajfőzelék', 'price': '580', 'protein': '10', 'type': 'FOZELEK'},
      {'carbohydrate': '22', 'date': new Date(2019, 4, 27), 'fat': '23', 'kcal': '417', 'name': 'Parajfőzelék, sült mozzarella', 'price': '950', 'protein': '31', 'type': 'FOZELEK'},
      {'carbohydrate': '21', 'date': new Date(2019, 4, 28), 'fat': '7', 'kcal': '170', 'name': 'Gyömbéres-tárkonyos tökfőzelék', 'price': '580', 'protein': '5', 'type': 'FOZELEK'},
      {'carbohydrate': '21', 'date': new Date(2019, 4, 28), 'fat': '7', 'kcal': '170', 'name': 'Gyömbéres-tárkonyos tökfőzelék, sült csirkemell', 'price': '1050', 'protein': '5', 'type': 'FOZELEK'},
      {'carbohydrate': '33', 'date': new Date(2019, 4, 29), 'fat': '6', 'kcal': '257', 'name': 'Mentás-kókusztejes zöldborsófőzelék', 'price': '580', 'protein': '16', 'type': 'FOZELEK'},
      {'carbohydrate': '34', 'date': new Date(2019, 4, 29), 'fat': '16', 'kcal': '458', 'name': 'Mentás-kókusztejes zöldborsófőzelék, vasalt csirkecombfilé', 'price': '1050', 'protein': '44', 'type': 'FOZELEK'},
      {'carbohydrate': '45', 'date': new Date(2019, 4, 30), 'fat': '5', 'kcal': '309', 'name': 'Lencsefőzelék', 'price': '580', 'protein': '21', 'type': 'FOZELEK'},
      {'carbohydrate': '45', 'date': new Date(2019, 4, 30), 'fat': '18', 'kcal': '462', 'name': 'Lencsefőzelék, sült virsli', 'price': '950', 'protein': '28', 'type': 'FOZELEK'},
      {'carbohydrate': '19', 'date': new Date(2019, 4, 31), 'fat': '6', 'kcal': '157', 'name': 'Zöldbabfőzelék', 'price': '580', 'protein': '7', 'type': 'FOZELEK'},
      {'carbohydrate': '19', 'date': new Date(2019, 4, 31), 'fat': '9', 'kcal': '311', 'name': 'Zöldbabfőzelék, rozmaringos pulykamell', 'price': '1050', 'protein': '36', 'type': 'FOZELEK'},
    ])
  })

});