module.exports = {
  childRoutes: [{
    path: '/',
    component: require('../containers/Index').default,
    indexRoute: { onEnter: (nextState, replace) => replace('/events') },
    childRoutes: [
      require('./login')
    ]
  }]
};
