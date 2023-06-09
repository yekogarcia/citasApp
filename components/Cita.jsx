import { useState } from 'react';
import { Button, FlatList, StyleSheet, Text, TouchableHighlight, View } from 'react-native';

export const Cita = ({ cita, eliminarPaciente }) => {

    const dialogoEliminar = (id) => {
        console.log("Eliminando...")
        eliminarPaciente(id);
    }

    return (
        <View style={styles.cita} >
            <View>
                <Text style={styles.label}>Paciente:</Text>
                <Text style={styles.texto}>{cita.paciente}</Text>
            </View>
            <View>
                <Text style={styles.label}>Propietario:</Text>
                <Text style={styles.texto}>{cita.propietario}</Text>
            </View>
            <View>
                <Text style={styles.label}>Sintomas:</Text>
                <Text style={styles.texto}>{cita.sintomas}</Text>
            </View>
            <View>
                <TouchableHighlight onPress={() => dialogoEliminar(cita.id)} style={styles.btnEliminar}>
                    <Text style={styles.textEliminar}>Eliminar &times;</Text>
                </TouchableHighlight>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    cita: {
        backgroundColor: '#FFF',
        borderBottomColor: '#e1e1e1',
        borderStyle: 'solid',
        borderBottomWidth: 1,
        paddingVertical: 20,
        paddingHorizontal: 10,
    },
    label: {
        fontWeight: 'bold',
        fontSize: 18,
        marginTop: 20,
        color: '#000',
    },
    texto: {
        color: '#000',
        fontSize: 18,
    },
    btnEliminar: {
        padding: 10,
        backgroundColor: 'red',
        marginVertical: 10,
    },
    textEliminar: {
        fontWeight: 'bold',
        color: '#fff',
        alignItems: 'center',
        textAlign: 'center'
    }

})
