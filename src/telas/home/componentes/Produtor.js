import { Image, TouchableOpacity, Text, View, StyleSheet } from 'react-native';

import Estrelas from '../../../componentes/Estrelas';
import { useReducer, useState, useMemo } from 'react';

const distanciaEmMetros = (distancia) => {
  return `${distancia}m`
}

export default function Produtor({ nome, imagem, distancia, estrelas, onAtualizaEstrelas }) {
  const [selecionado, inverterSelecionado] = useReducer(
    (selecionado) => !selecionado,
    false
  )

  const distanciaTexto = useMemo(
    () => distanciaEmMetros(distancia),
    [distancia]
  )

  return <TouchableOpacity
    style={estilos.cartao}
    onPress={inverterSelecionado}
  >
    <Image source={imagem} style={estilos.imagem} accessibilityLabel={nome} />
    <View style={estilos.informacoes}>
      <View>
        <Text style={estilos.nome}>{nome}</Text>
        <Estrelas
          quantidade={estrelas}
          editavel={selecionado}
          grande={selecionado}
          onAtualizaEstrelas={onAtualizaEstrelas}
        />
      </View>
      <Text style={estilos.distancia}>{distanciaTexto}</Text>
    </View>
  </TouchableOpacity>
}

const estilos = StyleSheet.create({
  cartao: {
    backgroundColor: '#F6F6F6',
    marginVertical: 8,
    marginHorizontal: 8,
    borderRadius: 6,
    flexDirection: 'row',
    elevation: 4
  },
  imagem: {
    width: 48,
    height: 48,
    borderRadius: 6,
    marginVertical: 16,
    marginLeft: 16,
  },
  informacoes: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 8,
    marginVertical: 16,
    marginRight: 16
  },
  nome: {
    fontSize: 16,
    lineHeight: 22,
    fontWeight: 'bold',
  },
  distancia: {
    fontSize: 16,
    color: '#464646',
  },
})