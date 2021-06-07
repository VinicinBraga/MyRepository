nome = "fala zeze"
lista = [1, 3, 5, 7, 9]
numbers = lista[0:3]  # Lista é como se fosse um funçao 'range(0, 3)'

"""
# Exemplo de for 1 (iterando sobre string)
for letra in nome:
    print(letra)

# Exemplo de for 2 (iterando sobre lista)
for numeros in lista:
    print(numeros)

# Exemplo de for 3 (iterando sobre range)
for numero in numbers:
    print(numero)

# Obs: Enumarate
# O Enumarate retorna uma lista enumerada
for valor in enumerate(nome):
    print(valor)

# Obs: indice
# Eu uso o enumarate, mas descarto os numeros
for i, letra in enumerate(nome):
    print(letra)

for _, letra in enumerate(nome):
    print(letra)

qtd = int(input("Qantas vezes esse loop vai rodar?"))

for n in range(1, qtd + 1):
    print(f'Rodou {n}')


qtd = int(input("Qantas vezes esse loop vai rodar? "))
soma = 0

for n in range(1, qtd + 1):
    num = int(input(f"de um valor para o Loop {n} de {qtd}: "))
    soma = soma + num
print(f"A soma é  {soma}")


nome = 'Fala, Zezé! Blz, cara?'
for letrasVerticais in nome:
    print(letrasVerticais)

for letrasHorizontais in nome:
    print(letrasHorizontais, end='')

Tabela de Emojis Unicode: http://apps.timwhilock.info/emoji/tables/unicode

"""
# Original: U+1F605
# Modificado: U0001F605 ---> É necessario substituir o + por 000

emoji = '\U0001F605'
for x in range(3):
    for num in range(1, 11):
        print(f'{emoji * num}')
