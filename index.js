const express = require('express');
const session = ('express-session');
const cookieParser = ('cookie-parser');

const app = express();

app.use(express.urlencoded({ extendend: true }));
app.use(express.static('./pages/public'));
app.use(session({
    secret: 'M1nh4Chav3S3cr3t4',
    resave: false,
    saveUninitialized: true,
    cookie: {
        secure: false, //utilizada com http e não somente com https
        httpOnly: true,
        maxAge: 1000 * 60 * 30 //30 minutos
    }
}));
app.use(cookieParser());

const porta = 3000;
const host = "0.0.0.0";

var listaProdutos = [];

function menu(req, resp) {
    let dataHoraUltimoLogin = req.cookies['dataHoraUltimoLogin'];

    if(!dataHoraUltimoLogin){
        dataHoraUltimoLogin = '';
    }
    resp.send(` <html lang="pt-br">
                        <head>
                            <meta charset="UTF-8">
                            <meta name="viewport" content="width=device-width, initial-scale=1.0">
                            <title>Matrícula</title>
                            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
                        </head>
                        <body>
                            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                                <div class="container-fluid">
                                    <a class="navbar-brand" href="#">MENU</a>
                                    <a class="nav-link active" aria-current="page" href="/cadastrarProduto">Cadastrar Produto</a>
                                    <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Seu último acesso foi realizado em ${dataHoraUltimoLogin}</a>
                                    <a class="nav-link active" aria-current="page" href="/logout">Sair</a>
                                </div>
                            </nav>                                                   
                        </body>
                        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script> `);
}
function formularioDoProduto(req, resp) {
    resp.send(` <html lang="pt-br">
                        <head>
                            <meta charset="UTF-8">
                            <meta name="viewport" content="width=device-width, initial-scale=1.0">
                            <title>Formulário de produto</title>
                            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
                        </head>
                        <body>
                            <div class="container py-5">
                                <div class="row pt-5">
                                    <div class="col-lg-8">
                                        <div class="bg-light p-5">
                                            <h2 class="mb-4">Cadastro de Produto</h2>
                                            <form method="POST" action="/cadastrarProduto">
                                                <div class="form-group">
                                                    <label for="codigo_barras">Código de Barras:</label>
                                                    <input class="form-control" type="text" id="codigo_barras" name="codigo_barras"><br>
                                                </div>
                                                    
                                                <div class="form-group">
                                                    <label for="descricao">Descrição do Produto:</label> 
                                                    <textarea class="form-control" type="text" id="descricao" name="descricao"></textarea><br>
                                                </div>
                                                 
                                                <div class="form-group>
                                                    <label for="preco_custo">Preço de Custo:</label>
                                                    <input class="form-control" type="number" step="0.01" id="preco_custo" name="preco_custo"><br>
                                                </div>

                                                <div class="form-group>
                                                    <label for="preco_venda">Preço de Venda:</label>
                                                    <input class="form-control" type="number" step="0.01" id="preco_venda" name="preco_venda"><br>
                                                </div>
                                                    
                                                <div class="form-group>
                                                    <label for="data_validade">Data de Validade:</label> 
                                                    <input class="form-control" type="date" id="data_validade" name="data_validade"><br> 
                                                </div>

                                                <div class="form-group>
                                                    <label for="qtd_estoque">Quantidade em Estoque:</label>
                                                    <input class="form-control" type="number" id="qtd_estoque" name="qtd_estoque"><br>
                                                </div>

                                                <div class="form-group>
                                                    <label for="fabricante">Nome do Fabricante:</label> 
                                                    <input class="form-control" type="text" id="fabricante" name="fabricante" ><br>
                                                </div>
                                                  
                                                <div class="form-group mt-2">
                                                    <input
                                                        type="submit"
                                                        value="Enviar"
                                                        class="btn btn-primary px-3"
                                                    />
                                                </div>
                                                
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                <p><a class="btn btn-primary" href="/">MENU</a></p>
                            </div>
                        </body>
                        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script> 
                    </html> `);
    resp.end();
}
function cadastrarProduto(req, resp) {
    const codigo_barras = req.body.codigo_barras;
    const descricao = req.body.descricao;
    const preco_custo = req.body.preco_custo;
    const preco_venda = req.body.preco_venda; 
    const data_validade = req.body.data_validade; 
    const qtd_estoque = req.body.qtd_estoque; 
    const fabricante = req.body.fabricante; 

    //recuperar informações dos cookies enviado pelo navegador
    const dataHoraUltimoLogin = req.cookies['dataHoraUltimoLogin'];
    if (!dataHoraUltimoLogin){
        dataHoraUltimoLogin='';
    }

    if (codigo_barras && descricao && preco_custo && preco_venda && data_validade && qtd_estoque && fabricante) {
        const produto = { codigo_barras, descricao, preco_custo, preco_venda, data_validade, qtd_estoque, fabricante };

        listaProdutos.push(produto);

        resp.write(`<html>
                    <head>
                        <meta charset="UTF-8"/>
                        <title>Cadastro de Produto</title>
                        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
                    </head>
                    <body>
                        <table class="table table-striped">
                            <thead>
                                <tr>
                                    <th>Código de Barras</th>
                                    <th>Descrição do Produto</th>
                                    <th>Preço de Custo</th>
                                    <th>Preço de Venda</th>   
                                    <th>Data de Validade</th>   
                                    <th>Quantidade em Estoque</th>   
                                    <th>Nome do Fabricante</th>   
                                </tr>
                            </thead>
                            <tbody>`);

        for (var i = 0; i < listaProdutos.length; i++) {
            resp.write(`        <tr>
                                    <td>${listaProdutos[i].codigo_barras}</td>
                                    <td>${listaProdutos[i].descricao}</td>
                                    <td>${listaProdutos[i].preco_custo}</td>
                                    <td>${listaProdutos[i].preco_venda}</td>
                                    <td>${listaProdutos[i].data_validade}</td>
                                    <td>${listaProdutos[i].qtd_estoque}</td>
                                    <td>${listaProdutos[i].fabricante}</td>
                                </tr>`);
        }
        
        resp.write(`           </tbody>          
                        </table>
                        <p><a class="btn btn-primary" href="/cadastrarProduto">Cadastrar outro produto</a></p>
                    </body>
                    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
                    </html>`);
    } else {
        resp.write(`<html lang="pt-br">
                        <head>
                            <meta charset="UTF-8">
                            <meta name="viewport" content="width=device-width, initial-scale=1.0">
                            <title>Formulário de produto</title>
                            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
                        </head>
                        <body>
                            <div class="container py-5">
                                <div class="row pt-5">
                                    <div class="col-lg-8">
                                        <div class="bg-light p-5">
                                            <h2 class="mb-4">Cadastro de Produto</h2>
                                            <form method="POST" action="/cadastrarProduto">
                                                <div class="form-group">
                                                    <label for="codigo_barras">Código de Barras:</label>
                                                    <input class="form-control" type="text" id="codigo_barras" name="codigo_barras" value="${codigo_barras || ''}">
                                                </div>`);
        
        if (!codigo_barras) {
            resp.write(`<div>
                            <span><p class="text-danger">Campo obrigatório</p></span>
                        </div>`);
        }
        
        resp.write(`<div class="form-group">
                        <label for="descricao">Descrição do Produto:</label>
                        <textarea class="form-control" id="descricao" name="descricao">${descricao || ''}</textarea>
                    </div>`);
        
        if (!descricao) {
            resp.write(`<div>
                            <span><p class="text-danger">Campo obrigatório</p></span>
                        </div>`);
        }
        
        resp.write(`<div class="form-group">
                        <label for="preco_custo">Preço de Custo:</label>
                        <input class="form-control" type="number" step="0.01" id="preco_custo" name="preco_custo" value="${preco_custo || ''}">
                    </div>`);
        
        if (!preco_custo) {
            resp.write(`<div>
                            <span><p class="text-danger">Campo obrigatório</p></span>
                        </div>`);
        }
        
        resp.write(`<div class="form-group">
                        <label for="preco_venda">Preço de Venda:</label>
                        <input class="form-control" type="number" step="0.01" id="preco_venda" name="preco_venda" value="${preco_venda || ''}">
                    </div>`);
        
        if (!preco_venda) {
            resp.write(`<div>
                            <span><p class="text-danger">Campo obrigatório</p></span>
                        </div>`);
        }
        
        resp.write(`<div class="form-group">
                        <label for="data_validade">Data de Validade:</label>
                        <input class="form-control" type="date" id="data_validade" name="data_validade" value="${data_validade || ''}">
                    </div>`);
        
        if (!data_validade) {
            resp.write(`<div>
                            <span><p class="text-danger">Campo obrigatório</p></span>
                        </div>`);
        }
        
        resp.write(`<div class="form-group">
                        <label for="qtd_estoque">Quantidade em Estoque:</label>
                        <input class="form-control" type="number" id="qtd_estoque" name="qtd_estoque" value="${qtd_estoque || ''}">
                    </div>`);
        
        if (!qtd_estoque) {
            resp.write(`<div>
                            <span><p class="text-danger">Campo obrigatório</p></span>
                        </div>`);
        }
        
        resp.write(`<div class="form-group">
                        <label for="fabricante">Nome do Fabricante:</label>
                        <input class="form-control" type="text" id="fabricante" name="fabricante" value="${fabricante || ''}">
                    </div>`);
        
        if (!fabricante) {
            resp.write(`<div>
                            <span><p class="text-danger">Campo obrigatório</p></span>
                        </div>`);
        }
        
        resp.write(`<div class="form-group mb-0">
                        <input type="submit" value="Enviar" class="btn btn-primary px-3"/>
                    </div>
                    </form>
                    </div>
                </div>
            </div>
            <p><a class="btn btn-primary" href="/">MENU</a></p>
        </div>
        </body>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
        </html>`);
    }
    resp.end();
}
function autenticarUsuario(req, resp){
    const usuario = req.body.usuario;
    const senha   = req.body.senha;

    if (usuario === 'admin' && senha === '123'){
        //criar uma sessão individualmente para cada usuário que faça o login
        req.session.usuarioLogado = true;
        //criar um cookie enviando para o navegador data e hora de acesso do usuário
        resp.cookie('dataHoraUltimoLogin', new Date().toLocaleString(), 
            {   maxAge: 1000 * 60 * 60 * 24 * 30, 
                httpOnly: true
            });
        resp.redirect('/');
    }
    else{
        resp.send(`
                    <html>
                        <head>
                         <meta charset="utf-8">
                         <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet"
                               integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
                        </head>
                        <body>
                            <div class="container w-25"> 
                                <div class="alert alert-danger" role="alert">
                                    Usuário ou senha inválidos!
                                </div>
                                <div>
                                    <a href="/login.html" class="btn btn-primary">Tentar novamente</a>
                                </div>
                            </div>
                        </body>
                        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
                                integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
                                crossorigin="anonymous">
                        </script>
                    </html>
                  `
        );
    }
}
function verificarAutenticacao(req, resp, next){
    if(req.session.usuarioLogado){
        next();
    }
    else{
        resp.redirect("/login.html");
    }
}
app.get('/login', (req, resp) =>{
    resp.redirect('/login.html');
});
app.get('/logout', (req, resp) => {
    req.session.destroy(); //eliminar a sessão.
    resp.redirect('/login.html');
});
app.post('/login', autenticarUsuario);
app.get('/', verificarAutenticacao, menu);
app.get('/cadastrarProduto', verificarAutenticacao, formularioDoProduto);
app.post('/cadastrarProduto', cadastrarProduto);
app.listen(porta, host, () => {
    console.log(`Servidor iniciado e em execução no endereço http://${host}:${porta}`)
});
