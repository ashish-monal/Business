import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler';

const Profile = ({ route}) => {
  const {member} = route.params;
  console.log(member, "Line6")
  return (
    <ScrollView style={styles.mainCOntainer} showsVerticalScrollIndicator={false}>
      <StatusBar backgroundColor={"black"}/>
      <View style={[styles.viewholder,{borderWidth:0}]}>
      <Text style={styles.text}>Your Details</Text>
      </View>
      <View style={styles.viewholder}>
      <Text style={styles.text}>Name: - {member.salutation+" "+member.first_name +" "+ member.last_name}</Text>
      </View>
      <View style={styles.viewholder}>
      <Text style={styles.text}>Email : - {member.email_address}</Text>
      </View>
      <View style={styles.viewholder}>
      <Text style={styles.text}>Gender : - {member.gender}</Text>
      </View>
      <View style={styles.viewholder}>
      <Text style={styles.text}>Marital Status : - {member.marital_status}</Text>
      </View>
      <View style={styles.viewholder}>
      <Text style={styles.text}>Phone Number : - {member.phone_number}</Text>
      </View>
      <View style={styles.viewholder}>
      <Text style={styles.text}>user Id : - {member.uuid}</Text>
      </View>
      <View style={styles.viewholder}>
      <Text style={styles.text}>DOB : - {member.date_of_birth}</Text>
      </View>
      
      
      
    </ScrollView>
  )
}

export default Profile

const styles = StyleSheet.create({
  mainCOntainer:{
    backgroundColor:'white',
    flex:1,
    // alignItems:'center',
  },
  viewholder:{
    borderWidth:2,
    width:'80%',
    alignSelf:'center',
    alignItems:'center',
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