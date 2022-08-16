//   // import React from 'react';
// import React, {useState, useEffect, useCallback} from 'react';
// import { GiftedChat, Bubble, Send } from 'react-native-gifted-chat';
// import MaterialCommunityIcons  from 'react-native-vector-icons/MaterialCommunityIcons';
// import FontAwesome  from 'react-native-vector-icons/FontAwesome';
// import { View ,StyleSheet} from 'react-native';


// const Chat = () => {

//   const [messages , setMessages] = useState([]);

//   useEffect(() => {
//     setMessages([
//       {
//         _id: 1,
//         text: 'Hello developer',
//         createdAt: new Date(),
//         user: {
//           _id: 2,
//           name: 'React Native',
//           avatar: 'https://placeimg.com/140/140/any',
//         },
//       },
//     ])
//   }, []);

//   const onSend = useCallback((messages = []) => {
//     setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
//   }, []);

//   const renderSend =(props) =>{
//     return(
//         <Send {...props}>
//             <View>
//                 <MaterialCommunityIcons 
//                 name='send-circle'
//                 style={{marginBottom:5,marginRight: 5}} 
//                 size={32} color='#2e64e5'/>
//             </View>
//         </Send>
//     )
//   }
//   const renderBubble =(props)=>{
//     return (
//         <Bubble
//         {...props}
//         wrapperStyle={{
//             rigth:{
//                 backgroundColor: '#fff',
//             },
//         }}
//         />
//     );
//   };

//   const scrollToBottomComponent = () => {
//     return (
//       <FontAwesome name='angle-double-down' size={22} color='#333'/>
//     );
//   };

//   return (
//     <GiftedChat
//       messages={messages}
//       onSend={messages => onSend(messages)}
//       user={{
//         _id: 1,
//       }}
//       renderBubble={renderBubble}
//       allwaysShowsend
//       renderSend={renderSend}
//       scrollToBottom
//       scrollToBottomComponent={scrollToBottomComponent}
//     />
//   )
// }

// export default Chat

// const styles = StyleSheet.create({
//     container:{
//       flex: 1,
//       alignItems: 'center',
//       justifyContent: 'center',
//     },
// }
// );

