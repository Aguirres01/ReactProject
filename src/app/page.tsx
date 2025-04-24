'use client'

import Banner from "@/components/Banner";
import Formulario from "@/components/Formulario";
import Time from "@/components/Time";
import Footer from "@/components/Footer";
import { useState } from "react";

type PlayerType = {
  id: string;
  nome: string;
  funcao: string;
  imagem: string;
  time: string;
};

export default function Home() {
  const times = [
    { nome: 'PUBG', corPrimaria: '#57C278', corSecundaria: '#D9F7E9' },
    { nome: 'COD', corPrimaria: '#A6D157', corSecundaria: '#F0F8E2' },
    { nome: 'DESTINY 2', corPrimaria: '#E06B69', corSecundaria: '#FDE7E8' },
    { nome: 'BATTLEFIELD', corPrimaria: '#D86EBF', corSecundaria: '#FAE5F5' },
    { nome: 'FORTNITE', corPrimaria: '#FEBA05', corSecundaria: '#FFF5D9' },
    { nome: 'VALORANT', corPrimaria: '#FF8A29', corSecundaria: '#FFEEDF' }
  ];

  const [players, setPlayers] = useState<PlayerType[]>([]);

  const aoNovoPlayerAdicionado = (player: PlayerType) => {
    debugger

    setPlayers([...players, player]);
  };

  return (
    <>
      <Banner />
      <Formulario
        NomesDosTimes={times.map(time => time.nome)}
        aoPlayerCadastrado={aoNovoPlayerAdicionado}
      />

      {times.map(time => {
        const jogadoresDoTime = players.filter(player => player.time === time.nome);

        return (
          <Time
            key={time.nome}
            nome={time.nome}
            corPrimaria={time.corPrimaria}
            corSecundaria={time.corSecundaria}
            players={jogadoresDoTime}
          />
        );
      })}
      <Footer />
    </>
  );
}
