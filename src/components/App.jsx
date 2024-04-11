import { Suspense, lazy } from "react";
import Navigation from "./Navigation/Navigation";
import { Route, Routes } from "react-router-dom";

const HomePage = lazy(() => import("../pages/HomePage/HomePage"));
const MoviesPage = lazy(() => import("../pages/MoviesPage/MoviesPage"));
const NotFoundPage = lazy(() => import("../pages/NotFoundPage/NotFoundPage"));
const MovieDetailsPage = lazy(() =>
  import("../pages/MovieDetailsPage/MovieDetailsPage")
);

import Loader from "../Components/Loader/Loader";
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
