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
            enunciado = "Conteúdo da Opção 1";
            break;
        case "op14":
            enunciado = "Conteúdo da Opção 2";
            break;
        case "op15":
            enunciado = "Conteúdo da Opção 3";
            break;
        case "op16":
            enunciado = "Conteúdo da Opção 3";
            break;
        case "op17":
            enunciado = "Conteúdo da Opção 3";
            break;
        case "op18":
            enunciado = "Conteúdo da Opção 3";
            break;                    
        case "op19":
            enunciado = "Conteúdo da Opção 3";
            break;   
        case "op20":
            enunciado = "Conteúdo da Opção 3";
            break;   
        case "op21":
            enunciado = "Conteúdo da Opção 1";
            break;
        case "op22":
            enunciado = "Conteúdo da Opção 2";
            break;
        case "op23":
            enunciado = "Conteúdo da Opção 3";
            break;
        case "op24":
            enunciado = "Conteúdo da Opção 3";
            break;
        default:
            enunciado = "";
    }

    return enunciado;
}

function main() {
    const conteudo = document.getElementById("enunciado");
    const opcoes = document.getElementById("opcoes");
    conteudo.innerHTML = alteraEnunciado(opcoes.value);
}
