/*
  Be sure to import in all of the action types from `../actions`
*/

/*
 Your initial/default state for this project could *Although does not have to* look a lot like this
 {
   smurfs: [],
   fetchingSmurfs: false
   addingSmurf: false
   updatingSmurf: false
   deletingSmurf: false
   error: null
 }
*/

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/
import {SMURF_START,SMURF_SUCCESS,SMURF_FAIL,ADD_SMURF,ADD_SMURF_FAIL} from '../actions/index'

const initialState={
  fetching:false,
  smurfs:[],
  error:null
  
}

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {

    case SMURF_START:
    return{
      ...state,
      fetching:true,
     error:null
      }
    case SMURF_SUCCESS:
    return{
      ...state,
      
      
      smurfs:[...state.smurfs,...action.payload],
      fetching:false

    }
    case SMURF_FAIL:
    return{
    ...state,
    fetching:false,
    error:action.payload

    }
    case ADD_SMURF:
    return{
      smurfs:action.payload
    }
    default:
      return state;
  }
};

export default rootReducer;