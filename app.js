const express = require('express');
const res = ('express/lib/response');
const port = process.env.PORT || 3000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));

let disciplinas = [
    {
        id:"1",
        disciplina:"Análise e Projeto de Software",
        professor:"Davi Maia"
    },
    {
        id:"2",
        disciplina:"Computação em Nuvem e Web Services",
        professor:"Lúcio Monteiro"
    },
    {
        id: "3",
        disciplina: "Inovação e Empreendedorismo",
        professor: "Guilherme Reinaldo"
      },
    {
        id: "4",
        disciplina: "Arquitetura de Software",
        professor: "Arthur"
      },
    {
        id: "5",
        disciplina: "Estatística Aplicada (A Data Science)",
        professor: "Davi Maia"
      },
    {
        id: "6",
        disciplina: "Projeto Integrador 3",
        professor: "Arthur"
      }
]


app.get("/disciplina", (req, res) => {
    res.json(disciplinas);
});

app.post('/disciplina', (req, res) => {
    const disciplina = req.body

    console.log(disciplina);
    disciplinas.push(disciplina);
    
    res.send('Disciplina adicionada a lista!');
});

app.put('/disciplina/:id', (req, res) => {
    const newdisciplina = req.body
    const id = req.params.id

    for (let disciplina of disciplinas) {
        if(disciplina.id === id) {
            disciplina.disciplina = newdisciplina.disciplina
            disciplina.professor = newdisciplina.professor
            res.json(disciplina)
            return
        }
    }

    res.send('Disciplina atualizada!');
});


app.get('/disciplina/:id', (req,res) => {
    const id = req.params.id

    for (let disciplina of disciplinas) {
        if(disciplina.id === id) {
            res.json(disciplina)
            return
        }
    }
    res.status(404).send('disciplina not found!')
})


app.delete('/disciplina/:id', (req,res) => {
    const id = req.params.id

    disciplinas = disciplinas.filter(disciplina => {
        if (disciplina.id !== id) {
            return true;
        }
        return false;
    });
    res.send("Disciplina foi apagada!");
});

app.listen(port, () => console.log(`Servidor iniciado na porta ${port}`));

