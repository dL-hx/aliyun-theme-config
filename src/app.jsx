export function patchRoutes({ routes }) {
  console.log(routes)
  routes.unshift({
    path: '/foo',
    exact: true,
    component: require('@/pages/demo').default,
  });
}
