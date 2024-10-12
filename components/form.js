// screens/FormScreen.js
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  Pressable,
} from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';

const loginValidationSchema = yup.object().shape({
  email: yup
    .string()
    .email("Please enter a valid email")
    .required('Email Address is Required'),
  password: yup
    .string()
    .min(8, ({ min }) => `Password must be at least ${min} characters`)
    .required('Password is required'),
});

const FormScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Login</Text>
      <Formik
        initialValues={{ email: '', comments: '' }}
        validationSchema={loginValidationSchema}
        onSubmit={(values) => {
          console.log(values);
          navigation.navigate('Response', { values });
        }}
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          isValid,
        }) => (
          <>
            <TextInput
              name="email"
              placeholder="                                     Email Address"
              style={styles.textInput}
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              value={values.email}
              inputMode="email-address"
            />
            {errors.email &&
              <Text style={styles.errorText}>{errors.email}</Text>
            }
            <TextInput
                  name="password"
                  placeholder="                                       Password"
                  style={styles.textInput}
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  value={values.password}
                  secureTextEntry
                />
            {errors.password &&
              <Text style={styles.errorText}>{errors.password}</Text>
            }
            <View style={styles.to_style}>
              <Pressable style={styles.btnContainer} onPress={handleSubmit} disabled={!isValid}>
                <Text style={styles.btn}>Log In</Text>
              </Pressable>
            </View>
          </>
        )}
      </Formik>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'steelblue',
    padding: 20,
  },
  textInput: {
    height: 40,
    width: '100%',
    margin: 10,
    backgroundColor: 'white',
    borderColor: 'blue',
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 0,
    paddingHorizontal: 10,
  },
  textComment: {
    height: 15,
    width: '100%',  
    margin: 10,
    backgroundColor: 'white',
    borderColor: 'blue',
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  btnContainer: {
    backgroundColor: '#000000',
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
  },
  btn: {
    color: 'white',
    fontWeight: 'Italic',
  },
  to_style: {
    width: '100%',
    alignItems: 'center',
  },
  errorText: {
    fontSize: 20,
    color: 'white',
  },
});

export default FormScreen;
