import { data_new } from "@data/data_new";
import { Link, useParams } from "react-router-dom";
import { NewsType, TypeNew } from "type/type";
import "../AssCss/home.css";

const AllNew = () => {
  const { allnewId } = useParams<{ allnewId: string }>();

  return (
    <div className="catenew">
      {data_new[0].type_new
        .filter((tn: TypeNew) => {
          if (allnewId) {
            return tn.id === parseInt(allnewId);
          }
          return true;
        })
        .map((tn: TypeNew) => (
          <div className="homediv" key={tn.id}>
            <h2 className="p1">
              {tn.name}
            </h2>
            {tn.news_type
              .sort(
                (a: NewsType, b: NewsType) =>
                  new Date(b.date).getTime() - new Date(a.date).getTime()
              )
              .map((nt: NewsType) => (
                <Link
                  className="allnew2 flex flex-col p-3 gap-3  hover:bg-Fuchsia-500 active:bg-Fuchsia-500 hover: transition border-Fuchsia-500"
                  to={`/home/allnew/${tn.id}/${nt.id}?viewer=Panupat`}
                  key={nt.id}
                >
                  <div className="">
                    {nt.date}
                  </div>
                  <h3 className="p2">{nt.headline}</h3>
                  <div>{nt.content}</div>
                  <div className="">
                    ประเภทข่าว : {nt.category}
                  </div>
                </Link>
              ))}
          </div>
        ))}
    </div>
  );
};

export default AllNew;
