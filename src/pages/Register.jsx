import LoginForm from "../components/LoginForm";
import RegisterForm from "../components/RegisterForm";

const Register = () => {

    return <>
        <div className="container">
            <div className="row">
                <div className="col-lg-6 col-sm-12 my-3">
                    <RegisterForm />
                </div>
                <div className="col-lg-6 col-sm-12 my-3">
                     <LoginForm />
                </div>
            </div>
        </div>
    </>
};
export default Register;
