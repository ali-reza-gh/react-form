const validate = (data) => {

    const errors = {};

    if (!data.userName.trim()) {
        errors.name = "userName required"
    } else {
        delete errors.name
    }

    if (!data.email) {
        errors.email = "emale needed"
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
        errors.email = 'unvalid email'
    }
    else {
        delete errors.email
    }

    if (!data.password) {
        errors.password = 'please enterpassword'
    }
    else if (data.password.length < 6) {
        errors.password = 'password need to be 6 charecter or more'
    } else {
        delete errors.password
    }

    if (!data.corentPassword) {
        errors.corentPassword = 'please enter corentPassword'
    }else if(data.password!=data.corentPassword){
        errors.corentPassword='its not same whith password'
    }else{
        delete errors.corentPassword
    }
    if(data.isAccepted){
        errors.isAccepted="accept us"
    }else{
        delete errors.isAccepted
    }




}