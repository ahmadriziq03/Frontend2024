import users from "./data.js";

const index = () => {
    console.log("index - Get All User");
    users.forEach((user) => {
        console.log(user);
    });
};
const store = (user) => {
    users.push(user);
};

const destroy = (index) => {
    users.splice(index, 1);
}


export { index, store, destroy}


