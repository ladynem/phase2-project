import Nav from "../components/Nav"
import { useRouteError } from "react-router-dom"

function ErrorPage() {
  const error = useRouteError()
  console.error(error)

  return (
    <>
      <header>
        <Nav />
      </header>
      <main>
        <h1>Whoops! Something went wrong!</h1>
      </main>
    </>
  )
}

export default ErrorPage