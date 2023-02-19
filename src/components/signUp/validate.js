export const validate = (data) => {

    const errors = {};

    if (!data.name.trim()) {
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


    if (!data.confirmPassword) {
        errors.confirmPassword = 'please enter confirm Password'
    }else if(data.confirmPassword !== data.password){
        errors.confirmPassword='its not same whith password'
    }else{
        delete errors.confirmPassword
    }

    
    if(!data.isAccepted){
        errors.isAccepted="accept us"
    }else{
        delete errors.isAccepted
    }


    return(errors)

}