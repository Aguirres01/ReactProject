import styles from './ListaSuspensa.module.css';
import React from 'react';

interface Props {
  label: string;
  itens: string[];
  valor: string; // O valor selecionado será uma string
  aoAlterado: (valor: string) => void; // Função para lidar com a mudança
  required?: boolean;
}

const ListaSuspensa = (props: Props) => {
  return (
    <div className={styles.ListaSuspensa}>
      <label>{props.label}</label>
      <select
        onChange={(evento) => props.aoAlterado(evento.target.value)}
        required={props.required}
        value={props.valor}
      >
        <option value="">Selecione um time</option> {/* Adicione uma opção padrão */}
        {props.itens.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ListaSuspensa;