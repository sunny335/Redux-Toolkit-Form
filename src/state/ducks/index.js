import { combineReducers } from '@reduxjs/toolkit';

import ui from './ui';
import userInfo from './userInfo';
export default combineReducers({
  ...ui,
  ...userInfo,
});
