import inquirer from "inquirer"
import fs from "fs"

inquirer
  .prompt([
    {
      name: 'p1',
      message: 'Qual a primeira nota?',
    },
    {
      name: 'p2',
      message: 'Qual a segunda nota?',
    },
  ])
  .then((answers) => {
    console.log(answers);
    const media = (parseFloat(answers.p1)+parseFloat(answers.p2))/2
    console.log(media)
    const data = `Answers: ${JSON.stringify(answers)}\nMédia: ${media}`;
    fs.writeFileSync('arquivo.txt', data)
  }).catch((err) => console.log(err));
