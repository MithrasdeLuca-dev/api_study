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
		usuario_id: {
			type: DataType.UUID,
			allowNull: false,
			foreignKey: true,
		},
	}, {
		tableName: 'cursos-comprados'
	}
	);
	return AlunoCurso;
};