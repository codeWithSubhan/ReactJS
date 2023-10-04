import { Suspense, lazy } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { CitiesProvider } from "./contexts/CityContext";
import { AuthProiver } from "./contexts/FakeAuthContext";
import ProtectedRoute from "./pages/ProtectedRoute";
import SpinnerFullPage from "./components/SpinnerFullPage";

import CityList from "./components/CityList";
import City from "./components/City";
import CountryList from "./components/CountryList";
import Form from "./components/Form";

// import Homepage from "./pages/Homepage";
// import Product from "./pages/Product";
// import Pricing from "./pages/Pricing";
// import PageNotFount from "./pages/PageNotFount";
// import Login from "./pages/Login";
// import AppLayout from "./pages/AppLayout";

const Homepage = lazy(() => import("./pages/Homepage"));
const Product = lazy(() => import("./pages/Product"));
const Pricing = lazy(() => import("./pages/Pricing"));
const PageNotFount = lazy(() => import("./pages/PageNotFount"));
const Login = lazy(() => import("./pages/Login"));
const AppLayout = lazy(() => import("./pages/AppLayout"));

// BUNDLE
// dist/index.html                   0.48 kB │ gzip:   0.31 kB
// dist/assets/index-aff7a0ad.css   30.11 kB │ gzip:   5.04 kB
// dist/assets/index-b8cc0773.js   525.02 kB │ gzip: 148.72 kB

// we split bundle into 6 chuncks that user click on each page then these file or bundle will download at once
// but we want to spinner uniil file did not download so react'suppense API come into play

// SUSPEND:
// IS a cuncurrent feature that part of modern react
// it supend or say wait while lazy loading is loading or downlading file until we can use our spinner😂
// by props fallback props or attributes

function App() {
  return (
    <AuthProiver>
      <CitiesProvider>
        <BrowserRouter>
          <Suspense fallback={<SpinnerFullPage />}>
            <Routes>
              <Route index element={<Homepage />} />
              <Route path="product" element={<Product />} />
              <Route path="pricing" element={<Pricing />} />
              <Route path="login" element={<Login />} />
              <Route
                path="app"
                element={
                  <ProtectedRoute>
                    <AppLayout />
                  </ProtectedRoute>
                }
              >
                <Route index element={<Navigate replace to="cities" />} />
                <Route path="cities" element={<CityList />} />
                <Route path="cities/:id" element={<City />} />
                <Route path="countries" element={<CountryList />} />
                <Route path="form" element={<Form />} />
                <Route path="login" element={<Login />} />
              </Route>
              <Route path="*" element={<PageNotFount />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </CitiesProvider>
    </AuthProiver>
  );
}

export default App;
