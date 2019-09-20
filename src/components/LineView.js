import React, { Component } from 'react';
import { StyleSheet, Text, View ,TouchableOpacity} from 'react-native';
import { Platform } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
export default class LineView extends Component {
  render() {
    const {text,backgroundColor,color} = this.props;
    return (
      <View  style={[styles.LineBorder,styles.shadowStyle]}>
          <View style={styles.LeftView}>
              <TouchableOpacity>
                  <Icon
                      style={[styles.LeftImage,{backgroundColor},{color}]}
                      name="md-checkmark"
                      size={35}
                      borderRadius={10}
                  />
              </TouchableOpacity>

          </View>
          <View style={styles.MiddleText}>
              <Text>{text}</Text>
          </View>
          <View style={styles.RightView}>
              <TouchableOpacity>
                  <Icon
                      style={styles.RightIcon}
                      name={Platform.OS === "ios" ? "ios-create" : "md-create"}
                      color="black"
                      size={20}
                  />
              </TouchableOpacity>
          </View>

      </View>
    );
  }
}
const styles = StyleSheet.create({
    LineBorder : {
        marginTop:'0%',
        flexDirection:'row',
        height: '10%',
        width : '100%',

    },
    shadowStyle : {
        borderTopWidth:0,
        borderRightWidth:0,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 0.3,
    },
    LeftView : {
        height:'100%',
        width:'8%',
        justifyContent: 'center',
        alignItems: 'stretch',
    },
    MiddleText : {
        marginHorizontal:'2%',
        height: '100%',
        width:'76%',
        justifyContent:'center',
        alignItems:'flex-start',
        paddingLeft:15,
    },
    RightView : {
        height: '100%',
        width:'10%',
    },
    RightIcon : {
        textAlignVertical: 'center',
        textAlign:'center',
        height:'100%',
        width:'100%',
    },
    LeftImage : {
        borderRadius: 3,
        borderColor:'black',
        height:'100%',
        width:'100%',
        textAlignVertical: 'center',
        textAlign:'center',
    }
});
