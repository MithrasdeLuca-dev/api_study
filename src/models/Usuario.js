module.exports = (sequelize, DataType) => {
    const Usuario = sequelize.define('Usuario', {
        id: {
            type: DataType.UUID,
            primaryKey: true,
            defaultValue: DataType.UUIDV4,
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
        },
        data_nascimento: {
            type: DataType.DATE,
            allowNull: false,
        },
        types: {
            type: DataType.INTEGER,
            allowNull: false
        }
    }, {
        tableName: 'usuarios'
    },
    );
    Usuario.associate = (models) => {
        Usuario.belongsToMany(models.Curso, {
            foreignKey: 'usuario_id',
            through: 'AlunoCurso',
            as: 'Cursos'
        })
    };
    return Usuario
};