import New from '../Components/New.js'
import React from 'react'
import { HelmetProvider, Helmet } from "react-helmet-async";

const NewSnacks = () => {
    return (
      <div>
        <HelmetProvider>
          <Helmet>
            <title>Snack-a-Log | New</title>
          </Helmet>
        </HelmetProvider>
        <New />
      </div>
    );
}

export default NewSnacks;