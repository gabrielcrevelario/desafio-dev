import { Store } from '@/domain/entity/Store'

const getAll = async (): Promise<Store[]> => {
  const stores: Store[] = [
    {
      id: 0,
      type: '',
      dateStart: '',
      value: 0,
      cpf: '',
      card: '',
      hour: '',
      storeOwner: '',
      nameStore: ''
    }]
  return stores
}

const getById = async (id: number): Promise<Store> => {

}

const createStores = async (store: Store): Promise<void> => {
    
}

const remove = async (request, reply): Promise<void> => {
    
}

const update =  async (request, reply): Promise<Store> => {
    
} 
export { getAll, getById, createStores, remove, update }
