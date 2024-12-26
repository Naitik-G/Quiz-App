import React from "react";
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client'; // React 18 correct import
import App from './App.jsx';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Sections from './Sections.jsx';
import QuizPage from './pages/QuizPage.jsx';
import ResultPage from "./pages/ResultPage.jsx";


// Define the router correctly
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/', // Use "/" for the default route
        element: <Sections />
      },
      {
        path: '/quizpage',
        element: <QuizPage />
      },
     
      {
        path: '/resultpage',
        element: <ResultPage />
      },
     
    ]
  }
]);

// Mount the app using createRoot
createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={router} />
  </StrictMode>
);
