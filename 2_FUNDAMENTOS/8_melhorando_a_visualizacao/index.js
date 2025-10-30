import chalk from "chalk"

const nota = 5

if (nota >=6) {
    console.log(chalk.green('Parabéns você está aprovado!'))
} else {
    console.log(chalk.red('Você foi reprovado'))
}