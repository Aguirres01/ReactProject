import styles from "./Time.module.css"

const Time = (props:any) => {
    return(
        <section className={styles.time} style={{backgroundColor:props.corSecundaria}}>
            <h3 style={{borderColor: props.corPrimaria}}>{props.nome}</h3>
        </section>
    )
}
export default Time