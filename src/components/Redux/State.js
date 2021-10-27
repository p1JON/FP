import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sideReducer from "./Side-reducer";


const store = {
    _State:{
    dialogsPage:{
        dialogsData: [
        { id: 1, name: 'Andrey' },
        { id: 2, name: 'Maksim' },
        { id: 3, name: 'Alex' },
        { id: 4, name: 'Masha' },
        { id: 5, name: 'Anton' },
        { id: 6, name: 'Dasha' }
        ],
        chatData:[
        { id: 1, message: 'Hello, bro' },
        { id: 2, message: 'how are you?' },
        { id: 3, message: 'Where you from?' },
        ],
        newMessageBody: '',
    },
    sideBar:{},
    postsPage:{
        posts : [
        { id: 1, message: 'Hi,how are you?' },
        { id: 2, message: 'I like you' },
        { id: 3, message: 'How?' },
    ],
        newPostText: 'blablabla'
    },
    },
    getState () {
        return this._State
    },
    _callsubscriber () {
    console.log ("State was changed")
},
    subscribe  (observer)  {
    this._callsubscriber = observer;
},
    

    dispatch (action) {
        this._State.postsPage = profileReducer( this._State.postsPage, action);
        this._State.dialogsPage = dialogsReducer( this._State.dialogsPage, action);
        this._State.sideBar = sideReducer( this._State.sideBar, action);
        
        this._callsubscriber(this._State);
        }
}    



export default store;