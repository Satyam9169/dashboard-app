export const ActionTypes = {
  ADD_CSPM_TILE: 'ADD_CSPM_TILE',
  ADD_CWPP_TILE: 'ADD_CWPP_TILE',
  ADD_REGISTRY_TILE: 'ADD_REGISTRY_TILE'
}

export const addCspmTile = payload => ({
  type: ActionTypes.ADD_CSPM_TILE,
  payload
})

export const addCwppTile = payload => ({
  type: ActionTypes.ADD_CWPP_TILE,
  payload
})

export const addRegistryTile = payload => ({
  type: ActionTypes.ADD_REGISTRY_TILE,
  payload
})
