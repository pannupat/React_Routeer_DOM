import Style from "./WS02.module.css";
import { IoMdStar } from "react-icons/io";
import pic0 from "./image/arrow_right_icon.png";
import pic1 from "..//reactrouterdom/image/background.jpg";
import pic2 from "../reactrouterdom/image/menu_bar.png";
import pic3 from "../reactrouterdom/image/arrowleft.png";
import pic4 from "../reactrouterdom/image/arrowright.png";
import pic5 from "../reactrouterdom/image/airport_icon.png";
import pic6 from "../reactrouterdom/image/easy_booking_icon.png";
import pic7 from "../reactrouterdom/image/group_icon.png";
import pic8 from "../reactrouterdom/image/daniel-jensen-tQpypKA92k8-unsplash.jpg";
import pic9 from "./image/leio-mclaren-jEgQpfkHEWY-unsplash.jpg";
import pic11 from "./image/yousef-alfuhigi-bMIlyKZHKMY-unsplash.jpg";
import pic12 from "./image/fabio-comparelli-uq2E2V4LhCY-unsplash.jpg";

const WS02 = () => {
  return (
    <>
      <div className={Style.container}>
        <div className={Style.alldiv}>
          <div className={Style.alltext}>
            <div className={Style.g1}>
              <p>IsLand</p>
            </div>

            <div className={Style.g2}>
              <p>Our tous</p>
              <p>About us</p>
              <p>About us</p>
              <p>Booking</p>
              <p>FAQ</p>
            </div>

            <div className={Style.g3}>
              <img src={pic2} alt="" />
            </div>
          </div>

          {/* ////////////////////////////////////////////////////////////////////////////////////////////////// */}

          <div className={Style.bg1}>
            <div className={Style.background}>
              <img src={pic1} alt="" />{" "}
            </div>
            <div className={Style.content}>
              <p className={Style.p1}>Explore the sights of the Azores </p>
              <p className={Style.p2}>
                A place where noture and adventure unite{" "}
              </p>
              <button className={Style.btnbook}>Book now</button>
              <div className={Style.pic}>
                <img src={pic3} alt="" />
                <img src={pic4} alt="" />
              </div>
            </div>
          </div>
          {/* //////////////////////////////////////////////////////////////////////////////////////////////////// */}

          <div className={Style.alldiv2}>
            <div className={Style.top}>
              <p className={Style.p3}>Top values for you</p>
              <p className={Style.p4}>
                Try variety of benefirts when using our services
              </p>
            </div>

            <div className={Style.middle}>
              <div className={Style.items}>
                <img src={pic5} alt="" />
                <p className={Style.p5}>Airport pickup</p>
                <p className={Style.p6}>xxxxxxxx xxxxxxxx xxxxxxxxxxxxxxxxx</p>
              </div>
              <div className={Style.items}>
                <img src={pic6} alt="" />
                <p className={Style.p5}>Easy booking</p>
                <p className={Style.p6}>xxxxxxxx xxxxxxxx xxxxxxxxxxxxxxxxx</p>
              </div>
              <div className={Style.items}>
                <img src={pic7} alt="" />
                <p className={Style.p5}>Best tour guide</p>
                <p className={Style.p6}>xxxxxxxx xxxxxxxx xxxxxxxxxxxxxxxxx</p>
              </div>
              <div className={Style.items}>
                <img src={pic7} alt="" />
                <p className={Style.p5}>Lots of promos</p>
                <p className={Style.p6}>xxxxxxxx xxxxxxxx xxxxxxxxxxxxxxxxx</p>
              </div>
            </div>

            <div className={Style.bottom}>
              <p className={Style.p7}>Choose your tour</p>
              <div className={Style.divitem}>
                <div className={Style.items}>
                  <img className={Style.img3} src={pic9} alt="" />
                  <div className={Style.star}>
                    <div>5.0</div> <IoMdStar />
                  </div>

                  <div className={Style.arrow}>
                    <div className={Style.detail}>
                      <p>Alone with nature</p>
                      <p>$ 100</p>
                    </div>
                    <div className={Style.arr}>
                      <img src={pic0} alt="" />
                    </div>
                  </div>
                </div>

                <div className={Style.items}>
                  <img className={Style.img3} src={pic8} alt="" />
                  <div className={Style.star}>
                    <div>4.9</div> <IoMdStar />
                  </div>
                  <div className={Style.arrow}>
                    <div className={Style.detail}>
                      <p>The beach</p>
                      <p>$ 200</p>
                    </div>
                    <div className={Style.arr}>
                      <img src={pic0} alt="" />
                    </div>
                  </div>
                </div>

                <div className={Style.items}>
                  <img className={Style.img3} src={pic12} alt="" />
                  <div className={Style.star}>
                    <div>5.0</div> <IoMdStar />
                  </div>
                  <div className={Style.arrow}>
                    <div className={Style.detail}>
                      <p>Mountain nature</p>
                      <p>$ 150</p>
                    </div>
                    <div className={Style.arr}>
                      <img src={pic0} alt="" />
                    </div>
                  </div>
                </div>

                <div className={Style.items}>
                  <img className={Style.img3} src={pic11} alt="" />
                  <div className={Style.star}>
                    <div>4.8</div> <IoMdStar />
                  </div>
                  <div className={Style.arrow}>
                    <div className={Style.detail}>
                      <p>Airport thailand</p>
                      <p>$ 80</p>
                    </div>
                    <div className={Style.arr}>
                      <img src={pic0} alt="" />
                    </div>
                  </div>
                </div>
              </div>
              <div className={Style.btnd}>
                <div></div>
                <button className={Style.btndown}>See all</button>
                <div></div>
              </div>
            </div>
          </div>
          {/* //////////////////////////////////////////////////////////////////////////////////////////////////// */}
        </div>
      </div>
    </>
  );
};

export default WS02;
