import {
  type RouteConfig,
  layout,
  route,
  index,
} from "@react-router/dev/routes";

export default [
  layout("routes/home.tsx", [
    index("routes/welcome.tsx"), // Home page (acts as the layout)
    route("about", "routes/about.tsx"), // About as a child route
    route("search", "routes/search.tsx"), // Search as a child route
    route("pokemon/:name", "routes/details.tsx"), // Details as a child route
  ]),
] satisfies RouteConfig;
