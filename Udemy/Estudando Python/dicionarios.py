"""
Dicionarios são coleções do tipo chave/valor
E são representados por chaves '{}'

"""
"""
# Forma mais comum
#        chave:   valor , chave:     valor       ,chave:   valor
paises = {"br": "Brasil", "eua": "Estados Unidos", "py": "Paraguai"}
print(paises)
print(type(paises))

# Forma menos comum
paises = dict(br="Brasil", eua="Estados Unidos", py="Paraguai")
print(paises)
print(type(paises))
"""
"""
# Acessando Elementos
# Forma 1 - Via 'GET' - recomendada - pois naro retorna erro caso o valor...
# ...não exista e sim um erro
paises = {"br": "Brasil", "eua": "Estados Unidos", "py": "Paraguai"}
print(paises.get("br"))  # Brasil
print(paises.get("py"))  # Paraguai
print(paises.get("ru"))  # Retorna 'NONE', pois não existe


# Forma 2 - Aqui, caso voe busque um valor que não existe ele retorna um erro.
paises = {"br": "Brasil", "eua": "Estados Unidos", "py": "Paraguai"}
print(paises["br"])  # Brasil
print(paises["py"])  # Paraguai
print(paises["ru"])  # Retorna Erro, pois não existe
"""
"""
# Tratar o 'None' é mais simples que tratar erro...

paises = {"br": "Brasil", "eua": "Estados Unidos", "py": "Paraguai"}
pais = paises.get("ru")

if pais:
    print(f"Encontrei o pais {pais}")
else:
    print(f"Não encontrei o pais")

# O mesmo exemplo, porem com um valor padrão caso não encontremos o
# objeto com a chave informadao

paises = {"br": "Brasil", "eua": "Estados Unidos", "py": "Paraguai"}
pais = paises.get("ru", "Não existe")

print(f"Encontrei o pais {pais}")
"""
"""
# Verificando se a chave se encontra no dicionario
paises = {"br": "Brasil", "eua": "Estados Unidos", "py": "Paraguai"}

print("br" in paises)  # true
print("br" in paises)  # true
print("Estados Unidos" in paises)  # False, pois é um 'valor'
"""
"""
# Podemos usar qualquer tipo de dado(int, float, string,...
# boolean, lista, tupla, etc...) como chaves de dicionarios.
# Ex:
localidades = {
    (35.685, 39.699): "Escritorio em Tókio",
    (65.789, 98.789): "Escritorio em New york",
    (47.147, 96.357): "Escritorio em São Paulo",
}
print(localidades)
print(type(localidades))
"""
"""
# Adcionar elementos em um dicionario
# Forma 1
receita = {"jan": 130, "fev": 155, "mar": 180}
receita["abr"] = 175
print(receita)

# Forma 2
novo_dado = {"mai": 200}
receita.update(novo_dado)
print(receita)

# Forma 3
receita.update({"jun": 170})
print(receita)


# Atualizando dados em um dicionario
# Forma 1
receita["abr"] = 180
print(receita)

# Forma 2
novo_dado = {"mai": 210}
receita.update(novo_dado)
print(receita)

# Forma 3
receita.update({"jun": 160})
print(receita)
"""


"""
# Como Remover os dados de um dicionario
receita = {"jan": 130, "fev": 155, "mar": 180}
# Forma 1 - 'Forma mais comum'
popMar = receita.pop("mar")
print(popMar)
print(receita)
# Obs: Ao removermos um objeto o valor dele ainda é retornado.

# Forma 2
del receita["fev"]
print(receita)
"""

"""
# Exemplo de comu usar dicionarios

carrinho = []

prodruto1 = {'nome': 'FIFA 21', 'qtd': 23, 'preço': 250.00}
prodruto2 = {'nome': 'Playstation 4', 'qtd': 15, 'preço': 4250.00}

carrinho.append(prodruto1)
carrinho.append(prodruto2)

print(carrinho)

"""

# Metodos de Dicionario
# fromkeys(chave, valor)
# 1 exemplo: Simples
novo_dicionario = {}.fromkeys("a", 77)
print(novo_dicionario)
print(type(novo_dicionario))

# 2 exemplo: Varias chaves - Aqui vriamos varias...
# ...chaves com valores desconhecidos
usuario = {}.fromkeys(["nome", "email", "senha", "nickname"], "Vazio")
print(usuario)
print(type(usuario))

# 3 exemplo: (Perceba a diferença usando chaves ou não)
veja = {}.fromkeys(["Nome"], "Vinicius")
print(veja)  # retorna -> {'Nome': 'Vinicius'}

veja = {}.fromkeys("Nome", "Vinicius")
print(veja)
# retorna -> {
#             'N': 'Vinicius',
#             'o': 'Vinicius',
#             'm': 'Vinicius',
#             'e': 'Vinicius'
#            }
