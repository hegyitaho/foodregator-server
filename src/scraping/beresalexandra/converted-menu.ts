import * as R from 'ramda'
import cheerio from 'cheerio'
import fetch from 'node-fetch'

import {FoodType, startOfWeek, getTextForFoodTypeForWeek, convertToFoodData} from './utils/conversion'
import {FoodData} from './utils/FoodData'
import {fozelekSelectorsForTheWeek} from './food-types/fozelek'
import {mainCourseSelectorsForTheWeek} from './food-types/main-course'


export function loadSite(body: string | Buffer): CheerioStatic {
  return cheerio.load(body)
}

export async function getCurrentSiteMenu(content = rawSiteContent) {
  return content()
    .then(loadSite)
    .then(menu)
}

export async function menu($: CheerioStatic) {
  return [...fozelek($), ...mainCourse($)].filter(Boolean)
}

export function processRawTextOfFoodTypeForTheWeek($, selectors: string[][], type: FoodType): FoodData[] {
  const addDaysToStartOfTheWeek = R.curry(addDaysToDate)(startOfWeek($))
  return getTextForFoodTypeForWeek($, selectors)
    .map((dailyFoods, dayOfTheWeek) => 
      dailyFoods.map(dailyFood => 
        convertToFoodData(dailyFood, type, addDaysToStartOfTheWeek(dayOfTheWeek))))
    .flat(Infinity)
}

export function fozelek($: CheerioStatic): FoodData[] {
  return processRawTextOfFoodTypeForTheWeek($, fozelekSelectorsForTheWeek(), FoodType.Fozelek)
}

export function mainCourse($: CheerioStatic): FoodData[] {
  return processRawTextOfFoodTypeForTheWeek($, mainCourseSelectorsForTheWeek(), FoodType.MainCourse)
}

function rawSiteContent() {
  return fetch('https://www.beresalexandra.hu/aktualis_etlap/nyomtatas')
    .then(res => res.text())
}

function addDaysToDate(date: Date, days: number): Date {
  const nextDate = new Date(date.valueOf())
  nextDate.setDate(date.getDate() + days)
  return nextDate
}
