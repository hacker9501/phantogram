import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button, Input } from "react-native-elements";

export default function RegisterPac() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <View>
      <View>
        <Input
          label="Nombre"
          leftIcon={{ type: "font-awesome", name: "user" }}
          onChangeText={(text) => setName(text)}
          value={name}
          placeholder="Angela Karol"
          autoCapitalize={"none"}
        />
      </View>
      <View>
        <Input
          label="Email"
          leftIcon={{ type: "font-awesome", name: "envelope" }}
          onChangeText={(text) => setEmail(text)}
          value={email}
          placeholder="email@address.com"
          autoCapitalize={"none"}
        />
      </View>
      <View>
        <Input
          label="Password"
          leftIcon={{ type: "font-awesome", name: "lock" }}
          onChangeText={(text) => setPassword(text)}
          value={password}
          secureTextEntry={true}
          placeholder="Password"
          autoCapitalize={"none"}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
