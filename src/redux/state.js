const ADD_POST = ' ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let store = {
    _state: {

        profilePage: {
            postData: [
                {id: 1, message: 'how are you'},
                {id: 2, message: 'how do you do'},
                {id: 3, message: 'Люблю Сашеньку'}
            ],
            newPostText:
                ''
        }
        ,
        dialogsPage: {
            dialogsData: [
                {id: 1, name: 'Tolya'},
                {id: 2, name: 'Andrey'},
                {id: 3, name: 'Igor'},
                {id: 4, name: 'Petya'},
            ],
            messageData:
                [
                    {id: 1, message: 'oy'},
                    {id: 2, message: 'Hi'},
                    {id: 3, message: 'I Tolya'},
                    {id: 4, message: 'How are you'},
                ],
        }
        ,
        sideBarPage: {
            dialogsData: [
                {id: 1, name: 'Tolya'},
                {id: 2, name: 'Andrey'},
                {id: 3, name: 'Igor'},
            ],
        }
    },
    _callSubscriber() {
        console.log('state changed')

    },
    getState() {
        return this._state;
    },

    subscribe(observer) {
        this._callSubscriber = observer;

    },
    dispatch(action) {       //{type:'ADD-POST'}
        if (action.type === ADD_POST) {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText
            };
            this._state.profilePage.postData.push(newPost);
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        }
    }
};

export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    }

};

export const updateNewPostTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT, newText: text
    }


};

export default store;
