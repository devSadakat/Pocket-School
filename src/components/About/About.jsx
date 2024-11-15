import { Link } from "react-router-dom";


const About = () => {
    return (
        <div>
            <div className="flex justify-around mt-28">
                <Link to="details" className="btn outline w-72 rounded-full py-10 text-white bg-pink-400 text-3xl font-bold hover:bg-pink-900">Who We Are</Link>
                <Link to="description" className="btn outline w-72 rounded-full py-10 text-white bg-pink-400 text-3xl font-bold hover:bg-pink-900">Description</Link>
                <Link to="puzzel" className="btn outline w-72 rounded-full py-10 text-white bg-pink-400 text-3xl font-bold hover:bg-pink-900">Daili Puzzel</Link>
            </div>
        </div>
    );
};

export default About;