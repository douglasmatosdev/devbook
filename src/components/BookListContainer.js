import { BookList } from "./BookList";
import { useBookList } from "../hooks/useBookList";

export const BookListContainer = () => {
    const { books, loading, error } = useBookList([])
    return (
        <>
            <BookList books={books} loading={loading} error={error} />
        </>
    );
}
