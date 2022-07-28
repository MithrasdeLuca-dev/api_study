module.exports = (sequelize, DataType) => {
    const Aluno = sequelize.define('Aluno', {
        id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        nome_documento: {
            type: DataType.STRING,
            allowNull: false,
        },
        nome_social: {
            type: DataType.STRING,
            allowNull: false,
        },
        email: {
            type: DataType.STRING,
            allowNull: false,
        },
        senha: {
            type: DataType.STRING,
            allowNull: false,
        },
        cpf: {
            type: DataType.INTEGER,
            allowNull: false,
        },
        data_nascimento:{
            type: DataType.DATE,
            allowNull: false,
        }
    }, {
        tableName: 'alunos',
    }
    )
    return Aluno
}