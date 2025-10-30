import inquirer from "inquirer"
import chalk from "chalk"

inquirer.prompt([
    {
    name: "nome",
    message: "qual seu nome?",
    },{
    name: "idade",
    message: "qual sua idade"
    }
]).then((answers) => {
    if (!answers.nome || !answers.idade) {
        throw new Error("O nome e a idade são obrigatórios!")
        }
    console.log(chalk.bgYellow.black(`${answers.nome} tem ${parseInt(answers.idade)} anos de idade!`))

}).catch((err) => {
    console.log(err)
})