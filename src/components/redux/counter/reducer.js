export const counterValue=0

export const counterReducer=(state,action)=>{
switch(action.type){
    case 'decrement':
        return state-1
    case 'increment':
        return state+1
    default :
         return counterValue
}
}