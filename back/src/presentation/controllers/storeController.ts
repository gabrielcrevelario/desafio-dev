import { Store } from '@/domain/entities/Store'
import storeService from '@/aplication/services/storeService'

class StoreController {
  getAll = async (): Promise<Store[]> => {
    console.log('caiu')
    return storeService.getAll()
  }

  create = async (request: { body: Store[] }, reply): Promise<Store[]> => {
    console.log(JSON.stringify(request.body))
    return storeService.createAll(request.body)
  }
}

export default new StoreController()
