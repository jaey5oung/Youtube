import React, { useRef } from "react";
import styles from "./search_header.module.css";

function SearchHeader({ onSearch }) {
    const inputRef = useRef();
    const handleSearch = () => {
        const value = inputRef.current.value;
        onSearch(value);
        // console.log(value);
    };
    const onClick = () => {
        handleSearch();
    };
    const onKeyPress = (event) => {
        if (event === "Enter") {
            handleSearch();
        }
    };

    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <img
                    className={styles.img}
                    src="./images/logo.png"
                    alt="logo"
                />
                <h1 className={styles.title}>Youtube</h1>
            </div>
            <input
                className={styles.input}
                type="search"
                placeholder="검색"
                onKeyPress={onKeyPress}
                ref={inputRef}
            />
            <button className={styles.button} type="submit">
                <img
                    className={styles.buttonImg}
                    src="./images/search.png"
                    alt="search"
                    onClick={onClick}
                />
            </button>
        </header>
    );
}

export default SearchHeader;
