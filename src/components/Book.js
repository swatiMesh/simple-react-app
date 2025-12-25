import React from "react";
import { books } from "../json/data";
import "../css/Book.css";
import "../css/Tour.css";

const BookList = () => {
  const getBookById = (id) => {
    return books.find((book) => book.id === id);
  };
  return (
    <>
      <div className="section-title" style={{ marginTop: "5rem", marginBottom: "4rem" }}>
        <h2>
          Book List <span>Available Books</span>
        </h2>
      </div>
      <section className="section booklist" id="books">
        {books.map((book, index) => {
          return (
            <Book
              key={book.id}
              {...book}
              getBookById={getBookById}
              number={index}
            ></Book>
          );
        })}
      </section>
    </>
  );
};

const Book = (props) => {
  const { img, title, author, getBookById, id, number } = props;
  const buyBook = () => {};

  return (
    <>
      <div className="book">
        <article>
         <div className="image-container"> <img src={img} alt="book cover" /></div>
          <div className="title">{title}</div>
          <h4>{author.toUpperCase()}</h4>
          <div className="more-info">
            <button onClick={buyBook}>Buy Now</button>
            <button
              onClick={() => {
                console.log(getBookById(id));
              }}
            >
              Get Book Info
            </button>
          </div>
          <span className="number">{`# ${number + 1}`}</span>
        </article>
      </div>
    </>
  );
};

export default BookList;
