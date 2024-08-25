import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CourseList from './components/CourseList';

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={<CourseList />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
