//immutable vs mutable
//primitive and reference
//array objects destructing import and export
//map filter arrow fncs(implicit return) spread operator

//react js mein apko  ek state naam ki cheej milegi us bande ko aap 
// mutate nahi kr skte mtlb ki directly uski value nhi hata yaah jod skte
let arr = [1, 2, 3, 4];
let arr2 = arr;

arr2.pop();

//this type of diretly update or change not allowed in react
let state = [1, 2, 3];
state.pop();

// we do this instead of above approach means assigning nw value 

let state1 = [1, 2, 3, 4];
state1 = [1, 2];


let state3 = [1, 2, 3, 4, 5];
let copy = [...state];

copy.pop();

//spread operator
let statesp = { name: "harsh", age: 24 };
let copy1 = {...state };
copy1.age = 25;

statesp = copy1;

//destucturing

let obj = {
    name: "harsh",
    age: 25,
    email: "lalalalalalalalllla@gmail.com"
};

const { email } = obj;
//obj.email in place of this we only write email
email

//exmaple 2 
let obj1 = {
    name: "string",
    social: {
        facebook: {
            first: "haah",
            sec: "ahscasd",
        },
    },
};
const { sec } = obj.social.facebook;

//example 3

let obj2 = [12, function() {}];
let [first, sect] = arr;
first
//import and export
/*humlog component bnate hain, component mtlbpage 
ka hissa,navbar,sidebar,cart,landing,second,ab dikkat ye 
aati hain ki har hissa alag alag component hain aur
components ko hum log alag alag files mein rakhte hai, 
to inko lastmein jodna bhi  pdta hain,jodneke liye use hota hain import and export*/
function Cart() {

}


export default Cart; //and in next file we written where need import Cart from"./script2"
//2nd way
export function Cart() {}
export function Abcd() {

}
//and in next file we written where need import {Cart,Abcd} from"./script2"

//map filter
// mapfilter-- dono hi array pe chalte hain, aur dono ka kaam hain 
// array par kuch perform krna hain andek naya array return krna hain

let arr_no = [1, 2, 3, 4, 5];
//map- har element par kuch karo and naye array mein rakho
// map ke andr aata hain function and functionke andraata hain value

const ans = arr.map(val => val * 2)

//map ke andar return krne ke wajah se hi  elements naye array mein place hote hain

//map filtermein ek hi farak hain,map saare bande lautata hain mtlb ki count kmnahi hoga,
//  filter bando ko kam kr skta hain

//jab original array ka size km naa hona ho wha map use hota hain 

//jab original array ka size km krna ho to wha filter use hota hain

//ek array mein se saare wo nums hta do jo ki 4 se chotte hain
let arrfit = [1, 2, 3, 4, 5, 6];
const ans1 = arrfit.filter(elem => elem > 4);