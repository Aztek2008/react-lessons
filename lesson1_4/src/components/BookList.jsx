import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const List = styled.ul`
    padding: 0;
    margin: 0;
    `;

function BookList({books}) {
    return (
    <List>
        {books.map(book =>
            <li key={book.id}>{book.name}</li>)}
    </List>
    );
};

BookList.propTypes = {
    books: PropTypes.arrayOf(PropTypes.exact({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired
    })
    ).isRequired,

}

export default BookList;