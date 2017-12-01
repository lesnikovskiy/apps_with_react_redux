import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import ManageCoursePage from './components/course/ManageCoursePage';
import AboutPage from './components/about/AboutPage';
import CoursesPage from './components/course/CoursesPage';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={HomePage} />
        <Route path="courses" component={CoursesPage} />
        <Route path="course/:id" component={ManageCoursePage} />
        <Route path="about" component={AboutPage} />
    </Route>
);
