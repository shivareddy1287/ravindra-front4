// import React from "react"
import HeaderSlider from "./slider/Slider"
import "./homePage.css"
import { MaxWidthWrapper } from "../../utils/maxWidthWrapper"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import img1 from "../../Assets/sliderImgs/B44A7954.jpg"
import img2 from "../../Assets/sliderImgs/B44A7955.jpg"
import img3 from "../../Assets/sliderImgs/B44A7956.jpg"
import img4 from "../../Assets/sliderImgs/B44A7957.jpg"
import img5 from "../../Assets/sliderImgs/B44A7970.jpg"
import Footer from "../footer/Footer"
import UserNavbar from "../navbar/userNavbar"

const HomePage2 = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          dots: true,
          infinite: true,
          slidesToShow: 3,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 500,
        },
      },
      {
        breakpoint: 600,
        settings: {
          dots: true,
          infinite: true,
          slidesToShow: 2,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 2000,
        },
      },
      {
        breakpoint: 480,
        settings: {
          dots: true,
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 2000,
        },
      },
    ],
  }
  return (
    <div>
      <UserNavbar />
      <HeaderSlider />
      <br />
      <br />
      <MaxWidthWrapper>
        <h1 className="heading-primary">About Me</h1>
        <br />
        <p>
          Kollu Ravindra is an Indian politician from Andhra Pradesh currently
          serving as the Minister for Mines and Geology in the Government of
          Andhra Pradesh. He is a Member of the Legislative Assembly (MLA)
          representing Machilipatnam assembly constituency.
        </p>

        <div className="homepage-aboutme">
          <div>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Kollu_Ravindra.jpg/640px-Kollu_Ravindra.jpg"
              alt=""
            />
          </div>
          <div>
            <h2>Welcome to Our Communityy....</h2>
            <br />
            <p>
              Kollu Ravindra was born in Machilipatnam, Krishna District. He
              belongs to the Agnikula Kshatriya community. He entered into
              politics in 1998 and became Telugu Desam Party youth president of
              Machilipatnam.
            </p>
            <br />
            <p>
              Kollu Ravindra entered politics in 1998 as Youth President of the
              Telugu Desam Party (TDP) in Machilipatnam, a position he held for
              ten years.
            </p>
            <br />
            <p>
              He was then given the TDP ticket in Machilipatnam for the May 2009
              Andhra Pradesh Assembly elections. He lost that election by 9,300
              votes to the Congress candidate Perni Venkataramaiah. Five years
              later, in 2014, he defeated the same Perni Venkataramaiah by
              15,800 votes.
            </p>
            <br />

            <p>
              In March 2015, Kollu Ravindra started Sparsha, a charity dedicated
              to the education of poor people in Machilipatnam. Following a
              cabinet reshuffle in April 2017, he was appointed Minister for Law
              & Justice, Skill Development, Youth, Sports, Unemployment
              Benefits, NRI Empowerment and Relations.
            </p>

            <button className="know-more-btn">Knnow More</button>
          </div>
        </div>
        <br />
        {/* recent photos */}
        <div className="u-text-center">
          <h1 className="heading-primary u-margin-bottom-medium">
            Recent Event Photos
          </h1>
          <br />
          <br />

          <div className="home-slider rp-row wow animate__bounceInLeft">
            <Slider {...settings}>
              <div>
                <img className="home__slider-img" alt="" src={img1} />
              </div>
              <div>
                <img className="home__slider-img" alt="" src={img2} />
              </div>
              <div>
                <img className="home__slider-img" alt="" src={img3} />
              </div>

              <div>
                <img className="home__slider-img" alt="" src={img4} />
              </div>
              <div>
                <img className="home__slider-img" alt="" src={img5} />
              </div>

              <div>
                <img className="home__slider-img" alt="" src={img3} />
              </div>
            </Slider>
          </div>
        </div>
        {/* services */}
        <section className="section-services">
          <div className="u-text-center">
            <h1 className="heading-primary u-margin-top-medium">Services</h1>
          </div>
          <div className="container">
            <div
              className="card wow animate__rotateInDownLeft"
              data-wow-delay="0.5s"
              style={{ color: "#009688" }}
            >
              <div className="imgBx">
                <img
                  src="https://scontent.fhyd11-3.fna.fbcdn.net/v/t39.30808-6/355448297_229698289825592_3336390071599480003_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_ohc=qG4VWpWvJvsQ7kNvgHzMnKP&_nc_zt=23&_nc_ht=scontent.fhyd11-3.fna&_nc_gid=AIijz8j2fFTeIwX86JDgDfi&oh=00_AYC9bZuHz4Ar8xxCmyGx8fSFwx6Vn1ePOiqRQ7D9jkkStA&oe=67422D96"
                  alt=""
                />
              </div>
              <div className="content">
                <h2>Service Poor People</h2>
                <p>
                  Kollu Ravindra recently toured Mangalagiri constituency
                  extensively. Met people directly. Asked about their problems.
                  His tour went on crossing chaotic mud and mud roads and
                  streets.
                </p>
              </div>
            </div>
            <div
              className="card wow animate__zoomIn"
              data-wow-delay="0.5s"
              style={{ color: "#ff3e7f" }}
            >
              <div className="imgBx">
                <img
                  src="https://www.dishadaily.com/h-upload/2023/11/23/283516-kollu-ravindra.webp"
                  alt=""
                />
              </div>
              <div className="content">
                <h2>Media Coverage in Party Meetings</h2>
                <p>
                  Media coverage refers to the attention and exposure received
                  by a person, brand, event, or topic in various forms of media,
                  including print, broadcast, and digital platforms.
                </p>
              </div>
            </div>
            <div
              className="card wow animate__rotateInDownRight"
              data-wow-delay="0.5s"
              style={{ color: "#03a9f4" }}
            >
              <div className="imgBx">
                <img
                  src="https://scontent.fhyd11-2.fna.fbcdn.net/v/t39.30808-6/428629924_368804352581651_8439265648534383430_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=833d8c&_nc_ohc=_rG0R5IOpMQQ7kNvgEnkKaA&_nc_zt=23&_nc_ht=scontent.fhyd11-2.fna&_nc_gid=A62QUqCyAszKtg2hD5l8Oz_&oh=00_AYB9nWyAeFI3OdkwJ1DSB33uCLOwCmFPmkpwLri7Dkh1qg&oe=674221B8"
                  alt=""
                />
              </div>
              <div className="content">
                <h2>Serve Food For Poor People</h2>
                <p>
                  Food is a basic need for every human being In March 2016, the
                  first 'Anna Canteen' named after TDP founder-president NT Rama
                  Rao, was opened on Andhra Pradesh. serve free food for poor
                  peoples.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* map */}
        <section className="section-contact">
          <div className="contact">
            <div className="u-text-center">
              <h1 className="heading-primary u-margin-bottom-medium">
                Contact
              </h1>
            </div>
          </div>
        </section>
      </MaxWidthWrapper>
      <br />
      <br />
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3590.6042164533246!2d80.58867899461163!3d16.44158174637774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a35f16278d72bb9%3A0x81527adac604b7b6!2sTelugu%20Desam%20Party%20Central%20Office!5e0!3m2!1sen!2sin!4v1691412942792!5m2!1sen!2sin"
        className="contactt__map2"
        allowFullScreen
        title="Google Maps"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
      <Footer />
    </div>
  )
}

export default HomePage2
