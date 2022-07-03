module.exports = (sequelize, DataTypes)=>{
    const Profile = sequelize.define('Profile',{
        firstName:{
            type:DataTypes.STRING,          
            allowNull:false,

        },
        lastName:{
            type:DataTypes.STRING,
            allowNull:false,

        },
        age:{
            type:DataTypes.STRING,
            allowNull:false,

        },
        email:{
            type:DataTypes.STRING,
            allowNull:false,

        },
        password:{
            type:DataTypes.STRING,
            allowNull:false,

        },
        phone:{
            type:DataTypes.STRING,
            allowNull:false,

        },
        address:{
            type:DataTypes.STRING,
            allowNull:false,

        },
    })  
    return Profile
}