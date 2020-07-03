lista = [1, 10]
try:
        divisao = 10 / 2
        numero = lista[0]
        x = a
except ZeroDivisionError:
    print("Não é possivel realizar uma divisão por 0")
except IndexError:
    print("Erro ao acessar um indice inválido da lista")
except BaseException as ex:
    print('erro desconhecido. Erro: {}'.format(ex))
except:
    print('Não foi possivel verifiar o erro')
class Error(Exception):
    pass
class InputError(Error):
    def __init__(self, message):
        self.message = message
while True:
    try:
        x = int(input('Entre com uma nota de 0 a 10: '))
        print(x)
        if x > 10:
            raise InputError('Nota não pode ser maior que 10')
        elif x < 0:
            raise InputError('Nota não pode ser menor que 0')
        break
    except ValueError:
        print('Valor inválido, Deve-se digitar apenas números')
    except InputError as ex:
        print(ex)