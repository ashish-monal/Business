import { StyleSheet, Text, View,FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios';
const Home = () => {
  const [data,setData] = useState();
  
  useEffect(() => {
    // Fetch data from the API using Axios
    const fetchData = async () => {
      try {
        const response = await axios.get('https://api-dev.assertit.io/rotary/business/all', {
          headers: {
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmaXJzdF9uYW1lIjoiTGFrc2giLCJsYXN0X25hbWUiOiJHb2VsIiwibWlkZGxlX25hbWUiOm51bGwsImNsdWJfaWQiOjEsInV1aWQiOiIzNGNjMWFjOC1iZDE3LTRjNmYtYmYxNi04ODU5N2ViMTFhODkiLCJpYXQiOjE3MDE2ODc3ODAsImV4cCI6MTcwMjU1MTc4MH0.B5isaAYD6Bu-1IG8lNbwleJc6elUMjJF9JzzD_PvHqM',
          },
        });
        setData(response.data.business);
        // console.log(data, "Line 17")
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const renderItem = ({ item }) => (
    <View style={styles.viewholder}>
      <Text style={styles.text}>Name : - {item.member.first_name + " " +item.member.last_name}</Text>
      <Text style={styles.text}>Club Name : - {item.member.club.name }</Text>
      <Text style={styles.text}>Business Name : - {item.business_name}</Text>
      <Text style={styles.text}>Address : - {item.business_address}</Text>
      {/* Add more details or styling as needed */}
    </View>
  );


  return (
    <View style={styles.container}>
      <Text style={{padding:10,fontSize:20,textAlign:'center',color:'black'}}>Businesses:</Text>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'white'
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
  },
  viewholder:{
    borderWidth:2,
    width:'80%',
    alignSelf:'center',
    marginVertical:15,
    padding:10,
    borderRadius:10,
    backgroundColor:'white',
    elevation:10
  },
  text:{
    color:'black',
    fontSize:18,
   fontWeight:'500'
  }
})