import { createSlice } from "@reduxjs/toolkit"

export interface User {
  name: string
  email: string
  github: string
}

export interface UserWithId extends User {
  id: string
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
  reducers: {},
})

export default usersSlice.reducer
