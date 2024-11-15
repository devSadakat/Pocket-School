import { Link } from "react-router-dom";


const Services = () => {
    return (
        <div className='text-center mt-28'>
            <h1 className='text-7xl font-bold text-pink-800'>Our Services</h1>
            <div className="flex justify-around">
                <Link to="course" className="btn outline w-72 p-10 text-white text-3xl font-bold bg-red-300 hover:bg-pink-900">Courses</Link>
                <h2 className="btn outline w-72 p-10 text-white text-3xl font-bold bg-slate-800">Exam Support <span className="text-sm text-red-700">Not available now</span></h2>
                <h2 className="btn outline w-72 p-10 text-white text-3xl font-bold bg-slate-800">Seassion <span className="text-sm text-red-700">Not available now</span></h2>
            </div>
        </div>
    );
};

export default Services;