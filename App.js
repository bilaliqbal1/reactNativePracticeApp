import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button } from 'react-native';


export default function App() {
  const [name, setName] = useState("Bilal Iqbal");
  const [email, setEmail] = useState("Bilal@gmail.com");
  const [arr, setArray] = React.useState(["car"])

  const arrayHandleClick = () =>{
    // let oldArray = arr;
    // oldArray.push("bike","truck")
    setArray([...arr,"bike","truck"])

  }
  const handleClick = ()=>{
    setName("bilal")
    setEmail("bilal@yahoo.com")
    setArray(oldArray)
  }
  const handleobj = ()=>{
    setObj({
      ...obj,
      school: "saylani"
    })
  }

  const [obj , setObj] = useState({
    name: "bilal",
    email: "bilal@gmail.com"
  })
  useEffect(()=>{
    console.log("I will run on every render")
  })
  useEffect(()=>{
    console.log("I will run on first   render")
  },[])
  useEffect(()=>{
    console.log("I will run on every render whether state is update")
  },[name,email])
  useEffect(()=>{
    return()=>{
      console.log("unmount")
    }
  })
  return (
    <View style={styles.container}>
      {/* <Image  style={styles.img} source={{uri: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2Fyc3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80'}} /> */}
      <Image  style={styles.img} source={require('./assets/img.jpg')} />
      <TextInput secureTextEntry={true} keyboardType={'number-pad'} onChangeText={(text)=> console.log(text)} value={"bilal"} style={styles.input} placeholder='Enter value' />
      <Button style={styles.btn} title={"click me"} onPress={()=>alert("hi")}/>
      
      <Text>React Native app {name}
      {email}</Text>
      {/* <StatusBar style="auto" /> */}
      {/* <button onClick={()=>setName("my name")}>Update</button>
      <button onClick={()=> setEmail("hi")}>update</button> */}
      <button onClick={handleClick}>Update</button>
      <ul>
        {arr.map((v,i)=>{
          return <li key={i}>{v}</li>
        })}
      </ul>
      <button onClick={arrayHandleClick}>Update</button>
        <h2 style={{fontSize: 42, color: 'red'}}>
          {obj.name}
        </h2>
        <h3>{ obj.email}</h3>
        <button onClick={handleobj}>Update</button>
        <h3>{ obj.school}</h3>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  img:{
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
  input:{
    height: 40,
    width: '40%',
    borderColor: 'black',
    borderWidth: 1,
  },
  btn:{
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
});
