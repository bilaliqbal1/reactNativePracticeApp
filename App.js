import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default function App() {
  const [name, setName] = useState("Bilal Iqbal");
  const [email, setEmail] = useState("Bilal@gmail.com");
  const [arr, setArray] = useState(["car"])

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
        <h2>
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
});
