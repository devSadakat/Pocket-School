import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="navbar  flex bg-base-100">
            <div className="flex-1">
                <Link to="/" className="btn btn-ghost text-xl">Pocket School</Link>
            </div>
            <div className="flex-none">
                <ul className="menu flex menu-horizontal">
                    <li>
                        <details>
                            <summary>Click Arrow</summary>
                            <ul className="bg-slate-400 fixed rounded p-2">
                                <button className="btn outline-dashed m-2 bg-red-500 text-white px-2 font-bold"><Link>Blogs</Link></button> <br></br>
                                <button className="btn outline-dashed m-2 bg-red-500 text-white px-2 font-bold"><Link>Inspiration</Link></button>
                            </ul>
                        </details>
                    </li>
                    <li className="px-2"><Link to="login">Login/SignUP</Link></li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;