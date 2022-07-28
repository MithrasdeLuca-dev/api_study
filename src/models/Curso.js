module.exports = (sequelize, DataType) => {

    const Curso = sequelize.define('Curso', {
        id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        nome_curso: {
            type: DataType.STRING,
            allowNull: false
        },
        duracao: {
            type: DataType.TIME,
            allowNull: false
        },
    }, {
        tableName: 'cursos'
    });
    return Curso
}