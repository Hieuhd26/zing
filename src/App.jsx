import { useState, useEffect } from "react";
import { Routes, Route } from "react-router";
import { path } from "./utils/path";
import { Home, Public, Login } from "./containers/public/index";
import * as actions from "./stores/actions";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.getHome());
  }, []);
  return (
    <>
      <Routes>
        <Route path={path.PUBLIC} element={<Public />}>
          <Route path={path.HOME} element={<Home />} />
          <Route path={path.LOGIN} element={<Login />} />

          <Route path={path.STAR} element={<Home />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
