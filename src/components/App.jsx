import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Layout from './Layout/Layout';
import TaskList from './TaskList/TaskList';
import TaskEditor from './TaskEditor/TaskEditor';
import Filter from './Filter';
// import createTask from '../utils/create-task';
// import Counter from './Counter';
// import Section from './Section';
// import Product from './Product/Product';
// import BookList from './BookList';
// import favouriteBooks from '../books.json';

export default class App extends Component {
  state = {
    tasks: [],
    filter: '',
  };

  addTask = text => {
    const task = {
      id: uuidv4(),
      text,
      completed: false,
    };

    this.setState(prevState => {
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

  // updateCompleted = taskId => {
  //   this.setState(prevState => {
  //     return {
  //       tasks: prevState.tasks.map(task => {
  //         if (task.id === taskId) {
  //           return {
  //             ...task,
  //             completed: !task.completed,
  //           };
  //         }

  //         return task;
  //       }),
  //     };
  //   });
  // };

  updateCompleted = taskId => {
    this.setState(prevState => ({
      tasks: prevState.tasks.map(task =>
        task.id === taskId ? { ...task, completed: !task.completed } : task,
      ),
    }));
  };

  changeFilter = filter => {
    this.setState({ filter });
  };

  getVisibleTasks = () => {
    const { tasks, filter } = this.state;

    return tasks.filter(task =>
      task.text.toLowerCase().includes(filter.toLowerCase()),
    );
  };

  render() {
    const { filter } = this.state;

    const visibleTasks = this.getVisibleTasks();

    return (
      <Layout>
        <TaskEditor onAddTask={this.addTask} />

        <Filter value={filter} onChangeFilter={this.changeFilter} />
        {visibleTasks.length > 0 && (
          <TaskList
            tasks={visibleTasks}
            onRemoveTask={this.removeTask}
            onUpdateTask={this.updateCompleted}
          />
        )}
      </Layout>
    );
  }
}

// render() {
// const total = this.countTotalVotes()
// <h1> { total } </h1>;
// const posR = this.countPercentage(total, this.state.good)
//
//

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
