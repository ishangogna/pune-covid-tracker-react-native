import React, { useContext, useState, useEffect } from 'react';
import { View, StyleSheet, Text, Dimensions, ScrollView } from 'react-native';
import { ThemeContext } from '../contexts/ThemeContext';
import Confirmed from '../components/confirmed';
import Active from '../components/active';
import Recovered from '../components/recovered';
import Maharashtra from '../components/maharashtra';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


const SecondaryPage = () => {
    const { theme } = useContext(ThemeContext);
    const [confirmed, setConfirmed] = useState('');
    const [deceased, setDeceased] = useState('');
    const [recovered, setRecovered] = useState('');
    const [date, setDate] = useState('');
    const [yesterdayDate, setYesterdayDate] = useState('');
    const [month, setMonth] = useState([
        'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Oct', 'Nov', 'Dec'
    ]);
    const [deltaConfirmed, setDeltaConfirmed] = useState('');
    const [deltaDeceased, setDeltaDeceased] = useState('');
    const [deltaRecovered, setDeltaRecovered] = useState('');
    useEffect(()=>{
        var today = new Date();
        var yesterday = new Date(today);
        yesterday.setDate(yesterday.getDate()-1);
        setDate(today.getDate().toString() + '-' + month[today.getMonth()] + '-' + today.getFullYear().toString().slice(2,4))
        setYesterdayDate(yesterday.getDate().toString() + '-' + month[yesterday.getMonth()] + '-' + yesterday.getFullYear().toString().slice(2,4));
    },[])

    useEffect(()=>{
        const delta_url = 'https://api.covid19india.org/states_daily.json';
        fetch(delta_url)
        .then(response=>response.json())
        .then(data => {
          data.states_daily.map(dailyInfo=>{
              if (dailyInfo.date === yesterdayDate && dailyInfo.status === 'Confirmed'){
                setDeltaConfirmed(dailyInfo.mh);
              };
              if (dailyInfo.date === yesterdayDate && dailyInfo.status === 'Recovered'){
                setDeltaRecovered(dailyInfo.mh);
              };
              if (dailyInfo.date === yesterdayDate && dailyInfo.status === 'Deceased'){
                setDeltaDeceased(dailyInfo.mh);
              };
          })
        });
        
    },[date])

    const state_url = 'https://api.covid19india.org/v4/data-all.json';
    useEffect(()=>{
        fetch(state_url)
        .then(response=>response.json())
        .then(data=>{
            var todayDate = new Date().toISOString().slice(0,10); 
            setConfirmed(data[todayDate]['MH']['total']['confirmed']);
            setDeceased(data[todayDate]['MH']['total']['deceased']);
            setRecovered(data[todayDate]['MH']['total']['recovered']);
        })
    },[date])


    return ( 
        <View style = {[styles.mainContainer,{backgroundColor : theme.bg}]}>
            <ScrollView showsVerticalScrollIndicator = {false} >
                <Text style = {[styles.date,{color : theme.syntax}]}>Total cases in Maharashtra as of : <Text style = {styles.boldText}>{date}</Text></Text>
                <View style = {styles.mainInfo}>
                    <Confirmed confirmed = {confirmed}/>
                    <Active active = {confirmed - deceased - recovered}/>
                    <Recovered recovered = {recovered}/>
                </View>
                <View>
                <Text style = {[styles.maharashtra, {color : theme.syntax}]}>Cases in Maharashtra yesterday</Text>
                <Maharashtra 
                    confirmed = {deltaConfirmed}
                    recovered = {deltaRecovered}
                    deceased = {deltaDeceased}
                    />            
                </View>
            </ScrollView>
        </View>
     );
}

const styles = StyleSheet.create({
    mainContainer : {
        flex : 1,
        paddingHorizontal : 20
    },
    mainInfo : {
        marginTop : 20,
        flexDirection : 'column',
        paddingHorizontal : 50,
    },
    date : {
        textAlign : 'center', 
        marginTop : windowHeight/60,
    },
    boldText : {
        fontWeight : 'bold',
        fontSize : 16
    },
    maharashtra : {
        fontWeight : 'bold',
        textAlign : 'center',
        marginTop : 30,
    }
})
 
export default SecondaryPage;