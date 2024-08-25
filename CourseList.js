import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CourseList = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/courses/')
            .then(response => setCourses(response.data))
            .catch(error => console.error('Error fetching courses:', error));
    }, []);

    return (
        <div>
            <h1>Course List</h1>
            <ul>
                {courses.map(course => (
                    <li key={course.id}>{course.title} ({course.course_code})</li>
                ))}
            </ul>
        </div>
    );
};

export default CourseList;
