import   { index, store, destroy } from "./controller.js";

const main = () => {
    const user = { name: "Nurul", age: 15, address: "GDC", email: "Nurul@gmail.com" };

    index();
    store(user);
    index();
    destroy(1);
    index();
    
    
}
main();