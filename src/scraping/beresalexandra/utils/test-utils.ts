import fs from 'fs'
import {loadSite} from 'src/scraping/beresalexandra/converted-menu'

export function loadBeresAlexandraBody(): CheerioStatic {
  const body = fs.readFileSync('test-resources/beresalexandra-aktualis-etlap.html')
  return loadSite(body)
}