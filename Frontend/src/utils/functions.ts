export const signupFormValidation = (formData:any)=>{
    console.log(formData)
    return new Promise((resolve, reject) => {
        if (formData.password.length <6 ) {
            console.log("failed 1")
            reject('Password is less than 6 characters')
        }
        else if (formData.password !== formData.confirm_password){
            console.log("failed 2")
            reject('Password and Confirm Password do not match')
        }
        else {
            console.log("success")
            resolve('Success')
        }
    })
}
export const loginFormValidation = (formData:any)=>{
    console.log(formData)
    return new Promise((resolve, reject) => {
        if (formData.password.length <6 ) {
            console.log("failed 1")
            reject('Password is less than 6 characters')
        }
        else {
            console.log("success")
            resolve('Success')
        }
    })
}