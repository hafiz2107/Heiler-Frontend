import axios from 'axios'


const config = {
    headers: {
        "Content-Type": "application/json"
    }
}
const server = 'http://localhost:5000/user';

// Function TO login User
const login = (values) => {
    return new Promise((resolve, reject) => {
        axios.post(`${server}/login`, { ...values }, { config }).then((response) => {
            // Resolving If the details are true
            resolve(response)
        }).catch((errResponse) => {
            // Rejecting if the details are false
            reject(errResponse)
        })
    })
}

// function to handel Google Login
const handleGoogleLogin = (googleData) => {
    return new Promise((resolve, reject) => {
        axios.post(`${server}/googlelogin`, { token: googleData.tokenId }, { config }).then((response) => {
            resolve(response)
        }).catch((err) => {
            reject(err.response)
        })
    })
}

const checkEmailAlreadyExist = (values) => {
    return new Promise((resolve, reject) => {
        try {
            axios.post(`${server}/checkemail`, { email: values.email }, { config }).then((result) => {
                if (result.status === 204) {
                    resolve(true)
                } else {
                    reject(false)
                }
            })
        } catch (err) {
            console.log("There are errors in email checking", err)
        }
    })
}

// Function To handle Sign UP
const userSignUp = (values) => {
    return new Promise((resolve, reject) => {
        axios.post(`${server}/sendOtp`, { username: values.username, email: values.email, password: values.password }, { config }).then((result) => {
            if (result.status === 200) {
                resolve(result)
            } else if (result.status === 201) {
                resolve(result)
                // setLoading(false)
                // setEmailError(result.data.message)
            }
        }).catch((err) => {
            console.log("The error is : ", err)
            reject(err)
        })
    })
}

const sendOtp = () => {
    return new Promise((resolve, reject) => {
        let values = JSON.parse(localStorage.getItem("UserDetails"))

        axios.post(`${server}/sendOtp`, { username: values.username, email: values.email, password: values.password }, { config }).then((result) => {
            resolve(result)
        }).catch((err) => {
            reject(err)
        })
    })
}

const verifyOtp = (OTP, userId) => {

    return new Promise((resolve, reject) => {
        axios.post(`${server}/verifyotp`, { userId, inputOtp: OTP }, { config }).then((response) => {
            if (response.status === 200) {
                resolve(response)
            }
        }).catch((errResponse) => {
            reject("Invalid OTP")
        })
    })
}


export { login, handleGoogleLogin, userSignUp, checkEmailAlreadyExist, sendOtp, verifyOtp }