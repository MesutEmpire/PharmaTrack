export const signupFormValidation = (formData:any)=>{
    return new Promise((resolve, reject) => {
        if (formData.password.length <6 ) {
            reject('Password is less than 6 characters')
        }
        else if (formData.password !== formData.confirm_password){
            reject('Password and Confirm Password do not match')
        }
        else {
            resolve('Success')
        }
    })
}
export const loginFormValidation = (formData:any)=>{
    return new Promise((resolve, reject) => {
        if (formData.password.length <6 ) {
            reject('Password is less than 6 characters')
        }
        else {
            resolve('Success')
        }
    })
}