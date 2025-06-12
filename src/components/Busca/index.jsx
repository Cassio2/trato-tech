import styles from "./Busca.module.scss"
export default function Busca(){
    return(
        <div className={styles.busca}>
            <input placeholder="O que vc Procura?"
             className={styles.input}/>
        </div>
    )
}