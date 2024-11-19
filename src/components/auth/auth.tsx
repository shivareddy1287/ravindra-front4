import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import "./auth.css"
import { loginUserAction } from "../../redux/slices/users/userSlice"

import { toast } from "react-toastify"

import { useAppDispatch, useAppSelector } from "../../app/hooks"
import type { RootState } from "../../redux/store/store"
import UserNavbar from "../navbar/userNavbar"
// useAppDispatch
//define interface

interface AuthFormProps {
  email: string
  password: string
  // handleSubmit: (e: FormEvent) => void
}

const AuthPage = () => {
  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const { userAuth, loading } = useAppSelector(
    (state: RootState) => state?.users,
  )

  useEffect(() => {
    if (userAuth) {
      navigate("/know-your-leader") // Redirect to dashboard on successful login
    }
  }, [userAuth, navigate])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const formData: AuthFormProps = { email, password }

    try {
      const result = await dispatch(loginUserAction(formData)).unwrap()
      toast.success("Login successful.")
      console.log(result)
    } catch (error) {
      console.error("Failed to login:", error)
      console.log(error)

      toast.error("Invalid credentials..!")
    }
  }

  return (
    <div>
      {" "}
      <UserNavbar />
      <div className="loginPage_cont">
        <div className="container2">
          <div className="heading">Sign In</div>
          <form className="form" onSubmit={handleSubmit}>
            <input
              className="input"
              type="email"
              autoComplete="user-email"
              required
              name="email"
              id="email"
              placeholder="E-mail"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
            <input
              className="input"
              required
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
            <span className="forgot-password">
              <a href="#s" onClick={() => navigate("/forgot-password")}>
                Forgot Password ?
              </a>
            </span>
            <button disabled={loading} className="login-button" type="submit">
              Sign In {loading ? <div className="button-loader"></div> : <></>}
            </button>
          </form>

          <span className="agreement">
            <a href="#s">Terms and conditions</a>
          </span>
        </div>
      </div>
    </div>
  )
}

export default AuthPage
