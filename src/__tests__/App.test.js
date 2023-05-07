import "@testing-library/jest-dom";
import React from "react";
import { render, screen } from "@testing-library/react";
import { createMemoryHistory } from "history";
import { BrowserRouter } from "react-router-dom";
import App from "../components/App";
import { Router, Switch } from "react-router-dom/cjs/react-router-dom.min";
import NavBar from "../components/NavBar";
import { Route } from "react-router-dom/cjs/react-router-dom";
import Home from "../components/Home";

test("renders the <NavBar /> component", () => {
  const { container } = render(
    <BrowserRouter>
      <App />

    </BrowserRouter>
  );
  expect(container.querySelector(".navbar")).toBeInTheDocument();
});

test('renders the Home component using the <Route path="/">', () => {
  window.history.pushState({}, "", "/");
  render(
    <BrowserRouter>
      <App />
      <Router>
        <Route path="/">
          <Home />
        </Route>
      </Router>  
    </BrowserRouter>
  );
  expect(screen.queryByText(/Home Page/g)).toBeInTheDocument();
});

test('renders the Actors component using the <Route path="/actors">', () => {
  window.history.pushState({}, "", "/actors");
  render(
    <BrowserRouter>
      <App />
      <Router>
        <Route path="/actors">
          <actors />
        </Route>
      </Router>
    </BrowserRouter>
  );
  expect(screen.queryByText(/Actors Page/g)).toBeInTheDocument();
});

test('renders the Directors component using the <Route path="/directors">', () => {
  window.history.pushState({}, "", "/directors");
  render(
    <BrowserRouter>
      <App />
      <Router>
        <Route path="/directors">
          <Directors/>
        </Route>
      </Router>
    </BrowserRouter>
  );
  expect(screen.queryByText(/Directors Page/g)).toBeInTheDocument();
});

test('renders the Movies component using the <Route path="/movies">', () => {
  window.history.pushState({}, "", "/movies");
  render(
    <BrowserRouter>
      <App />
        <Route path="/movies">
          <Movies />
        </Route>
    </BrowserRouter>
  );
  expect(screen.queryByText(/Movies Page/g)).toBeInTheDocument();
});
/*const navBar=()=>{
  return(
    <Router>
      <NavBar/>
      <Switch>
        <Route path="/">
          <Home/>
        </Route>
        <Route path="/actors">
          <Actors/>
        </Route>
        <Route  path ="/directors">
          <Directors/>
        </Route>
        <Route path="/movies">
          <Movies/>
        </Route>
      </Switch>
    </Router>
  )
}*/
