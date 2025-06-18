import "./searchBar.css";

const SearchBar = () => {
    return (
        <>
            <form className="search-form d-flex align-items-center ms-3" method="post" action="#">
                <input type="text" name="query" placeholder="Search" />
                <button type="submit">
                    <i className="bi bi-search"></i>
                </button>
            </form>
        </>
    )
}

export default SearchBar
