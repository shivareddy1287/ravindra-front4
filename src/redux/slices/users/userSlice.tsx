import { createAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"
import baseUrl from "../../../utils/baseUrl"
import type { PayloadAction } from "@reduxjs/toolkit"
import { object } from "yup"

// Define types for actions and state
interface UserData {
  email: string
  password: string
}
interface ResetUserData {
  email: string
  password: string
  userId: string
}
interface sendOtpUserData {
  email: string
}

interface OtpData {
  _id: string
  otp?: string
}
// interface ResetPassword {
//   password: string
// }
// interface userVer {
//   otp: string
// }
interface ResetSucess {
  message: string
}

interface UserResponse {
  _id: string
  firstName: string
  lastName: string
  email: string
  token: string
  profilePhoto: string
  designation: string
  workPlace: string
  fatherName: string
  spouseName: string
  profession: string
  positionHeld: string
  specialIntrests: string
  phoneNo: string
  premanentAddress: string
  communicationAddress: string
}

interface User {
  _id: string
  firstName: string
  lastName: string
  profilePhoto: string
  // profilePhoto: string
  designation: string
  workPlace: string
  fatherName: string
  spouseName: string
  profession: string
  positionHeld: string
  specialIntrests: string
  phoneNo: string
  premanentAddress: string
  communicationAddress: string
}

interface UserState {
  usersList: User[]
  userAuth: UserResponse | null
  verifyUser: any
  loading: boolean
  appErr?: string
  serverErr?: string
  userDetails?: UserResponse | null
  profileUpdated?: UserResponse | null
  isUpdated?: boolean
  isUpdatedBio?: boolean
  verifyLoading?: boolean
  resetLoading?: boolean
  isPasswordUpdated?: boolean
  resetUser?: UserResponse | null
}

interface ResetSucess {
  message: string // Update this type to match the actual response
}

interface ResetUserData {
  email: string
  password: string
}

// Action for resetting profile updates
const resetProfileEdit = createAction("updateProfile/reset")
const resetProfileBioEdit = createAction("updateProfileBio/reset")
const resetPasswordUpdate = createAction("updatePasword/reset")

//
//
//
//
//
//
// sendotp thunk
export const sendOtpAction = createAsyncThunk<
  OtpData, // fulfilled response type
  sendOtpUserData, // argument type
  { rejectValue: { message: string } } // rejected response type
>("user/sendOtp", async (userData, { rejectWithValue }) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  }

  try {
    const { data } = await axios.post<OtpData>(
      `${baseUrl}/api/users/sendOtp`,
      userData,
      config,
    )

    console.log(data)

    return data // success return
  } catch (error: any) {
    if (!error?.response) {
      throw error
    }
    return rejectWithValue(error.response.data)
  }
})
//
//
//

export const resetPasswordAction = createAsyncThunk<
  ResetSucess, // fulfilled response type
  ResetUserData, // argument type
  { rejectValue: { message: string } } // rejected response type
>("user/resetPassword", async (userData, { rejectWithValue, dispatch }) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  }

  try {
    console.log(userData, config)

    const { data } = await axios.post<ResetSucess>(
      `${baseUrl}/api/users/resetPassword`,
      userData,
      config,
    )

    console.log(data)
    dispatch(resetPasswordUpdate())

    return data // success return
  } catch (error: any) {
    if (!error?.response) {
      throw error
    }
    return rejectWithValue(error.response.data)
  }
})
//
//
//
//
//

// loginUserAction thunk
export const loginUserAction = createAsyncThunk<
  UserResponse, // fulfilled response type
  UserData, // argument type
  { rejectValue: { message: string } } // rejected response type
>("user/login", async (userData, { rejectWithValue }) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  }

  try {
    const { data } = await axios.post<UserResponse>(
      `${baseUrl}/api/users/login`,
      userData,
      config,
    )
    sessionStorage.setItem("userInfo", JSON.stringify(data))

    return data // success return
  } catch (error: any) {
    if (!error?.response) {
      throw error
    }
    return rejectWithValue(error.response.data)
  }
})

// Logout action
export const logoutAction = createAsyncThunk<
  void,
  void,
  { rejectValue: { message: string } }
>("/user/logout", async (_, { rejectWithValue }) => {
  try {
    sessionStorage.removeItem("userInfo")
  } catch (error: any) {
    if (!error?.response) {
      throw error
    }
    return rejectWithValue(error?.response?.data)
  }
})

// Fetch User details
export const fetchUserDetailsAction = createAsyncThunk<
  UserResponse, // fulfilled response type
  string, // argument type (user id)
  { rejectValue: { message: string } } // rejected response type
>("user/detail", async (id, { rejectWithValue, dispatch }) => {
  try {
    const { data } = await axios.get<UserResponse>(`${baseUrl}/api/users/${id}`)
    return data
  } catch (error: any) {
    if (!error?.response) throw error
    return rejectWithValue(error?.response?.data)
  }
})

// Fetch all users
export const fetchUsersAction = createAsyncThunk<
  User[], // fulfilled response type
  void, // no argument required
  { rejectValue: { message: string } } // rejected response type
>("user/list", async (_, { rejectWithValue }) => {
  try {
    const { data } = await axios.get<User[]>(`${baseUrl}/api/users`)
    return data
  } catch (error: any) {
    if (!error?.response) throw error
    return rejectWithValue(error?.response?.data)
  }
})

// Update user profile
export const updateProfileAction = createAsyncThunk<
  UserResponse, // fulfilled response type
  {
    id: string
    firstName: string
    lastName: string
    email: string
    image: File | string
  }, // argument type
  { rejectValue: { message: string } } // rejected response type
>("user/update", async (user, { rejectWithValue, dispatch }) => {
  try {
    // console.log(user.image)

    const formData = new FormData()
    formData.append("firstName", user.firstName)
    formData.append("lastName", user.lastName)
    formData.append("email", user.email)
    formData.append("image", user.image)

    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }

    const { data } = await axios.put<UserResponse>(
      `${baseUrl}/api/users/${user.id}`,
      formData,
      config,
    )
    dispatch(resetProfileEdit())

    return data
  } catch (error: any) {
    if (!error?.response) throw error
    return rejectWithValue(error?.response?.data)
  }
})

// Update user bio
export const updateProfileBioAction = createAsyncThunk<
  UserResponse, // fulfilled response type
  { id: string }, // argument type
  { rejectValue: { message: string } } // rejected response type
>("user/update/bio", async (user, { rejectWithValue, dispatch }) => {
  try {
    console.log(user)

    const { data } = await axios.put<UserResponse>(
      `${baseUrl}/api/users/bio/${user.id}`,
      user,
    )
    dispatch(resetProfileBioEdit())

    return data
  } catch (error: any) {
    if (!error?.response) throw error
    return rejectWithValue(error?.response?.data)
  }
})

// Get user from session storage
const userLoginFromStorage: UserResponse | null = sessionStorage.getItem(
  "userInfo",
)
  ? JSON.parse(sessionStorage.getItem("userInfo")!)
  : null

// Initial state
const initialState: UserState = {
  usersList: [],
  userAuth: userLoginFromStorage,
  loading: false,
  appErr: undefined,
  serverErr: undefined,
  verifyUser: object,
}

// Create the user slice
const userSlices = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: builder => {
    // login action
    builder.addCase(loginUserAction.pending, state => {
      state.loading = true
      state.appErr = undefined
      state.serverErr = undefined
    })
    builder.addCase(
      loginUserAction.fulfilled,
      (state, action: PayloadAction<UserResponse>) => {
        state.userAuth = action.payload
        state.loading = false
      },
    )
    builder.addCase(loginUserAction.rejected, (state, action) => {
      state.appErr = action.payload?.message
      state.serverErr = action.error.message
      state.loading = false
    })

    //
    //
    //
    //
    //
    // verify action
    builder.addCase(sendOtpAction.pending, state => {
      state.verifyLoading = true
      state.appErr = undefined
      state.serverErr = undefined
    })
    // builder.addCase(
    //   sendOtpAction.fulfilled,
    //   (state, action: PayloadAction<UserResponse>) => {
    //     // state.userAuth = action.payload
    //     state.verifyUser = action.payload
    //     state.verifyLoading = false
    //   },
    // )
    builder.addCase(
      sendOtpAction.fulfilled,
      (state, action: PayloadAction<OtpData>) => {
        state.verifyUser = action.payload // Ensure this matches your state structure
        state.verifyLoading = false
      },
    )

    builder.addCase(sendOtpAction.rejected, (state, action) => {
      state.appErr = action.payload?.message
      state.serverErr = action.error.message
      state.verifyLoading = false
    })
    //
    //
    builder.addCase(resetPasswordAction.pending, state => {
      state.resetLoading = true
      state.appErr = undefined
      state.serverErr = undefined
    })
    builder.addCase(resetPasswordUpdate, (state, action) => {
      state.isPasswordUpdated = true
    })
    // builder.addCase(
    //   resetPasswordAction.fulfilled,
    //   (state, action: PayloadAction<UserResponse>) => {
    //     // state.userAuth = action.payload
    //     state.resetUser = action.payload
    //     state.isPasswordUpdated = false
    //     state.resetLoading = false
    //   },
    // )
    // builder.addCase(
    //   resetPasswordAction.fulfilled,
    //   (state, action: PayloadAction<ResetSucess>) => {
    //     state.resetUser = action.payload // Set the payload
    //     state.isPasswordUpdated = false
    //     state.resetLoading = false
    //   },
    // )
    builder.addCase(
      resetPasswordAction.fulfilled,
      (state, action: PayloadAction<ResetSucess>) => {
        state.resetUser = {
          ...state.resetUser, // Retain existing values if needed
          ...action.payload, // Map new properties
        } as UserResponse // Cast to UserResponse
        state.isPasswordUpdated = false
        state.resetLoading = false
      },
    )

    builder.addCase(resetPasswordAction.rejected, (state, action) => {
      state.appErr = action.payload?.message
      state.serverErr = action.error.message
      state.resetLoading = false
    })
    //
    //
    //
    //

    // logout action
    builder.addCase(logoutAction.fulfilled, state => {
      state.userAuth = null
      state.loading = false
      state.appErr = undefined
      state.serverErr = undefined
    })

    // fetch user details

    //user details
    builder.addCase(fetchUserDetailsAction.pending, (state, action) => {
      state.loading = true
      state.appErr = undefined
      state.serverErr = undefined
    })
    builder.addCase(fetchUserDetailsAction.fulfilled, (state, action) => {
      state.loading = false
      state.userDetails = action?.payload
      state.appErr = undefined
      state.serverErr = undefined
    })
    builder.addCase(fetchUserDetailsAction.rejected, (state, action) => {
      console.log(action.payload)
      state.loading = false
      state.appErr = action?.payload?.message
      state.serverErr = action?.error?.message
    })

    //All Users
    builder.addCase(fetchUsersAction.pending, (state, action) => {
      state.loading = true
      state.appErr = undefined
      state.serverErr = undefined
    })
    builder.addCase(fetchUsersAction.fulfilled, (state, action) => {
      state.loading = false
      state.usersList = action?.payload
      state.appErr = undefined
      state.serverErr = undefined
    })
    builder.addCase(fetchUsersAction.rejected, (state, action) => {
      console.log(action.payload)
      state.loading = false
      state.appErr = action?.payload?.message
      state.serverErr = action?.error?.message
    })

    //update profile action
    builder.addCase(updateProfileAction.pending, (state, action) => {
      state.loading = true
    })
    builder.addCase(resetProfileEdit, (state, action) => {
      state.isUpdated = true
    })
    builder.addCase(updateProfileAction.fulfilled, (state, action) => {
      state.profileUpdated = action?.payload
      state.loading = false
      state.appErr = undefined
      state.serverErr = undefined
      state.isUpdated = false
    })
    builder.addCase(updateProfileAction.rejected, (state, action) => {
      state.loading = false
      state.appErr = action?.payload?.message
      state.serverErr = action?.error?.message
    })

    //Update User Bio
    builder.addCase(updateProfileBioAction.pending, (state, action) => {
      state.loading = true
    })
    builder.addCase(resetProfileBioEdit, (state, action) => {
      state.isUpdatedBio = true
    })
    builder.addCase(updateProfileBioAction.fulfilled, (state, action) => {
      state.profileUpdated = action?.payload
      state.loading = false
      state.appErr = undefined
      state.serverErr = undefined
      state.isUpdatedBio = false
    })
    builder.addCase(updateProfileBioAction.rejected, (state, action) => {
      state.loading = false
      state.appErr = action?.payload?.message
      state.serverErr = action?.error?.message
    })
  },
})

export default userSlices.reducer
