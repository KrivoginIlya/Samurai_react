let renderEntireTree = () => {
  console.log("update no");
}; // принимает функцию рендер из index.js
let state = {
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
};
export const addPost = () => {
  const post = {
    id: 5,
    name: "lilo",
    message: state.updateText,
    likes: 0,
  };

  state.profilePage.posts.push(post);
  state.updateText = "";
  renderEntireTree(state);
};
export const addMessage = () => {
  const message = {
    id: 2,
    text: state.updateText,
  };
  state.dialogsPage.messages.push(message);
  state.updateText = "";
  renderEntireTree(state);
};
export const updateText = (newText) => {
  state.updateText = newText;
  console.log(newText);
  renderEntireTree(state);
}; // принимает текст пользователя
export const subscriber = (observer) => {
  renderEntireTree = observer;
}; // функция колбэк нуна для обновления данных. Экспорт в индекс жс
export default state;
