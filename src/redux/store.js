import DialogsReducer from "./dialogs-reducer";
import HomeReducer from "./home-reducer";
import ProfileReducer from "./profile-reducer";

let store = {
       _state: {
              dialogsPage: {
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
                                   textMessage: 'Text Text Text'
                            }
                     ],
                     newMessageText: "kurwa"
              },
              homePage: {
                     postsData: [{
                                   id: 1,
                                   message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit delectus magnam provident numquam a atque laboriosam magni neque laudantium blanditiis voluptate eius, odio id quia ad vitae sed impedit aut!',
                                   avatarSrc: 'https://oir.mobi/uploads/posts/2021-03/thumbs/1616544168_42-p-sinii-fon-bez-nichego-54.jpg',
                                   nick: 'Ilya',
                                   like: '111'
                            },
                            {
                                   id: 2,
                                   message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit delectus magnam provident numquam a atque laboriosam magni neque laudantium blanditiis voluptate eius, odio id quia ad vitae sed impedit aut!',
                                   avatarSrc: 'https://i.ytimg.com/vi/oJVB_T_fv6U/maxresdefault.jpg',
                                   nick: 'Sanya',
                                   like: '3891'
                            },
                            {
                                   id: 3,
                                   message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit delectus magnam provident numquam a atque laboriosam magni neque laudantium blanditiis voluptate eius, odio id quia ad vitae sed impedit aut!',
                                   avatarSrc: 'https://oir.mobi/uploads/posts/2021-03/thumbs/1616544168_42-p-sinii-fon-bez-nichego-54.jpg',
                                   nick: 'Piroshok_228',
                                   like: '1235'
                            },
                            {
                                   id: 4,
                                   message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit delectus magnam provident numquam a atque laboriosam magni neque laudantium blanditiis voluptate eius, odio id quia ad vitae sed impedit aut!',
                                   avatarSrc: 'https://i.ytimg.com/vi/oJVB_T_fv6U/maxresdefault.jpg',
                                   nick: 'Ira',
                                   like: '12'
                            },
                            {
                                   id: 5,
                                   message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit delectus magnam provident numquam a atque laboriosam magni neque laudantium blanditiis voluptate eius, odio id quia ad vitae sed impedit aut!',
                                   avatarSrc: 'https://oir.mobi/uploads/posts/2021-03/thumbs/1616544168_42-p-sinii-fon-bez-nichego-54.jpg',
                                   nick: 'Vovan',
                                   like: '42'
                            },
                            {
                                   id: 6,
                                   message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit delectus magnam provident numquam a atque laboriosam magni neque laudantium blanditiis voluptate eius, odio id quia ad vitae sed impedit aut!',
                                   avatarSrc: 'https://i.ytimg.com/vi/oJVB_T_fv6U/maxresdefault.jpg',
                                   nick: 'Rodshers',
                                   like: '3241'
                            },
                            {
                                   id: 7,
                                   message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit delectus magnam provident numquam a atque laboriosam magni neque laudantium blanditiis voluptate eius, odio id quia ad vitae sed impedit aut!',
                                   avatarSrc: 'https://oir.mobi/uploads/posts/2021-03/thumbs/1616544168_42-p-sinii-fon-bez-nichego-54.jpg',
                                   nick: 'Rick',
                                   like: '5709'
                            }
                     ],
                     newPostText: 'it-kurwa'
              },
              ProfilePage: {
                     Main: [{
                                   title: "Email"
                            },
                            {
                                   title: "Imya"
                            },
                            {
                                   title: "Middle name"
                            },
                            {
                                   title: "Date of birth"
                            },
                            {
                                   title: "Language"
                            },
                            {
                                   title: "Timezone"
                            }
                     ],
                     Sidebar: [{
                                   titleSide: "Аккаунт",
                                   srcForIcon: "https://image.flaticon.com/icons/png/128/5266/5266907.png"
                            },
                            {
                                   titleSide: "Изменение пароля",
                                   srcForIcon: "https://image.flaticon.com/icons/png/128/2627/2627824.png"
                            },
                            {
                                   titleSide: "Персональные данные",
                                   srcForIcon: "https://t3.ftcdn.net/jpg/02/59/39/46/240_F_259394679_GGA8JJAEkukYJL9XXFH2JoC3nMguBPNH.jpg"
                            },
                            {
                                   titleSide: "Фотография",
                                   srcForIcon: "https://image.flaticon.com/icons/png/512/17/17075.png"
                            },
                            {
                                   titleSide: "Настройка уведомлений",
                                   srcForIcon: "https://image.flaticon.com/icons/png/128/2227/2227939.png"
                            },
                            {
                                   titleSide: "Права доступа к модулям",
                                   srcForIcon: "https://image.flaticon.com/icons/png/128/1745/1745252.png"
                            }
                     ]
              }

       },

       getState() {
              return this._state;
       },

       _callSubscriber() {
              console.log('State changed');
       },

       subscribe(observer) {
              this._callSubscriber = observer; // observer pattorn
       },

       

       dispatch(action) { // { type: 'ADD-POST' }

           this._state.ProfilePage = ProfileReducer(this._state.ProfilePage, action);
           this._state.dialogsPage = DialogsReducer(this._state.dialogsPage, action);
           this._state.homePage = HomeReducer(this._state.homePage, action);
              
           this._callSubscriber(this._state);
       }
}

export default store;
// store - OOP