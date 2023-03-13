import { useState, useEffect } from 'react';

export const App = () => {
  const [books, _] = useState(fakeData);
  const [selectedBook, setSelectedBook] = useState(null);

  return (
    <div className="App">
      <ul style={{ 'display': !selectedBook ? 'block' : 'none' }}>
        { 
          books.map(b => 
            <li key={b.code}>
              {b.title} 
              &nbsp;&nbsp;
              <button onClick={() => setSelectedBook(b)}>open</button>
            </li>
          ) 
        }
      </ul>
      { !!selectedBook && <PopUp {...selectedBook} closeCallback={() => setSelectedBook(null)} /> }
    </div>
  );
}

const PopUp = ({ title, description, code, closeCallback }) => {
  return (
      <fieldset>
          <legend>{ title }</legend>
          <label>Title: </label> { title }
          <br />
          <label>Description: </label> { description }
          <br />
          <label>Code: </label> { code }
          <br />
          
          <br />
          <button onClick={() => closeCallback()}>Close</button>
      </fieldset>
  );
}

const fakeData = [
  { code: 2, title: "Clean Code", description: "A Handbook of Agile Software Craftsmanship" },
  { code: 3, title: "The Pragmatic Programmer", description: "From Journeyman to Master" },
  { code: 4, title: "Design Patterns", description: "Elements of Reusable Object-Oriented Software" },
  { code: 5, title: "Code Complete", description: "A Practical Handbook of Software Construction" },
  { code: 6, title: "The Mythical Man-Month", description: "Essays on Software Engineering" }
];