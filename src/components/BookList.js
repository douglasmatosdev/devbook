import { Typography } from "@material-ui/core"

export const BookList = ({ books }) => {
    return (
        <div data-test="book-list">
            {
                books.map((book, index) => (
                    <div className="book-item" key={index}>
                        <Typography variant="h5" component="h5" data-test="heading">
                            {book.name}
                        </Typography>
                    </div>
                ))
            }
        </div>
    )
}