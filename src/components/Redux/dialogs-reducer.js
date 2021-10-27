export const updateNewMessageBody = 'updateNewMessageBody';
export const sendMessage = 'sendMessage';

const initialState = {
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
    };

const dialogsReducer = (state=initialState,action) => {
    switch (action.type) {
        case updateNewMessageBody : 
            return {
                ...state,
                newMessageBody: action.body
            };
        case sendMessage :
            let body = state.newMessageBody;
            return {
                ...state,
                newMessageBody: '',
                chatData: [...state.chatData, {id:4, message: body}]
            };
        default:
            return state; 
    }  
}
export const sendMessageCreator = () => ({type:sendMessage})
export const updateNewMessageBodyCreator = (body) => ({type:updateNewMessageBody, body:body})


export default dialogsReducer;