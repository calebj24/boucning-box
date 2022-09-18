import Head from 'next/head';
import Header from './nav'
import React, {useState} from 'react';
import { FloatingAction } from "react-native-floating-action";
import Modal from "react-native-modal";
import {View, Text} from 'dripsy';
import { Button } from 'react-native';

const Layout = (props) => {
  const [isModalVisible, setModalVisible] = useState(false);

  return(
  <>
    <Head>
      <title>RizzUp</title>
      <link rel='icon' href='/favicon.ico' />
      <link
          href="https://fonts.googleapis.com/css2?family=Gaegu&display=swap"
          rel="stylesheet"
        />
    </Head>
    <Header />
    <main>
      <div className='container'>{props.children}</div>
      <FloatingAction
          overlayColor={"transparent"}
          onPressMain={() => setModalVisible(true)}
        />
         <Modal isVisible={isModalVisible}>
        <View style={{ flex: 1 }}>
          <Text>Hello!</Text>

          <Button title="Hide modal" onPress={() => setModalVisible(false)} />
        </View>
      </Modal>
    </main>
   
  </>
)};

export default Layout;
