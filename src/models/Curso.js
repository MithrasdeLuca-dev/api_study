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

    Curso.associate = (models) =>{
        Curso.belongsToMany(models.Aluno, {
            foreignKey: 'curso_id',
            through: 'AlunoCurso',
            as: 'Aluno'
        });
    }

    return Curso
}