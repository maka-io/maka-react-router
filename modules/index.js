/* components */
import Router from './Router';
import Link from './Link';

import IndexLink from './IndexLink'
import withRouter from './withRouter'

/* components (configuration) */
import IndexRedirect from './IndexRedirect'
import IndexRoute from './IndexRoute'
import Redirect from './Redirect'
import Route from './Route'

/* utils */
import { createRoutes } from './RouteUtils'
import RouterContext from './RouterContext'
import { locationShape, routerShape } from './PropTypes'
import match from './match'
import useRouterHistory from './useRouterHistory'
import { formatPattern } from './PatternUtils'
import applyRouterMiddleware from './applyRouterMiddleware'

/* histories */
import browserHistory from './browserHistory'
import hashHistory from './hashHistory'
import createMemoryHistory from './createMemoryHistory'

export {
  Router, Link, IndexLink, withRouter, IndexRedirect, IndexRoute,
  Redirect, Route, createRoutes, RouterContext, locationShape,
  routerShape, match, useRouterHistory, formatPattern, applyRouterMiddleware,
  browserHistory, hashHistory, createMemoryHistory };
