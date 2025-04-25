import { createElement } from "react";
import { FormBuilder, Home } from "../pages";

export const ROUTES = [
  {
    path: "/",
    element: createElement(Home),
  },
  {
    path: "/form",
    element: createElement(FormBuilder),
  },
];
