import {
    createBrowserRouter,
} from "react-router-dom";
import Home from "../pages/Home/Home";
import MainLayout from "../layouts/MainLayout/MainLayout";
import Login from "../pages/Login/Login";
import Signup from "../pages/Signup/Signup";
import Deatils from "../pages/Details/Deatils";
import Description from "../pages/Description/Description";
import Puzzel from "../pages/Puzzel/Puzzel";
import Course from "../pages/Course/Course";
import CourseDetails from "../pages/CourseDetails/CourseDetails";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path : "/",
                element: <Home></Home>
            },
            {
                path: "login",
                element: <Login></Login>
            },
            {
                path: "signup",
                element: <Signup></Signup>
            },
            {
                path: 'details',
                element: <Deatils></Deatils>
            },
            {
             path: "description",
             element: <Description></Description>
            },
            {
                path: "puzzel",
                element: <Puzzel></Puzzel>
            },
            {
                path: "course",
                element: <Course></Course>
            },
            {
                path : "/coursedetails",
                element: <CourseDetails></CourseDetails>
            }
        ]
    },
]);

export default router;