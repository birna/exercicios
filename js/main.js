function alteraEnunciado(opcaoSelecionada) {
    var enunciado;
    
    switch (opcaoSelecionada) {
        case "op1":
            enunciado = "Faça um script que verifique se uma letra digitada num campo de input é <strong>vogal</strong> ou <strong>consoante</strong>.";
            break;
        case "op2":
            enunciado = "Faça um script que pede duas notas de um aluno. Em seguida ele deve calcular a média do aluno e dar o seguinte resultado:"
            + "<br> A mensagem <strong>'Aprovado'</strong>, se a média alcançada for maior ou igual a sete"
            + "<br> A mensagem <strong>'Reprovado'</strong>, se a média for menor do que sete"
            + "<br> A mensagem <strong>'Aprovado com Destaque'</strong>, se a média for igual a dez.";
            break;
        case "op3":
            enunciado = "Faça um script que leia três números inteiros e mostre o maior deles.";
            break;
        case "op4":
            enunciado = "Faça um script que pede dois inteiros e armazene eles em duas variáveis. Em seguida, troque o valor das variáveis, invertendo e exibindo o antes e o depois em uma janela de alert.";
            break;
        case "op5":
            enunciado = "Faça um script que leia três números inteiros, em seguida mostre o maior e o menor deles.";
            break;
        case "op6":
            enunciado = "Faça um script que leia três números e mostre-os em ordem decrescente.";
            break;                    
        case "op7":
            enunciado = "Faça um script que pergunte em que turno você estuda. Peça para digitar M-matutino ou V-Vespertino ou N- Noturno. Imprima a mensagem" 
            + "'Bom Dia!', 'Boa Tarde!' ou 'Boa Noite!' ou 'Valor Inválido!', conforme o caso.";
            break;   
        case "op8":
            enunciado = "As Organizações Tabajara resolveram dar um aumento de salário aos seus colaboradores e lhe contrataram para desenvolver um script que calculará os reajustes."
            + "<br>Faça um script que recebe o salário de um colaborador e o reajuste segundo o seguinte critério, baseado no salário atual:"
            + "<br>salários até R$ 280,00 (incluindo) : aumento de 20%"
            + "<br>salários entre R$ 280,00 e R$ 700,00 : aumento de 15%"
            + "<br>salários entre R$ 700,00 e R$ 1500,00 : aumento de 10%"
            + "<br>salários de R$ 1500,00 em diante : aumento de 5%"
            + "<br><br>Após o aumento ser realizado, informe na tela:"
            + "<br>o salário antes do reajuste"
            + "<br>o percentual de aumento aplicado"
            + "<br>o valor do aumento"
            + "<br>o novo salário, após o aumento."
            break;   
        case "op9":
            enunciado = "Faça um script para o cálculo de uma folha de pagamento, sabendo que os descontos são do Imposto de Renda, que depende do salário bruto (conforme tabela abaixo)" 
            + "e 3% para o Sindicato e que o FGTS corresponde a 11% do Salário Bruto, mas não é descontado (é a empresa que deposita). O Salário Líquido corresponde ao Salário Bruto menos"
            + " os descontos. O script deverá pedir ao usuário o valor da sua hora e a quantidade de horas trabalhadas no mês."
            + "<br>Desconto do IR:"
            + "<br>Salário Bruto até 900 (inclusive) - isento"
            + "<br>Salário Bruto até 1500 (inclusive) - desconto de 5%"
            + "<br>Salário Bruto até 2500 (inclusive) - desconto de 10%"
            + "<br>Salário Bruto acima de 2500 - desconto de 20% Imprima na tela as informações, dispostas conforme o exemplo abaixo. No exemplo o valor da hora é 5 e a quantidade de hora é 220."
            + "<br><br>Salário Bruto:"
            + "<br>(5 * 220)        : R$ 1100,00"
            + "<br>(-) IR (5%)                     : R$   55,00"
            + "<br>(-) INSS ( 10%)                 : R$  110,00"
            + "<br>FGTS (11%)                      : R$  121,00"
            + "<br>Total de descontos              : R$  165,00"
            + "<br>Salário Liquido                 : R$  935,00";
            break;
        case "op10":
            enunciado = "Faça um script que leia um número e exiba o dia correspondente da semana. (1-Domingo, 2- Segunda, etc.), se digitar outro valor deve aparecer valor inválido.";
            break;
        case "op11":
            enunciado = "Faça um script que lê as duas notas parciais obtidas por um aluno numa disciplina ao longo de um semestre, e calcule a sua média."
            + "A atribuição de conceitos obedece à tabela abaixo:"
            + "<br>Média de Aproveitamento  Conceito"
            + "<br>Entre 9.0 e 10.0 ----> A"
            + "<br>Entre 7.5 e 9.0 -----> B"
            + "<br>Entre 6.0 e 7.5 -----> C"
            + "<br>Entre 4.0 e 6.0 -----> D"
            + "<br>Entre 4.0 e zero ----> E"
            + "<br>O algoritmo deve mostrar numa janela de alert as notas, a média, o conceito correspondente e a mensagem 'APROVADO' se o conceito for A, B ou C ou 'REPROVADO'"
            + "<br>se o conceito for D ou E."
            break;
        case "op12":
            enunciado = "Faça um script que peça os 3 lados de um triângulo. O script deverá informar se os valores podem ser um triângulo. Indique, caso os lados formem um"
            + " triângulo, se o mesmo é: equilátero, isósceles ou escaleno."
            + "<br><br>Dicas:"
            + "<br>Três lados formam um triângulo quando a soma de quaisquer dois lados for maior que o terceiro"
            + "<br>Triângulo Equilátero: três lados iguais;"
            + "<br>Triângulo Isósceles: quaisquer dois lados iguais;"
            + "<br>Triângulo Escaleno: três lados diferentes;"
            break;
        case "op13":
            enunciado = "Faça um script que calcule as raízes de uma equação do segundo grau, na forma ax² + bx + c. O script deverá pedir os valores de a, b e c e fazer os testes necessários.";
            break;
        case "op14":
            enunciado = "Faça um script que peça um número correspondente a um determinado ano e em seguida informe se este ano é ou não bissexto.";
            break;
        case "op15":
            enunciado = "Faça um script que peça uma data no formato dd/mm/aaaa e determine se a mesma é uma data válida.";
            break;
        case "op16":
            enunciado = "Faça um script que peça um número inteiro e determine se ele é par ou ímpar."
            + " Dica: utilize o operador módulo (resto da divisão): %"
            break;
        case "op17":
            enunciado = "Faça um script que leia um número inteiro menor que 1000 e imprima a quantidade de centenas, dezenas e unidades do mesmo."
            +" Observando os termos no plural a colocação do 'e', da vírgula entre outros. Exemplo:"
            +"<br>326 = 3 centenas, 2 dezenas e 6 unidades"
            +"<br>12 = 1 dezena e 2 unidades"
            +"<br>Testar com: 326, 300, 100, 320, 310,305, 301, 101, 311, 111, 25, 20, 10, 21, 11, 1, 7 e 16"
            break;
        case "op18":
            enunciado = "Faça um script para um caixa eletrônico. O script deverá perguntar ao usuário a valor do saque e depois informar quantas notas de cada valor serão fornecidas." 
            +"<br>As notas disponíveis serão as de 1, 5, 10, 50 e 100 reais. O valor mínimo é de 10 reais e o máximo de 600 reais. O script não deve se preocupar com a quantidade de"
            +" notas existentes na máquina."
            +"<br>Exemplo: Para sacar a quantia de 256 reais, o script fornece duas notas de 100, uma nota de 50, uma nota de 5 e uma nota de 1"
            +"<br>Exemplo: Para sacar a quantia de 399 reais, o script fornece três notas de 100, uma nota de 50, quatro notas de 10, uma nota de 5 e quatro notas de 1."
            break;                    
        case "op19":
            enunciado = "Faça um script que peça um número e informe se o número é inteiro ou decimal. Dica: utilize uma função de arredondamento.";
            break;   
        case "op20":
            enunciado = "Faça um script que leia 2 números e em seguida pergunte ao usuário qual operação ele deseja realizar. O resultado da operação deve ser acompanhado de uma frase que diga se o número é:"
            +"<br>par ou ímpar"
            +"<br>positivo ou negativo"
            +"<br>inteiro ou decimal."
            break;   
        case "op21":
            enunciado = "Faça um script que faça 5 perguntas para uma pessoa sobre um crime. As perguntas são:"
            +"<br><br>Telefonou para a vítima?"
            +"<br>Esteve no local do crime?"
            +"<br>Mora perto da vítima?"
            +"<br>Devia para a vítima?"
            +"<br>Já trabalhou com a vítima?" 
            +"<br><br>O script deve no final emitir uma classificação sobre a participação da pessoa no crime. Se a pessoa responder positivamente a 2"
            +" questões ela deve ser classificada como 'Suspeita', entre 3 e 4 como 'Cúmplice' e 5 como 'Assassino'. Caso contrário, ele será classificado como 'Inocente'."
            break
        case "op22":
            enunciado = "Um posto está vendendo combustíveis com a seguinte tabela de descontos:"
            +"<br><br>Álcool:"
            +"<br>até 20 litros, desconto de 3% por litro"
            +"<br>acima de 20 litros, desconto de 5% por litro"
            +"<br><br>Gasolina:"
            +"<br>até 20 litros, desconto de 4% por litro"
            +"<br>acima de 20 litros, desconto de 6% por litro"
            +"<br><br>Escreva um algoritmo que leia o número de litros vendidos, o tipo de combustível"
            +" (codificado da seguinte forma: A-álcool, G-gasolina), calcule e imprima o valor a ser pago pelo cliente sabendo-se que o preço do litro da gasolina é R$ 2,50 o preço do litro do"
            +" álcool é R$ 1,90."
            break;
        case "op23":
            enunciado = "Uma fruteira está vendendo frutas com a seguinte tabela de preços:"
            +"<br><br>--------------------- Até 5 Kg --------------- Acima de 5 Kg"
            +"<br>Morango -------- R$ 2,50 por Kg ------- R$ 2,20 por Kg"
            +"<br>Maçã ----------- R$ 1,80 por Kg ------- R$ 1,50 por Kg"
            +"<br><br>Se o cliente comprar mais de 8 Kg em frutas ou o valor total da compra ultrapassar R$ 25,00, receberá ainda um desconto de 10% sobre este total."
            +"<br>Escreva um algoritmo para ler a quantidade (em Kg) de morangos e a quantidade (em Kg) de maças adquiridas e escreva o valor a ser pago pelo cliente."
            break;
        case "op24":
            enunciado = "O Hipermercado Tabajara está com uma promoção de carnes que é imperdível. Confira:"
            +"<br><br>---------------------- Até 5 Kg ---------------- Acima de 5 Kg"
            +"<br>File Duplo ----- R$ 4,90 por Kg ---------- R$ 5,80 por Kg"
            +"<br>Alcatra -------- R$ 5,90 por Kg ---------- R$ 6,80 por Kg"
            +"<br>Picanha -------- R$ 6,90 por Kg ---------- R$ 7,80 por Kg"
            +"<br><br>Para atender a todos os clientes, cada cliente poderá levar apenas um dos tipos de carne da promoção, porém não há limites para a quantidade de carne por cliente."
            +" Se compra for feita no cartão Tabajara o cliente receberá ainda um desconto de 5% sobre o total a compra. Escreva um script que peça o tipo e a quantidade de"
            +"carne comprada pelo usuário e gere um cupom fiscal, contendo as informações da compra: tipo e quantidade de carne, preço total, tipo de pagamento, valor do desconto e"
            +"valor a pagar."
            break;
        default:
            enunciado = "";
    }

    return enunciado;
}

function inputGenerate(opcaoSelecionada) {


    switch (opcaoSelecionada) {
        case "op1":
            break;
        case "op2":
            break;
        case "op3":
            break;
        case "op4":
            break;
        case "op5":
            break;
        case "op6":
            break;
        case "op7":
            break;
        case "op8":
            break;
        case "op9":
            break;
        case "op10":
            break;
        case "op11":
            break;
        case "op12":
            break;
        case "op13":
            break;
        case "op14":
            break;
        case "op15":
            break;
        case "op16":
            break;
        case "op17":
            break;
        case "op18":
            break;
        case "op19":
            break;
        case "op20":
            break;
        case "op21":
            break;
        case "op22":
            break;
        case "op23":
            break;
        case "op24":
            break;
        default:
            console.log("Nenhum selecionado!")
    }
}

function form(opcaoSelecionada) {
    const form = document.getElementById("formulario");
    if (opcaoSelecionada === "") {
        form.style.display = "none";
    } else {
        form.style.display = "block";
    }

    inputGenerate(opcaoSelecionada)
}

function main() {
    const conteudo = document.getElementById("enunciado");
    const opcoes = document.getElementById("opcoes");
    conteudo.innerHTML = alteraEnunciado(opcoes.value);
    form(opcoes.value)
}

function processar() {
    const opcoes = document.getElementById("opcoes");
}