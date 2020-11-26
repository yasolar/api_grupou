const aluno = require('./aluno.routes')
const ativAvaliativa = require('./ativAvaliativa.routes')
const avaliacao360 = require('./avaliacao360.routes')
const curso = require('./curso.routes')
const disciplina = require('./disciplina.routes')
const grupo = require('./grupo.routes')
const hardSkill = require('./hardSkill.routes')
const professor = require('./professor.routes')
const questao = require('./questao.routes')
const softSkill = require('./softSkill.routes')
const tarefa = require('./tarefa.routes')
const turma = require('./turma.routes')
const usuario = require('./usuario.routes')


module.exports = app => {
    app.use('/api/aluno', aluno);
    app.use('/api/ativAvaliativa', ativAvaliativa);
    app.use('/api/avaliacao360', avaliacao360);
    app.use('/api/curso', curso);
    app.use('/api/disciplina', disciplina);
    app.use('/api/grupo', grupo);
    app.use('/api/hardSkill', hardSkill);
    app.use('/api/professor', professor);
    app.use('/api/questao', questao);
    app.use('/api/softSkill', softSkill);
    app.use('/api/tarefa', tarefa);
    app.use('/api/turma', turma);
    app.use('/api/usuario', usuario);
}