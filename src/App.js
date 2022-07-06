import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import UserCartPage from "./pages/UserCartPage";
import DishDetailPage from "./pages/DishDetailPage";
import { dishesAction } from "./store/DishesData";
import { useDispatch } from "react-redux";
import { AnimatePresence } from "framer-motion";

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "97e57621d4mshd05ffecc4764034p18715cjsnb89b0b6d1540",
    "X-RapidAPI-Host": "tasty.p.rapidapi.com",
  },
};

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const location = useLocation();
  useEffect(() => {
    setIsLoading(true);
    fetch(
      "https://tasty.p.rapidapi.com/recipes/list?from=0&size=20&tags=under_30_minutes",
      options
    )
      .then((response) => response.json())
      .then((responseData) => {
        setIsLoading(false);
        console.log(responseData.results);
        dispatch(dishesAction.storeDataFetch(responseData.results));
      });

    // dispatch(
    //   dishesAction.storeDataFetch([
    //     {
    //       cook_time_minutes: "12",
    //       thumbnail_url:
    //         "https://img.buzzfeed.com/tasty-app-user-assets-prod-us-east-1/recipes/9e8f8595bb9149788fa68671c4fa1b92.jpeg",
    //       name: "My dish",
    //       id: 1,
    //       description:
    //         "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a odio commodo, scelerisque dolor eget, varius nisi. Sed aliquet eros in augue rutrum, ac gravida dui tincidunt. Aenean efficitur quam turpis, non dictum mi elementum eget. Cras id ligula facilisis, consectetur justo vitae, efficitur libero. Cras sed ante odio. Ut pretium eleifend libero, at mattis ex maximus posuere.",
    //     },
    //     {
    //       cook_time_minutes: "12",
    //       thumbnail_url:
    //         "https://img.buzzfeed.com/tasty-app-user-assets-prod-us-east-1/recipes/12d0a0ad35f845668386e6d488a09225.jpeg",
    //       name: "My dish 1",
    //       id: 2,
    //       description:
    //         "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a odio commodo, scelerisque dolor eget, varius nisi. Sed aliquet eros in augue rutrum, ac gravida dui tincidunt. Aenean efficitur quam turpis, non dictum mi elementum eget. Cras id ligula facilisis, consectetur justo vitae, efficitur libero. Cras sed ante odio. Ut pretium eleifend libero, at mattis ex maximus posuere.",
    //     },
    //     {
    //       cook_time_minutes: "12",
    //       thumbnail_url:
    //         "https://img.buzzfeed.com/tasty-app-user-assets-prod-us-east-1/recipes/b7df15dbc3214f328db7b8d0811b0c92.jpeg",
    //       name: "My dish 2",
    //       id: 3,
    //       description:
    //         "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a odio commodo, scelerisque dolor eget, varius nisi. Sed aliquet eros in augue rutrum, ac gravida dui tincidunt. Aenean efficitur quam turpis, non dictum mi elementum eget. Cras id ligula facilisis, consectetur justo vitae, efficitur libero. Cras sed ante odio. Ut pretium eleifend libero, at mattis ex maximus posuere.",
    //     },
    //   ])
    // );
  }, [dispatch]);

  return (
    <AnimatePresence exitBeforeEnter>
      <Routes location={location} key={location.pathname}>
        <Route exact path="/" element={<Navigate to="home" />} />
        <Route exact path="home" element={<HomePage isLoading={isLoading} />} />
        <Route path="home/:dishId" element={<DishDetailPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="user-cart" element={<UserCartPage />} />
      </Routes>
    </AnimatePresence>
  );
}

export default App;
