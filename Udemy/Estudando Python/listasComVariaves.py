"""
# Podemos criar uma lista como:
numeros = [1, 2, 3, 4, 5]
# E mandar imprimi-la
print(numeros)
# Da mesma forma, podemos ter variaveis:

num1 = 1
num2 = 2
num3 = 3
num4 = 4
num5 = 5

numeros = [num1, num2, num3, num4, num5]
# E mandar imprimir
print(numeros)

"""

"""
# Podemos tambem ter acesso aos elementos de forma indexada
#           1         2         3       4
cores = ["verde", "amarelo", "azul", "branco"]

print(cores[0])  # verde
print(cores[1])  # amarelo
print(cores[2])  # azul
print(cores[3])  # branco

# Ou de forma inversa do index(como uma roda)
#          -4        -3        -2      -1
cores = ["verde", "amarelo", "azul", "branco"]

print(cores[-4])  # verde
print(cores[-3])  # amarelo
print(cores[-2])  # azul
print(cores[-1])  # branco

"""
"""
# fazendo um for
cores = ["verde", "amarelo", "azul", "branco"]
for cor in cores:
    print(cor)

# Gerando um 'indice' em um 'for' utilizando o 'enumarate
cores = ["verde", "amarelo", "azul", "branco"]

for indice, cor in enumerate(cores):
    print(indice, cor)

# LIsta aceita valores repetidos.
lista = []
lista.append(42)
lista.append(33)
lista.append(33)
lista.append(42)
lista.append(42)

print(lista)


# Outros metodos uteis:
# Encontrar pelo 'index'

numeros = [5, 7, 3, 9, 5, 6, 1, 8]

print(f"Posição {numeros.index(1)} na lista! ")
print(f"Posição {numeros.index(9)} na lista! ")
print(f"Posição {numeros.index(6)} na lista! ")

# Se existir um valor repetido ele retorna o primeiro encontrado
# Ex: Existem dois '5' na lista, assim ele retorna o primeiro
print(f"Posição {numeros.index(5)} na lista! ")  # retorna a posição: 0

# Podemos definir a busca então a partir da posição que queremos,
# Vamos pedir para bucar a partir da posição 1
print(f"Posição {numeros.index(5, 1)} na lista! ")  # retorna a posição: 4

# Podemos também fazer uma busca entre uma posição e outra
print(f"Posição {numeros.index(5, 2, 7)} na lista! ")  # retorna a posição: 4


# Revisando o Slicing
# lista[inicio:fim:passo]
# range(inicio:fim:passo)

lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

print(lista[1:9:2])

# Invertendo valores
# Da no mesmo fazer das seguintes formas:
nomes = ['Vinicius', 'Renata']
nomes[0], nomes[1] = nomes[1], nomes[0]
print(nomes)

nomes = ['Vinicius', 'Renata']
nomes.reverse()
print(nomes)


# Soma, valor maximo, minimo e tamanho da lista
lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
print(sum(lista))
print(max(lista))
print(min(lista))
print(len(lista))



# Desempacotamento
# Obs: A quantidade de valores na lista dever ser a 'mesma'...
# ...que as de variaveis definidas.

lista = [1, 7, 3]

num1, num2, num3 = lista

print(num1)
print(num2)
print(num3)
"""
