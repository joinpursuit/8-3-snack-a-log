import { HelmetProvider, Helmet } from "react-helmet-async";

const Error = () => {
  return (
    <div>
      <HelmetProvider>
        <Helmet>
          <title>Snack-a-Log | Error</title>
        </Helmet>
      </HelmetProvider>
      <h1>Page Not Found</h1>
    </div>
  );
};

export default Error;
