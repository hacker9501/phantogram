import { useState, useEffect } from "react";
import { StyleSheet, Text, View, Alert, Dimensions } from "react-native";
import { Button, Input } from "react-native-elements";
import { supabase } from "../lib/initSupabase";
import { Formik } from "formik";
import { object, string } from "yup";
import {useDispatch, useSelector} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {login} from '../feautures/userSlice';


const validationSchema = object({
  email: string()
    .email("Enter a valid email")
    .required("Please enter a registered email"),
  password: string()
    .required("Required password")
});

export default function LoginPac({ navigation }) {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  async function signInWithEmail(values) {
    if(!values.email && !values.password){
      return Alert.alert('Complete los campos')
    }else{
      setLoading(true);
      const { user, session, error } = await supabase.auth.signIn({
        email: values.email,
        password: values.password,
      });
      dispatch(login(user));
      AsyncStorage.setItem('session', JSON.stringify(user, session))
  
      if (error) Alert.alert(error.message);
      setLoading(false);
      
      if(user){
        navigation.navigate('Tabs')
      }
    }
  }


  return (
    <Formik
    initialValues={{
      email: '',
      password: ''
    }}
    validationSchema={validationSchema}
    onSubmit={(values) => signInWithEmail(values)}
    >
      {({handleChange,
        errors,
        touched,
        handleBlur,
        handleSubmit,
        values}) => (
        <View style={styles.container}>
        <View style={[styles.verticallySpaced, styles.mt20]}>
          <Input
            label="Email"
            leftIcon={{ type: "font-awesome", name: "envelope" }}
            onChangeText={handleChange('email')}
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
            onChangeText={handleChange('password')}
            value={values.password}
            onBlur={handleBlur("password")}
            secureTextEntry={true}
            placeholder="Password"
            autoCapitalize={"none"}
          />
          <Text style={{ color: "red" }}>
            {errors.password && touched.password && errors.password}
          </Text>
        </View>
        <View style={[styles.verticallySpaced, styles.mt20]}>
          <Button
            title="Sign in"
            disabled={loading}
            onPress={handleSubmit}
          />
        </View>
        <View style={styles.verticallySpaced}>
          <Button
            title="¿Eres nuevo? Sing up"
            disabled={loading}
            onPress={() => navigation.navigate("RegisterPac")}
            type="clear"
          />
        </View>
      </View>
      )}
      
    </Formik>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: 40,
    padding: 12,
  },
  verticallySpaced: {
    paddingTop: 4,
    paddingBottom: 4,
    alignSelf: "stretch",
  },
  mt20: {
    marginTop: 20,
  },
});
