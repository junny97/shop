import { createSlice } from '@reduxjs/toolkit'

let user = createSlice({
    name: 'user', // state 변수 이름
    initialState : {name: 'kim', age : 20}, // state 값
    reducers : {
      changeName(state){
        state.name = 'park';
      },
      increase(state , action){
        state.age+= action.payload;
      }
    }
  })
  export let { changeName, increase } = user.actions

  export default user