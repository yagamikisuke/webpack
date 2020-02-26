const path = require('path');
const babiliPlugin = require('babili-webpack-plugin');

let plugins = [];

if(process.env.NODE_ENV == 'production'){//process é um variável do NodeJS que dá acesso a todos os processos em execução e env é um método que dá acesso a todas as variável de ambiente em utilização
    plugins.push(new babiliPlugin());
}

//webpack é um módulo do nodejs que foi instalado via npm e que precisa receber configurações em um objeto
module.exports = {
    entry: './app-src/app.js', // entry recebe como parametro o primeiro módulo a ser carregado
    output: { //é o resultado do bundle que o webpack fará com a sequência de carregamento de módulos e precisa ser configurado
        filename: 'bundle.js', //o nome que o arquivo com as configs para carregamento receberá
        path: path.resolve(__dirname, 'dist') //o caminho onde deve ser gravado esse arquivo. No caso foi usdo o path do NodeJs com a variáve __dirname que pega o diretório atual no primeiro paramtro e concatena com a string passada no segundo
    },
    module: {
        rules: [
            {
                test: /\.js$/, //testa para ver se o nome do arquivo se encaixa na regra passada. No caso se termina com .js
                exclude: /node_modules/, //Exclui arquivos do carregamento. No caso a pasta node-modules por inteira
                use: { //faz uso de algum recurso
                    loader: 'babel-loader' //usa o carregador de módulos babel-loader
                }
            }            
        ]
    },
    plugins //como o nome do valor a ser passado é a variável que tem o mesmo nome da chave, a partir do ECMAScript 2015 não é mais necessário colocar o chave e valor, isso será feito implicitamente
}