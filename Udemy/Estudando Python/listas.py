"""
Listas:

Listas em Python funciona como Arrays em outras linguagens, com a diferença
de serem dinamicos e também de podermos colocar qualquer tipo de dado.

"""

lista1 = [1, 87, 45, 36, 76, 56, 13, 23, 43, 85, 19, 1, 4, 77]

lista2 = ["F", "a", "l", "a", ",", " ", "Z", "e", "z", "é", "!"]

lista3 = []

lista4 = list(range(11))

lista5 = ["Fala,Zezé,", "Blz,cara?"]


"""
# Podemos facilmente se um valor existe em uma lista
num = 7
if num in lista4:
    print(f"Encontrei o {num}")
else:
    print(f"Não encontrei o {num} não, amigão!")

# Podemos também colocar em ordem crescente
lista1.sort()
print(lista1)

# Podemos contar o numero de recorrencia de um numero em uma lista
print(lista1.count(1))
print(lista5.count("a"))

# Adicionar elementos em lista
# Obs: Para adcionar utilizamos a função 'append', porém...
# ...com só é possivel add 1 elemento.
print(lista1)
lista1.append(42)
print(lista1)

# Para adcionar mais de um elemento utilizamos o extend
lista1.extend([100, 105, 207])
print(lista1)


# Para adcionar elementos na posição que queremos, utilizamos o 'insert'
# E definimos na função insert a posição do indice ---> insert(? , Valor)
lista1.insert(6, 404)
print(lista1)
lista1.sort()
print(lista1)

lista5.insert(0, 'Fala, Zezé!')
print(lista5)


# Para inverter uma lista usamos o reverse ou o [:: -1](slice)
# slice vai da posição 0 até a -1
print(lista1)
print(lista1[::-1])
# reverse
print(lista1)
lista1.reverse()
print(lista1)

# Podemos também copiar uma lista

lista6 = lista4.copy()
print(lista6)

# Para sabermos o tamanho da lista utilizamos o 'len'
print(len(lista4))

# podemos também remover um elemento utilizano o 'pop'
# Mas o 'pop' não só remove, mas também retorna o numeor removido
print(lista1)
lista1.pop()
print(lista1)

# Com o 'pop' podemos expecificar qual posição do array queremos remover

print(lista1)
lista1.pop(2)
print(lista1)

# Podemos tambem remover todos os elementos com o 'clear'

print(f'Antes do clear: {lista1}')
lista1.clear()
print(f'Depois do clear: {lista1}')


# Podemos também repetir os elementos em uma lista:

print(f"Antes de repetir: {lista5}")
print(f"Depois de repetir: {(lista5*3)} ")  # multiplicamos a lista por 3

# Podemos converter uma string para uma lista
# (separando pelos espaços - palavra por palavra)

frase = "Blz, Cara!?"
print(frase)
frase = frase.split()
print(frase)

# (separando por onde quero definir - Por exemplo pelas virgulas)
frase = "Blz,Cara!?"
print(frase)
frase = frase.split(",")
print(frase)


# Podemos também transformar uma lista em string:
# Utilizamos o 'join' e definimos onde e como queremos separalas
# ("", " " ou colocando qualquer outro algaritimo entre elas '$' se eu quiser)
print(lista2)
frase = "".join(lista2)
print(frase)

print(lista5)
frase2 = " ".join(lista5)
print(frase2)


# Iterando sobra uma lista
# for
soma = 0
for elemento in lista1:
    print(elemento)
    soma += elemento
print(f'A soma de todos os numeros da lista é: {soma}')


# Iterando sobra uma lista
# while
carrinho = []
produto = ''

while produto != 'sair':
    print("Adicione um produto ao seu carrinho ou digite 'sair' para sair: ")
    produto = input()
    if produto != 'sair':
        carrinho.append(produto)

for produto in carrinho:
    print(produto)

"""
