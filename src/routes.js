import Home from "./pages/Home"
import About from "./pages/About"
import StudentSummary from "./pages/StudentSummary"
import ErrorPage from "./pages/ErrorPage"

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
    }
  ];
  
  export default routes
