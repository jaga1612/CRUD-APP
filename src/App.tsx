import React from "react";
import {
  unstable_HistoryRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

import Header from "./components/Header";
import CreatPost from "./components/CreatePost";
import RenderList from "./components/RenderList";
import EditPost from "./components/Editpost";
import DeletePost from "./components/Deletepost";

import history from "./history";

const App: React.FC = () => {
  return (
    <div className="mui-container-fluid ">
      <Router history={history}>
        <Header />
        <Routes>
          <Route path="/" element={<RenderList />} />
          <Route path="/create" element={<CreatPost />} />
          <Route path="/edit/:id" element={<EditPost />} />
          <Route path="/delete/:id" element={<DeletePost />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
