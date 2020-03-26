const initialState = {
    tank1: 0,
    tank2: 0
}

const reduser = (state = initialState, action) =>{
    const newState = {...state}
    // if(action.type==="FILL_UP"){
    //     newState.tank1++
    // }
    // if(action.type==="FILL_UP2"){
    //     newState.tank2++
    // }
    if(action.type==='FILL_UP'){
      switch (action.value) {
          case 1:
              newState.tank1++ 
              break;
          case 2:
              newState.tank2++ 
              break;
      
          default:
              break;
      }
    }
    return newState
}

export default reduser