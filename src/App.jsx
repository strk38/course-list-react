import { useState } from 'react'

import './App.css'
import Courses from './Components/Courses/Courses'
import Carts from './Components/Carts/Carts'

function App() {
  const [courses, setCourses] = useState([])

  const handleAddToCart = (id, course) => {

    const isIdExist = courses.some((c) => c.id === id);

    const totalCreditHours = courses.reduce((total, c) => total + c.Credit, 0);
    const maxCreditHours = 20;
    // Check if adding the new course will exceed the maximum allowed credit hours
    const isNewCourseValid = totalCreditHours + course.Credit <= maxCreditHours;
    console.log(totalCreditHours, ' c.ch', course.Credit, ' b', isNewCourseValid);

    if (isIdExist) {
      window.alert("Course already exists in the cart");
    }
    else if (!isNewCourseValid) {
      window.alert("Adding this course will exceed the maximum allowed credit hours");
    }
    else {
      // If id does not exist, add the course to the courses array
      const newCourse = [...courses, course];
      setCourses(newCourse);
    }
  }

  return (
    <>

      <h1 className='font-bold text-4xl'>Course Registration</h1>
      <div className='flex justify-between'>
        <Courses handleAddToCart={handleAddToCart}></Courses>
        <Carts courses={courses}></Carts>
      </div>
    </>
  )
}

export default App
