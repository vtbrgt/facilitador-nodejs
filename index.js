import chalk from 'chalk';
import readline from 'readline-sync';

const red = chalk.redBright;
const magenta = chalk.magenta;
const cyan = chalk.cyanBright;
const yellow = chalk.yellowBright;
let props = [];
let input = '';

while (input != 'sair') {
  input = readline
    .question(
      magenta(
        'Insira um propriedade CSS ou digite "sair" para encerrar o programa: \n'
      )
    )
    .toLowerCase();

  if (input === 'sair') {
    console.log(
      yellow(
        'A lista de propriedades CSS, organizada alfabeticamente, ficou assim: \n'
      ),
      cyan(`\n${props.sort().join('\n')}`)
    );
  }

  if (input != '' && !props.includes(input)) {
    props.push(input);
  } else if (props.includes(input)) {
    console.log(
      red(
        '\nA propriedade digitada já existe na lista. Tente adicionar outra.\n'
      )
    );
  }
}
