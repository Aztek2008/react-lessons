import React, { Component } from 'react';
import Layout from './Layout/Layout';
import TaskList from './TaskList/TaskList';
import TaskEditor from './TaskEditor/TaskEditor';
import createTask from '../utils/create-task';
// import Counter from './Counter';
// import Section from './Section';
// import Product from './Product/Product';
// import BookList from './BookList';
// import favouriteBooks from '../books.json';

export default class App extends Component {
  state = {
    tasks: [],
  };

  addTask = () => {
    const task = createTask();

    this.setState(prevState => {
      console.log('prevState: ', prevState);
      return {
        tasks: [...prevState.tasks, task],
      };
    });
  };

  removeTask = taskId => {
    this.setState(prevState => {
      return {
        tasks: prevState.tasks.filter(({ id }) => id !== taskId),
      };
    });
  };

  render() {
    const { tasks } = this.state;
    console.log('tasks: ', tasks);
    return (
      <Layout>
        <TaskEditor onAddTask={this.addTask} />
        {tasks.length > 0 && (
          <TaskList tasks={tasks} onRemoveTask={this.removeTask} />
        )}
      </Layout>
    );
  }
}

// <>
//     <Layout>
//       <Counter />
//     </Layout>

//     <BookList books={favouriteBooks} />

//     <h1>Wellcome!</h1>

//     <Section title="Best selling productas">
//       <Product
//         imgUrl="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640"
//         name="Tacos With Lime"
//         price={10.99}
//         quantity={30}
//       />
//       <Product
//         // imgUrl="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640"
//         name="Tacos With Lime"
//         price={10.99}
//         quantity={300}
//       />
//     </Section>

//     <Section title="Recomendados">
//       <Product
//         imgUrl="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?dpr=2&h=480&w=640"
//         name="Burger and fries"
//         price={10.99}
//         quantity={300}
//       />
//       <Product
//         imgUrl="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?dpr=2&h=480&w=640"
//         name="Burger and fries"
//         price={10.99}
//         quantity={30}
//       />
//     </Section>
//   </>
