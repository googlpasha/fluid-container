const initialState = {
    a: 1,
    age:10
}

const reduser = (state = initialState, action) =>{
    const newState = {...state}
    if(action.type==="FILL_UP"){
        newState.a++
    }
    if(action.type == 'AGE_UP'){
        newState.age++
    }
    return newState
}

export default reduser