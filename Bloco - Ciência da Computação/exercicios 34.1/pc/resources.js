const os = require('os')

console.log(`Plataforma: ${os.platform()}`)
console.log(`Versão: ${os.release()}`)
console.log(`Arquitetura: ${os.arch()}`)

const cpus = os.cpus()
console.log(`CPU ${cpus.length} cores:`)

cpus.forEach((core, index) => {
  console.log(`Core ${index + 1} - Modelo: ${core.model} | Velocidade ${core.speed / 1000}GHz`)
})

console.log(`Memória total: ${os.totalmem() / 1024 / 1024 / 1024}GB`)

setInterval(() => {
  const totalMemory = os.totalmem() / 1024 / 1024
  const freeMemory = os.freemem() / 1024 / 1024

  const usedMemory = (totalMemory - freeMemory).toFixed(2)

  console.log(`Uso de memória: ${usedMemory}/${totalMemory}MB`)
}, 1000)