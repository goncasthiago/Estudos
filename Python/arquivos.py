#arquivo = open('teste.txt','w')# sobrescreve se ja tem algo no arquivo
#arquivo = open('teste.txt','a')
#arquivo.write('Minha primeira escrita')
#arquivo.write('\nsegunda linha')
#arquivo.close()

def escrever_arquivo(texto):
    arquivo = open('teste.txt','w')
    arquivo.write(texto)
    arquivo.close()

def atualiza_arquivo(nome_arquivo, texto):
    arquivo = open(nome_arquivo, 'a')
    arquivo.write(texto)
    arquivo.close()

def ler_arquivo(nome_arquivo):
    arquivo= open(nome_arquivo, 'r')
    texto = arquivo.read()
    print(texto)

def media_notas(nome_arquivo):
    #pass #para nao fazer nada na funcao
    arquivo = open(nome_arquivo, 'r')
    aluno_nota = arquivo.read()
    aluno_nota = aluno_nota.split('\n')
    lista_media = []
    for x in aluno_nota:
        lista_notas = x.split(',')
        aluno = lista_notas[0]
        lista_notas.pop(0)
        #print(aluno)
        #print (lista_notas)
        media = lambda notas: sum([int(i) for i in notas]) / 4
        lista_media.append({aluno:media(lista_notas)})

    return lista_media



if __name__ == '__main__':
    #escrever_arquivo('Primeira linha\n')
    #atualiza_arquivo('Segunda linha\n')
    #ler_arquivo("teste.txt")

    #aluno = 'Arthur,10,10,10,10\n'
    #atualiza_arquivo('notas.txt', aluno)

    print(media_notas('notas.txt'))