import './App.css'
import { Routes, Route, Link } from "react-router-dom";
import Home from './routes/home';
import Users from './routes/users';
import User from './routes/user';
import NavBar from './routes/navbar';
import {ErrorBoundary} from 'react-error-boundary';


export default function App() {
  return (
    <main>
      <ErrorBoundary
        FallbackComponent={ErrorFallback}
      >
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='users' element={<Users />} />
          <Route path='users/:id' element={<User />} />
          <Route path='new' element={<User />} />
          <Route path='*' element={<ErrorPage />} />
        </Routes>
      </ErrorBoundary>
    </main>
  )
}

function ErrorFallback({error, resetErrorBoundary}) {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
      <button className="btn" onClick={resetErrorBoundary}>Try again</button>
    </div>
  )
}

function ErrorPage() {
  return (
    <div>
      <h1>404 Page </h1>
      <p>Page not found</p>
      <Link to="/">Back Home</Link>
    </div>
  )
}

