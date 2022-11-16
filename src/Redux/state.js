let store = {
  _state: {
    updateText: "",
    navBar: {
      friends: [
        {
          id: 1,
          name: "Jon Finger",
          imageLink:
            "https://raw.githubusercontent.com/sefyudem/Responsive-Login-Form/master/img/avatar.svg",
        },
        {
          id: 2,
          name: "Rita Finger",
          imageLink:
            "https://raw.githubusercontent.com/sefyudem/Responsive-Login-Form/master/img/avatar.svg",
        },
        {
          id: 3,
          name: "Dima Finger",
          imageLink:
            "https://raw.githubusercontent.com/sefyudem/Responsive-Login-Form/master/img/avatar.svg",
        },
      ],
    },
    profilePage: {
      posts: [
        { id: 1, name: "Jon Finger", message: "Helloy", likes: "452" },
        { id: 1, name: "Roman Stem ", message: "Good day", likes: "54" },
        { id: 1, name: "Roman Stem ", message: "Good job", likes: "566" },
      ],
    },
    dialogsPage: {
      dialogs: [
        { id: 1, name: "Dimon" },
        { id: 2, name: "andrey" },
        { id: 3, name: "Nick" },
        { id: 4, name: "Lem" },
        { id: 5, name: "Jon" },
        { id: 6, name: "Fedor" },
      ],
      messages: [
        { id: 1, text: "Dimon Helloy" },
        { id: 2, text: "You Bro" },
        { id: 3, text: "Nickhj Yes No" },
        { id: 4, text: "Read " },
        { id: 5, text: "Good job my friend " },
      ],
    },
  },
  _getState() {
    return this._state;
  },
  _subscriber(observer) {
    this._update = observer;
  }, // функция колбэк нуна для обновления данных. Экспорт в индекс жс
  _update() {
    console.log("update no");
  }, // принимает функцию рендер из index.js

  dispatch(action) {
    if (action.type === "ADD-POST") {
      const post = {
        id: 5,
        name: "lilo",
        message: this._state.updateText,
        likes: 0,
      };
      this._state.profilePage.posts.push(post);
      this._state.updateText = "";
      this._update(this._state);
    } else if (action.type === "UPDATATEXT") {
      this._state.updateText = action.text;
      console.log(action.text);
      this._update(this._state);
    } else if (action.type === "ADD-MESSAGE") {
      this._state.dialogsPage.messages.push(action);
      this._state.updateText = "";
      this._update(this._state);
    }
  },
};
export const addPostAction = () => {
  return {
    type: "ADD-POST",
  };
};
export const addMessageAction = () => {
  return {
    type: "ADD-MESSAGE",
    text: store._state.updateText,
  };
};
export const upDateText = (messageText) => {
  return {
    type: "UPDATATEXT",
    text: messageText,
  };
};

export default store;
window.state = store;
