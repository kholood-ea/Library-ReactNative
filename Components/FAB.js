import * as React from 'react';
import { Icon, Fab, Button, Form, Item, Input, Label, Picker, Toast, Root } from 'native-base';
import { Modal, Text, TouchableHighlight, View } from "react-native";
import { styles } from "../styles";
import { BookForm } from "./BookForm";
import { Value } from 'react-native-reanimated';

export const FAB = () => {
  return(<Text></Text>)
}


// export const FAB = () => {

//   const [active, setActive] = React.useState(false)
//   const [modal1Visible, setModal1Visible] = React.useState(false);
//   const [modal2Visible, setModal2Visible] = React.useState(false);
//   const [modal3Visible, setModal3Visible] = React.useState(false);
//   const [selectedBook, setSelectedBook] = React.useState("");
//   const [selectedUser, setSelectedUser] = React.useState("");


//   return (
//     <Fab
//       active={active}
//       direction="left"
//       containerStyle={{}}
//       style={{ backgroundColor: '#5067FF' }}
//       position="topRight"
//       onPress={() => setActive(!active)}>
//       <Icon type="FontAwesome5" name="plus" />
//       <Button style={{ backgroundColor: '#34A34F' }} onPress={() => {
//         setModal1Visible(true);
//       }}>
//         <Icon type="MaterialCommunityIcons" name="book-plus" />
//       </Button>


//       <Button style={{ backgroundColor: 'coral' }} onPress={() => {
//         setModal2Visible(true);
//       }}>
//         <Icon type="MaterialIcons" name="person-add" />
//       </Button>


//       <Button style={{ backgroundColor: 'purple' }} onPress={() => {
//         setModal3Visible(true);
//       }}>
//         <Icon type="MaterialCommunityIcons" name="library-shelves" />
//       </Button>
//       <View style={styles.centeredView} transparent={true}>
//         <Modal
//           animationType="slide"
//           transparent={true}
//           visible={modal1Visible}
//           onRequestClose={() =>setModal1Visible(false)}

//         >
//           {/* <View style={styles.centeredView}> */}
//             <View style={styles.modalView}>

//               <Text style={{ marginLeft: 280 }} onPress={() => { setModal1Visible(!modal1Visible); }}>
//                 <Icon type="Feather" name="x" style={{ color: 'red', fontSize: 28 }}></Icon>
//               </Text>
//               <Text style={{ fontWeight: "bold", fontSize: 18 }}>New Book</Text>

//               <BookForm />

//               <TouchableHighlight
//                 style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
//                 onPress={() => Toast.show({
//                   text: 'Book Added Successfully',
//                   duration: 900,
//                 })}
//               >
//                 <Text style={styles.textStyle}>Add Book</Text>
//               </TouchableHighlight>
//             </View>
//           {/* </View> */}
//         </Modal>
//         <Modal
//           animationType="slide"
//           transparent={true}
//           visible={modal2Visible}
//           onRequestClose={() => setModal2Visible(false)}
//         >
//           {/* <View style={styles.centeredView}> */}
//             <View style={styles.modalView}>
//               <Text style={{ marginLeft: 280 }} onPress={() => { setModal2Visible(!modal2Visible); }}>
//                 <Icon type="Feather" name="x" style={{ color: 'red', fontSize: 28 }}></Icon>
//               </Text>
//               <Text style={{ fontWeight: "bold", fontSize: 18 }}>New User</Text>

//               <Form>
//                 <Item floatingLabel>
//                   <Label>User Name</Label>
//                   <Input />
//                 </Item>
//                 <Item floatingLabel last>
//                   <Label>User Email</Label>
//                   <Input />
//                 </Item>
//               </Form>

//               <TouchableHighlight
//                 style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
//                 onPress={() => Toast.show({
//                   text: 'User Added Successfully',
//                   duration: 900,
//                 })}
//               >
//                 <Text style={styles.textStyle}>Add User</Text>
//               </TouchableHighlight>
//             {/* </View> */}
//           </View>
//         </Modal>
//         <Modal
//           animationType="slide"
//           transparent={true}
//           visible={modal3Visible}
//           onRequestClose={() =>setModal3Visible(false)}
//         >
//           {/* <View style={styles.centeredView}> */}
//             <View style={styles.modalView}>
//               <Text style={{ marginLeft: 280 }} onPress={() => { setModal3Visible(!modal3Visible); }}>
//                 <Icon type="Feather" name="x" style={{ color: 'red', fontSize: 28 }}></Icon>
//               </Text>
//               <Text style={{ fontWeight: "bold", fontSize: 18, marginBottom: 15 }}>Borrow/Return Book</Text>

//               <Form>
//                 <Item picker>
//                   <Picker
//                     mode="dropdown"
//                     iosIcon={<Icon name="arrow-down" />}
//                     style={{ width: undefined }}
//                     placeholder="Choose Book"
//                     placeholderStyle={{ color: "#bfc6ea" }}
//                     placeholderIconColor="#007aff"
//                     selectedValue={selectedBook}
//                     onValueChange={setSelectedBook.bind(this)}
//                   >
//                     <Picker.Item label="" value="" />
//                     <Picker.Item label="Book 1" value="key0" />
//                     <Picker.Item label="Book 2" value="key1" />
//                     <Picker.Item label="Book 3" value="key2" />
//                     <Picker.Item label="Book 4" value="key3" />
//                     <Picker.Item label="Book 5" value="key4" />
//                   </Picker>
//                 </Item>
//                 <Item picker>
//                   <Picker
//                     mode="dropdown"
//                     iosIcon={<Icon name="arrow-down" />}
//                     style={{ width: undefined }}
//                     placeholder="Select a User"
//                     placeholderStyle={{ color: "#bfc6ea" }}
//                     placeholderIconColor="#007aff"
//                     selectedValue={selectedUser}
//                     onValueChange={setSelectedUser.bind(this)}
//                   >
//                     <Picker.Item label="" value="" />
//                     <Picker.Item label="Person 1" value="key0" />
//                     <Picker.Item label="Person 2" value="key1" />
//                     <Picker.Item label="Person 3" value="key2" />
//                     <Picker.Item label="Person 4" value="key3" />
//                     <Picker.Item label="Person 5" value="key4" />
//                   </Picker>
//                 </Item>
//               </Form>

//               <TouchableHighlight
//                 style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
//                 onPress={() => Toast.show({
//                   text: 'Book Borrowed!',
//                   duration: 900,
//                 })}
//               >
//                 <Text style={styles.textStyle}>Borrow </Text>
//               </TouchableHighlight>

//               <TouchableHighlight
//                 style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
//                 onPress={() => Toast.show({
//                   text: 'Book Returned Successfully',
//                   duration: 900,
//                   //  buttonText: 'Okay'
//                 })}
//               >
//                 <Text style={styles.textStyle}>Return</Text>
//               </TouchableHighlight>
//             {/* </View> */}
//           </View>
//         </Modal>
//       </View>
//     </Fab>



//   )

// }
