import { useFormik } from 'formik'
import * as Yup from 'yup';
import {Modal} from '@ui/components/atoms'
import './loginModal.css'
import { GoogleIcon, FacebookIcon, CloseIcon } from '@ui/assets/AuthImages/imports'

interface ILoginModalProps {
    onClose: () => void;
    onChaggeForm: () => void;
}

function LoginModal({ onClose, onChaggeForm}: ILoginModalProps) {

    const formik = useFormik({
        initialValues: {
            username: '',
            password: ''
        },
        validationSchema: Yup.object({
            username: Yup.string().max(12, 'username >12 symbols').required('Required'),
            password: Yup.string().min(5, 'password need >5 symbols').required('Required'),
        }),
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        }
    })

    return (
        <Modal>
            <div className="modal__close" onClick={onClose} >
                <img className="modal__close-img" src={CloseIcon} alt="close-btn" />
            </div>

            <div className="modal__auth">
                <div className="modal-auth__change">
                    <button className="modal-auth__change-btn modal-auth__change-btn_active">Login</button>
                    <button className="modal-auth__change-btn" onClick={onChaggeForm}>Register</button>
                </div>

                <form className="modal-auth__form" onSubmit={formik.handleSubmit}>
                    <p className="modal-auth__form-comment">Enter your username and password to login.</p>

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
                        type="password"
                        placeholder="Password"
                        name="password"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.password}
                    />
                    {formik.errors.password && formik.touched.password ? (<p className='modal-auth__form-input_error'>{formik.errors.password}</p>) : null}

                    <a className="modal-auth__form-forget-pass" href="/">Forgot Password?</a>
                    <button className="modal-auth__btn modal__btn" type="submit" >Login</button>
                </form>

                <div className="modal-auth__social">
                    <div className="modal-auth__social-title"><p className="modal-auth__social-title-text">Or login with</p></div>
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
        </Modal>
    )
}

export default LoginModal;
