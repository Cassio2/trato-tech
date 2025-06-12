/* eslint-disable react/prop-types */
import styles from "./Header.module.scss"
export default function Header({titulo,descricao,classNome="",imagem}){
    return(
        <header className={`${styles.header} ${classNome}`}>
            <div className={styles['header-texto']}>
                <h1>{titulo}</h1>
                <h2>{descricao}</h2>
            </div>
            <div className={styles['header-imagem']}>
                <img src={imagem} alt={titulo} />
            </div> 
            
        </header>
    )
}