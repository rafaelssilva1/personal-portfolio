import { Global } from "@emotion/react";
import GlobalStyles from "./theme/global.styles";

import { BrowserRouter, Route, Routes } from "react-router";
import Home from "@/pages/Home/Home";
import Project from "@/pages/Project/Project";
import NotFound from "@/pages/NotFound/NotFound";
import Loading from "./components/loading/Loading";
import Header from "./sections/header/Header";

const App: React.FC = () => {
  return (
    <>
      <Global styles={GlobalStyles} />
      <Loading />
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path='*' element={<NotFound />} />
          <Route path="/" element={<Home />} />
          <Route path="projects">
            <Route index element={<Home />} />
            <Route path=":id" element={<Project />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
