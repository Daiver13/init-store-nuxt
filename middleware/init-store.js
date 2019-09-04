/* eslint-disable */
import axios from 'axios'

export default async function (context) {
  const {
    store,
    isHMR,
    redirect,
    route
  } = context

  if (isHMR) { // ignore if called from hot module replacement
    return;
  }

  await store.dispatch('profile/FETCH_PROFILE')
}
