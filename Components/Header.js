import * as NB from 'native-base';
import * as React from 'react';
import { View,Text } from 'react-native';
import {FAB} from './FAB'


export const Header = () => {
    return(
        <View>     
        <NB.Header span style={{paddingBottom:40 ,marginBottom:-50}}>
          <FAB/>
          <NB.Body>
            <NB.Title style={{fontSize:25}}>Library </NB.Title>
          </NB.Body>
          <NB.Right />
        </NB.Header>
      <NB.Header searchBar rounded>
        <NB.Item>
          <NB.Icon name="ios-search" />
          <NB.Input placeholder="Search for a book" />
          
          <NB.Icon type="MaterialCommunityIcons" name="book-open-page-variant"style={{fontSize: 20, color: 'black'}} />
        </NB.Item>
        <NB.Button transparent>
          <NB.Text>Search</NB.Text>
        </NB.Button>
      </NB.Header>
</View>     
    
    )
}
