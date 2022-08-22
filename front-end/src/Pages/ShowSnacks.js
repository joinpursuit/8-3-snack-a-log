import Show from "../Components/Show.js";
import React from "react";
import { HelmetProvider, Helmet } from "react-helmet-async";

const ShowSnacks = () => {
  return (
    <div>
      <HelmetProvider>
        <Helmet>
          <title>Snack-a-Log | Snack Details</title>
        </Helmet>
      </HelmetProvider>
      <Show />
    </div>
  );
};

export default ShowSnacks;
