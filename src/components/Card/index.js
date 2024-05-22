import React from 'react'
import {View, Text, Image, StyleSheet} from 'react-native'
import {IoTimeOutline} from 'react-icons/io5'

const Card = ({data}) => {
  const {urlToImage, title, author, publishedAt} = data
  const desc = title.slice(0, 70)
  const date = new Date(publishedAt)

  return (
    <View style={styles.cardContainer}>
      <Image source={{uri: urlToImage}} style={styles.cardImage} />
      <View style={styles.detailsContainer}>
        <Text style={styles.category}>{author}</Text>
        <Text style={styles.description}>{desc}</Text>
        <View style={styles.infoContainer}>
          <Image
            source={{
              uri: 'https://res.cloudinary.com/dj2tk6c0s/image/upload/v1716234884/png-clipart-bbc-news-logo-area-text-brand-bbc-news-text-logo-thumbnail_tpuxo6.png',
            }}
            style={styles.channelImage}
          />
          <Text style={styles.channelName}>BBC News</Text>
          <View style={styles.timeContainer}>
            <IoTimeOutline size={10} />
            <Text style={styles.time}>{date.toDateString()}</Text>
          </View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: 'row',
    margin: 10,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
  },
  cardImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  detailsContainer: {
    flex: 1,
    paddingLeft: 10,
  },
  category: {
    fontSize: 14,
    color: '#999',
  },
  description: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  channelImage: {
    width: 20,
    height: 20,
    borderRadius: 10,
  },
  channelName: {
    fontSize: 14,
    marginLeft: 5,
  },
  timeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10,
  },
  time: {
    fontSize: 12,
    color: '#999',
    marginLeft: 5,
  },
})

export default Card
