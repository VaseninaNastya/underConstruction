export const addPushingInitialDataAction = (forStore) =>{
    console.log("444экшн работает");
    return{
        type: 'ADD_PUSHING_INITIAL_DATA',
        payload: forStore
    }
}
