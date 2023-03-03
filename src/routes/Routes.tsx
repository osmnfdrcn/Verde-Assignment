import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "../components";
import Spinner from "../components/Spinner";

const HomePage = React.lazy(() => import("../pages/HomePage"));
const PostPage = React.lazy(() => import("../pages/PostPage"));
const NotFound = React.lazy(() => import("../pages/NotFoundPage"));

const paths = {
  home: "/",
  post: "/posts/:id",
  notFound: "*",
};

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route path={paths.home} element={<HomePage />} />
          <Route path={paths.post} element={<PostPage />} />
          <Route path={paths.notFound} element={<NotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default AppRoutes;
