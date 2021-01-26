import { createSelector } from 'reselect'

const homeSelector = (state: any) => state.home
const detailsSelector = (state: any) => state.details

export const getHomeState = createSelector([homeSelector, detailsSelector], (home, details) => {

  const userToUpdate = details.userToUpdate
  return { ...home, userToUpdate }
})