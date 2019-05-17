/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/

/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/

import axios from 'axios'

export const SMURF_START="SMURF_START"
export const SMURF_SUCCESS="SMURF_SUCCESS"
export const SMURF_FAIL="SMURF_FAIL"


/*export const getSmurfs=()=>dispatch=>{
  dispatch({type:SMURF_START});
  axios.get('http://localhost:3333/smurfs')
  .then(({ data })=>{
      dispatch({type:SMURF_SUCCESS,payload:data.results})
})
.catch(err=>{
  
  dispatch({
      type:SMURF_FAIL,
      payload:err
       })
  })
}
*/

export const getSmurfs = () => dispatch =>{
  dispatch({type: SMURF_START})
  axios.get('http://localhost:3333/smurfs')
  .then(res =>{

      dispatch({
          type:SMURF_SUCCESS,
          payload: res.data, })
  })
  .catch(err =>{
      dispatch({
          type:SMURF_FAIL,
          payload: err

      })
  })
  
  
 
}

export const ADD_SMURF='ADD_SMURF'
export const ADD_SMURF_FAIL='ADD_SMURF_FAIL'

export const addSmurf = (smurf) => dispatch =>{
  axios.post('http://localhost:3333/smurfs', smurf,)
      .then(res =>{
          dispatch({ 
              type:ADD_SMURF,
              payload: res.data 
          
          })
      })
      .catch(err =>
        dispatch({
          type:ADD_SMURF_FAIL,
          payload:err
        })
        )
      

  
}