import { Connection, createConnection } from 'typeorm'
import { createDatabase } from 'typeorm-extension'
import ormConfig from '@/presentation/config/ormConfig'
const getConnection = async (): Promise<Connection> => {
  await createDatabase({ ifNotExist: true })
  const connection = await createConnection(ormConfig)
  return connection
}

export default getConnection
