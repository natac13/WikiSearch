import React  from 'react';

/*** Components ***/

import Main   from '../Components/Main';
import Search from '../Components/Search';

import { Router, Route, IndexRoute } from 'react-router';


export default (
  <Route path="/" component={Main}>
    <IndexRoute component={Search} />
  </Route>
);