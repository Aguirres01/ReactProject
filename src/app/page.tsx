'use client'
import Banner from "@/components/Banner/Banner";
import Formulario from "@/components/Formulario/Formulario";
import Time from "@/components/Time/Time";
import { useState } from "react";

export default function Home() {

  const times = [
    {
      nome: 'PUBG',
      corPrimaria: '#57C278',
      corSecundaria: '#D9F7E9',
    },
    
    {
      nome: 'COD',
      corPrimaria: '#A6D157',
      corSecundaria: '#F0F8E2',
    },
    {
      nome: 'DESTINY 2',
      corPrimaria: '#E06B69',
      corSecundaria: '#FDE7E8',
    },
    {
      nome: 'BATTLEFIELD',
      corPrimaria: '#D86EBF',
      corSecundaria: '#FAE5F5',
    },
    {
      nome: 'FORTNITE',
      corPrimaria: '#FEBA05',
      corSecundaria: '#FFF5D9',
    },
    {
      nome: 'VALORANT',
      corPrimaria: '#FF8A29',
      corSecundaria: '#FFEEDF',
    }

  ]

  const [players, setPlayers] = useState<string[]>([])

  const aoNovoPlayerAdicionado = (player: string) => {
    console.log(player)
    setPlayers([...players, player])
  }


  return (
    <>
      <Banner />
      <Formulario NomesDosTimes={times.map(time =>time.nome)} aoPlayerCadastrado={(player: string) => aoNovoPlayerAdicionado(player)} />

      {times.map(time => <Time key={time.nome} nome={time.nome} corPrimaria={time.corPrimaria} corSecundaria={time.corSecundaria}/>)} 
     
    </>
  );
}
