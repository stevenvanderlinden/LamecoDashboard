import AppDispatcher from '../dispatcher/AppDispatcher';
import AppConstants from '../constants/AppConstants';
import {EventEmitter} from 'events';

const CHANGE_EVENT = 'change';

let _data = [];

function setData(data) {
  _data = data;
}

class AppStoreClass extends EventEmitter {
  emitChange() {
    this.emit(CHANGE_EVENT);
  }

  addChangeListener(callback){
    this.on(CHANGE_EVENT, callback);
  }

  removeChangeListener(callback){
    this.removeListener(CHANGE_EVENT, callback);
  }

  getData(){
    return _data;
  }
}

const AppStore = new AppStoreClass();

AppStore.dispatcherToken = AppDispatcher.register(action => {
  switch(action.actionType){
    case AppConstants.RECIEVE_DATA:
      setData(action.data);
      AppStore.emitChange();
      break

  default:
  }
});

export default AppStore;
