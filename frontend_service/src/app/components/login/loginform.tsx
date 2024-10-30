import styles from "@/app/styles/login.module.css"
import Image from "next/image";


const LoginForm = () => {
    return (
        <form className={styles.form_login}>
         <Image src={"/logomarwin.png"} alt = 'Logo do Marwin' width={286} height={169}/>
        <p className={styles.frase_caption}> Faça login e vem ser Marwin! </p>
        <div>
          <label className={styles.label_login} htmlFor="login" style={{marginTop: "50px"}}>
            Endereço de email:
          </label>
          <input
            className={styles.input_login}
            type="text"
            id="login"
            required
          />
       
          <label className={styles.label_login} htmlFor="senha">
            Senha:
          </label>
          <div className={styles.div_password}>
          <input
            className={styles.input_login} 
            style={{
              width: "90%",
              borderTopRightRadius: "0px",
              borderBottomRightRadius: "0px"
            
            }}
            type="password"
            id="senha"
            required
          />
          <button className={styles.button_eye}
          type="button"> <Image className={styles.Olho_senha} src={"/olhinhosenha.png"} alt = 'Olho_senha' width={24} height={24}/> </button>
          </div>
        </div>
        <div className={styles.button_container}>
          <button className={styles.button_login} type="submit">
            Me cadastrar
          </button>
          <button className={styles.button_cadastrar} type="submit">
            Entrar
          </button>
        </div>
      </form>
    )
}
export default LoginForm;