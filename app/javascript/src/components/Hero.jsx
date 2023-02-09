import React from "react";

import { Redirect } from "react-router-dom";

import { LOGIN_PATH, DASHBOARD_PATH } from "components/routeConstants";

const Hero = () => (
  <div className="flex h-screen flex-row items-center justify-center">
    <Redirect from={DASHBOARD_PATH} to={LOGIN_PATH} />
  </div>
);

export default Hero;
