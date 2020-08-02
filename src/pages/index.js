// Pages

import Main from "./main";
import Editor from "./editor";

// Routes => Compoonents
export default [
  { name: "Main", path: "/", Component: Main },
  { name: "Editor", path: "/editor", Component: Editor },
];
