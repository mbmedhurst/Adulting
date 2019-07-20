import axios from 'axios'

const Chores = {
  getAllChildren: _ => axios.get('/children'),
  getOneChild: id => axios.get(`/children/${id}`),
  addManyChildren: children => axios.post('/children', children),
  getAllChores: _ => axios.get('/chores'),
  getOneChore: id => axios.get(`/chores/${id}`),
  addChore: chore => axios.post('/chores', chore),
  updateChore: (id, chore) => axios.put(`/chores/${id}`, chore),
  deleteChore: id => axios.delete(`/chores/${id}`),
  addUser: user => axios.post('/register', user),
  loginUser: user => axios.post('/login', user)
}

export default Chores