import { MysqlConnectionOptions } from 'typeorm/driver/mysql/MysqlConnectionOptions'

const connectionObj: MysqlConnectionOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '',
  database: 'cnabDB',
  logging: true,
  entities: [
    'src/domain/entities/*.ts'
  ],
  migrations: [
    'src/infrastructure/migrations/*.ts'
  ],
  subscribers: [
    'src/subscriber/**/*.ts'
  ],
  cli: {
    entitiesDir: 'src/domain/entities/',
    migrationsDir: 'src/infrastructure/migrations',
    subscribersDir: 'src/subscriber'
  }
}
export default connectionObj
