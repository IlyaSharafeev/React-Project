const UPDATE_NEW_MESSAGE = 'UPDATE-NEW-POST-MESSAGE';
const SEND_MESSAGE = 'SEND_MESSAGE';


let initialState = {
       dialogsFriendData: [{
                                   id: 1,
                                   NameUser: 'Ilya',
                                   imgSrc: 'https://x8sweo3how.a.trbcdn.net/wp-content/uploads/2020/12/avatarki-dlya-ks-go.jpg'
                            },
                            {
                                   id: 2,
                                   NameUser: 'Sanya',
                                   imgSrc: 'https://i.pinimg.com/280x280_RS/9a/12/d0/9a12d0ec05d6c2862354b7ab1195776b.jpg'
                            },
                            {
                                   id: 3,
                                   NameUser: 'Sveta',
                                   imgSrc: 'https://i.pinimg.com/236x/d0/b6/7b/d0b67bf33f05bd1fb8378378dd1e6b8d.jpg'
                            },
                            {
                                   id: 4,
                                   NameUser: 'Ira',
                                   imgSrc: 'https://i.ytimg.com/vi/Q7fMCVoal08/sddefault.jpg'
                            },
                            {
                                   id: 5,
                                   NameUser: 'Katya',
                                   imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjS9sESVQ8CtZ2xPjJ77Z9wOpIetqojZr-Yw&usqp=CAU'
                            },
                            {
                                   id: 6,
                                   NameUser: 'Piroshok',
                                   imgSrc: 'https://giffs.ru/wp-content/uploads/2020/09/I5iGi-gap.jpg'
                            },
                            {
                                   id: 7,
                                   NameUser: 'Elyars',
                                   imgSrc: 'https://www.meme-arsenal.com/memes/9b1182a7be90f45cae25148325adbf51.jpg'
                            },
                            {
                                   id: 8,
                                   NameUser: 'Varela',
                                   imgSrc: 'https://klike.net/uploads/posts/2020-01/1579681611_1.jpg'
                            },
                            {
                                   id: 9,
                                   NameUser: 'Lutik',
                                   imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmxh-Ps8VOaH1xmlBIMj3h8iBUzz8KcDdzLA&usqp=CAU'
                            },
                            {
                                   id: 10,
                                   NameUser: 'Dimich',
                                   imgSrc: 'https://instaved.ru/wp-content/uploads/2019/11/kartinki-na-instagram-na-avu_GLAV.jpg'
                            },
                            {
                                   id: 11,
                                   NameUser: 'Mark',
                                   imgSrc: 'https://pm1.narvii.com/6936/09777edcd8a9469abe97863509f12045f33feccer1-640-627v2_hq.jpg'
                            }
                     ],
                     messageForDialogsData: [{
                                   id: 1,
                                   textMessage: 'Tut text'
                            }
                            
                     ],
                     newMessageText: "kurwa"
}



 function DialogsReducer(state = initialState, action) {

       let stateCopy = {
              ...state
       };

       switch(action.type){ 
              case UPDATE_NEW_MESSAGE: {
                     
                     stateCopy.newMessageText = action.body;
                     return stateCopy;
              }
              case SEND_MESSAGE: {
                     
                     let body = state.newMessageText;
                     stateCopy.newMessageText = '';
                     stateCopy.messageForDialogsData.push({
                     id: 2,
                     textMessage: body
         });
               return stateCopy;
              }
              default:{
                     return state;
              }
       }
}





export function sendMessageCreator() {
       return {
              type: SEND_MESSAGE
       }
}

export function updateNewMessageTextCreator(body) {
       return {
              type: UPDATE_NEW_MESSAGE,
              body: body
       }
}

export default DialogsReducer;