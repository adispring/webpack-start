export const search = (state = {}, action) => {
  switch (action.type) {
    case 'SEARCH_REQUEST':
      return {
        ...state,
        isFetching: true,
        didInvalidate: false,
        searchTerm: action.searchTerm
      };
    case 'SEARCH_SUCCESS':
      return {
        ...state,
        isFetching: false,
        didInvalidate: false,
        results: action.results,
        lastUpdated: action.receivedAt
      };
    case 'SEARCH_FAILURE':
      return {
        ...state,
        isFetching: false,
        didInvalidate: true
      };
    default:
      return state;
  }
}