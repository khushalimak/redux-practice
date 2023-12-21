


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


const momosreducer=(state = initialState, action)=>{
 switch(action.type){
   case BUY_MOMOS:return{
    ...state,
    numOfMomos:state.numOfMomos-1
   }
   

   default:state
}
}


const icecreamreducer=(state = initialState, action)=>{
    switch(action.type){
   
      
     case BUY_ICECREAM:return{
       ...state,
       numOficecream:state.numoficecream-2
      }
      default:state
   }
   }


const store1 = redux.createStore(momosreducer)
// console.log('Initial State' , store.getState());
const unsubscribe1 = store1.subscribe(() => console.log('Updated state' , store1.getState()))
store1.dispatch(buyMomos())
store1.dispatch(buyicecream())
unsubscribe1()

const store2 = redux.createStore(icecreamreducer)
// console.log('Initial State' , store.getState());
const unsubscribe2 = store2.subscribe(() => console.log('Updated state' , store2.getState()))
store2.dispatch(buyMomos())
store2.dispatch(buyicecream())
unsubscribe2()


