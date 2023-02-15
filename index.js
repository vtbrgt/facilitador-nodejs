import chalk from 'chalk';
import readline from 'readline-sync';

// adicionar mais cores
const red = chalk.red;
let props = [];
let input = '';

while (input != 'sair') {
  input = readline
    .question(
      'Insira um propriedade CSS ou digite "sair" para encerrar o programa: \n'
    )
    .toLowerCase();

  if (input === 'sair') {
    console.log(`\n ${props.sort().join('\n')}`);
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
