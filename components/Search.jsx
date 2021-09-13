import React, { useState } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  Button,
  Text,
  TouchableHighlight,
} from "react-native";
import { Formik } from "formik";
import Files from "./Files";

export default function Search() {
  const [url, setURL] = useState("");
  const [resFromURL, setResFromURL] = useState("");

  function handleRequest() {
    try {
      const api = url.slice(24);
      fetch("https://run.mocky.io/v3/" + api )
        .then((res) => res.json())
        .then((data) => setResFromURL(data));
      setURL("");
    } 
    catch (error) {
      console.log(error, "error");
    }
  }

  function handleForm(e) {
    e.preventDefault();
    setURL("");
  }

  console.log("dataa", resFromURL);

  return (
    <View>
      <Formik onSubmit={handleForm}>
        <View style={styles.form}>
          <TextInput
            placeholder="Insertar URL"
            style={styles.input}
            variant="outlined"
            onChange={(e) => setURL(e.target.value)}
            defaultValue={url}
          />
          <Button
            onPress={handleRequest}
            title="Buscar"
            style={styles.button}
            color="#841584"
          />
        </View>
      </Formik>

      <Files response={resFromURL} />
    </View>
  );
}
const styles = StyleSheet.create({
  input: {
    height: 40,
    borderWidth: 1,
    padding: 10,
  },
  form: {
    display: "flex",
    flexDirection: "row",
  },
});
