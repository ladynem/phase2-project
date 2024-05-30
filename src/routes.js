import Home from "./pages/Home";
import ErrorPage from "./pages/ErrorPage";
import About from "./pages/About";
import StudentSummary from "./pages/StudentSummary";

const routes = [
    {
      path: "/",
      element: <Home />,
      errorElement: <ErrorPage />
    }, 
    {
      path: "/about",
      element: <About />,
      errorElement: <ErrorPage />
    },
    {
      path: "/studentsummary",
      element: <StudentSummary />,
      errorElement: <ErrorPage />
    },
    // {
    //   path: "/profile/:id",
    //   element: <UserProfile />,
    //   errorElement: <ErrorPage />
    // }
  ];
  
  export default routes;
