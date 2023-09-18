import { FlatList, Text, StyleSheet } from 'react-native';
import React, { useEffect, useState } from 'react';

import Produtor from './Produtor';
import useProdutores from '../../../hooks/useProdutores';
import estrelas from '../../../componentes/Estrelas';

export default function Produtores({ topo: Topo, item }) {
  const [titulo, lista] = useProdutores();

  const TopoLista = () => {
    return <>
      <Topo />
      <Text style={estilos.titulo}>{titulo}</Text>
    </>
  }

  const ordenarPorDistancia = (a, b) => {
    return a.distancia - b.distancia
  }

  const ordenarPorestrelas = (a, b) => {
    return a.estrelas - b.estrelas
  }

  const ordenarPorNome = (a, b) => {
    return a.nome.localeCompare(b.nome)
  }

  return <FlatList
    data={lista.sort(ordenarPorestrelas)}
    renderItem={({ item }) => <Produtor {...item} onAtualizaEstrelas={(quantidade) => {
      item.estrelas = quantidade
    }}/>}
    keyExtractor={({ nome }) => nome.id}  //codigo da aula
    // keyExtractor={item => item.id}
    ListHeaderComponent={TopoLista} />
}

const estilos = StyleSheet.create({
  titulo: {
    fontSize: 20,
    lineHeight: 32,
    marginHorizontal: 16,
    marginTop: 16,
    fontWeight: 'bold',
    // color: '#464646',
  }
})