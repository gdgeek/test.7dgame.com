import { Ability } from '@casl/ability'
const getters = {
  sidebar: state => state.app.sidebar,
  device: state => state.app.device,
  userData: state => state.user.data,
  evenOrOdd: state => (state.count % 2 === 0 ? 'even' : 'odd'),
  menu: state => {
    return state.menu.data
  },
  ability() {
    return new Ability()
  }
}
export default getters
