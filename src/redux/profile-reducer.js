


let initialState = {
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


function ProfileReducer(state = initialState,action){

   return state;
}

export default ProfileReducer;