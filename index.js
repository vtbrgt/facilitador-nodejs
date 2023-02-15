import chalk from 'chalk';
import readline from 'readline-sync';

let props = [];
let input = '';

while (input != 'sair') {
  input = readline
    .question(
      'Insira um propriedade CSS ou digite "sair" para encerrar o programa: \n'
    )
    .toLowerCase();

  if (input != '' && !props.includes(input)) {
    props.push(input);
  }
}
