// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// import { faCheckDouble } from "@fortawesome/free-solid-svg-icons"
import { FaInstagram, FaLinkedin, FaFacebook, FaTwitter } from "react-icons/fa"
import "./aboutMe.css"

// import Person from "../assets/1.jpg"
// import img2 from "../assets/2.jpg"
// import img5 from "../assets/5.jpg"
// import pdf from "../assets/details.pdf"
// import raghavendra from "../../Assets/sliderImgs/B44A7954.jpg"

// import slide2 from "../assets/slide2.jpg"

// import Header from "../header/header"
import Footer from "../footer/Footer"
// import HeaderAbout from "../headerAbout/headerAbout"

// import bbb from "../assets/bbb (1).jpg"
// import yuvaChaithanyaYathra from "../assets/yuvachaithanya-yathra (7).jpg"

// import kolluRavindra1 from "../assets/kollu-ravindra1.jpeg"

// import specialStatus from "../assets/speshal-status1.jpeg"

// import yuvaNestham1 from "./aboutImgs/yuvanestham1.jpeg"
// import yuvaNestham2 from "./aboutImgs/yuvanestham2.jpeg"
// import yuvaNestham3 from "./aboutImgs/yuvanestham3.jpeg"

// import specialStatus1 from "./aboutImgs/speshal-status1.jpeg"
// import specialStatus2 from "./aboutImgs/speshal-status2.jpeg"
// import specialStatus3 from "./aboutImgs/speshal-status3.jpeg"

// import bbb1 from "./aboutImgs/bbb (1).jpg"
// import bbb2 from "./aboutImgs/bbb (3).JPG"
// import bbb3 from "./aboutImgs/bbb (8).JPG"
// import bbb4 from "./aboutImgs/bbb (14).JPG"
// import bbb5 from "./aboutImgs/bbb (24).jpg"

// import ppyy1 from "./aboutImgs/yuvachaithanya-yathra (1).jpg"
// import ppyy2 from "./aboutImgs/yuvachaithanya-yathra (2).jpg"
// import ppyy3 from "./aboutImgs/yuvachaithanya-yathra (8).jpg"
// import ppyy4 from "./aboutImgs/yuvachaithanya-yathra (28).jpg"

import soloImg from "../../Assets/sliderImgs/B44A7970.jpg"

// import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { MaxWidthWrapper } from "../../utils/maxWidthWrapper"
import UserNavbar from "../navbar/userNavbar"

function AboutMe() {
  // const settings = {
  //   dots: false,
  //   infinite: true,
  //   fade: true,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   autoplay: true,
  //   autoplaySpeed: 2000,
  // }
  return (
    <div>
      {/* <HeaderAbout /> */}
      {/* <Header /> */}
      <UserNavbar />
      <h3 className="heading-primary u-text-center">About Kollu Ravindra</h3>
      {/* <div className="colored-heading">
        <h1>About Raghavendra</h1>
      </div> */}
      <section className="about-me-main">
        <MaxWidthWrapper>
          <div className="about-me-main_cont">
            <div className="about-me-main__hero-info">
              <h3>Welcome To My World</h3>
              <h1>Hai I'm Kollu Ravindra</h1>
              <div className="sm-img-hero">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Kollu_Ravindra.jpg/640px-Kollu_Ravindra.jpg"
                  alt="ravindra"
                />
                <div className="rotate-text"></div>
              </div>
              <div className="about-me-main_hero-info_text-animate">
                <h2>Telugu Desam Party Mines, Geology & Excise Minister</h2>
              </div>
              <p>
                Kollu Ravindra was born in Machilipatnam, Krishna District. He
                belongs to the Agnikula Kshatriya community. He entered into
                politics in 1998 and became Telugu Desam Party youth president
                of Machilipatnam.
              </p>
              <div className="about-me-main__btn-box">
                <a href="mailto:kolluravindra@gmail.com" className="btn">
                  Send Me a Mail
                </a>
                <a
                  //  href={pdf} target="_blank"
                  href="#s"
                  className="d-cv"
                >
                  Know More
                </a>
              </div>
              <div className="social-media">
                <div className="bg-icon">
                  <a href="#s">
                    <FaInstagram />
                  </a>
                  <span></span>
                </div>
                <div className="bg-icon">
                  <a href="#s" target="_blank">
                    <FaFacebook />
                  </a>
                  <span></span>
                </div>
                <div className="bg-icon">
                  <a href="#s">
                    <FaLinkedin />
                  </a>
                  <span></span>
                </div>
                <div className="bg-icon">
                  <a href="#s">
                    <FaTwitter />
                  </a>
                  <span></span>
                </div>
              </div>
            </div>

            <div className="img-hero">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Kollu_Ravindra.jpg/640px-Kollu_Ravindra.jpg"
                alt="ravindra"
              />
              <div className="rotate-text"></div>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>
      <div className="row">
        <MaxWidthWrapper>
          <div className="about-me">
            <img className="about-me__img" src={soloImg} alt="ravindra" />
            <h1>
              కొల్లు రవీంద్ర కృష్ణా జిల్లాకు చెందిన తెలుగుదేశం పార్టీ నాయకుడు.
            </h1>
            <p className="">
              కొల్లు రవీంద్ర గారి జన్మస్థలము కృష్ణా జిల్లా, మచిలీపట్టణంలో
              జన్మించారు. వీరు అగ్నికులక్షత్రియ BC-A సామాజికవర్గానికి చెందినవారు
            </p>
            <p>
              కొల్లు రవీంద్ర 1998 లో మచిలిపట్నంలో తెలుగుదేశం పార్టీ యువజన
              అధ్యక్షుడిగా రాజకీయాల్లోకి ప్రవేశించాడు. ఈ పదవిలో అతను పదేళ్లపాటు
              ఉన్నాడు. మే 2009 ఆంధ్రప్రదేశ్ అసెంబ్లీ ఎన్నికలకు మచిలిపట్నం
              నియోజకవర్గం నుండి తెలుగు దేశం పార్టీ తరపున టికెట్టు ఇచ్చారు. ఆ
              ఎన్నికలలో సమీప కాంగ్రెస్ అభ్యర్థి పేర్ని వెంకటరామయ్య చేతిలో 9300
              ఓట్ల తేడాతో ఓడిపోయాడు. ఐదేళ్ళ తరువాత 2014 ఆంధ్రప్రదేశ్ శాసనసభ
              ఎన్నికలలో ప్రత్యర్థి పెర్ని వెంకటరామయ్యను 15,800 ఓట్ల తేడాతో
              ఓడించాడు. అతను చంద్రబాబు నాయుడు మంత్రివర్గంలో చేనేత వస్త్రాలు &
              ఎక్సైజ్, బిసి సంక్షేమం, సాధికారత అనే రెండు శాఖలకు మంత్రిగా
              వ్యవహరించాడు. . ఏప్రిల్ 2017 లో కేబినెట్ పునర్వ్యవస్థీకరణ తరువాత,
              లా అండ్ జస్టిస్, స్కిల్ డెవలప్మెంట్, యూత్, స్పోర్ట్స్, నిరుద్యోగ
              ప్రయోజనాలు, ఎన్ఆర్ఐ సాధికారత, సంబంధాల మంత్రిగా నియమితుడయ్యాడు.
            </p>
            <p>
              2019 ఆంధ్రప్రదేశ్ శాసనసభ ఎన్నికలలో మచిలీపట్నం శాసనసభ నియోజకవర్గం
              నుండి పోటీ చేసి వై.ఎస్.ఆర్ కాంగ్రెస్ పార్టీ అభ్యర్థి పెర్ని
              వెంకటరామయ్య (నాని) చేతిలో ఓడిపోయాడు.
            </p>
            <p>
              మార్చి 2015 లో, కొల్లు రవీంద్ర మచిలిపట్నంలో పేద ప్రజల విద్య కోసం
              అంకితం చేసిన స్పార్షా అనే స్వచ్ఛంద సంస్థను ప్రారంభించారు.
            </p>
            <p></p>
            <p></p>
            <h1 style={{ textAlign: "center", fontSize: "30px" }}>
              జై రజక... జై టీడీపీ... జై హింద్…
            </h1>
          </div>
        </MaxWidthWrapper>
      </div>
      <Footer />
    </div>
  )
}

export default AboutMe
