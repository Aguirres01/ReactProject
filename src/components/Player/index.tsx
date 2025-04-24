import style from "./Player.module.css"

const Player = (props:any) => {
    return (<div className={style.player}>
        <div className={style.cabecalho}>
            <img src={props.imagem} alt={props.nome} />
        </div>
        <div className={style.rodape}>
            <h4>{props.nome}</h4>
            <h5>{props.funcao}</h5>
        </div>
        
        
    </div>)
}

export default Player