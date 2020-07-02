from datetime import date, time, datetime, timedelta
def trabalhando_com_date():
    print("Trabalhando com date")
    data_atual = date.today()
    print(type(data_atual))
    print(data_atual.strftime('%d/%m/%y'))
    print(data_atual.strftime('%A - %B - %y'))

def trabalhando_com_time():
    print("Trabalhando com time")
    horario = time(hour=15, minute=18, second=30)
    print(type(horario))
    print(horario)
    horario_str = horario.strftime("%H:%M:%S")
    print(type(horario_str))
    print(horario_str)

def trabalhando_com_datetime():
    print("Trabalhando com datetime")
    horario = datetime.now()
    print(type(horario))
    print(horario)
    print(horario.weekday())
    horario_str = horario.strftime("%d/%m/%Y %H:%M:%S")
    print(type(horario_str))
    print(horario_str)
    print(horario.strftime("%c"))
    tupla = ( 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sabado', 'Domingo')
    print(tupla[horario.weekday()])

    print('Criando uma data com texto')
    data_string = '02/07/2020 06:20:22'
    data_convertida = datetime.strptime(data_string, '%d/%m/%Y %H:%M:%S')
    print(type(data_convertida))
    print(data_convertida)

    print("Contas com datas")
    nova_data = data_convertida + timedelta(days=365)
    print(nova_data)

if __name__ == '__main__':
    trabalhando_com_date()
    trabalhando_com_time()
    trabalhando_com_datetime()