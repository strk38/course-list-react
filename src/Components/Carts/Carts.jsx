import PropTypes from 'prop-types';

const Carts = ({ courses }) => {
    console.log('inside cart', courses);

    const creditHour = courses.reduce((credit, course) => credit + course.Credit, 0);
    const totalPrice = parseFloat(courses.reduce((total, course) => total + course.Price, 0).toFixed(2));
    //console.log(totalPrice);  

    return (
        <div className="ml-1 mt-4 w-1/4 h-fit bg-neutral-100 rounded-lg">
            <div className="p-4 text-left">
                <h4 className="text-sky-600 font-medium my-1">Credit Hour Remaining {20 - creditHour} hr</h4>
                <hr></hr>
                <h4 className="font-bold my-1">Course Name</h4>
                <ol className="font-medium text-sm mb-2">
                    {courses.map((course, index) => (
                        <li key={course.id}>
                            {index + 1}. {course.course_name}
                        </li>
                    ))}
                </ol>
                <hr></hr>
                <h4 className="text-sm my-1">Total Credit Hour : {creditHour}</h4>
                <hr></hr>
                <h4 className="text-sm my-1">Total Price : {totalPrice}</h4>
            </div>
        </div>
    );
};
Carts.propTypes = {
    courses: PropTypes.array

}
export default Carts;