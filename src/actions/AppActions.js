import AppDispatcher from '../dispatcher/AppDispatcher';
import AppConstants from '../constants/AppConstants';
import DataAPI from '../utils/DataAPI';

export default {
  recieveData: () => {
    DataAPI
      .getData('https://jsonplaceholder.typicode.com/users')
      .then(data => {
        AppDispatcher.dispatch({
          actionType: AppConstants.RECIEVE_DATA,
          data: data
        });
      })
      .catch(message => {
        AppDispatcher.dispatch({
          actionType: AppConstants.RECIEVE_DATA_ERROR,
          message: message
        });
      });
  }
}
