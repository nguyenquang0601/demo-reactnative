import { Dimensions, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  login: {
    padding: 8,
  },
  forgot: {
    marginTop: 12,
  },
  labelStyle: {
    fontSize: 12,
  },
  wrapper: {
    display: 'flex',
    
    flexDirection: 'row',
    height: 25,
    marginLeft: 50,
    marginRight: 50,
    marginBottom: 25
  },
  lable: {
    width: 120,
    height: 25,
    lineHeight: 25,
    fontWeight: '700',
 

  },
  wrapperInput : {
    width: Dimensions.get('window').width - 120-110,
    borderColor: '#606770',
    borderWidth: 1,
    textAlign: 'left',
    marginLeft: 10,
    borderRadius: 3
  }
});

export default styles;
