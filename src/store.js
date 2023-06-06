import { configureStore, createSlice } from '@reduxjs/toolkit'



let user = createSlice({
  name: 'user', // state 변수 이름
  initialState : 'kim' // state 값
})


let stock = createSlice({
  name: 'stock',
  initialState : [
    {id : 0, name : 'White and Black', count : 2},
    {id : 2, name : 'Grey Yordan', count : 1}
  ] 
})



export default configureStore({
  reducer: { 
    user : user.reducer,
    stock : stock.reducer
  }
}) 