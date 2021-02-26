import message from "../lib/hello"
import faker from "faker"
console.log(message);

faker.locale = "fr";

const randomName = faker.lorem.paragraphs(); // Rowan Nikolaus
const randomWord = faker.random.words(); // Rowan Nikolaus

console.log(randomName)
console.log(randomWord)