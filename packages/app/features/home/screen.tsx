import { Text, useSx, View, H1, P, Row, A } from 'dripsy'
import { TextLink } from 'solito/link'
import { MotiLink } from 'solito/moti';
import { MotiPressable } from 'moti/interactions';
import { MotiView, MotiText } from 'moti'
import { useEffect, useState, useMemo } from 'react'
import { Button, Platform } from 'react-native'
import axios from 'axios';

const header = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Credentials': '*',
  'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
}

export function HomeScreen() {
  const sx = useSx()
  const [text, setText] = useState("")

  useEffect(() => {
    const header = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': '*',
      'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,WHATEVERELSEYOUUSE'
    }

    let url = "https://getpickuplines.herokuapp.com/lines/random"
    Platform.OS === "web" ? url = "https://cors-anywhere.herokuapp.com/" + url : null;
    axios.get(url, header)
      .then((response) => {
        setText(response.data.line)
      })
  }, [])

  const randomRizz = () => {
    const random = Math.floor(Math.random() * 10);
    let url;
    random > 5 ?
      url = "https://getpickuplines.herokuapp.com/lines/random" :
      url = "https://complimentr.com/api";
    Platform.OS === "web" ? url = "https://cors-anywhere.herokuapp.com/" + url : null;
    axios.get(url, header).then((response) => {
      if (response.data.compliment) {
        setText(response.data.compliment)
        return;
      }
      setText(response.data.line)
    })

  }

  return (
    <View
      sx={{ flex: 1, justifyContent: 'center', alignItems: 'center', p: 16 }}
    >
      <MotiView
        from={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          repeat: 4,
          // when false, animation goes 0 -> 1, then starts over back at 0
          repeatReverse: false,
        }}
      >
        <H1 sx={{ fontWeight: '800' }}>RizzUp</H1>
      </MotiView>
      <View sx={{ maxWidth: 600 }}>
        <P sx={{ textAlign: 'center' }}>
          {text}
        </P>
        {/* <View sx={{ textAlign: 'center', fontSize: 16, fontWeight: 'bold', color: 'blue' }}> */}
        <MotiPressable
          animate={useMemo(
            () => ({ hovered, pressed }) => {
              'worklet'

              return {
                scale: pressed ? 0.95 : hovered ? 1.1 : 1,
                rotateZ: pressed ? '0deg' : hovered ? '-3deg' : '0deg',
              }
            },
            []
          )}
          onPress={randomRizz} containerStyle={{ justifyContent: 'center', alignItems: "center" }} >
          <Text
            selectable={false}
            sx={{ fontSize: 16, color: 'black', fontWeight: 'bold' }}
          >
            Random Rizz
          </Text>
        </MotiPressable>
        {/* </View> */}
      </View>
      <View sx={{ height: 32 }} />
      <Row>

      </Row>
    </View>
  )
}
