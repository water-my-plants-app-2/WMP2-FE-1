import React from 'react';

import {
    ADD_PLANT_START,
    ADD_PLANT_FAILURE,
    ADD_PLANT_SUCCESS
} from '../actions/UserAction';

const initialState = {
    plants:[]

};



export const UserReducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_PLANT_SUCCESS: {
        return {
          ...state,
          message: action.payload,
          isUpdating:false

        };
      }

  
    //   case CHECKCHECK:
    //   case CHECKCHECK_ERROR:
      default:
        return state;
    }
  };