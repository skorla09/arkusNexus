import { createSelector } from 'reselect'
import { User } from '../../types/common'

const homeSelector = (state: any) => state.home

export const getHomeState = createSelector([homeSelector], (home) => {
  return home
})