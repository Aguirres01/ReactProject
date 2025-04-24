'use client'

import { useState } from "react";
import Botao from "../Botao";
import CampoTexto from "../CampoTexto";
import ListaSuspensa from "../ListaSuspensa";
import styles from './Formulario.module.css'

const Formulario = (props: any) => {
    const [nome, setNome] = useState('');
    const [funcao, setFuncao] = useState('');
    const [imagem, setImagem] = useState('');
    const [imagemLocal, setImagemLocal] = useState<File | null>(null);
    const [time, setTime] = useState('');

    const aoSalvar = (event: React.FormEvent) => {
        event.preventDefault();

        let imagemFinal = imagem;

        if (imagemLocal) {
            imagemFinal = URL.createObjectURL(imagemLocal); // cria URL temporária
        }

        props.aoPlayerCadastrado({
            id: crypto.randomUUID(),
            nome,
            funcao,
            imagem: imagemFinal || "https://via.placeholder.com/150",
            time
        });

        // Limpa os campos
        setNome('');
        setFuncao('');
        setImagem('');
        setImagemLocal(null);
        setTime('');
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
                    label="Função"
                    placeholder="Digite sua função no squad"
                    valor={funcao}
                    aoAlterado={(valor: string) => setFuncao(valor)} />

                <CampoTexto
                    label="Imagem (URL)"
                    placeholder="Link da imagem (opcional)"
                    valor={imagem}
                    aoAlterado={(valor: string) => setImagem(valor)} />

                <div className={styles.campoArquivo}>
                    <label htmlFor="upload">Ou selecione uma imagem local:</label>
                    <input
                        id="upload"
                        type="file"
                        accept="image/*"
                        onChange={(e) => {
                            if (e.target.files && e.target.files.length > 0) {
                                setImagemLocal(e.target.files[0]);
                            }
                        }}
                    />
                </div>

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

export default Formulario;
