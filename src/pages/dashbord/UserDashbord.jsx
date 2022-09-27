import { useEffect, useState } from "react";
import buku from "../../img/book.webp";

export default function UserDashboard() {
    const [books, setBooks] = useState([])

    async function getBooks() {
        const res = await fetch("https://be-library-mini-system.herokuapp.com/book/books",
            { method: "GET" })
        const data = await res.json();
        setBooks(data);
    }

    useEffect(() => {
        getBooks()
    }, [])
    return <>
        <div className="container">

            <div class="card-deck">
                {books.map(book =>
                    <div class="card">

                        <img class="card-img-top" src={buku} alt="Card image cap" />
                        <div class="card-body" key={book.bookId}>
                            <h5 class="card-title">{book.bookTitle}</h5>
                            <p class="card-text">{book.categoryName}</p>
                            <p class="card-text"><small class="text-muted">{book.bookYear}</small></p>
                        </div>
                    </div>
                )}
            </div>
            {/* <nav>
                <Link to={"/book/list"}>
                    Book List
                </Link>
                &nbsp; &nbsp;
                <Link to={"/users/" + username[username.length - 1]}>
                    Profile
                </Link>
                &nbsp; &nbsp;
                <button className={"btn btn-danger"} onClick={(event) => logout(event)}>
                    Logout
                </button>
            </nav>
            <h3>
                Welcome in your Dashboard as {roleArr[roleArr.length - 1]}, Hai {person[person.length - 1]}
            </h3>
            <br/>
            <Outlet/> */}
        </div>
    </>
}