
import { Link } from 'react-router-dom';
import image from '../../assets/edu.jpg'
const Course = () => {
    return (
        <div className=''>
            <div className="card mx-auto mt-20 bg-base-100 image-full w-96 shadow-xl">
                <figure>
                    <img
                        src={image}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">Go for development</h2>
                    <p>If he want to be an web developer does he choose?</p>
                    <div className="card-actions justify-end">
                        <Link className='btn' to="/coursedetails">course Details</Link>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Course;