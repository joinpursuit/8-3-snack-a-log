import Edit from "../Components/Edit.js";
import React from "react";
import { HelmetProvider, Helmet } from "react-helmet-async";

const EditSnacks = () => {
  return (
    <div>
      <HelmetProvider>
        <Helmet>
          <title>Snack-a-Log | Edit Snack</title>
        </Helmet>
      </HelmetProvider>
      <Edit />
    </div>
  );
};

export default EditSnacks;
