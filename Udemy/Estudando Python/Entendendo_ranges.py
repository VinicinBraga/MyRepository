"""
Ranges

Ranges são utilizados para gerar sequencias numericas,
não de forma aleatória, mas sim de maneira especificada.

"""
# Forma.1:
# O inicio padrão é 0, sendo assim, não é necessário colocar:
# 'range(0, 11)', pois basta colocar 'range(11)'
# assim o loop vai ser feito de 0 até '11 - 1'
"""
for num in range(11):
    print(num)
"""


# Forma.2
# Aqui eu especifico que eu quero que o loop comece no 4
"""
for num in range(4, 11):
    print(num)
"""


# Forma.3
# Aqui, além de especificarmos que eu queremos que o loop comece no 4,
# estamos também dizendo que ele vá de 2 em dois.

for num in range(4, 11, 2):
    print(num)


# Forma.4
# É uigual a forma numero 3, porém inversa, onde
# o valor inicio é maior que o valor de parada
# OBS: O valor de 'Passo' deve ser negativo, pois esta subitraindo.

for num in range(10, 3, -2):
    print(num)
