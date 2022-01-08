import { Typography } from "@material-ui/core";
import { BookListContainer } from "./components/BookListContainer";

export default function App() {
  return (
    <>
      <Typography variant="h2" component="h2" data-test="heading">
        DevBook!
      </Typography>
      <BookListContainer />
    </>
  );
}
