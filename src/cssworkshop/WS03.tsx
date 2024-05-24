import React from "react";
import styles from "./WS03.module.css";
import pic1 from "@reactrouterdom/img2/bag.png";
import pic2 from "@reactrouterdom/img2/chip.png";
import pic3 from "@reactrouterdom/img2/dish.png";
import pic4 from "@reactrouterdom/img2/dollar.png";
import pic5 from "@reactrouterdom/img2/hamburger.png";
import pic6 from "@reactrouterdom/img2/icon.jpg";
import pic7 from "@reactrouterdom/img2/money.png";
import pic8 from "@reactrouterdom/img2/more.png";
import pic9 from "@reactrouterdom/img2/play.png";
import pic10 from "@reactrouterdom/img2/visa.png";

const WS03 = () => {
  return (
    <div className={styles.container}>
      <div className={styles.g1}>
        <div className={styles.hdr}>
          <div className={styles.column}>
            <h1>All my accounts</h1>
            <h2>June 10, 2018</h2>
          </div>
          <img className={styles.icn} src={pic6} width="16px" alt="Icon" />
        </div>

        <div className={styles.cardCont}>
          <div className={styles.card}>
            <div className={styles.left}></div>
            <div className={styles.rightt}></div>
            <div className={styles.crdInr}>
              <div className={styles.frnt}>
                <a href="detail.html">
                  <img
                    className={styles.visa}
                    src={pic10}
                    width="45px"
                    alt="Visa"
                  />
                  <br />
                  <p className={styles.avlbl}>Available Balance</p>
                  <div className={styles.r0w}>
                    <img src={pic2} width="40px" alt="Chip" />
                    <p>
                      <i
                        className="fa fa-dollar"
                        style={{ fontSize: "15px" }}
                      ></i>
                      &nbsp;7,392.00
                    </p>
                  </div>
                  <div className={styles.rw}>
                    <p>42012</p>
                    <p>3049</p>
                    <p>2800</p>
                    <p>9815</p>
                  </div>
                  <div className={styles.rw2}>
                    <p>
                      EXPIRE &nbsp;
                      <i
                        className="fa-solid fa-play"
                        style={{ color: "#ffffff", fontSize: "8px" }}
                      ></i>
                      &nbsp; 02/22
                    </p>
                    <p>
                      CVC CODE &nbsp;
                      <i
                        className="fa-solid fa-play"
                        style={{ color: "#ffffff", fontSize: "8px" }}
                      ></i>
                      &nbsp; 230
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <img className={styles.dot} src={pic8} alt="More" />
        </div>
        <div className={styles.right}></div>
      </div>

      <div className={styles.infBx}>
        <div className={styles.infRw}>
          <p>Income</p>
          <br />
          <span className={styles.name} style={{ color: "rgb(43, 160, 43)" }}>
            <i className="fa fa-arrow-down"></i>&nbsp;$9,302.00
          </span>
        </div>

        <div className={styles.line}></div>

        <div className={styles.infRw}>
          <p>Expense</p>
          <br />
          <span className={styles.name} style={{ color: "red" }}>
            <i className="fa fa-arrow-up"></i>&nbsp;$2,790.00
          </span>
        </div>
      </div>

      <div className={styles.g2}>
        <div className={styles.hdr}>
          <h3>Detail of movements</h3>
          <i className="fa-regular fa-calendar"></i>
        </div>
        <div className={styles.mvmtBx}>
          <div className={styles.mvmtItm}>
            <div className={styles.mvmtAl}>
              <img src={pic3} width="30px" alt="Dish" />
              <div className={styles.mvmtInf}>
                <p>Restaurant Manhattan</p>
                <p className={styles.dt}>June 10, 2018</p>
              </div>
            </div>
            <span className={`${styles.amt} ${styles.exp}`}>
              $170 <i className="fa fa-arrow-up"></i>
            </span>
          </div>
          <div className={styles.mvmtItm}>
            <div className={styles.mvmtAl}>
              <img src={pic7} width="30px" alt="Money" />
              <div className={styles.mvmtInf}>
                <p>Salary Deposit</p>
                <p className={styles.dt}>June 1, 2018</p>
              </div>
            </div>
            <span className={`${styles.amt} ${styles.inc}`}>
              $1,200 <i className="fa fa-arrow-down"></i>
            </span>
          </div>
          <div className={styles.mvmtItm}>
            <div className={styles.mvmtAl}>
              <img src={pic1} width="30px" alt="Bag" />
              <div className={styles.mvmtInf}>
                <p>Central Market</p>
                <p className={styles.dt}>May 28, 2018</p>
              </div>
            </div>
            <span className={`${styles.amt} ${styles.exp}`}>
              $50 <i className="fa fa-arrow-up"></i>
            </span>
          </div>
          <div className={styles.mvmtItm}>
            <div className={styles.mvmtAl}>
              <img src={pic4} width="30px" alt="Dollar" />
              <div className={styles.mvmtInf}>
                <p>Salary Deposit</p>
                <p className={styles.dt}>May 1, 2018</p>
              </div>
            </div>
            <span className={`${styles.amt} ${styles.inc}`}>
              $1,200 <i className="fa fa-arrow-down"></i>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WS03;
