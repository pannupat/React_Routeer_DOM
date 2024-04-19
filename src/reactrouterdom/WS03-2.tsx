import React from 'react';
import styles from './WS03-2.module.css';
import pic1 from "./img2/bag.png"
import pic2 from "./img2/chip.png"
import pic3 from "./img2/dish.png"
import pic4 from "./img2/dollar.png"
import pic5 from "./img2/hamburger.png"
import pic6 from "./img2/icon.jpg"
import pic7 from "./img2/money.png"
import pic8 from "./img2/more.png"
import pic9 from "./img2/play.png"
import pic10 from "./img2/visa.png"
import pic11 from "./img2/dolla.png"

const WS032: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.background}>
        <div className={styles.rowcon}>
          <i className="fa-solid fa-bars-staggered"></i>
          <i className="fa-regular fa-calendar"></i>
        </div>

        <div className={styles.middle}>
          <p className={styles.avail}>Available Balance</p>
          <div className={styles.g1}>
            <img className={styles.dolla} src={pic11} alt="" />
            <p className={styles.balan}>7,392.00</p>
          </div>

          <p className={styles.date}>June 9, 2018</p>
        </div>

        <div className={styles.box}>
          <div className={styles.row}>
            <p>42012</p>
            <p>3049</p>
            <p>2800</p>
            <p>9815</p>
          </div>
          <div className={styles.row2}>
            <p>
              EXPIRE &nbsp;<i
                className="fa-solid fa-play"
                style={{ color: '#ffffff', fontSize: '8px' }}
              ></i
              >&nbsp; 02/22
            </p>
            <p>
              CVC CODE &nbsp;<i
                className="fa-solid fa-play"
                style={{ color: '#ffffff', fontSize: '8px' }}
              ></i
              >&nbsp; 230
            </p>
          </div>
        </div>

        <div className={styles.box1}>
          <div className={styles.row1}>
            <p>Income</p>
            <br />
            <span className={styles.name1}>
              <i className="fa fa-arrow-down"></i>&nbsp;$9,302.00
            </span>
          </div>
          <div className={styles.row1}>
            <p>Expense</p>
            <br />
            <span className={styles.name2}>
              <i className="fa fa-arrow-up"></i>&nbsp;$2,790.00
            </span>
          </div>
        </div>
      </div>
      {/* /////////////////////////////////////////////////////////////////////////////////// */}
      <div className={styles.g2}>
        <div className={styles.hdr}>
          <h3>Detail of movements</h3>
          <p>Weekly</p>
          <i className="fa-solid fa-chevron-down"></i>
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

          <div className={styles.mvmtItm}>
            <div className={styles.mvmtAl}>
              <img src={pic1} width="30px" alt="Bag" />
              <div className={styles.mvmtInf}>
                <p>Central Market</p>
                <p className={styles.dt}>June 1, 2018</p>
              </div>
            </div>
            <span className={`${styles.amt} ${styles.exp}`}>
              $37 <i className="fa fa-arrow-up"></i>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WS032;
