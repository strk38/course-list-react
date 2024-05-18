import { useEffect, useState } from "react";
import Course from "../Course/Course";
import PropTypes from 'prop-types';

const Courses = ({ handleAddToCart }) => {

    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('course_list.json')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])

    //console.log('courses ', courses);

    return (
        <div className="grid grid-cols-3 gap-4 m-4">
            {
                courses.map(course => <Course
                    key={course.id}
                    course={course}
                    handleAddToCart={handleAddToCart}>
                </Course>)
            }
        </div>
    );
};
Courses.propTypes = {
    handleAddToCart: PropTypes.func
}
export default Courses;