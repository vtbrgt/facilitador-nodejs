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
  } else if (props.includes(input)) {
    console.log(
      '\nA propriedade digitada já existe na lista. Tente adicionar outra.\n'
    );
  } /* else {
    console.log(props.sort().join('\n'));
  } */

  if (input === 'sair') {
    console.log(props.sort().join('\n'));
  }
}
