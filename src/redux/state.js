let rerenderEntireTree = () => {
    console.log('sss')
}

let state = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hello Everyone', likesCount: 12},
            {id: 2, message: 'My name is Azamat', likesCount: 11},
            {id: 3, message: 'I love React', likesCount: 11},
            {id: 4, message: 'And I love JS', likesCount: 11},
        ],
        newPost: 'It-Kamasutra'
    },

    dialogsPage: {
        dialogs: [
            {id: 1, name: 'Dima'},
            {id: 2, name: 'Andrey'},
            {id: 3, name: 'John'},
            {id: 4, name: 'Micky'},
            {id: 5, name: 'Inna'},
        ],

        messages: [
            {id: 1, message: 'I'},
            {id: 2, message: 'You'},
            {id: 3, message: 'She'},
            {id: 4, message: 'He'},
            {id: 5, message: 'It'},
        ],

        newMessage: 'Azamat'
    },

    sidebar: {
        friends: [
            {id:1, name: 'Dima'},
            {id:2, name: 'Andrey'},
            {id:3, name: 'Inna'}
        ]
    }
}

export const addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPost,
        likesCount: 0
    }

    state.profilePage.posts.push(newPost);

    rerenderEntireTree(state);
}

export const newPostText = (newText) => {
    state.profilePage.newPost = newText;

    rerenderEntireTree(state);
}

export const addMessage = () => {
    let newMessage = {
        id: 5,
        message: state.dialogsPage.newMessage,
    }

    state.dialogsPage.messages.push(newMessage);

    rerenderEntireTree(state);
}

export const newMessageText = (newSms) => {
    state.dialogsPage.newMessage = newSms ;

    rerenderEntireTree(state);
}

export const subscribe = (observer) => {
    rerenderEntireTree = observer;
}

export default  state;