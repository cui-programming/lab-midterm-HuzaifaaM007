import React from 'react';
import { View, ScrollView } from 'react-native';
import { styles } from './src/styles/styles';
import AboutMe from './src/components/custom/AboutMe';
import TasbihList from './src/components/custom/TasbihList';
// import TeacherMessage from './src/components/custom/TeacherMessage'; // Students create this
import SearchAndAdd from './src/components/custom/SearchAndAdd';
import { STUDENT_NAME, REG_NO } from './src/config/student';
import TeacherMessage from './src/components/custom/TeacherMessage';
import { StatusBar } from 'react-native-web';

export default function App() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="#ffffff"
        translucent={false}
      />
      <AboutMe name={STUDENT_NAME} regNo={REG_NO} />
      {/* TODO: after creating the custom/TeacherMessage component, render it here */}
      <TeacherMessage />
      <TasbihList />
      {/* <SearchAndAdd /> */}
    </ScrollView>
  );
}
