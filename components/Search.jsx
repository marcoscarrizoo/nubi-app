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
import MaterialCommunityIcons from "react-native-vector-icons/Ionicons";

export default function Search() {
  const [url, setURL] = useState("");
  const [resFromURL, setResFromURL] = useState("");
  const [error, setError] = useState(false);

  async function handleRequest() {
    try {
      const api = url.slice(24);
      const apiResponse = await fetch("https://run.mocky.io/v3/" + api);
      const apiJson = await apiResponse.json();
      setResFromURL(apiJson);
      setError(false);
      setURL("");
      return;
    } catch (error) {
      setError(true);
      console.log(error);
    }
  }

  const refreshApi = () => {
    setResFromURL("");
  };
  return (
    <View>
      <Formik>
        <View style={styles.form}>
          <View style={{ margin: 5 }}>
            <TouchableHighlight onPress={refreshApi}>
              <MaterialCommunityIcons name="ios-refresh-outline" size={20} />
            </TouchableHighlight>
          </View>
          <TextInput
            placeholder="Insert URL"
            clearTextOnFocus={true}
            style={styles.input}
            variant="outlined"
            onChangeText={(e) => setURL(e)}
            value={url}
          />
          <Button
            onPress={handleRequest}
            title="Search"
            color="rgb(25, 40, 170)"
          />
        </View>
      </Formik>

      {error === true ? (
        <View style={{ marginLeft: 100 }}>
          <Text style={{ color: "red" }}>API incorrecta</Text>
        </View>
      ) : (
        <View></View>
      )}
      {resFromURL.length > 0 ? (
        <Files responseFromApi={resFromURL} />
      ) : (
        <View></View>
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  input: {
    maxHeight: 40,
    maxWidth: 200,
    borderWidth: 1,
    padding: 10,
    borderRadius: 3,
  },
  form: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 100,
  },
});
