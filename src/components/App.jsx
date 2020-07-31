import React from 'react';
import Section from './Section';
import Product from './Product/Product';
import BookList from './BookList';
import favouriteBooks from '../books.json';
import transactions from '../transactions.json';
import Layout from './Layout/Layout';
import Counter from './Counter';

export default function App() {
  return (
    <>
      <Layout>
        <Counter />
      </Layout>

      <BookList books={favouriteBooks} />

      <h1>Wellcome!</h1>

      <Section title="Best selling productas">
        <Product
          imgUrl="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640"
          name="Tacos With Lime"
          price={10.99}
          quantity={30}
        />
        <Product
          // imgUrl="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640"
          name="Tacos With Lime"
          price={10.99}
          quantity={300}
        />
      </Section>

      <Section title="Recomendados">
        <Product
          imgUrl="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?dpr=2&h=480&w=640"
          name="Burger and fries"
          price={10.99}
          quantity={300}
        />
        <Product
          imgUrl="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?dpr=2&h=480&w=640"
          name="Burger and fries"
          price={10.99}
          quantity={30}
        />
      </Section>
    </>
  );
}
