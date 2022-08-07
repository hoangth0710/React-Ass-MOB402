import {Button, FlatList, Image, StatusBar, StyleSheet, Text, View} from 'react-native';
import {useState} from "react";




export default function App() {
    const [data, setData] = useState([]);
    const [tenAnh, setName] = useState();
    const [ndAnh, setAge] = useState();
    const [linkAnh, setAddress] = useState();
    console.log(data);

    return (
        <View style={styles.container}>
            <FlatList style={{flex: 1}} data={data} renderItem={({item}) => {
                return (<View>
                    <Text>{item.tenAnh}</Text>
                    <Text>{item.ndAnh}</Text>
                    <Text>{item.linkAnh}</Text>
                    <Image source={{uri : item.linkAnh}}
                           style={{width: 400, height: 400}} />
                    <Text>===============================</Text>
                </View>);
            }}/>
            <Button title='Load' onPress={() => {
                // viet request toi website tai day
                var requestOptions = {
                    method: 'GET',
                    redirect: 'manual'
                };
                fetch("https://demobuoi4.herokuapp.com/allMobile", requestOptions)
                    .then(response => response.json())
                    .then(result => setData(result))
                    .catch(error => setData(error.message));
            }}/>
            <StatusBar/>
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});

