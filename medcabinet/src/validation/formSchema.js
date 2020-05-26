import * as yup from 'yup'

const formSchema = yup.object().shape({
    email: yup.string()
      .email('The Email must be a valid email address')
      .required('Email is a required field'),
    username: yup.string()
      .trim()
      .min(7, 'Your username must be at least seven characters long')
      .required('The username is a required field'),
    password: yup.string()
      .min(7, 'Your password must be at least seven characters long')
      .required('The password is a required field')
})

export default formSchema