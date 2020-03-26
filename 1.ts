function greeter(person: string) {
  return "Hello, " + person;
}

let user ='123';
let x: [string, number];
// Initialize it
x = ['hello', 10]; // OK
document.body.innerHTML = greeter(user);