import React from 'react';

import {
    CHECKCHECK_ERROR,
    CHECKCHECK,
    CHECKCHECK_SUCCESSFUL
} from '../actions/UserAction';

const initialState = {
    message:''
};



export const UserReducer = (state = initialState, action) => {
    switch (action.type) {
      case CHECKCHECK_SUCCESSFUL: {
        return {
          ...state,
          message: action.payload
        };
      }
  
    //   case CHECKCHECK:
    //   case CHECKCHECK_ERROR:
      default:
        return state;
    }
  };