import React from "react";
import { RouteProps as RouterProps } from "react-router-dom";
import Hotel from "../pages/hotel";

const Home = React.lazy(() => import("../pages/home"));


export type RouteProps = {
  key: number;
  redirectUrl?: string;
} & RouterProps;

export const BaseRoutes: RouteProps[] = [
  {
    key: 1,
    path: "/",
    component: Home,
    exact: true,
  },
  {
    key: 2,
    path: "/hotel/:id",
    component: Hotel,
    exact: true,
  },
];
