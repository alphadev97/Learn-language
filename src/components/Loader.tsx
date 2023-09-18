import { CircularProgress } from "@mui/material";

// const Loader = () => {
//   return (
//     <div>
//       <CircularProgress />
//     </div>
//   );
// };

// export default Loader;

import React from "react";

const centerStyle: React.CSSProperties = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "100vh", // Ensure the container takes up the full viewport height
};

const Loader = () => {
  return (
    <div style={centerStyle}>
      <CircularProgress />
    </div>
  );
};

export default Loader;
