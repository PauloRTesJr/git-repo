# Test Gympass

Teste realizado para Desenvolvedor Frontend.

## Instruções para o uso
- Clone o repositório com `git clone https://github.com/PauloRTesJr/test-gympass.git`
- Entre na pasta cd `test-gympass`
- Executar comando `npm install`
- Para rodar em ambiente de desenvolvimento `npm start`
- Para gerar ambiente de produção use `npm run build`
- Para testes use `npm test`
 
## Features ES6
Algumas features de ES6 que usei foi por exemplo:
- `let`: se torna muito melhor do que `var` por se restringir ao escopo em que foi criada. Isso ajuda a evitar erros e torna o programa mais seguro.
- Template Literals: através dela, permite que você consiga integrar valores de variáveis junto com string sem precisar ficar concatenando elas. Outro ponto positivo é no caso do styled-components em que você consegue fazer quebra de linhas para melhor organizar o código.
- Mapeamento de array: funções como sort, map, filter, reduce são ferramentas para o array que permite fazer operações com este array, mantendo o código bem mais limpo e legível.

Além de outras features como arrow functions, destructuring, entre outras. 

## Observações

Gostaria de deixar aqui alguns comentários sobre o teste. Como eu estou acostumado com Angular e não havia feito algo com React usando hooks e context, só havia usado Redux, me levou um tempo para entender o funcionamento. Após conseguir entender o funcionamento, é possível perceber que React se torna uma ferramente bem mais simples de utilizar e cumpre muito bem com o objetivo de uma biblioteca de interfaces.

Não pude completar algumas features como infinite scroll e unit tests devido a tempo, já que aprender Hooks e Contexts me levou muito mais tempo do que o esperado, e se trata de um mundo muito diferente do Angular. Outro ponto que gostaria de ter melhorado, é o arquivo de tela, nesse caso o `HomeScreen.js`, onde achei que as coisas ficaram um pouco bagunçadas, com muitas informações e misturadas com chamada de API.
