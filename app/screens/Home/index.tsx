import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-paper';
import DatePicker from 'react-native-date-picker'
import { useDispatch } from 'react-redux';
import * as loginActions from 'app/store/actions/loginActions';
const Home: React.FC = () => {
  const dispatch = useDispatch();
  const onLogout = () => dispatch(loginActions.logOut());
  const [show,setShow] = useState(false)
  return (
    <View>
        <View style={styles.header}>
          <View>
            <Text>25/12/2021</Text>
          </View>
        </View>
    </View>
  );
};
const styles = StyleSheet.create({
  header: {
    display: 'flex',
    flexDirection: 'row'
  }
})

export default Home;
