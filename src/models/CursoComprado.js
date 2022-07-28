module.exports = (sequelize, DataType) => {
    const CursoComprado = sequelize.define('CursoComprado', {
        id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        curso_id: {
            type: DataType.INTEGER,
            allowNull: false,
        },
        aluno_id: {
            type: DataType.INTEGER,
            allowNull: false,
        },
    }, {
        tableName: 'cursos-comprados'
    });
    return CursoComprado
}