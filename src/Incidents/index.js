import React from 'react';
import { Feather } from '@expo/vector-icons';
import { View, Image, Text, TouchableOpacity } from 'react-native';

import LogoImg from '../../assets/logo.png';

import styles from './styles';

const Incidents = () => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={LogoImg} />
                <Text style={styles.headerText}>
                    Total de <Text style={styles.headerTextBolder}>0 casos.</Text>
                </Text>
            </View>

            <Text style={styles.title}>Bem-Vindo!</Text>
            <Text style={styles.description}>Escolha um dos casos abaixo e salve o dia!</Text>

            <View style={styles.incidentsList}>
                <View style={styles.incident}>
                    <Text styles={styles.incidentProperty}>ONG:</Text>
                    <Text styles={styles.incidentValue}>APAD:</Text>

                    <Text styles={styles.incidentProperty}>ONG:</Text>
                    <Text styles={styles.incidentValue}>cachorro</Text>

                    <Text styles={styles.incidentProperty}>VALOR:</Text>
                    <Text styles={styles.incidentValue}>R$ 200,00</Text>

                    <TouchableOpacity
                        style={styles.detailsButton}
                        onPress={() => { }}
                    >
                        <Text style={styles.detailsButtonText}>Ver mais detalhes</Text>
                        <Feather name="arrow-right" size={16} color="#E02041" />
                    </TouchableOpacity>
                </View>

                <View style={styles.incident}>
                    <Text styles={styles.incidentProperty}>ONG:</Text>
                    <Text styles={styles.incidentValue}>APAD:</Text>

                    <Text styles={styles.incidentProperty}>ONG:</Text>
                    <Text styles={styles.incidentValue}>cachorro</Text>

                    <Text styles={styles.incidentProperty}>VALOR:</Text>
                    <Text styles={styles.incidentValue}>R$ 200,00</Text>

                    <TouchableOpacity
                        style={styles.detailsButton}
                        onPress={() => { }}
                    >
                        <Text style={styles.detailsButtonText}>Ver mais detalhes</Text>
                        <Feather name="arrow-right" size={16} color="#E02041" />
                    </TouchableOpacity>
                </View>

                <View style={styles.incident}>
                    <Text styles={styles.incidentProperty}>ONG:</Text>
                    <Text styles={styles.incidentValue}>APAD:</Text>

                    <Text styles={styles.incidentProperty}>ONG:</Text>
                    <Text styles={styles.incidentValue}>cachorro</Text>

                    <Text styles={styles.incidentProperty}>VALOR:</Text>
                    <Text styles={styles.incidentValue}>R$ 200,00</Text>

                    <TouchableOpacity
                        style={styles.detailsButton}
                        onPress={() => { }}
                    >
                        <Text style={styles.detailsButtonText}>Ver mais detalhes</Text>
                        <Feather name="arrow-right" size={16} color="#E02041" />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

export default Incidents;