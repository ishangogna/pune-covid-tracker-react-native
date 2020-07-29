import React, { useContext, useState, useEffect } from 'react';
import { View, StyleSheet, Text, Dimensions } from 'react-native';
import { ThemeContext } from '../contexts/ThemeContext';
import Confirmed from '../components/confirmed';
import Active from '../components/active';
import Recovered from '../components/recovered';
import Maharashtra from '../components/maharashtra';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


const MainPage = () => {
    const { theme } = useContext(ThemeContext);
    const [confirmed, setConfirmed] = useState('');
    const [active, setActive] = useState('');
    const [recovered, setRecovered] = useState('');
    const [date, setDate] = useState('');
    const [month, setMonth] = useState([
        'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Oct', 'Nov', 'Dec'
    ]);
    const [deltaConfirmed, setDeltaConfirmed] = useState('');
    const [deltaDeceased, setDeltaDeceased] = useState('');
    const [deltaRecovered, setDeltaRecovered] = useState('');

    useEffect(()=>{
        var today = new Date();
        setDate(today.getDate().toString() + '-' + month[today.getMonth()] + '-' + today.getFullYear().toString().slice(2,4))
    },[date])

    useEffect(()=>{
        const delta_url = 'https://api.covid19india.org/states_daily.json';
        fetch(delta_url)
        .then(response=>response.json())
        .then(data => {
          data.states_daily.map(dailyInfo=>{
              if (dailyInfo.date === '28-Jul-20' && dailyInfo.status === 'Confirmed'){
                setDeltaConfirmed(dailyInfo.mh);
              };
              if (dailyInfo.date === '28-Jul-20' && dailyInfo.status === 'Recovered'){
                setDeltaRecovered(dailyInfo.mh);
              };
              if (dailyInfo.date === '28-Jul-20' && dailyInfo.status === 'Deceased'){
                setDeltaDeceased(dailyInfo.mh);
              };
          })
        });
        
    },[date])

    const district_url = 'https://api.covid19india.org/state_district_wise.json';
    useEffect(()=>{
        fetch(district_url)
        .then(response=>response.json())
        .then(data=>{
            setConfirmed(data.Maharashtra.districtData.Pune.confirmed);
            setActive(data.Maharashtra.districtData.Pune.active);
            setRecovered(data.Maharashtra.districtData.Pune.recovered);
        })
    },[])


    return ( 
        <View style = {[styles.mainContainer,{backgroundColor : theme.bg}]}>
            <Text style = {[styles.date,{color : theme.syntax}]}>Total cases in Pune as of : <Text style = {styles.boldText}>{date}</Text></Text>
            <View style = {styles.mainInfo}>
                <Confirmed confirmed = {confirmed}/>
                <Active active = {active}/>
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
        marginTop : windowHeight/20,
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
 
export default MainPage;