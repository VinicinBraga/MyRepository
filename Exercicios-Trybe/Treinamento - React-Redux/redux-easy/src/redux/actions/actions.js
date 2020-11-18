 export function actionUpdate(value, tipo) {
  return {
    type:tipo.toUpperCase(),
    value
  }  
}
