

const { applyMiddleware } = require("redux")
const redux = require("redux")
const ReduxLogger = require("redux-logger")

const createStore = redux.createStore
const logger =ReduxLogger.createLogger() 

const BUY_CAKE = 'BUY_CAKE'

function buyCake(){
     return{
          type:BUY_CAKE,
          info:'First redux action'
     }
}

const initialState = {
     numOfCakes:10,
}

const reducer = (state = initialState , action) => {
     switch(action.type){
          case BUY_CAKE:return{
               ...state,
               numOfCakes:state.numOfCakes - 1
          }
          default:return state
     }
}

const store = createStore(reducer,applyMiddleware(logger))
console.log('Initial State' , store.getState());
const unsubscribe = store.subscribe(()=>{})
store.dispatch(buyCake())
unsubscribe()