import { LoremIpsum } from 'lorem-ipsum';
import { uuid } from 'uuidv4';

const lorem = new LoremIpsum();

function createTask() {
  return {
    id: uuid(),
    text: lorem.generateSentences(5),
    completed: false,
  };
}

export default createTask;
