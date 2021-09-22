import "./styles.css";
import { useState } from "react";

var booksIN = {
  Philosophy: (
    <div id="centerex">
      <ul>
        <li>
          <h2>FountainHead-AYNRAND</h2>
          <p>A collective objectivism by the philosopher AYN RAND</p>
          <p>Rating: 5/5</p>
        </li>
        <hr />

        <li>
          <h2>Beyond Good and Evil</h2>
          <p>An athiestical aspect considered by Friedrich Nietzsche.</p>
          <p>Rating: 5/5</p>
        </li>
        <hr />

        <li>
          <h2>Naa Istam</h2>
          <p>The philoso[hy describing the facts of society by RGV.</p>
          <p>Rating: 5/5</p>
        </li>
      </ul>
    </div>
  ),

  Biography: (
    <div id="centerex">
      <ul>
        <li>
          <h2>Why I Am An ATHIEST</h2>
          <p>
            An autobiography of the socialist and freedom fighter Bhagat Singh
          </p>
          <p>Rating: 5/5</p>
        </li>
        <hr />
        <li>
          <h2>Martin Luther King</h2>
          <p>The biography of the America's leader.</p>
          <p>Rating: 3.5/5</p>
        </li>
        <hr />
        <li>
          <h2>Mein Kamph</h2>
          <p>The autobiography of the dictator Hitler.</p>
          <p>Rating: 5/5</p>
        </li>
      </ul>
    </div>
  ),
  Programming: (
    <div id="centerex">
      <ul>
        <li>
          <h2>An introduction to C</h2>
          <p>C programming language by Dennis Ritchie</p>
          <p>Rating: 4/5</p>
        </li>
        <hr />
        <li>
          <h2>Eloquent</h2>
          <p>An elaborated reference for Javascript</p>
          <p>Rating: 4/5</p>
        </li>
        <hr />
        <li>
          <h2>J2SE</h2>
          <p>The java programming for standard edition</p>
          <p>Rating: 3.5/5</p>
        </li>
      </ul>
    </div>
  )
};

var booksWeKnow = Object.keys(booksIN);

export default function App() {
  const [book, setBook] = useState("");
  function inputHandler() {
    var userInput = event.target.value;
    var books = booksIN[userInput];
    setBook(books);
  }
  function bookClickHandler(book) {
    var books = booksIN[book];
    setBook(books);
  }
  return (
    <div className="App">
      <h1>REadCOmeMEND</h1>

      {/* <div>suggestions we have are for Programming, Philosphy, Biography</div> */}

      <h3>Books</h3>
      {booksWeKnow.map(function (book) {
        return (
          <span
            id="books-div"
            onClick={() => bookClickHandler(book)}
            key={book}
            style={{ fontSize: "1rem", padding: "1rem", cursor: "pointer" }}
          >
            {book}
          </span>
        );
      })}
      <hr />
      <div id="display">{book}</div>
    </div>
  );
}
