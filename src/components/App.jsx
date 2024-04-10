import { Suspense } from "react";
import Navigation from "./Navigation/Navigation";
import { Route, Routes } from "react-router-dom";

import Loader from "../Components/Loader/Loader";
import HomePage from "../pages/HomePage/HomePage";
import MoviesPage from "../pages/MoviesPage/MoviesPage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import MovieDetailsPage from "../pages/MovieDetailsPage/MovieDetailsPage";

function App() {
  return (
    <>
      <header>
        <Navigation />
      </header>
      <main>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/movies" element={<MoviesPage />}></Route>
            <Route path="*" element={<NotFoundPage />}></Route>
            <Route path="/movies/:movieId/*" element={<MovieDetailsPage />} />
          </Routes>
        </Suspense>
      </main>
    </>
  );
}

export default App;
