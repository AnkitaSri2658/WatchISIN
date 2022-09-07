import { Router, Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import WebsocketComponent from "./components/watchlist/WebsocketComponent";
import NewWatchListPage from "./pages/NewWatchListPage";
import WatchListPage from "./pages/WatchListPage";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<NewWatchListPage />} />
        <Route path="/web" element={<WebsocketComponent />} />
        <Route path="/watchlist" element={<WatchListPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
