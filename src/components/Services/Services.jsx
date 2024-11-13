

const Services = () => {
    return (
        <div className='text-center mt-28'>
            <h1 className='text-7xl font-bold text-pink-800'>Our Services</h1>
            <div className="flex justify-around">
                <button className="btn outline w-72 p-10 text-white text-3xl font-bold bg-red-300 hover:bg-pink-900">Courses</button>
                <button className="btn outline w-72 p-10 text-white text-3xl font-bold bg-red-300 hover:bg-pink-900">Exam Support</button>
                <button className="btn outline w-72 p-10 text-white text-3xl font-bold bg-red-300 hover:bg-pink-900">Special Seassion</button>
            </div>
        </div>
    );
};

export default Services;