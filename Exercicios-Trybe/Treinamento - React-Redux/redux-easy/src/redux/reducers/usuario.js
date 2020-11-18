
const INITIAL_USUARIO = {
  page: 'Revisão de ReduX',
  nome: "",
  email: "",
  password: "",
  movie: "",
}

function reducerUsuario(state = INITIAL_USUARIO, action){
  switch (action.type) {
    case 'NOME':
      return {...state,nome:action.value}
    case 'EMAIL':
      return {...state,email:action.value}
    case 'PASSWORD':
      return {...state,password:action.value}
    case 'MOVIE':
      return {...state,movie:action.value}
    default:
      return state
  }
}

export default reducerUsuario;
