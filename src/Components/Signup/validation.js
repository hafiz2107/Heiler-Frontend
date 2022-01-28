

const validation = (values) => {
    let errors = {};

    if(!values.firstName){
        errors.firstName = "First Name is required"
    }
    if(!values.lastName){
        errors.lastName = "Last Name is required"
    }
    if(!values.email){
        errors.email = "Email is required"
    }else if(!/^[a-zA-Z0-9.!#$%&'*+=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(values.email)){
        errors.email = "Please Enter a valid email"
    }

    if(!values.phone){
        errors.phone="Phone Number is required"
    }else if(values.phone.length >10 || values.phone.length <10){
        errors.phone = "Enter a valid Mobile number"
    }


    if(!values.password){
        errors.password = "Password is required"
    }else if(values.password.length <6 ){
        errors.password = "Please enter atleast 6 characters"
    }

    if(!values.confirmpassword){
        errors.confirmpassword = "Password Confirmation is required"
    }else if(values.confirmpassword !== values.password){
        errors.confirmpassword = "The passwords must be same"
    }

    console.log("The errors ate : ",errors)
    return errors
}

export default validation