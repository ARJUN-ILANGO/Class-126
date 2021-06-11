import * as React from "react";
import { Button, Image, View, Platform } from "react-native";
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";

export default class PickImage extends React.Component {
    stage = {
        image: null,
    }
    render(){
       let {image}= this.state;

       return(
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <Button
                title="Pick A Image"
                onPress={this._pickimage}
            />
        </View>
       )
    }
    
    componentDidMount(){
        this.getPermissionAsync();
    }
    getPermissionAsync = async ()=>{
        if(Platform.OS !=="web"){
            const {status} = await Permissions.askAsync(Permissions.CAMERA_ROLL)
            if(status !== "granted"){
                alert("Sorry,we Need Camera Permission To Go Further")
            }
        }
    }
}