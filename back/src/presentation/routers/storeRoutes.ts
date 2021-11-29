import storeController from '@/presentation/controllers/storeController'
const routes = [{
  method: 'GET',
  url: '/',
  handler: storeController.getAll
},
{
  method: 'POST',
  url: '/',
  handler: storeController.create
}
]
export default routes
