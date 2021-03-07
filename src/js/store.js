
import { createStore } from 'framework7';

const store = createStore({
  state: {
    coins: null,
    current_coin: { name: 'BTC', type: 0, is_in_discovey: false },
    device: null,
    device_features: null,
    wallets: {},
  },
  getters: {
  },
  actions: {
  },
})
export default store;
