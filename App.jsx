import { useState } from 'react';
import { FlatList, StyleSheet, Text, View, TouchableHighlight, Platform, Keyboard, TouchableWithoutFeedback } from 'react-native';
import { Cita } from './components/Cita';
import { Fomulario } from './components/Fomulario';

function App() {

  const [showForm, setShowForm] = useState(false);
  const [citas, setCitas] = useState([]);

  const eliminarPaciente = id => {
    console.log(id);
    setCitas((citasActuales) => {
      return citasActuales.filter(cita => cita.id !== id)
    })
  }

  return (
    <TouchableWithoutFeedback onPress={()=> Keyboard.dismiss()}>

      <View style={styles.contenedor}>
        <Text style={styles.titulo}>Administrador de citas</Text>

        <View>
          <TouchableHighlight onPress={() => setShowForm(!showForm)} style={styles.btnCreateCita}>
            <Text style={styles.textCreateCita}>{showForm ? 'Cerrar' : 'Crear Nueva Cita' }</Text>
          </TouchableHighlight>
        </View>

        <View style={styles.contenido}>
          {showForm ? (
            <Fomulario
              citas={citas}
              setCitas={setCitas}
              setShowForm={setShowForm}
            />

          ) : (
            <>
              <Text style={styles.titulo}>{citas.length > 0 ? 'Administra tus citas' : 'No hay citas, agregue una'}</Text>

              <FlatList style={styles.listado}
                data={citas}
                renderItem={({ item }) => <Cita cita={item} eliminarPaciente={eliminarPaciente} />}
                keyExtractor={cita => cita.id}
              />
            </>
          )}
        </View>

      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    backgroundColor: '#aa076b',
    flex: 1,
  },
  titulo: {
    color: '#fff',
    marginTop: Platform.OS === 'ios' ? 40 : 10,
    marginBottom: 10,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  contenido: {
    flex: 1,
    marginHorizontal: '2.5%'
  },
  listado: {
    flex: 1
  },
  btnCreateCita: {
    padding: 10,
    backgroundColor: '#34a5f0',
    marginVertical: 10,
  },
  textCreateCita: {
    fontWeight: 'bold',
    color: '#fff',
    alignItems: 'center',
    textAlign: 'center'
  }
});

export default App;
