export const Types = {
    ADD_REQUEST: 'todos/ADD_REQUEST',
    ADD_SUCCESS: 'todos/ADD_SUCCESS',
    ADD_FAILURE: 'todos/ADD_FAILURE',
    REMOVE: 'todos/REMOVE',
  };
  
  const INITIAL_STATE = {
    loading: false,
    data: [],
    error: null,
  };
  
  export default function todos(state = INITIAL_STATE, action) {
    switch (action.type) {
      case Types.ADD_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case Types.ADD_SUCCESS:
        return {
          data: [...state.data, action.payload.data],
          loading: false,
          error: null,
        };
      case Types.ADD_FAILURE:
        return { ...state, loading: false, error: action.payload.error };
      case Types.REMOVE:
        return { ...state, data: state.data.filter(todo => todo.id !== action.payload.todo.id) };
      default:
        return state;
    }
  }
  
  export const Creators = {
    addTodoRequest: (todo, cordinates) => ({
      type: Types.ADD_REQUEST,
      payload: { todo, cordinates },
    }),
  
    addTodosuccess: data => ({
      type: Types.ADD_SUCCESS,
      payload: { data },
    }),
  
    addTodoFailure: error => ({
      type: Types.ADD_FAILURE,
      payload: { error },
    }),
    removeTodo: todo => ({
      type: Types.REMOVE,
      payload: { todo },
    }),
  };