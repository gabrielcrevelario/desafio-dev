import { Store } from '@/domain/entity/Store'

const getAll = async (request, reply): Promise<Store[]> => {
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

const getById = async (request, reply) => {

}

const createStores = async (request, reply) => {
    
}

const remove = async (request, reply) => {
    
}

const update =  async (request, reply) => {
    
} 
export { getAll, getById, createStores, remove, update }
