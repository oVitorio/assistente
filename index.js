const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

const dadosManutencoes = [
    {"nome": "Manutenção do Motor", "tipo": "Preventiva", "tarefas_alocadas": 5},
    {"nome": "Inspeção da Fuselagem", "tipo": "Corretiva", "tarefas_alocadas": 3},
    {"nome": "Reparo do Trem de Pouso", "tipo": "Emergencial", "tarefas_alocadas": 2}
    // Adicione mais manutenções conforme necessário
];

app.post('/webhook', (req, res) => {
    const intent = req.body.queryResult.intent.displayName;

    if (intent === 'ConsultaManutencoes') {
        const response = consultarManutencoes();
        res.json(response);
    } else {
        const response = {"fulfillmentText": "Desculpe, não entendi o seu pedido."};
        res.json(response);
    }
});

function consultarManutencoes() {
    // Lógica para consultar o banco de dados e obter informações sobre as manutenções
    // Você pode acessar a lista dadosManutencoes aqui para obter os dados

    // Exemplo de resposta com base nos dados do banco de dados
    let resposta = "Aqui estão as manutenções agendadas para este mês:\n";
    dadosManutencoes.forEach(manutencao => {
        resposta += `Nome: ${manutencao.nome}, Tipo: ${manutencao.tipo}, Tarefas Alocadas: ${manutencao.tarefas_alocadas}\n`;
    });

    return {"fulfillmentText": resposta};
}

app.listen(port, () => {
    console.log(`Servidor webhook está rodando na porta ${port}`);
});
