import { Link } from 'react-router-dom';
import image from '../../assets/edu.jpg'
const CourseDetails = () => {
    return (
        <div>
            <div className='md:flex'>
                <div>
                    <img className='p-6' src={image} alt="" />
                </div>
                <div className='pt-10'>
                    <h2 className='text-2xl text-fuchsia-800'>Web Development Couse</h2>
                    <div className='divider'></div>
                    <h5 className='font-bold'>Duration : <span className='text-blue-700'> 6 month</span> </h5>
                    <h5 className='font-bold'>Course price: <span className='text-blue-700'>5500/- BDT</span> </h5>
                </div>
            </div>
            <div> <button className='btn w-full bg-fuchsia-800  text-white text-xl'>Purches Now</button></div>
        </div>
    );
};

export default CourseDetails;