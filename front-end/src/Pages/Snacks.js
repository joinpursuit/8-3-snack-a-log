import Index from "../Components/Index/Index.js";
import React from "react";
import { HelmetProvider, Helmet } from "react-helmet-async";

const Snacks = () => {
  return (
    <div>
      <HelmetProvider>
        <Helmet>
          <title>Snack-a-Log | Snacks</title>
        </Helmet>
      </HelmetProvider>
      <Index />
    </div>
  );
};

export default Snacks;
