import express from "express";
const app = express();

app.use(express.urlencoded({ extendend: true }));

const porta = 3000;
const host = "0.0.0.0";

var listaAlunos = [];

function menu(requisicao, resposta) {
    resposta.send(` <html lang="pt-br">
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
                                    
                                    <div class="collapse navbar-collapse" id="navbarNav">
                                        <ul class="navbar-nav">
                                            <li class="nav-item">
                                                <a class="nav-link active" aria-current="page" href="/cadastrarAluno">Cadastro</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </nav>                                                   
                        </body>
                        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script> `);
}
function formularioAluno(requisicao, resposta) {
    resposta.send(` <html lang="pt-br">
                        <head>
                            <meta charset="UTF-8">
                            <meta name="viewport" content="width=device-width, initial-scale=1.0">
                            <title>Matrícula</title>
                            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
                        </head>
                        <body>
                            <div class="container py-5">
                                <div class="row pt-5">
                                    <div class="col-lg-8">
                                        <div class="bg-light p-5">
                                            <h2 class="mb-4">Matrícula</h2>
                                            <form method="POST" action="/cadastrarAluno">
                                                <div class="form-group">
                                                    <label for="nome">Nome Completo</label>
                                                    <input type="text" class="form-control" id="nome" name="nome"/>
                                                </div>

                                                <div style="display: inline-block; width: 45%;" class="form-group">
                                                    <label for="rg">RG</label>
                                                    <input type="text" class="form-control" id="rg" name="rg"/>
                                                </div>

                                                <div style="float: inline-end; width: 45%;" class="form-group">
                                                    <label for="cpf">CPF</label>
                                                    <input type="text" placeholder="***.***.***-**" class="form-control" id="cpf" name="cpf" />
                                                </div>

                                                <div style="display: inline-block;" class="form-group">
                                                    <label for="sexo" style="margin: 6px;">Sexo:</label>

                                                    <input type="radio" id="sexo" value="1" name="sexo" />
                                                    <label style="margin: 6px;" for="sexo">Masculino</label>

                                                    <input type="radio" id="sexo" value="1" name="sexo"/>
                                                    <label style="margin: 6px;" for="sexo">Feminino</label>
                                                </div>

                                                <div style= "float: right;"class="form-group">
                                                    <label style="margin: 6px;" for="datnascimento">Data de Nascimento</label>
                                                    <input type="date" id="datnascimento" name="datnascimento"/>
                                                </div>

                                                <div class="form-group">
                                                    <label for="naturalidade">Naturalidade</label>
                                                    <input type="text" class="form-control" id="naturalidade" name="naturalidade" />
                                                </div> 
        
                                                <div style="float: inline-start; width: 50%;" class="form-group">
                                                    <label for="rua">Rua</label>
                                                    <input type="text" class="form-control" id="rua" name="rua"/>
                                                </div>

                                                <div style="float: left; width: 12%; margin-left: 17px;" class="form-group">
                                                    <label for="numero">Nº</label>
                                                    <input type="number" class="form-control" id="numero" name="numero"/>
                                                </div>
  
                                                <div style="float:right; width: 20%;" class="form-group">
                                                    <label for="cep">CEP</label>
                                                    <input type="text" placeholder="*****-***" class="form-control" id="cep" name="cep"/>
                                                </div>

                                                <div style="display: inline-block; width: 86%;" class="form-group">
                                                    <label for="cidade">Cidade</label>
                                                    <input type="text" class="form-control" id="cidade" name="cidade" />
                                                </div >

                                                <div style="float: right; width: 11%;">
                                                    <label for="uf">Estado</label>
                                                    <select name="uf" class="form-control" id="uf" name="uf">
                                                        <option value="1">AC</option>
                                                        <option value="1">AL</option>
                                                        <option value="1">AP</option>
                                                        <option value="1">AM</option>
                                                        <option value="1">BA</option>
                                                        <option value="1">CE</option>
                                                        <option value="1">DF</option>
                                                        <option value="1">ES</option>
                                                        <option value="1">GO</option>
                                                        <option value="1">MA</option>
                                                        <option value="1">MT</option>
                                                        <option value="1">MS</option>
                                                        <option value="1">MG</option>
                                                        <option value="1">PA</option>
                                                        <option value="1">PB</option>
                                                        <option value="1">PR</option>
                                                        <option value="1">PE</option>
                                                        <option value="1">PI</option>
                                                        <option value="1">RJ</option>
                                                        <option value="1">RN</option>
                                                        <option value="1">RS</option>
                                                        <option value="1">RO</option>
                                                        <option value="1">RR</option>
                                                        <option value="1">SC</option>
                                                        <option value="1">SP</option>
                                                        <option value="1">SE</option>
                                                        <option value="1">TO</option>
                                                    </select>  
                                                </div> 

                                                <div style="display: inline-block; width: 40%" class="form-group">
                                                    <label for="telefone">Telefone</label>
                                                    <input type="tel" title="(**)*****-****" class="form-control" id="telefone" name="telefone"/>
                                                </div>

                                                <div style="float: right; width: 57%;" class="form-group">
                                                    <label for="email">Email</label>
                                                    <input type="email" placeholder="email@email.com.br" class="form-control" id="email" name="email"/>
                                                </div>

                                                <div class="form-group">
                                                    <label for="pai">Pai</label>
                                                    <input type="text" class="form-control" id="pai" name="pai"/>
                                                </div>

                                                <div class="form-group">
                                                    <label for="mae">Mãe</label>
                                                    <input type="text" class="form-control" id="mae" name="mae"/>
                                                </div>

                                                <div class="form-group">
                                                    <label for="texto">Deixe uma mensagem</label>
                                                    <textarea
                                                        id="texto"
                                                        cols="30"
                                                        rows="5"
                                                        class="form-control"
                                                        name="texto"
                                                    ></textarea>
                                                </div>

                                                <div class="form-group mb-0">
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
                            </div>
                        </body>
                        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script> 
                    </html> `)
    resposta.end();
}

function cadastrarAluno(req, resp) {
    const nome = req.body.nome;
    const rg = req.body.rg;
    const cpf = req.body.cpf;
    const sexo = req.body.sexo;
    const datnascimento = req.body.datnascimento;
    const naturalidade = req.body.naturalidade;
    const numero = req.body.numero;
    const cep = req.body.cep;
    const cidade = req.body.cidade;
    const uf = req.body.uf;
    const rua = req.body.rua;
    const telefone = req.body.telefone;
    const email = req.body.email;
    const pai = req.body.pai;
    const mae = req.body.mae;
    const texto = req.body.texto;

    if (nome && rg && cpf && sexo && telefone && datnascimento && naturalidade && numero && cidade && uf && email && rua && telefone && email && pai && mae && texto) {

        const aluno = { nome, rg, cpf, sexo, telefone, datnascimento, naturalidade, numero, cidade, uf, email, rua, telefone, email, pai, mae, texto };

        listaAlunos.push(aluno);

        resp.write(`<html>
                    <head>
                        <meta charset="UTF-8"/>
                        <title>Cadastro de contato</title>
                        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
                    </head>
                    <body>
                        <table class="table table-striped">
                            <thead>
                                <tr>
                                    <th>Nome</th>
                                    <th>RG</th>
                                    <th>CPF</th>
                                    <th>Sexo</th>
                                    <th>Data de nascimento</th>
                                    <th>Naturalidade</th>
                                    <th>Número</th>
                                    <th>Rua</th>
                                    <th>CEP</th>
                                    <th>Cidade</th>
                                    <th>UF</th>
                                    <th>Telefone</th>
                                    <th>Email</th>
                                    <th>Pai</th>
                                    <th>Mãr</th>
                                    <th>Mensagem</th>
                                </tr>
                            </thead>
                            <tbody> `);

        for (var i = 0; i < listaAlunos.length; i++) {
            resp.write(`        <tr>
                                    <td>${listaAlunos[i].nome}</td>
                                    <td>${listaAlunos[i].rg}</td>
                                    <td>${listaAlunos[i].cpf}</td>
                                    <!--<td>${listaAlunos[i].sexo}</td>-->
                                    <td>${listaAlunos[i].datnascimento}</td>
                                    <td>${listaAlunos[i].naturalidade}</td>
                                    <td>${listaAlunos[i].numero}</td>       
                                    <td>${listaAlunos[i].rua}</td>
                                    <td>${listaAlunos[i].cep}</td>                                    
                                    <td>${listaAlunos[i].cidade}</td>
                                    <td>${listaAlunos[i].uf}</td>
                                    <td>${listaAlunos[i].telefone}</td>
                                    <td>${listaAlunos[i].email}</td>
                                    <td>${listaAlunos[i].pai}</td>
                                    <td>${listaAlunos[i].mae}</td>
                                    <td>${listaAlunos[i].texto}</td>                       
                                </tr> `);
        }
    resp.write(`            </tbody>          
                        </table>

                        <p><a class="btn btn-primary" href="/cadastrarAluno">Cadastrar outro aluno</a></p>
                    
                    </body>
                    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
                    </html> `);
    } else {
        resp.write(`<html lang="pt-br">
                        <head>
                            <meta charset="UTF-8">
                            <meta name="viewport" content="width=device-width, initial-scale=1.0">
                            <title>Matrícula</title>
                            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
                        </head>
                        <body>
                            <div class="container py-5">
                                <div class="row pt-5">
                                    <div class="col-lg-8">
                                        <div class="bg-light p-5">
                                            <h2 class="mb-4">Matrícula</h2>
                                            <form method="POST" action="/cadastrarAluno">
                                                <div class="form-group">
                                                    <label for="nome">Nome Completo</label>
                                                    <input type="text" class="form-control" id="nome" name="nome" value="${nome}"/>
                                                </div>
                `);
        if (!nome) {
                                resp.write  (`  <div>
                                                    <spam><p class="text-danger">Nome obrigatório</p></spam>
                                                </div>
                                            `);
        }
    //--- RG ----
                                resp.write  (`  <div class="form-group">
                                                    <label for="rg">RG</label>
                                                    <input type="text" class="form-control" id="rg" name="rg" value="${rg}"/>
                                                </div>
                                            `);
        if (!rg) {
                                resp.write  (`  <div>
                                                    <spam><p class="text-danger">Número do RG obrigatório</p></spam>
                                                </div>
                                            `);
        }
    //--- CPF ---
                                resp.write  (`  <div class="form-group">
                                                    <label for="cpf">CPF</label>
                                                    <input type="text" placeholder="***.***.***-**" class="form-control" id="cpf" name="cpf" value="${cpf}" />
                                                </div> 
                                            `);
        if (!cpf) {
                                resp.write  (`  <div>
                                                    <spam><p class="text-danger">Número do CPF obrigatório</p></spam>
                                                </div>
                                            `);
        } 
    /*--- SEXO ---
                                resp.write  (`  <div style="display: inline-block;" class="form-group">
                                                    <label for="sexo" style="margin: 6px;">Sexo:</label>

                                                    <input type="radio" id="sexo" value="1" name="sexo" />
                                                    <label style="margin: 6px;" for="sexo">Masculino</label>

                                                    <input type="radio" id="sexo" value="1" name="sexo"/>
                                                    <label style="margin: 6px;" for="sexo">Feminino</label>
                                                </div>
                                            `);
        if (!sexo) {
                                resp.write  (`  <div>
                                                    <spam><p class="text-danger">Escolha o sexo</p></spam>
                                                </div>
                                            `);
        } */
    //--- DATA DE NASCIMENTO ---
                                resp.write  (`  <div style= "float: right;"class="form-group">
                                                    <label style="margin: 6px;" for="datnascimento">Data de Nascimento</label>
                                                    <input type="date" id="datnascimento" name="datnascimento" value="${datnascimento}"/>
                                                </div>
                                            `);
        if (!datnascimento) {
                                resp.write  (`  <div>
                                                    <spam><p class="text-danger">Preencha a Data de Nascimento</p></spam>
                                                </div>
                                            `);
        } 
    //--- NATURALIDADE ---   
                                resp.write  (`  <div class="form-group">
                                                    <label for="naturalidade">Naturalidade</label>
                                                    <input type="text" class="form-control" id="naturalidade" name="naturalidade" value="${naturalidade}"/>
                                                </div> 
                                            `);
        if (!naturalidade) {
                                resp.write  (`  <div>
                                                    <spam><p class="text-danger">Preencha a sua Naturalidade</p></spam>
                                                </div>
                                            `);
        } 
    //--- RUA ---   
                                resp.write  (`  <div class="form-group">
                                                    <label for="rua">Rua</label>
                                                    <input type="text" class="form-control" id="rua" name="rua" value="${rua}"/>
                                                </div>
                                            `);
        if (!rua) {
                                resp.write  (`  <div>
                                                    <spam><p class="text-danger">Preencha a Rua</p></spam>
                                                </div>
                                            `);
        }
     //--- NÚMERO ---    
                                resp.write  (`  <div class="form-group">
                                                    <label for="numero">Nº</label>
                                                    <input type="number" class="form-control" id="numero" name="numero" value="${numero}"/>
                                                </div>
                                            `);
        if (!numero) {
                                resp.write  (`  <div>
                                                    <spam><p class="text-danger">Número obrigatório</p></spam>
                                                </div>
                                            `);
        } 
    //--- CEP ---    
                                resp.write  (`  <div class="form-group">
                                                    <label for="cep">CEP</label>
                                                    <input type="text" placeholder="*****-***" class="form-control" id="rg" name="cep" value="${cep}"/>
                                                </div>
                                            `);
        if (!cep) {
                                resp.write  (`  <div>
                                                    <spam><p class="text-danger">Número do CEP</p></spam>
                                                </div>
                                            `);
        } 
    //--- CIDADE ---
                                resp.write (`   <div class="form-group">
                                                    <label for="cidade">Cidade</label>
                                                    <input type="text" class="form-control" id="cidade" name="cidade" value="${cidade}"/>
                                                </div >
                                            `);
        if (!cidade) {
                                resp.write  (`  <div>
                                                    <spam><p class="text-danger">Número do RG obrigatório</p></spam>
                                                </div>
                                            `);
        } 
    //--- UF ---   
                                resp.write  (`  <div">
                                                    <label for="uf">Estado</label>
                                                    <select name="uf" class="form-control" id="uf" name="uf">
                                                        <option value="1">AC</option>
                                                        <option value="1">AL</option>
                                                        <option value="1">AP</option>
                                                        <option value="1">AM</option>
                                                        <option value="1">BA</option>
                                                        <option value="1">CE</option>
                                                        <option value="1">DF</option>
                                                        <option value="1">ES</option>
                                                        <option value="1">GO</option>
                                                        <option value="1">MA</option>
                                                        <option value="1">MT</option>
                                                        <option value="1">MS</option>
                                                        <option value="1">MG</option>
                                                        <option value="1">PA</option>
                                                        <option value="1">PB</option>
                                                        <option value="1">PR</option>
                                                        <option value="1">PE</option>
                                                        <option value="1">PI</option>
                                                        <option value="1">RJ</option>
                                                        <option value="1">RN</option>
                                                        <option value="1">RS</option>
                                                        <option value="1">RO</option>
                                                        <option value="1">RR</option>
                                                        <option value="1">SC</option>
                                                        <option value="1">SP</option>
                                                        <option value="1">SE</option>
                                                        <option value="1">TO</option>
                                                    </select>  
                                                </div> 
                                            `);
        if (!uf) {
                                resp.write  (`  <div>
                                                    <spam><p class="text-danger">Número do RG obrigatório</p></spam>
                                                </div>
                                            `);
        } 
    //--- TELEFONE ---    
                                resp.write  (`  <div class="form-group">
                                                    <label for="telefone">Telefone</label>
                                                    <input type="tel" title="(**)*****-****" class="form-control" id="telefone" name="telefone" value="${telefone}"/>
                                                </div>
                                            `);
        if (!telefone) {
                                resp.write (`   <div>
                                                    <spam><p class="text-danger">Número do Telefone</p></spam>
                                                </div>
                                            `);
        }
    //--- EMAil ---

                                resp.write (`   <div class="form-group">
                                                    <label for="email">Email</label>
                                                    <input type="email" placeholder="email@email.com.br" class="form-control" id="email" name="email" value="${email}"/>
                                                </div>
                                            `);
        if (!email) {
                                resp.write (`   <div>
                                                    <spam><p class="text-danger">Preencha o Email</p></spam>
                                                </div>
                                            `);
        }
    //--- PAI ---
                                resp.write (`   <div class="form-group">
                                                    <label for="pai">Nome do pai</label>
                                                    <input type="text" class="form-control" id="pai" name="pai" value="${pai}"/>
                                                </div>
                                            ` );
        if (!pai) {
                                resp.write (`   <div>
                                                    <spam><p class="text-danger">Informe o nome do Pai</p></spam>
                                                </div>
                                            `);
        }
    //--- MÃE ---
                                resp.write  (`  <div class="form-group">
                                                    <label for="mae">Nome da mãe</label>
                                                    <input type="text" class="form-control" id="mae" name="mae" value="${mae}"/>
                                                </div>
                                            `);
        if (!mãe) {
                                resp.write  (`  <div>
                                                    <spam><p class="text-danger">Informe o nome do mãe</p></spam>
                                                </div>
                                            `);
        }
    //--- FOTO ---

    //--- MENSAGEM ---
                                resp.write  (`  <div class="form-group">
                                                    <label for="texto">Deixe uma mensagem</label>
                                                        <textarea
                                                            id="texto"
                                                            cols="30"
                                                            rows="5"
                                                            class="form-control"
                                                            name="texto" value="${texto}"
                                                        ></textarea>
                                                </div>
                                            `); 
        if(!texto){
                                resp.write  (`  <div>
                                                    <spam><p class="text-danger">Escreva uma mensagem</p></spam>
                                                </div>
                                            `);
        }
                                resp.write  (`  <div class="form-group mb-0">
                                                    <input
                                                        type="submit"
                                                        value="Enviar"
                                                        class="btn btn-primary px-3"
                                                    />
                                                </div>
                                            </div>
                                        </form>
                                    </body>
                                    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
                                    </html> 
                                    
                                            `);                                
        resp.end();
    }
}

app.get('/', menu);
app.get('/cadastrarAluno', formularioAluno);
app.post('/cadastrarAluno', cadastrarAluno);


app.listen(porta, host, () => {
    console.log(`Servidor iniciado e em execução no endereço http://${host}:${porta}`)
});