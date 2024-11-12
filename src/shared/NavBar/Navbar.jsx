import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="navbar  flex bg-base-100">
            <div className="flex-1">
                <a className="btn btn-ghost text-xl">Pocket School</a>
            </div>
            <div className="flex-none">
                <ul className="menu flex menu-horizontal">
                    <li className="px-2"><Link>Click Arrow</Link></li>
                    <li>
                        <details>
                            <summary>Login/SignUp</summary>
                            <ul className="bg-slate-400 fixed rounded p-2">
                                <button className="btn outline-dashed m-2 bg-red-500 text-white px-2 font-bold"><Link>Blogs</Link></button> <br></br>
                                <button className="btn outline-dashed m-2 bg-red-500 text-white px-2 font-bold"><Link>Inspiration</Link></button>
                            </ul>
                        </details>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;