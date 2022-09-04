module.exports = (sequelize, DataType) => {
    const AlunoCurso = sequelize.define('AlunoCurso', {
        id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        cursoId: {
            type: DataType.INTEGER,
            allowNull: false,
            foreignKey: true,
            field: 'curso_id'
        },
        aluno_id: {
            type: DataType.INTEGER,
            allowNull: false,
            foreignKey: true,
        },
    }, {
        tableName: 'cursos-comprados'
    });
    
    return AlunoCurso;
}