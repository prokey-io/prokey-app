
import { createStore } from 'framework7';

const store = createStore({
  state: {
    device: null,
    device_features: null,
    wallets: {},
    current_coin: { name: 'BTC', type: 0 },
  },
  getters: {
  },
  actions: {
  },
})
export default store;
