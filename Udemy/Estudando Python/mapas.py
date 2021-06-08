"""
Mapas são conhecidos em python como dicionarios
"""

receita = {"jan": 130, "fev": 155, "mar": 180}

"""
# Como iterar nos dicionarios
for chave in receita:
    print(chave)  # chaves

for chave in receita:
    print(receita[chave])  # valores

for chave in receita:
    print(f" Em {chave} recebi R${receita[chave]}")  # chaves : valores
"""
"""
Metodo pythonico(Forma correta)
print(receita.keys())  # retorna -> dict_keys(['jan', 'fev', 'mar'])

for chave in receita.keys():  # <- Metodo pythonico de acessar as chaves
    print(receita[chave])  # chaves

for valor in receita.values():  # <- Metodo pythonico de acessar os valores
    print(valor)  # chaves

"""
"""
# Desempacotamento

print(receita.items())

for chave, valor in receita.items():
    print(f"chave = {chave} e valor= {valor}")

"""
"""
# soma, valor maximo, minimo e tamanho
# Se os valores forem inteiros.

print(sum(receita.values()))
print(max(receita.values()))
print(min(receita.values()))
print(len(receita))
"""
