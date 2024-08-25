import { ActionTypes } from './actions'
const defaultSectionData = {
  cspm: {
    key: 'cspm',
    title: 'CSPM Executive dashboard',
    tiles: [
      {
        id: 0,
        show: true,
        title: 'Cloud Account',
        dataPoints: [
          { title: 'One', value: 10, color: 'blue' },
          { title: 'Two', value: 10, color: 'skyblue' }
        ]
      },
      {
        id: 1,
        show: true,
        title: 'Cloud Account Risk Assessment',
        dataPoints: [
          { title: 'One', value: 10, color: '#E38627' },
          { title: 'Two', value: 15, color: '#C13C37' },
          { title: 'Three', value: 20, color: '#6A2135' }
        ]
      },
      {
        id: 2,
        show: true,
        title: 'CSPM Executive 1',
        dataPoints: [
          { title: 'One', value: 10, color: '#E38627' },
          { title: 'Two', value: 15, color: '#C13C37' },
          { title: 'Three', value: 20, color: '#6A2135' }
        ]
      },
      {
        id: 3,
        show: true,
        title: 'CSPM Executive 2',
        dataPoints: [
          { title: 'One', value: 10, color: '#E38627' },
          { title: 'Two', value: 15, color: '#C13C37' },
          { title: 'Three', value: 20, color: '#6A2135' }
        ]
      }
    ]
  },
  cwpp: {
    key: 'cwpp',
    title: 'CWPP dashboard',
    tiles: [
      {
        id: 0,
        show: true,
        title: 'Top 5 Name Specific Alerts'
      },
      {
        id: 1,
        show: true,
        title: 'Workload Alert'
      },
      {
        id: 2,
        show: true,
        title: 'CWPP Entry Dummy 1'
      },
      {
        id: 3,
        show: true,
        title: 'CWPP Entry Dummy 2'
      }
    ]
  },
  registry: {
    key: 'registry',
    title: 'Registry Scan',
    tiles: [
      {
        id: 0,
        show: true,
        title: 'Image Risk Assessment',
        dataPoints: [
          { title: 'One', value: 10, color: '#E38627' },
          { title: 'Two', value: 15, color: '#C13C37' },
          { title: 'Three', value: 20, color: '#6A2135' }
        ]
      },
      {
        id: 1,
        show: true,
        title: 'Image Security Issue',
        dataPoints: [
          { title: 'One', value: 10, color: '#E38627' },
          { title: 'Two', value: 15, color: '#C13C37' },
          { title: 'Three', value: 20, color: '#6A2135' }
        ]
      },
      {
        id: 2,
        show: true,
        title: 'Registry Widget Dummy 1',
        dataPoints: [
          { title: 'One', value: 10, color: '#E38627' },
          { title: 'Two', value: 15, color: '#C13C37' },
          { title: 'Three', value: 20, color: '#6A2135' }
        ]
      },
      {
        id: 3,
        show: true,
        title: 'Registry Widget Dummy 2',
        dataPoints: [
          { title: 'One', value: 10, color: '#E38627' },
          { title: 'Two', value: 15, color: '#C13C37' },
          { title: 'Three', value: 20, color: '#6A2135' }
        ]
      }
    ]
  }
}
const initialState = {
  ...defaultSectionData
}

const dashboardReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.ADD_CSPM_TILE:
      return {
        ...state,
        cspm: {
          ...state.cspm,
          tiles: [...action.payload.tiles]
        }
      }
    case ActionTypes.ADD_CWPP_TILE:
      return {
        ...state,
        cwpp: {
          ...state.cwpp,
          tiles: [...action.payload.tiles]
        }
      }
    case ActionTypes.ADD_REGISTRY_TILE:
      return {
        ...state,
        registry: {
          ...state.registry,
          tiles: [...action.payload.tiles]
        }
      }

    default:
      return state
  }
}

export default dashboardReducer
