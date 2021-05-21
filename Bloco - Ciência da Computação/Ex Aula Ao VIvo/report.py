"""Caulcula o total de vendas e a media de notas de cada genero"""

import json
import csv

with open('games.json') as catalogo:
    jogos = json.load(catalogo)

with open('genres.json') as generos_arquivo:
    generos = json.load(generos_arquivo)

relatorio = dict()
for genero in generos:
    relatorio[genero] = {'vendas': [], 'notas': []}

for jogo in jogos:
    vendas = jogo['Metrics']['Sales']
    nota = jogo['Metrics']['Review Score']

    generos_do_jogo = jogo['Metadata']['Genres'].split(',')
    for genero in generos_do_jogo:
        relatorio[genero]['vendas'].append(vendas)
        relatorio[genero]['notas'].append(nota)

with open('relatorio.csv', 'w') as relatorio_csv:
    writer = csv.writer(relatorio_csv)

    for genero, info in relatorio.items():
        total_de_vendas = sum(info['vendas'])
        media_das_notas = sum(info['notas']) / len(info['notas'])
        writer.writerow([genero, total_de_vendas, media_das_notas])
