# Shallow copy
print("Shallow Copy")
listaBase = [1, 2, 3, 4]
print(listaBase)

nova = listaBase  # Estamos dizendo que as duas...
# ...a partir de agora são a mesma coisa

print(nova)

nova.append(5)

print(listaBase)  # Ao alterar a nova alteramos também a listaBase
print(nova)


# Para não alterarmos a lista base a melhor opção é:
# Deep Copy
print("Deep Copy")
listaBase2 = [1, 2, 3, 4]
print(listaBase2)

new = listaBase2.copy()

print(new)

new.append(5)

print(listaBase2)
print(new)
