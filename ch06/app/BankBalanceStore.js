import {EventEmitter} from 'fbemitter';
import AppDispatcher from './AppDispatcher';
import bankConstants from './constants';
 
const CHANGE_EVENT = 'change';
let __emitter = new EventEmitter();
 
let BankBalanceStore = {
   addListener: (callback) => {
    return __emitter.addListener(CHANGE_EVENT, callback);
  },
 
};
 
BankBalanceStore.dispatchToken = AppDispatcher.register((action) => {
  switch (action.type) {
  }
 
});
 
export default BankBalanceStore;