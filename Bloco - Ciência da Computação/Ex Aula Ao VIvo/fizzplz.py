"""Pede um numero para o usuario, executa fizzbuzz no numero"""
from fizzbuzz import fizzbuzz
import sys


def pedir_numero():
    """pede um numero e retorna"""
    try:
        resposta = input("Digite um numero inteiro por favor: ")
    except KeyboardInterrupt:
        print('\n Blz então...Volte sempre!')
        sys.exit()
    try:
        return int(resposta)
    except ValueError:
        print(f"_{resposta}_ é uma palavra! Tente um algarismo, meu bebê")
        return pedir_numero()


print(fizzbuzz(pedir_numero()))
