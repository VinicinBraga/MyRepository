"""
Break.

O break serve para sairmos de um Loop de maneira projetada

"""
"""
# Exemplo 1:

for numero in range(1, 11):
    if numero == 6:
        break
    else:
        print(numero)
"""

# Exemplo 1:

while True:
    comando = input('Digite "sair" para sair: ')
    if comando == "sair":
        break
print("Bye!")
