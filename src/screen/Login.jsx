import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import axios from 'axios';

const Login = ({navigation}) => {
  const [mobileNo, setMobileNo] = useState('');
  const [password, setPassword] = useState('');
  const [showpassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showpassword);
  };

  const loginPress = async () => {
    if (mobileNo.trim() === '') {
      Alert.alert('Mobile Number', 'Please Enter Mobile Number ');
      return;
    }
    if (password.trim() === '') {
      Alert.alert('Password', 'Please Enter your password ');
      return;
    }
    try {
      const response = await axios.post(
        'https://api-dev.assertit.io/rotary/login',
        {
          phone_number: mobileNo,
          password: password,
        },
      );

      // Assuming the API response structure is as provided in the example
      const {token, success, member} = response.data;

      if (success == true) {
        // Successfully logged in, you can now use the token or member data as needed
        console.log('Login successful');
        console.log('Token:', token);
        console.log('Member:', member);
        navigation.replace('BottomTab', {member: member});
      } else {
        // Handle unsuccessful login
        Alert.alert('Login Failed', 'Invalid credentials');
      }
    } catch (error) {
      // Handle any errors that occurred during the API call
      console.log('API Error:', error.message);
      Alert.alert('Error', 'An error occurred while processing your request');
    }
  };

  return (
    <KeyboardAvoidingView style={styles.mainContainer}>
      <StatusBar
        backgroundColor="#000000"
        animated={false}
        barStyle={'default'}
      />

      <View style={styles.centeredContainer}>
        <View
          style={{
            alignItems: 'center',
            padding: 25,
            width: '100%',
          }}>
          <Text style={styles.text}>Login</Text>
        </View>

        <View style={{width: '95%', alignSelf: 'center'}}>
          <Text style={styles.label}>Phone Number</Text>
        </View>
        <View style={styles.textInputView}>
          <TextInput
            style={[styles.input, {borderRightWidth: 0, width: '100%'}]}
            keyboardType="number-pad"
            maxLength={10}
            placeholder="Mobile No"
            placeholderTextColor="white"
            onChangeText={text => setMobileNo(text)}
          />
        </View>
        <View style={{width: '95%', alignSelf: 'center'}}>
          <Text style={styles.label}>Password</Text>
        </View>
        <View style={styles.textInputView}>
          <TextInput
            style={styles.input}
            placeholder="Enter Password"
            secureTextEntry={!showpassword}
            placeholderTextColor="white"
            onChangeText={text => setPassword(text)}
          />
          <TouchableOpacity onPress={togglePasswordVisibility}>
            <FontAwesome
              name={showpassword ? 'eye' : 'eye-slash'}
              size={18}
              color="white"
            />
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.button} onPress={loginPress}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Login;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#000000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  centeredContainer: {
    borderWidth: 2,
    borderRadius: 15,
    width: '85%',
    justifyContent: 'center',
    backgroundColor: '#1A1110',
  },
  label: {
    fontSize: 18,
    padding: 10,
    color: 'white',
  },
  input: {
    color: 'white',
    width: '85%',
    borderRightWidth: 2,
    borderColor: 'gray',
    fontSize: 18,
  },
  button: {
    marginVertical: 15,
    width: '90%',
    alignSelf: 'center',
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
  },
  textInputView: {
    borderWidth: 2,
    borderColor: 'gray',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '90%',
    alignSelf: 'center',
  },
  text: {
    color: 'white',
    fontSize: 18,
    width: '100%',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
