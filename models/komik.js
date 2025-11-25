module.exports = (sequelize, DataTypes) => {
    const komik = sequelize.define("komik",{
        id : {
            type : DataTypes.INTEGER,
            autoIncrement : true,
            primaryKey : true

        },
        title:{
            type : DataTypes.STRING,
        },
        description: {
            type : DataTypes.STRING,
        },
        author : {
            type: DataTypes.STRING,
            allowNull : false
        },
        imageType : DataTypes.STRING,
        imageName : DataTypes.STRING,
        ImageData : DataTypes.BLOB('long'),
    },
    {      
        tableName : 'komik',
    }

    );
    
    return komik;
};

