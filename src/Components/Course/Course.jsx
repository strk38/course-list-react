import PropTypes from 'prop-types';
import { GoBook } from "react-icons/go";

const Course = ({ course, handleAddToCart }) => {
    const { id, image, course_name, course_detail, Price, Credit } = course;

    return (
        <div>
            <div className="card max-w-80 h-full bg-neutral-100 shadow-lg rounded-lg">
                <img className='w-full mb-1' src={image} alt={`the name of course is ${course}`} />
                <div className="card-body">
                    <h2 className="font-semibold text-xl mb-1">
                        {course_name}
                    </h2>
                    <p className="text-left text-xs mb-1">{course_detail}</p>
                    <div className="font-medium text-sm flex justify-between mb-2 px-1">
                        <div className="">$ Price: {Price}</div>
                        <div className="flex items-center">
                            <p><GoBook></GoBook></p>
                            <h4 className='ml-1'>Credit : {Credit} Hours</h4>
                        </div>
                    </div>

                    <button onClick={() => handleAddToCart(id, course)} className="w-full rounded-lg bg-cyan-500 text-white">Select</button>

                </div>
            </div>
        </div>
    );
};
Course.propTypes = {
    course: PropTypes.object.isRequired,
    handleAddToCart: PropTypes.func.isRequired
    // handleMarkAsRead: PropTypes.func.isRequired
}

export default Course;