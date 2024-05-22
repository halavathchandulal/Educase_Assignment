// src/components/Home/index.js
import React, {useState, useEffect} from 'react'
import {
  View,
  Text,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native'
import axios from 'axios'
import Card from './Card'
import {useNavigation} from '@react-navigation/native'

const Home = () => {
  const [apiData, setApiData] = useState([])
  const navigation = useNavigation()

  useEffect(() => {
    const getApiData = async () => {
      const url =
        'https://newsapi.org/v2/everything?q=tesla&from=2024-04-20&sortBy=publishedAt&apiKey=351d2c6730c844348ab9fbe0307d9563'
      const response = await axios.get(url)
      setApiData(response.data.articles.slice(0, 10))
    }

    getApiData()
  }, [])

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image
          source={{
            uri: 'https://res.cloudinary.com/dj2tk6c0s/image/upload/v1716210407/Vector_1_zxavuw.png',
          }}
          style={styles.logo}
        />
        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
          <Image
            source={{uri: 'https://example.com/bell-icon.png'}}
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.searchContainer}>
        <TextInput style={styles.searchInput} placeholder='Search' />
        <TouchableOpacity onPress={() => {}}>
          <Image
            source={{uri: 'https://example.com/search-icon.png'}}
            style={styles.searchIcon}
          />
        </TouchableOpacity>
      </View>
      {apiData.map((article, index) => (
        <Card key={index} data={article} />
      ))}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    backgroundColor: '#fff',
  },
  logo: {
    width: 100,
    height: 30,
  },
  icon: {
    width: 25,
    height: 25,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 10,
    margin: 15,
    borderRadius: 10,
  },
  searchInput: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
  },
  searchIcon: {
    width: 20,
    height: 20,
    marginLeft: 10,
  },
})

export default Home
