import { data_new } from "@data/data_new";
import { Link } from "react-router-dom";
import { NewsType, TypeNew } from "type/type";

const HomePage = () => {
  return (
    <div className="homediv">
      <div className="headtitle border-pur-500">
        <h1 className="p1">{data_new[0].title}</h1>
        <hr className="border-slate-300" />
        <div className="p2">{data_new[0].sub_title}</div>
      </div>
      {data_new[0].type_new.map((tn: TypeNew) => (
        <div className="flex flex-col gap-4" key={tn.id}>
          <h2 className="catenew">ประเภทข่าว : {tn.name}</h2>
          <div className="flex flex-col gap-4">
            {tn.news_type
              .sort(
                (a: NewsType, b: NewsType) =>
                  new Date(b.date).getTime() - new Date(a.date).getTime()
              )
              .slice(0, 2)
              .map((nt: NewsType) => (
                <Link
                  className="allnew flex flex-col p-4 gap-2    hover:bg-Pur-500 active:bg-Pur-500 hover: transition border-Pur-500"
                  to={`/home/allnew/${tn.id}/${nt.id}?viewer=Panupat`}
                  key={nt.id}
                >
                  <div className=" ">{nt.date}</div>
                  <h3 className="text-xl font-semibold">{nt.headline}</h3>
                  <div>{nt.content}</div>
                  <div className="">ประเภทข่าว : {nt.category}</div>
                </Link>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default HomePage;
