import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { data_new } from "../data/data_new";
import { motion } from "framer-motion";
import main from "./main.png";

const MainPage: FC = () => {
  const navigator = useNavigate();

  return (
    <>
      <div className="pic1 flex item-center">
        <img className="img1" src={main} alt="main" />
        <h3 className="p1 ">ogs Daily New</h3>
        <motion.button
          initial={{ scale: 0 }}
          animate={{ rotate: 360, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
          }}
          className="buttonWeb "
          onClick={() => navigator("/home", { state: { data: data_new } })}
        >
          เข้าสู่เว็บไซต์
        </motion.button>
      </div>
    </>
  );
};

export default MainPage;
