import { createSlice, type PayloadAction } from "@reduxjs/toolkit"

export type UserId = string

export interface User {
  name: string
  email: string
  github: string
}

export interface UserWithId extends User {
  id: UserId
}

const initialState: UserWithId[] = [
  {
    id: "1",
    name: "name1",
    email: "email1",
    github: "Byron2016",
  },
  {
    id: "2",
    name: "name2",
    email: "email2",
    github: "github2",
  },
  {
    id: "3",
    name: "name3",
    email: "email3",
    github: "midudev",
  },
]

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    //deleteUserById: (state, action: { type: string; payload: UserId })
    deleteUserById: (state, action: PayloadAction<UserId>) => {
      const id = action.payload
      return state.filter((user) => user.id !== id)
    },
  },
})

export default usersSlice.reducer

export const { deleteUserById } = usersSlice.actions

/* 
users 
  components
  hooks 
  store 

*/
