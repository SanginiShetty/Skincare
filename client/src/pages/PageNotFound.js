import React from "react";
import { Link } from "react-router-dom";
import Layout from "./../components/layout/Layout.js";

const Pagenotfound = () => {
  return (
    <Layout title={'Go back - page not found'}>
      <div className="pnf">
        <h1 className="pnf-title">404</h1>
        <h2 className="pnf-heading">Oops ! Page Not Found</h2>
        <Link to="/" className="pnf-btn">
          Go Back
        </Link>
      </div>
    </Layout>
  );
};

export default Pagenotfound;