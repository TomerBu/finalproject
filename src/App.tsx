import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { useAppDispatch } from "./app/hooks";
import TopNav from "./components/top-nav/TopNav";
import AboutView from "./routes/about/AboutView";
import FavoritesView from "./routes/favorites/FavoritesView";
import NewsDetailsView from "./routes/news-details/NewsDetailsView";
import NewsView from "./routes/news/NewsView";
import { fetchNews } from "./features/news/newsSlice";
import LoaderSpinners from "./components/loader-spinners/LoaderSpinners";
import { IconContext } from "react-icons";

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchNews());
  }, [dispatch]);
  return (
    <>
      <TopNav />

      <LoaderSpinners />
      <IconContext.Provider value={{color: 'red', size:'100px'}}>
        <Routes>
          <Route path="/" element={<NewsView />} />
          <Route path="/favorites" element={<FavoritesView />} />
          <Route path="/about" element={<AboutView />} />
          <Route path="/news" element={<NewsView />} />
          {/* master detail: */}
          <Route path="/news/:id" element={<NewsDetailsView />} />
        </Routes>
      </IconContext.Provider>
    </>
  );
}

export default App;
