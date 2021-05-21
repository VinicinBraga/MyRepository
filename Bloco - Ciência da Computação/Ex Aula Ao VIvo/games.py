"""Lê as informações dos jogos em um catalogo e enumera os generos"""
import json

"""Abre o arquivo e carrega os jogos"""
with open('games.json') as catalogo:
    jogos = json.load(catalogo)

"""Prepara um set de generos para preenchermos"""
generos = set()  # set porque pega uma vez cada genero

"""Pega o genero de cada jogo e adiciona em um grande conjunto de generos"""
for jogo in jogos:
    generos_do_jogo = jogo['Metadata']['Genres'].split(',')
    for genero in generos_do_jogo:
        generos.add(genero)

"""Printa os generos na tela"""
for numero, item in enumerate(generos, 1):
    print(numero, item)
