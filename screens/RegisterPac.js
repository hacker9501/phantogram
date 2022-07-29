import { useState } from "react";
import { StyleSheet, Text, View, Alert } from "react-native";
import { Formik } from "formik";
import { object, string } from "yup";
import { Button, Input } from "react-native-elements";
import { supabase } from "../lib/initSupabase";

const alertSuccessful = () => {
  Alert.alert("Successsful Message", "Se registro correctamente");
};

const validationSchema = object({
  name: string().required("El nombre es requerido"),
  email: string()
    .email("Enter a valid email")
    .required("Please enter a registered email"),
  password: string()
    .required()
    .min(4, "Password must have at least 4 characters "),
});

export default function RegisterPac({ navigation }) {
  const [loading, setLoading] = useState(false);

  async function signUpWithEmail(values) {
    if (values.name && values.email && values.password) {
      setLoading(true);
      const { user, session, error } = await supabase.auth.signUp(
        {
          email: values.email,
          password: values.password,
        },
        {
          data: {
            name: values.name,
          },
        }
      );
      alertSuccessful();
      navigation.navigate("LoginPac");
      console.log("Usuario Session:", user);

      if (error) {
        return Alert.alert(error.message);
      }
      setLoading(false);
    }
  }

  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        password: "",
      }}
      validationSchema={validationSchema}
      onSubmit={(values) => signUpWithEmail(values)}
    >
      {({
        handleChange,
        errors,
        touched,
        handleBlur,
        handleSubmit,
        values,
      }) => (
        <View>
          <Input
            label="Nombre"
            leftIcon={{ type: "font-awesome", name: "user" }}
            onChangeText={handleChange("name")}
            onBlur={handleBlur("name")}
            value={values.name}
            placeholder="Angela Karol"
            autoCapitalize={"none"}
          />
          <Text style={{ color: "red" }}>
            {errors.name && touched.name && errors.name}
          </Text>
          <Input
            label="Email"
            leftIcon={{ type: "font-awesome", name: "envelope" }}
            onChangeText={handleChange("email")}
            value={values.email}
            onBlur={handleBlur("email")}
            placeholder="email@address.com"
            autoCapitalize={"none"}
          />
          <Text style={{ color: "red" }}>
            {errors.email && touched.email && errors.email}
          </Text>
          <Input
            label="Password"
            leftIcon={{ type: "font-awesome", name: "lock" }}
            onChangeText={handleChange("password")}
            value={values.password}
            secureTextEntry={true}
            onBlur={handleBlur("password")}
            placeholder="Password"
            autoCapitalize={"none"}
          />
          <Text style={{ color: "red" }}>
            {errors.password && touched.password && errors.password}
          </Text>
          <View style={[styles.verticallySpaced, styles.mt20]}>
            <Button title="Sign up" disabled={loading} onPress={handleSubmit} />
          </View>
        </View>
      )}
    </Formik>
  );
}

const styles = StyleSheet.create({
  verticallySpaced: {
    paddingTop: 4,
    paddingBottom: 4,
    alignSelf: "stretch",
  },
  mt20: {
    marginTop: 20,
  },
});
