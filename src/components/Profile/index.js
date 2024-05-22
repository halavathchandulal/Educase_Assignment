import React, {useState} from 'react'
import {View, Text, TextInput, TouchableOpacity, StyleSheet} from 'react-native'
import {useNavigation} from '@react-navigation/native'

const Profile = () => {
  const [username, setUsername] = useState('')
  const [fullname, setFullname] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const navigation = useNavigation()

  const onSubmitForm = () => {
    // Assuming you want to navigate to the home screen after form submission
    navigation.navigate('Home')
  }

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Fill your Profile</Text>
      <TextInput
        style={styles.input}
        placeholder='Username'
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder='Full Name'
        value={fullname}
        onChangeText={setFullname}
      />
      <TextInput
        style={styles.input}
        placeholder='Email Address'
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder='Phone Number'
        value={phone}
        onChangeText={setPhone}
      />
      <TouchableOpacity style={styles.button} onPress={onSubmitForm}>
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
  },
  button: {
    backgroundColor: '#6200ee',
    padding: 15,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
})

export default Profile
