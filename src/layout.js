import React from 'react';
import { Switch, Route } from 'react-router-dom';
import * as routes from './routeConstants';
import AboutUs from './components/about_us';
import OurTeam from './components/team';
import Home from './components/home';
import ContactUs from './components/contact_us';
import Services from './components/services';
import Technologies from './components/technologies';
import FFD from './components/success_stories';

const Layout = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path={routes.ABOUT_US_URL} component={AboutUs} />
      <Route exact path={routes.OUR_TEAM_URL} component={OurTeam} />
      <Route exact path={routes.CONTACT_US_URL} component={ContactUs} />
      <Route exact path={routes.SERVICES_URL} component={Services} />
      <Route exact path={routes.TECHNOLOGIES_URL} component={Technologies} />
      <Route exact path={routes.FFD_SUCCESS_STORY_URL} component={FFD} />
    </Switch>
  );
}

export default Layout;
