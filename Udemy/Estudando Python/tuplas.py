""" Tuplas (tuple) """

"""
Tuplas são bastante parecidas com as listas

Existem somente duas diferenças:

1 - As tuplas são representadas por parenteses ()

2 - As tuplas são 'Imutáveis':
Isso significa que ao se criar uma tupla ela não muda.
Toda a operação em uma tupla gera uma nova tupla.

"""

"""
# Cuidado 1: As tuplas são representadas por parenteses (), mas veja:
# Ambas as formas são tuplas, mesmo sem parenteses.
tupla1 = (1, 2, 3, 4, 5)
print(tupla1)
print(type(tupla1))

tupla2 = 1, 2, 3, 4, 5
print(tupla2)
print(type(tupla2))


# Cuidado 2: Tuplas com 1 elemento
tupla3 = 3
print(tupla3)  # retorna 3
print(type(tupla3))  # retona class 'int'
# Pois apesar de estar entre parenteses não é tuplas

# Cuidado 3: Tuplas com 1 elemento
tupla3 = (3,)
print(tupla3)  # retorna (3,)
print(type(tupla3))  # retona class 'tuple'
# Isso é uma tupla

# Cuidado 4: Tuplas com 1 elemento
tupla3 = (3,)
print(tupla3)  # retorna 3,
print(type(tupla3))  # retona class 'tuple'
# Isso é uma tupla

# Conlcusão
#  4   -> Não é tupla
# (4,) -> É uma tupla
#  4,  -> É uma tupla
s
"""
"""
# Desempacotamento de Tupla
tupla = ("Jesus", "Maria", "Jose")

filho, mãe, pai = tupla

print(filho)
print(mãe)
print(pai)
"""

# Obs: Metodos de adcao e remocao nao existem nas tuplas,...
# ...dado o fato de que as tuplas são imutaveis.

# Porque utilizar Tuplas e não Listas
# - Tuplas são mais rapidas do que listas
# - Tuplas deixam su codigo mais seguro
