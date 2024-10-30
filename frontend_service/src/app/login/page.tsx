import LoginForm from "../components/login/loginform";
import styles from "@/app/styles/login.module.css"

const Login = () => {
  return (
    <div className={styles.login_container}>
      <LoginForm/>
    </div>
  );
};

export default Login;
