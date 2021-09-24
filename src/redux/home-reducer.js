const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
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
}

function HomeReducer(state = initialState, action) {
       switch (action.type) {
              case ADD_POST: {
                     let stateCopy = {...state};
                     stateCopy.postsData = [...stateCopy.postsData];
                     stateCopy.postsData.push({
                            id: 8,
                            message: state.newPostText,
                            avatarSrc: 'https://i.ytimg.com/vi/oJVB_T_fv6U/maxresdefault.jpg',
                            nick: action.name,
                            like: '0'
                     })
                     stateCopy.newPostText = '';
                     return stateCopy;
              }
              case UPDATE_NEW_POST_TEXT: {
                     let stateCopy = {...state};
                     stateCopy.newPostText = action.textArea;
                     return stateCopy;
              }
              default:{
                     return state;
              }
       }
}

export function addPostActionCreator(name) {
       return {
              type: ADD_POST,
              name: name
       }
}

export function onChangeActionCreator(textArea) {
       return {
              type: UPDATE_NEW_POST_TEXT,
              textArea: textArea
       }
}

export default HomeReducer;