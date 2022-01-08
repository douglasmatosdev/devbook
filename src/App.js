import { Typography } from "@material-ui/core";
import { useEffect, useState } from "react";
import { BookList } from "./components/BookList";
import { api } from "./services/api";

function App() {
  const [books, setBooks] = useState([])

  useEffect(() => {
    const fetchBooks = async () => {
      const response = await api.get('books')
      setBooks(response.data)
    }

    fetchBooks()
  }, [])

  return (
    <>
      <Typography variant="h2" component="h2" data-test="heading">
        DevBook!
      </Typography>
      <BookList books={books} />
    </>
  );
}

export default App;
