import { Text, Image, StyleSheet, View, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

import estrela from '../../assets/estrela.png'
import estrelaCinza from '../../assets/estrelaCinza.png'

export default function estrelas({
  quantidade: quantidadeAntiga,
  editavel = false,
  grande = false,
}) {
  const [quantidade, setQuantidade] = useState(quantidadeAntiga)
  const estilos = estilosFuncao(grande)

  const getImage = (index) => {
    if (index < quantidade) {
      return estrela
    }
    return estrelaCinza
  }

  const RenderEstrelas = () => {
    const listaEstrelas = []
    for (let i = 0; i < 5; i++) {
      listaEstrelas.push(
        <TouchableOpacity
          key={i}
          onPress={() => setQuantidade(i + 1)}
          disabled={!editavel}>
          <Image source={getImage(i)} style={estilos.estrela} />
        </TouchableOpacity>
      )
    }
    return listaEstrelas
  }

  return <View style={estilos.estrelas}>
    <RenderEstrelas />
  </View>
}

const estilosFuncao = (grande) => StyleSheet.create({
  estrela: {
    width: grande ? 36 : 12,
    height: grande ? 36 : 12,
    marginRight: grande ? 5 : 2
  },
  estrelas: {
    flexDirection: 'row',
  }
})