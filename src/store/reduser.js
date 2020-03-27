const initialState = {
    tank1: {
      value: 0
    },
    tank2: {
      value: 0
    }
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
              newState.tank1.value++ 
              break;
          case 2:
              newState.tank2.value++ 
              break;
      
          default:
              break;
      }
    }
    return newState
}

export default reduser