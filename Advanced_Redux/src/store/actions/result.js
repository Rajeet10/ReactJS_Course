import * as actionTypes from './ActionTypes';
export const saveResult=(res)=>{
    //Change data or in reducer both works but better to work here as it is async and reducer are pure synchronus
    return{
        type:actionTypes.STORE_RSLT,
        result:res
     };
}
//asynchronus calls can be done in reduxx by this way
export const storeResult=(res)=>{
    return (dispatch,getState)=>{  //asynchronus code here doesnt   make it to reducer as it justa cts as utility
        setTimeout(()=>{
            // const oldCounter=getState().ctr.counter;//utility function dont use over and over
            // console.log(oldCounter);
            dispatch(saveResult(res));//for asyc handler
        },2000)
    }
 

   };

   export const deleteResult=(resElId)=>{
    return{
       type:actionTypes.DELETE_RSLT,
       resultElID:resElId
    };
   };