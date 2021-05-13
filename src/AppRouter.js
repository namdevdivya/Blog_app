import React from "react";
import { Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import { configureStore } from "../src/redux/Store";
import BlogListing from "./Pages/Blog/BlogListing";
import AddBlog from './Pages/Blog/AddBlog'
import { EditBlog } from "./Pages/Blog/EditBlog";

const DefaultLayout = ({ children }) => {
  console.log("inside DefaultLayout");

  return <>{children}</>;
};

const routeArray = [
  {
    path: "/",
    component: BlogListing,
    exact: true,
    layout: LandingPageLayout,
  },
  {
    path: "/blog/add",
    component: AddBlog,
    exact: true,
    layout: LandingPageLayout,
  },
  {
    path: "/blog/edit/:index",
    component: AddBlog,
    exact: true,
    layout: LandingPageLayout,
  },
];


function LandingPageLayout({ children }) {
  return <>{children}</>;
}

export default function Layout() {
  const store = configureStore();
  return (
    <Provider store={store}>
      <Switch>
        {routeArray.map(
          (
            { layout: LayoutComponent, component: Component, ...rest },
            index
          ) => {
            console.log(LayoutComponent, Component, "LayoutComponent");

            return (
              <Route
                {...rest}
                key={index}
                render={(routeProps) => (
                  <LayoutComponent>
                    <Component {...routeProps} />
                  </LayoutComponent>
                )}
              />
            );
          }
        )}
      </Switch>
    </Provider>
  );
}
