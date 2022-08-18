const Curso = require('./Curso');
const Aluno = require('./Aluno');
module.exports = (sequelize, DataType) => {
    const AlunoCurso = sequelize.define('AlunoCurso', {
        id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        curso_id: {
            type: DataType.INTEGER,
            allowNull: false,
            foreignKey: true,
        },
        aluno_id: {
            type: DataType.INTEGER,
            allowNull: false,
            foreignKey: true,
        },
    }, {
        tableName: 'cursos-comprados'
    }
    );
    return AlunoCurso;
}