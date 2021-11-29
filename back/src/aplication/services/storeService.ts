import { Store } from '@/domain/entities/Store'
import { Repository, Connection } from 'typeorm'
import getConnection from '@/infrastructure/context/db'

class StoreService {
  private repository: Repository<Store>

  constructor () {
    getConnection().then((connection: Connection) => {
      void connection.runMigrations()
      this.repository = connection.getRepository(Store)
    }).catch(err => {
      console.error(err)
    })
  }

  getAll = async (): Promise<Store[]> => {
    const stores: Store[] = await this.repository.find()
    return stores
  }

  createAll = async (stores: Store[]): Promise<Store[]> => {
    try {
      const newStores: Store[] = await this.repository.save(stores)
      return newStores
    } catch (err) {
      console.error(err)
    }
  }
}
export default new StoreService()
