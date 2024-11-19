// import { useEffect, useRef, useState } from "react"
// import { useNavigate } from "react-router-dom"
// import "./auth.css"
// import {
//   resetPasswordAction,
//   sendOtpAction,
// } from "../../redux/slices/users/userSlice"

// import { useAppDispatch, useAppSelector } from "../../app/hooks"
// import type { RootState } from "../../redux/store/store"
// import UserNavbar from "../navbar/userNavbar"
// import { toast } from "react-toastify"
// // useAppDispatch
// //define interface

// interface AuthFormProps {
//   email: string
//   password: string
//   userId: string
//   // handleSubmit: (e: FormEvent) => void
// }
// interface sendOtpProps {
//   email: string
//   // handleSubmit: (e: FormEvent) => void
// }

// const ForgotPasswordPage = () => {
//   const [email, setEmail] = useState<string>("")
//   const [password, setPassword] = useState<string>("")
//   const [confirmPassword, setConfirmPassword] = useState<string>("")
//   const [showForm, setShowForm] = useState<string>("verify")
//   const [otp, setOtp] = useState<number>(0)
//   // const [timer, setTimer] = useState<number>(0)
//   // const [canResend, setCanResend] = useState<boolean>(false)
//   const [userId, setUserId] = useState<string>("")
//   const navigate = useNavigate()
//   const dispatch = useAppDispatch()

//   const inputsRef = useRef([])

//   const { userAuth, verifyLoading, resetLoading, isPasswordUpdated } =
//     useAppSelector((state: RootState) => state?.users)

//   useEffect(() => {
//     if (userAuth) {
//       navigate("/know-your-leader") // Redirect to dashboard on successful login
//     }
//   }, [userAuth, navigate])

//   //   const handleClickSendOtp = async (e: React.FormEvent) => {
//   //     e.preventDefault()
//   //     const formData: sendOtpProps = { email }

//   //     try {
//   //       dispatch(sendOtpAction(formData))
//   //     } catch (error) {
//   //       console.error("Failed to login:", error)
//   //     }
//   //   }

//   const handleClickResetPassword = async (e: React.FormEvent) => {
//     e.preventDefault()
//     const formData: AuthFormProps = { email, password, userId }
//     try {
//       dispatch(resetPasswordAction(formData))
//     } catch (error) {
//       console.error("Failed to reset password:", error)
//     }
//   }

//   const handleClickVerifyOtp = async (e: React.FormEvent) => {
//     e.preventDefault()
//     // const enterdOtp =
//     //   inputsRef.current[0].value +
//     //   inputsRef.current[1].value +
//     //   inputsRef.current[2].value +
//     //   inputsRef.current[3].value
//     const enterdOtp = inputsRef.current
//     .map(input => input?.value)
//     .join("") // Concatenate all input values
//     // const formData: sendOtpProps = { email, otp }
//     console.log(enterdOtp)
//     if (parseInt(enterdOtp) === otp) {
//       setShowForm("reset")
//     } else {
//       toast.error("Invalid OTP. Please try again.")
//     }
//   }

//   const handleClickSendOtp = async (e: React.FormEvent) => {
//     e.preventDefault()
//     const formData: sendOtpProps = { email }

//     try {
//       const result = await dispatch(sendOtpAction(formData)).unwrap() // Unwrap result to handle success or error
//       console.log("OTP sent successfully:", result)
//       console.log(result?.otp)

//       setOtp(parseInt(result?.otp))
//       setUserId(result?._id)
//       console.log(result?._id)

//       setShowForm("otp") // Move to OTP form on success
//     } catch (error) {
//       // Handle the error from the action
//       console.error("Error sending OTP:", error)
//       if (error.message === "User not found") {
//         toast.warning("User not found. Please check the email entered.") // Display alert
//       } else {
//         toast.error("Something went wrong. Please try again.")
//       }
//     }
//   }

//   const handleInput = (e, index) => {
//     const input = e.target

//     // Ensure only numbers are accepted
//     if (!/^\d$/.test(input.value)) {
//       input.value = "" // Clear invalid input
//       return
//     }

//     // Move to the next input
//     if (index < inputsRef.current.length - 1) {
//       inputsRef.current[index + 1].focus()
//     }
//   }

//   const handleKeyDown = (e, index) => {
//     if (e.key === "Backspace" && !e.target.value && index > 0) {
//       // Move to the previous input on Backspace
//       inputsRef.current[index - 1].focus()
//     }
//   }

//   useEffect(() => {
//     if (isPasswordUpdated) {
//       toast.success("Password updated")
//       navigate("/login")
//     }
//   }, [isPasswordUpdated, navigate])

//   return (
//     <div>
//       {" "}
//       <UserNavbar />
//       <div className="loginPage_cont">
//         <div className="container2">
//           <div className="heading">Reset Password</div>
//           {showForm === "verify" ? (
//             <form className="form" onSubmit={handleClickSendOtp}>
//               <input
//                 className="input"
//                 type="email"
//                 required
//                 name="email"
//                 id="email"
//                 placeholder="Email"
//                 autoComplete="new-password"
//                 value={email}
//                 onChange={e => setEmail(e.target.value)}
//               />

//               <span
//                 className="forgot-password"
//                 onClick={() => navigate("/login")}
//               >
//                 <a href="#s">Remember Password ?</a>
//               </span>
//               {/* <input
//                 className="login-button"
//                 // onClick={handleClickSendOtp}
//                 type="submit"
//                 value="Send Otp"
//               /> */}
//               <button
//                 disabled={verifyLoading}
//                 type="submit"
//                 className="login-button"
//               >
//                 Send Otp{" "}
//                 {verifyLoading ? <div className="button-loader"></div> : <></>}
//               </button>
//             </form>
//           ) : showForm === "otp" ? (
//             <form className="form">
//               <div>Otp Verfication</div>
//               <br />

//               <div className="verify-inputs">
//                 {[...Array(4)].map((_, index) => (
//                   <input
//                     key={index}
//                     type="tel"
//                     maxLength="1"
//                     ref={el => (inputsRef.current[index] = el)}
//                     onInput={e => handleInput(e, index)}
//                     onKeyDown={e => handleKeyDown(e, index)}
//                   />
//                 ))}
//               </div>
//               <br />

//               <span>Didn't Receive OTP?</span>
//               <span className="forgot-password">
//                 <a href="#s" className="resend-btn">
//                   <button disabled={verifyLoading} onClick={handleClickSendOtp}>
//                     Resend
//                     {verifyLoading ? (
//                       <div className="button-loader button-loader-black"></div>
//                     ) : (
//                       <></>
//                     )}
//                   </button>
//                   {/* <span>0:30</span> */}
//                 </a>
//               </span>
//               <input
//                 className="login-button"
//                 onClick={handleClickVerifyOtp}
//                 type="submit"
//                 value="Verify"
//               />
//             </form>
//           ) : (
//             <form className="form">
//               <input
//                 className="input"
//                 required
//                 type="password"
//                 name="password"
//                 placeholder="Password"
//                 value={password}
//                 onChange={e => setPassword(e.target.value)}
//               />
//               <input
//                 className="input"
//                 required
//                 type="password"
//                 name="password"
//                 placeholder="Confirm Password"
//                 value={confirmPassword}
//                 onChange={e => setConfirmPassword(e.target.value)}
//               />
//               <span className="forgot-password">
//                 <a href="#s">Remember Password ?</a>
//               </span>
//               {/* <input
//                 className="login-button"
//                 onClick={handleClickResetPassword}
//                 type="button"
//                 value="Reset Password"
//               /> */}
//               <button
//                 type="button"
//                 className="login-button"
//                 disabled={resetLoading}
//                 onClick={handleClickResetPassword}
//               >
//                 Reset Password
//                 {resetLoading ? <div className="button-loader"></div> : <></>}
//               </button>
//             </form>
//           )}

//           <span className="agreement">
//             <a href="#s">Terms and conditions</a>
//           </span>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default ForgotPasswordPage
import { useEffect, useRef, useState } from "react"
import { useNavigate } from "react-router-dom"
import "./auth.css"
import {
  resetPasswordAction,
  sendOtpAction,
} from "../../redux/slices/users/userSlice"

import { useAppDispatch, useAppSelector } from "../../app/hooks"
import type { RootState } from "../../redux/store/store"
import UserNavbar from "../navbar/userNavbar"
import { toast } from "react-toastify"

// Define interfaces for props
interface AuthFormProps {
  email: string
  password: string
  userId: string
}

interface SendOtpProps {
  email: string
}

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  const [confirmPassword, setConfirmPassword] = useState<string>("")
  const [showForm, setShowForm] = useState<"verify" | "otp" | "reset">("verify")
  const [otp, setOtp] = useState<number>(0)
  // const [timer, setTimer] = useState<number>(0)
  // const [canResend, setCanResend] = useState<boolean>(false)
  const [userId, setUserId] = useState<string>("")
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const inputsRef = useRef<(HTMLInputElement | null)[]>([])

  const { userAuth, verifyLoading, resetLoading, isPasswordUpdated } =
    useAppSelector((state: RootState) => state?.users)

  useEffect(() => {
    if (userAuth) {
      navigate("/know-your-leader") // Redirect to dashboard on successful login
    }
  }, [userAuth, navigate])

  const handleClickResetPassword = async (
    e: React.FormEvent<HTMLFormElement>,
  ): Promise<void> => {
    e.preventDefault()
    const formData: AuthFormProps = { email, password, userId }
    try {
      await dispatch(resetPasswordAction(formData))
    } catch (error) {
      console.error("Failed to reset password:", error)
    }
  }

  const handleClickVerifyOtp = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    const enteredOtp = inputsRef.current.map(input => input?.value).join("") // Concatenate all input values
    if (parseInt(enteredOtp, 10) === otp) {
      setShowForm("reset")
    } else {
      toast.error("Invalid OTP. Please try again.")
    }
  }

  const handleClickSendOtp = async (e: any): Promise<void> => {
    e.preventDefault()
    const formData: SendOtpProps = { email }

    try {
      const result = await dispatch(sendOtpAction(formData)).unwrap()
      console.log("OTP sent successfully:", result)

      setOtp(parseInt(result?.otp, 10))
      setUserId(result?._id)
      setShowForm("otp") // Move to OTP form on success
    } catch (error: any) {
      console.error("Error sending OTP:", error)
      if (error.message === "User not found") {
        toast.warning("User not found. Please check the email entered.")
      } else {
        toast.error("Something went wrong. Please try again.")
      }
    }
  }

  const handleInput = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number,
  ): void => {
    const input = e.target
    if (!/^\d$/.test(input.value)) {
      input.value = ""
      return
    }

    if (index < inputsRef.current.length - 1) {
      inputsRef.current[index + 1]?.focus()
    }
  }

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number,
  ): void => {
    if (e.key === "Backspace" && !e.currentTarget.value && index > 0) {
      inputsRef.current[index - 1]?.focus()
    }
  }

  useEffect(() => {
    if (isPasswordUpdated) {
      toast.success("Password updated")
      navigate("/login")
    }
  }, [isPasswordUpdated, navigate])

  return (
    <div>
      <UserNavbar />
      <div className="loginPage_cont">
        <div className="container2">
          <div className="heading">Reset Password</div>
          {showForm === "verify" ? (
            <form className="form" onSubmit={handleClickSendOtp}>
              <input
                className="input"
                type="email"
                required
                name="email"
                id="email"
                placeholder="Email"
                autoComplete="new-password"
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
              <span
                className="forgot-password"
                onClick={() => navigate("/login")}
              >
                <a href="#s">Remember Password ?</a>
              </span>
              <button
                disabled={verifyLoading}
                type="submit"
                className="login-button"
              >
                Send Otp{" "}
                {verifyLoading ? <div className="button-loader"></div> : null}
              </button>
            </form>
          ) : showForm === "otp" ? (
            <form className="form" onSubmit={handleClickVerifyOtp}>
              <div>Otp Verification</div>
              <div className="verify-inputs">
                {[...Array(4)].map((_, index) => (
                  <input
                    key={index}
                    type="tel"
                    maxLength={1}
                    ref={el => (inputsRef.current[index] = el)}
                    onInput={(e: any) => handleInput(e, index)}
                    onKeyDown={e => handleKeyDown(e, index)}
                  />
                ))}
              </div>
              <button
                disabled={verifyLoading}
                type="button"
                onClick={handleClickSendOtp}
              >
                Resend
                {verifyLoading ? (
                  <div className="button-loader button-loader-black"></div>
                ) : null}
              </button>
              <button type="submit" className="login-button">
                Verify
              </button>
            </form>
          ) : (
            <form className="form" onSubmit={handleClickResetPassword}>
              <input
                className="input"
                required
                type="password"
                name="password"
                placeholder="Password"
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
              <input
                className="input"
                required
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={e => setConfirmPassword(e.target.value)}
              />
              <button
                type="submit"
                className="login-button"
                disabled={resetLoading}
              >
                Reset Password
                {resetLoading ? <div className="button-loader"></div> : null}
              </button>
            </form>
          )}
          <span className="agreement">
            <a href="#s">Terms and conditions</a>
          </span>
        </div>
      </div>
    </div>
  )
}

export default ForgotPasswordPage
