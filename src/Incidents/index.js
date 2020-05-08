import React from 'react';
import { View, Image, Text } from 'react-native';

import LogoImg from '../../assets/logo.png';

import styles from './styles';

const Incidents = () => {
    return (
        <View satyle={styles.container}>
            <View satyle={styles.header}>
                <Image source={LogoImg} />
                <Text style={styles.headerText}>
                    Total de <Text style={styles.headerTextBolder}>0 casos.</Text>
                </Text>
            </View>

            <Text style={styles.title}>Bem-Vindo!</Text>
            <Text style={styles.description}>Escolha um dos casos abaixo e salve o dia!</Text>
        </View>
    );
}

export default Incidents;