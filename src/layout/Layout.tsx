    import Logo from "@assets/react.svg";
    import { Outlet, Link, useLocation } from "react-router-dom";
    import { data_new } from "@data/data_new";
    import { TypeNew } from "type/type";

    const Layout = () => {
    const { pathname } = useLocation();
    return (
        <div className="flex flex-col w-screen h-screen overflow-hidden">
        <div className="flex flex-col items-center bg-cyan-600 border-b border-Fuchsia-500">
            <nav className="container p-8">
            <ul className="flex flex-row items-center gap-8 font-semibold">
                <li>
                <Link to="/">
                    <img src={Logo} alt="Logo" />
                </Link>
                </li>
                <li>
                <Link
                    className={`${
                    "/home" === pathname ? "text-Fuchsia-500" : "text-black"
                    } transition hover:text-Fuchsia-500 active:text-Fuchsia-500`}
                    to="/home"
                >
                    <button className="flex flex-row px-4 py-2">หน้าแรก</button>
                </Link>
                </li>
                <li>
                <Link
                    className={`${
                    "/home/allnew" === pathname ? "text-Fuchsia-500" : "text-black"
                    } transition hover:text-Fuchsia-500 active:text-Fuchsia-500`}
                    to="/home/allnew"
                >
                    <button className="flex flex-row px-4 py-2">ข่าวทั้งหมด</button>
                </Link>
                </li>
                {data_new[0].type_new.map((tn: TypeNew) => (
                <li key={tn.id}>
                    <Link
                    className={`${
                        `/home/allnew/${tn.id}` === pathname
                        ? "text-Fuchsia-500"
                        : "text-black"
                    }  transition hover:text-Fuchsia-500 active:text-Fuchsia-500`}
                    to={`/home/allnew/${tn.id}`}
                    >
                    <button className="flex flex-row px-4 py-2">{tn.name}</button>
                    </Link>
                </li>
                ))}
            </ul>
            </nav>
        </div>
        <div className="flex flex-col items-center overflow-auto no-scrollbar">
            <div className="container">
            <Outlet />
            </div>
        </div>
        </div>
    );
    };

    export default Layout;