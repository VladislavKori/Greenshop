import { FC } from 'react';
import { useFormik } from 'formik'
import * as Yup from 'yup';
import './registerModal.css'
import { GoogleIcon, FacebookIcon } from '@ui/assets/AuthImages/imports'

interface IRegisterModalProps {
    onClose: () => void;
    onChangeForm: () => void;
}

export const RegisterForm: FC<IRegisterModalProps> = ({ onClose, onChangeForm }) => {

    const formik = useFormik({
        initialValues: {
            username: '',
            email: '',
            password: '',
            passwordConfirmation: '',
        },
        validationSchema: Yup.object({
            username: Yup.string().max(12, 'username >12 symbols').required('Required'),
            email: Yup.string().email('Invalid email address').required('Required'),
            password: Yup.string().min(5, 'password need >5 symbols').required('Required'),
            passwordConfirmation: Yup.string().oneOf([Yup.ref('password')], 'Passwords must match').required('Required')

        }),
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    })

    return (
        <div className="modal__auth">
            <div className="modal-auth__change">
                <button className="modal-auth__change-btn" onClick={onChangeForm} >Login</button>
                <button className="modal-auth__change-btn modal-auth__change-btn_active">Register</button>
            </div>

            <form className="modal-auth__form" onSubmit={formik.handleSubmit} >
                <p className="modal-auth__form-comment">Enter your email and password to register.</p>

                <input
                    className="modal-auth__form-input"
                    type="text"
                    placeholder="Username"
                    name="username"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.username}
                />
                {formik.errors.username && formik.touched.username ? (<p className='modal-auth__form-input_error'>{formik.errors.username}</p>) : null}

                <input
                    className="modal-auth__form-input"
                    type="text"
                    placeholder="Enter your email address"
                    name="email"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                />
                {formik.errors.email && formik.touched.email ? (<p className='modal-auth__form-input_error'>{formik.errors.email}</p>) : null}

                <input
                    className="modal-auth__form-input"
                    type="password"
                    placeholder="Password"
                    name="password"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.password}
                />
                {formik.errors.password && formik.touched.password ? (<p className='modal-auth__form-input_error'>{formik.errors.password}</p>) : null}

                <input
                    className="modal-auth__form-input"
                    type="password"
                    placeholder="Confirm Password"
                    name="passwordConfirmation"
                    onChange={formik.handleChange}
                    value={formik.values.passwordConfirmation}
                />
                {formik.touched.passwordConfirmation && formik.errors.passwordConfirmation ? (<p className='modal-auth__form-input_error'>{formik.errors.passwordConfirmation}</p>) : null}

                <button className="modal-auth__btn modal__btn" type="submit">Register</button>
            </form>

            <div className="modal-auth__social">
                <div className="modal-auth__social-title"><p className="modal-auth__social-title-text">Or register with</p></div>
                <button className="modal-auth__social-btn">
                    <img className="modal-auth__social-btn-icon" src={GoogleIcon} alt="google" />
                    <p className="modal-auth__social-btn-text">Login with Google</p>
                </button>
                <button className="modal-auth__social-btn">
                    <img className="modal-auth__social-btn-icon" src={FacebookIcon} alt="facebook" />
                    <p className="modal-auth__social-btn-text">Login with Facebook</p>
                </button>
            </div>
        </div>
    )
}