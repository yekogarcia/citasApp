import { useState } from 'react';
import { Button, ScrollView, StyleSheet, Text, TextInput, TouchableHighlight, View, Alert } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import DatePicker from 'react-native-modern-datepicker';
import shortid from 'shortid';


export const Fomulario = ({ citas, setCitas, setShowForm }) => {

    // let fecha = new Date();
    // console.log(fecha.toLocaleDateString('es-ES', {year: 'numeric', month: 'long', day: '2-digit'}));

    const [date, setDate] = useState(new Date().toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: '2-digit' }));
    const [time, setTime] = useState('');

    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
    const [selectedDate, setSelectedDate] = useState('');

    const [paciente, setPaciente] = useState('');
    const [propietario, setPropietario] = useState('');
    const [telefono, setTelefono] = useState('');
    const [sintomas, setSintomas] = useState('');

    const onChange = (event, selectedDate) => {
        // const date = selectedDate.toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: '2-digit' });
        const time = selectedDate.toLocaleDateString('en-US', { hour: 'numeric', minute: '2-digit', hour12: false });
        console.log(date)
        console.log(time)
        mode == 'time' ? setTime(time.split(',')[1]) : setDate(date);
        setShow(false);
    };

    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
    };

    const showDatepicker = () => {
        showMode('date');
    };

    const showTimepicker = () => {
        showMode('time');
    };

    const createNewCita = () => {
        console.log("prueba");
        // Alert.alert('Error',
        // 'Hay campos vacios',
        // [
        //     {text: "ok"}
        // ]
        // )
        const cita = { date, time, paciente, propietario, telefono, sintomas };
        cita.id = shortid.generate();
        console.log(cita);
        setCitas([...citas, cita]);
        setShowForm(false);
    }
    return (
        <>
            <ScrollView style={styles.formulario}>
                <View>
                    <Text style={styles.label}>Paciente:</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={texto => setPaciente(texto)}
                    />
                </View>
                <View>
                    <Text style={styles.label}>Propietario:</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={(texto) => setPropietario(texto)}
                    />
                </View>
                <View>
                    <Text style={styles.label}>Telefono contacto:</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={(texto) => setTelefono(texto)}
                        keyboardType='numeric'
                    />
                </View>
                <View>
                    <Text style={styles.label}>Sintomas:</Text>
                    <TextInput
                        multiline
                        style={styles.input}
                        onChangeText={(texto) => setSintomas(texto)}
                    />
                </View>
                <View>
                    <Text style={styles.label}>Fecha: {date}</Text>
                    <Button onPress={showDatepicker} title="Elige una Fecha!" />
                    <Text style={styles.label}>Hora: {time}</Text>
                    <Button onPress={showTimepicker} title="Elige una Hora!" />
                    {show && (
                        <DateTimePicker
                            testID="dateTimePicker"
                            value={new Date()}
                            mode={mode}
                            is24Hour={true}
                            onChange={onChange}
                        />
                    )}

                </View>
                <View>
                    <TouchableHighlight onPress={() => createNewCita()} style={styles.btnSubmit}>
                        <Text style={styles.textSubmit}>Guardar</Text>
                    </TouchableHighlight>
                </View>
                <View>
                    {/* <DatePicker
                        onSelectedChange={date => setSelectedDate(date)}
                        mode='calendar'
                    />
                    <DatePicker
                        onSelectedChange={date => setSelectedDate(date)}
                        mode='time'
                    /> */}
                </View>
            </ScrollView>
        </>
    )
}

const styles = StyleSheet.create({
    formulario: {
        backgroundColor: '#fff',
        paddingHorizontal: 20,
        paddingVertical: 10,
        marginHorizontal: '2.5%',
    },
    label: {
        fontWeight: 'bold',
        color: '#000',
        fontSize: 18,
        marginTop: 20
    },
    input: {
        marginTop: 10,
        height: 50,
        borderColor: '#e1e1e1',
        borderWidth: 1,
        borderStyle: 'solid',
    },
    btnSubmit: {
        padding: 10,
        backgroundColor: '#7d024e',
        marginVertical: 10,
    },
    textSubmit: {
        fontWeight: 'bold',
        color: '#fff',
        alignItems: 'center',
        textAlign: 'center'
    }

})