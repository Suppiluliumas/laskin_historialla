import { StatusBar } from "expo-status-bar";
import { useState, useTransition, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  FlatList,
  Platform,
} from "react-native";

export default function App() {
  const [text1, setText1] = useState(0);
  const [text2, setText2] = useState(0);
  const [result, setResult] = useState(0);
  const [data, setData] = useState([]);
  const [sign, setSign] = useState("");

  useEffect(() => {
    setLastData();
  }, [sign, result]);

  const addition = () => {
    setSign("+");
    setResult(parseInt(text1) + parseInt(text2));
  };
  const subtraction = () => {
    setSign("-");
    setResult(parseInt(text1) - parseInt(text2));
  };
  const setLastData = () => {
    if (sign !== "") {
      setData([...data, { text1, sign, text2, result }]);
    }
    setSign("");
  };
  console.log(data);
  return (
    <View style={styles.container}>
      <Text>{"Result:" + result}</Text>
      <TextInput
        inputMode="numeric"
        style={{ width: 200, borderColor: "gray", borderWidth: 1 }}
        onChangeText={(text1) => setText1(text1)}
        value={text1}
      />
      <TextInput
        inputMode="numeric"
        style={{ width: 200, borderColor: "gray", borderWidth: 1 }}
        onChangeText={(text2) => setText2(text2)}
        value={text2}
      />

      <Text style={buttons}>
        <Button onPress={addition} title="+" />
        <Button onPress={subtraction} title="-" />
      </Text>

      <FlatList
        data={data}
        renderItem={({ item }) => (
          <Text>{`${item.text1} ${item.sign} ${item.text2} = ${item.result}`}</Text>
        )}
        keyExtractor={(item,index) => index.toString()}
      />

      <StatusBar style="auto" />
    </View>
  );
}
const buttons = StyleSheet.create({
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "Space-around",
});
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
