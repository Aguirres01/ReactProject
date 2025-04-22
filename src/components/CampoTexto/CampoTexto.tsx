import { useState } from 'react';
import styles from './CampoTexto.module.css';

//outra forma de criar um componente, usando uma const, em seguida arrow function. Quando coloco return ( ) é pq vai retornar mais itens.
//usando o props, eu paso informações do componente para onde vou usar o componente. ex. em Page.tsx eu uso o props.label e props.placeholder inserindo a sright em CampoTexto
const CampoTexto = (props:any) => {

    const [valor, setValor ] = useState('')

    const aoDigitado = (evento: { target: { value: any; }; }) => {
        props.aoAlterado(evento.target.value)
    }


    return (
        <div className={styles.campoTexto}>
            <label>{props.label} </label>
            <input value={props.valor} onChange={aoDigitado}required={props.obrigatorio} placeholder={props.placeholder} />
        </div>
    );
}

export default CampoTexto