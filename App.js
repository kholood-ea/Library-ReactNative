import * as React from 'react';
import {Container,Tab,Tabs,TabHeading,Icon,Fab,Button, Root} from 'native-base';
import { Platform, View ,Text} from 'react-native';
import {styles} from "./styles";
import { Books } from "./Components/Books";
import { Persons } from "./Components/Persons";
import {BooksBorrowed} from './Components/BooksBorrowed'
import { Header } from "./Components/Header";
import{BooksProvider}from "./context/books-context"
import { PersonsProvider } from "./context/persons-context";
import { ProcessesProvider } from "./context/process-context";


const instructions = Platform.select({
  ios: `Press Cmd+R to reload,\nCmd+D or shake for dev menu`,
  android: `Double tap R on your keyboard to reload,\nShake or press menu button for dev menu`,
});

export default function App() {
  
  return (
    <Root>
    {/* <BooksProvider>
      <PersonsProvider>
        <ProcessesProvider> */}
    <Container>
<Header/>
 
<Container>
        <Tabs locked>
          
        <Tab heading={ <TabHeading><Icon type ="FontAwesome5" name="book" /><Text> Books</Text></TabHeading>}>   
             <Books />            
          </Tab>
          <Tab heading={ <TabHeading><Icon name="ios-people" /><Text> Borrowers</Text></TabHeading>}>       
          <Persons/>
          </Tab>
          <Tab heading={ <TabHeading><Icon type ="Foundation" name="book-bookmark" /><Text> Books Borrowed</Text></TabHeading>}>       
            <BooksBorrowed />
          </Tab>
          
        </Tabs>
        </Container>
        
</Container>
          {/* </ProcessesProvider>
      </PersonsProvider>
    </BooksProvider> */}
          </Root>

  );
    }
//}


