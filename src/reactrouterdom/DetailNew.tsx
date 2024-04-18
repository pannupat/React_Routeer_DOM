import { Link, useParams, useSearchParams } from "react-router-dom";
import { data_new } from "@data/data_new";
import { NewsType, TypeNew } from "type/type";
import '@AssCss/mainpage.css';
import { motion } from 'framer-motion';


const DetailNew = () => {
  const { allnewId, allnewDetailId } = useParams();

  const Detail: NewsType = data_new[0].type_new
    .filter((tn: TypeNew) => {
      if (allnewId) {
        if (tn.id === parseInt(allnewId)) {
          return true;
        } else {
          return false;
        }
      } else {
        return true;
      }
    })[0]
    .news_type.filter((nt: NewsType) => {
      if (allnewDetailId) {
        if (nt.id === parseInt(allnewDetailId)) {
          return true;
        } else {
          return false;
        }
      } else {
        return true;
      }
    })[0];

  const [searchParams] = useSearchParams();

  return (
    
    <div className="flex flex-col p-8 gap-8">
      <div className="flex flex-row justify-end font-bold">
        ผู้เข้าชม : {searchParams.get("viewer")}
      </div>
      <h2 className="p3 text-3xl font-bold">รายละเอียด{Detail.headline}</h2>
      <div className="borderd flex flex-col p-4 gap-7  border-Fuchsia-500">
        <div>รหัสข่าว : {Detail.id}</div>
        <div>วันที่ลงข่าว : {Detail.date}</div>
        <div>เวลาที่ลงข่าว : {Detail.time}</div>
        <div>หัวข้อข่าว : {Detail.headline}</div>
        <div>เนื้อหาข่าว : {Detail.content}</div>
        <div>ประเภทข่าว : {Detail.category}</div>
        <div>สำนักข่าว : {Detail.publisher}</div>
      </div>
      <motion.div initial={{ scale: 0 }}
          animate={{ rotate: 360, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20
          }} ><Link className='buttonback' to="/home">กลับไปยังหน้าหลัก</Link></motion.div>
    </div>
  );
};

export default DetailNew;