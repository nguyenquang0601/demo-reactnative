import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Text, Button } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';

import * as loginActions from 'app/store/actions/loginActions';
import styles  from './styles';
import { ILoginState } from 'app/models/reducers/login';
import NavigationService from 'app/navigation/NavigationService';
import { TextInput } from 'react-native';

interface IState {
  loginReducer: ILoginState;
}

const Login: React.FC = () => {
  const id = useSelector((state: IState) => state.loginReducer.id);
  const dispatch = useDispatch();
  const onLogin = () => dispatch(loginActions.requestLogin('test', '1234'));
  const onForgot = () => NavigationService.navigate('ForgotPassword');
  return (
    <View style={styles.container}>
      <View style={styles.container}>
        {/* <Text style={styles.login}>Login Status : {id}</Text> */}
        <View style={styles.wrapper}>
          <Text style={styles.lable}>TÊN ĐĂNG NHẬP:</Text>
          <TextInput style={styles.wrapperInput}/>
        </View>
        <View style={styles.wrapper}>
          <Text style={styles.lable}>MẬT KHẨU:</Text>
          <TextInput style={styles.wrapperInput} secureTextEntry={true}/>
        </View>
        <Button icon="login" mode="outlined" onPress={onLogin}>
          Login
        </Button>
        {/* <Button
          mode="text"
          style={styles.forgot}
          labelStyle={styles.labelStyle}
          onPress={onForgot}>
          Quên mật khẩu
        </Button> */}
      </View>
    </View>
  );
};
export default Login;
