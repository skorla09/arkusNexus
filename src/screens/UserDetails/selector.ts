import { createSelector } from 'reselect'

const getDetails = (state: any) => state.details

export const getDetailsState = createSelector([getDetails], (details) => details)

