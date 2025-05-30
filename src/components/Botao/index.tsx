import { ReactNode } from 'react';
import styles from './Botao.module.css'
const Botao = (props: { children: ReactNode }) => {
    return (
        <button className={styles.botao}>
            {props.children}
            </button>
    );
}

export default Botao