class Calculadora:
    #def __init__(self, num1, num2):
    def __init__(self):
        #self.valor_a = num1
        #self.valor_b = num2
        pass

    def soma(self, valor_a, valor_b):
        #return self.valor_a + self.valor_b
        return valor_a + valor_b

    def subtracao(self, valor_a, valor_b):
        #return self.valor_a - self.valor_b
        return valor_a - valor_b

    def multiplicacao(self, valor_a, valor_b):
        #return self.valor_a * self.valor_b
        return valor_a * valor_b

    def divisao(self, valor_a, valor_b):
        #return self.valor_a / self.valor_b
        return valor_a * valor_b

class Televisao:
    def __init__(self):
        self.ligada = False
        self.canal = 5
    def power(self):
        if self.ligada:
            self.ligada = False
        else:
            self.ligada = True
    def aumenta_canal(self):
        if self.ligada:
            self.canal += 1
    def diminui_canal(self):
        if self.ligada:
            self.canal -= 1

if __name__ == '__main':
    tv = Televisao()
    print(tv.ligada)
    tv.power()
    print(tv.ligada)
    print('Canal inicial')
    print(tv.canal)
    tv.aumenta_canal()
    print(tv.canal)
    calculadora = Calculadora()

    #print (calculadora.valor_a)
    print(calculadora.soma(10,10))
    print (calculadora.subtracao(10,5))
    print (calculadora.multiplicacao(2,2))
    print (calculadora.divisao(4,2))
