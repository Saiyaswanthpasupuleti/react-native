import React, { useState } from 'react';
import { Button, StyleSheet, TextInput, View, Text, SafeAreaView, KeyboardAvoidingView } from 'react-native';
export default function Loginform() {
    const [mail, Setmail] = useState("");
    const [password, Setpassword] = useState(""); 
    const validform = () => {
        if(Setmail.length===0){
            alert("Email and password should not be empty")
        }
        else if(Setpassword.length===0){
            alert("Email and password should not be empty")
        }
        else{
            alert("Form Submitted Succesfully")
            console.log(mail,password)
            Setmail("")
            Setpassword("")
        }
    };
    return (
        <SafeAreaView style={style.parentview}>
            <KeyboardAvoidingView behavior='padding' keyboardVerticalOffset={100}>
                <View style={style.childView}>
                    <Text style={style.label}>Email</Text>
                    <TextInput style={style.input} placeholder="Enter Your Email"  value={mail} onChangeText={Setmail} keyboardType="email-address"/>
                    <Text style={style.label}>Password</Text>
                    <TextInput style={style.input} placeholder="Enter Your Password" value={password} onChangeText={Setpassword} secureTextEntry/>
                    <Button title="Submit" onPress={validform} />
                </View>
            </KeyboardAvoidingView>
         
        </SafeAreaView>
    );
}

const style = StyleSheet.create({
    parentview: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f0f0f0",
    },
    childView: {
        borderColor: "black",
        borderWidth: 2,
        borderRadius: 10,
        padding: 20,
        width:340,
        backgroundColor: "#fff",
    },
    label: {
        fontSize: 16,
        marginBottom: 5,
        color: "#333",
    },
    input: {
        borderColor: "#ccc",
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
        marginBottom: 15,
        fontSize: 14,
        backgroundColor: "#f9f9f9",
    },
});
