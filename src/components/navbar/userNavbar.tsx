import "./navbar.css"
import { MaxWidthWrapper } from "../../utils/maxWidthWrapper"
import { useNavigate } from "react-router-dom"
import { useAppSelector } from "../../app/hooks"
import type { RootState } from "../../redux/store/store"

import DensityMediumIcon from "@mui/icons-material/DensityMedium"
// import { toast } from "react-toastify"
import { useState } from "react"

const UserNavbar = () => {
  const navigate = useNavigate()

  const { userAuth } = useAppSelector((state: RootState) => state.users)

  const [isActive, setIsActive] = useState(false)

  const toggleNav = () => {
    setIsActive(prev => !prev)
  }
  // const toggleNav = () => {
  //   const navbar = document.querySelector(".userNavbarcontwc")
  //   navbar.classList.toggle("active")
  // }

  return (
    <div className="sticky_navbar_cont">
      <div className="userNavbarcontwc">
        <MaxWidthWrapper className="custom-navbar-class">
          <div className="userNavbarcont">
            <div
              className="userNavbarcont-l"
              onClick={() => {
                navigate("/")
              }}
            >
              <img
                alt="logo"
                className="nav-logo"
                // src="https://pbs.twimg.com/media/GIR8u5_W4AAqdDb.jpg"
                src="data:image/jpeg;base64,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"
              />
              <span>Kollu Ravindra</span>
            </div>
            {/* <div className="nav-toggleIcon" onClick={toggleNav}>
              <DensityMediumIcon />
            </div> */}
            <div
              className={
                isActive ? "userNavbarcont-r active" : "userNavbarcont-r"
              }
            >
              <span onClick={() => navigate("/")}>Home</span>
              <span onClick={() => navigate("/about")}>About</span>
              <span onClick={() => navigate("/photos-gallery")}>Gallery</span>
              <span onClick={() => navigate("/contact")}>Contact</span>
              {userAuth ? (
                <span onClick={() => navigate("/know-your-leader")}>
                  Dashboard
                </span>
              ) : (
                <span onClick={() => navigate("/login")}> Login</span>
              )}
            </div>
          </div>
        </MaxWidthWrapper>
      </div>
    </div>
  )
}

export default UserNavbar
