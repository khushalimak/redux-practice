


const redux=require("redux")
const createStore = redux.createStore

const BUY_MOMOS = 'BUY_MOMOS'
const BUY_ICECREAM='BUY_iCECREAM'

function buyMomos(){
    return{
        type:BUY_MOMOS,
        info:'First redux action'
    }
}
function buyicecream(){
    return{
        type:BUY_ICECREAM,
        info:'First redux action'
    }
}


const initialState = {
    numOfMomos:20,
    numoficecream:10
}


const reducer=(state = initialState, action)=>{
 switch(action.type){
   case BUY_MOMOS:return{
    ...state,
    numOfMomos:state.numOfMomos-1
   }
   
  case BUY_ICECREAM:return{
    ...state,
    numOficecream:state.numoficecream-2
   }
   default:state
}
}


const store = redux.createStore(reducer)
// console.log('Initial State' , store.getState());
const unsubscribe = store.subscribe(() => console.log('Updated state' , store.getState()))
store.dispatch(buyMomos())
store.dispatch(buyicecream())


unsubscribe()


