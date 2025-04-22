'use client'

import { SetStateAction, useState } from "react";
import Botao from "../Botao/Botao";
import CampoTexto from "../CampoTexto/CampoTexto";
import ListaSuspensa from "../ListaSuspensa/ListaSuspensa";
import styles from './Formulario.module.css'

const Formulario = (props:any) => {

    

    const [nome, setNome] = useState('')
    const [funcao, setFuncao] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')

    const aoSalvar = (event: React.FormEvent) => {
        event.preventDefault()
        props.aoPlayerCadastrado({
            nome,
            funcao,
            imagem,
            time
        })

        
    }


    return (
        <section className={styles.formulario}>
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do Player</h2>
                <CampoTexto
                    obrigatorio={true}
                    label="Nick"
                    placeholder="Digite seu Nick"
                    valor={nome}
                    aoAlterado={(valor: string) => setNome(valor)} />

                <CampoTexto
                    obrigatorio={true}
                    label="Funcão"
                    placeholder="Digite sua funcao no squad"
                    valor={funcao}
                    aoAlterado={(valor: string) => setFuncao(valor)} />

                <CampoTexto
                    label="Imagem"
                    placeholder="Informe o endereço da imagem"
                    valor={imagem}
                    aoAlterado={(valor: string) => setImagem(valor)} />

                <ListaSuspensa
                    label="Time"
                    itens={props.NomesDosTimes}
                    valor={time}
                    aoAlterado={(valor: string) => setTime(valor)}
                />
                <Botao>
                    Criar Card
                </Botao>
            </form>
        </section>
    );
}

export default Formulario