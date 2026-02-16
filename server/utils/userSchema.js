const signUpSchema = {
    username:{
        
        trim:true,
        notEmpty:{
            errorMsg:"username must not empty."
        },
        isString:{
            errorMsg:"Username must be a string"
        },
        
        
    },
    email:{
        trim:true,
        notEmpty:{
            errorMsg:"email id must not empty."
        },
        isString:{
            errorMsg:"email id must be a string"
        },
       

    },
    password:{
        trim:true,
        notEmpty:{
            errorMsg:"password must not empty."
        },
        isString:{
            errorMsg:"password must be a string"
        },
        

    }
}


const signInSchema = {
    username:{
        trim:true,
        notEmpty:{
            errorMsg:"username must not empty."
        },
        isString:{
            errorMsg:"Username must be a string"
        },
        
        
    },
    password:{
        trim:true,
        notEmpty:{
            errorMsg:"password must not empty."
        },
        isString:{
            errorMsg:"password must be a string"
        },
    }
}

module.exports = {
    signUpSchema,
    signInSchema,
}