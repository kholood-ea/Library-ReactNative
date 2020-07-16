import React from 'react'; 
import { SwipeListView } from 'react-native-swipe-list-view';
import {Modal,Text,TouchableOpacity,TouchableHighlight,View} from 'react-native';
import { styles } from "../styles";
import {useBooksValue} from '../context/books-context'
import { BookForm } from "./BookForm";
import { Icon,Toast } from 'native-base';
export const Books = () => {
    const [visible, setVisible] = React.useState(false);
    // const {books,setBooks}=useBooksValue();


    const [listData, setListData] = React.useState(
        Array(20)
            .fill('')
            .map((_, i) => ({ key: `${i}`, text: `item #${i}` }))
    );
    const [books, setBooks] = React.useState([])
   const fetchBooks = async () => {

    //  const apiCall = await fetch('https://localhost:44330/api/books/getbook');
    const apiCall = await fetch('https://192.168.1.5:44330/api/books/getbook');

      const AllBooks = await apiCall.json();     
        setBooks(AllBooks)  }  
        // console.log(apiCall)

React.useEffect(()=>{
let mounted=true;
if(mounted){

  fetchBooks();
  console.log(books)
}
  return()=>mounted=false;
     },[]); 

    const closeRow = (rowMap, rowKey) => {
        if (rowMap[rowKey]) {
            rowMap[rowKey].closeRow();
        }
    };

    const deleteRow = (rowMap, rowKey) => {
        closeRow(rowMap, rowKey);
        const newData = [...listData];
        const prevIndex = listData.findIndex(item => item.key === rowKey);
        newData.splice(prevIndex, 1);
        setListData(newData);
        Toast.show({
            text: 'Removed',
            duration: 900,
          })
        
    };

    const onRowDidOpen = rowKey => {
        console.log('This row opened', rowKey);
    };

    const renderItem = data => (
        <TouchableHighlight
            onPress={() => console.log('You touched me')}
            style={styles.rowFront}
            underlayColor={'#AAA'}

        >
            <View>
                {/* <Text>I am {data.item.text} in a List</Text> */}
                <Text>{data.item.Name} -
                {data.item.Auther}-
               {data.item.Copies}-
                {data.item.MaxCop}</Text>
            </View>
        </TouchableHighlight>
    );

    const renderHiddenItem = (data, rowMap) => (
        <View style={styles.rowBack}>
             <TouchableOpacity
                onPress={() => setVisible(true)}
            >
                <Text >Edit</Text>
            </TouchableOpacity>
            
            {/* <TouchableOpacity
                style={[styles.backRightBtn, styles.backRightBtnLeft]}
                onPress={() => closeRow(rowMap, data.item.key)}
            >
                <Text style={styles.backTextWhite}>Close</Text>
            </TouchableOpacity> */}
            <TouchableOpacity
                style={[styles.backRightBtn, styles.backRightBtnRight]}
                onPress={() => deleteRow(rowMap, data.item.key)}
            >
                <Icon type='EvilIcons' name='trash' style={{color:'black'}}></Icon>
                {/* <Text style={styles.backTextWhite}>Delete</Text> */}
            </TouchableOpacity>
        </View>
    );

    return (
        <View style={styles.container}>
            <SwipeListView
                // data={listData}
                data={books}

                renderItem={renderItem}
                renderHiddenItem={renderHiddenItem}
                leftOpenValue={60}
                rightOpenValue={-75}

                // rightOpenValue={-150}
                previewRowKey={'0'}
                previewOpenValue={-40}
                previewOpenDelay={3000}
                onRowDidOpen={onRowDidOpen}
            />
            <Modal
  animationType="slide"
  transparent={true}
  visible={visible}
  onRequestClose={() =>setVisible(false)}
>
  {/* <View style={styles.centeredView}> */}
    <View style={styles.modalView}>
    <Text style={{marginLeft:280 }} onPress={() => {setVisible(!visible); }}>
    <Icon type="Feather" name="x" style={{color:'red'}}></Icon>
    </Text>
    <Text style={{ fontWeight: "bold",fontSize:18,marginRight:100}}>Edit Book Info 
    
    </Text>
      <BookForm/>
      <TouchableHighlight
        style={{ ...styles.openButton, backgroundColor: "#2196F3"}}
        onPress={() => Toast.show({
            text: 'Changes Saved',
            duration: 900,
          })}
      >
        <Text style={styles.textStyle}>Submit Changes</Text>
      </TouchableHighlight>
    </View>
  {/* </View> */}
</Modal>
          
        </View>

    
    )
    
}
