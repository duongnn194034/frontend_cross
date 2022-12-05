import React, {useState} from "react";
import { Text, View, Imag, StyleSheet, useWindowDimensions } from "react-native";
import Logo from "./assets/images/Facebook_f_logo_(2019).svg.png";
import CustomInput from "./CustomInput";
import CustomButton from "./CustomButton";

const SignIn = () => {
    const {height} = useWindowDimensions();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const onSignInPressed = () => {

    };
    
    const onForgotPasswordPressed = () => {

    };

    return (
        <View>
            <Image 
                source = {Logo} 
                style = {[styles.logo, {height: height * 0.3}]}
                resizeMode = "contain" 
            />
            <CustomInput 
                placeholder="Email hoặc số điện thoại"
                value={username}
                setValue={setUsername}
            />
            <CustomInput 
                placeholder="Mật khẩu"
                value={password}
                setValue={setPassword}
                secureTextEntry
            />
            <CustomButton
                text="Đăng nhập"
                onPress={onSignInPressed}
                backgroundColor='#3B71F3' 
            />
            <CustomButton
                text="Quên mật khẩu"
                onPress={onForgotPasswordPressed}
                backgroundColor='#3B71F3'
            />
        </View>
    );
};

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        padding: 20
    },
    logo: {
        width: '70%',
        maxWidth: 300,
        height: 100
    }
})

export default SignIn;