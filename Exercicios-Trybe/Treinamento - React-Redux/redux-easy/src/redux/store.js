import { compose, createStore } from 'redux';
import reducerUsuario from './reducers/usuario';


const store = createStore(reducerUsuario, 
  
  compose(window.devToolsExtension ? 
    window.devToolsExtension() : (f) => f)
);

export default store;