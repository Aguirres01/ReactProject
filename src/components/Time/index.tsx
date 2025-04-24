import Player from "../Player";
import styles from "./Time.module.css";

type PlayerType = {
  id: string;
  nome: string;
  funcao: string;
  imagem: string;
};



const Time = (props:any) => {
  return (
    //mostrar apenas campos que não estão vazios.
    (props.players.length > 0) && <section className={styles.time} style={{ backgroundColor: props.corSecundaria }}>
      <h3 style={{ borderColor: props.corPrimaria }}>{props.nome}</h3>
      <div className={styles.players}>
      {props.players.map((player: { id: any; nome: any; funcao: any; imagem: any; }) => <Player key={player.id} nome={player.nome} funcao={player.funcao} imagem={player.imagem}
        />
      )}
      </div>
    </section>
  );
};

export default Time;
