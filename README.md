# 🎬 Movie API Challenge

A simple Movie API implementation built with **Python**, **MongoDB**, and **Modern JavaScript (ES6)**.

This project demonstrates backend pagination logic, MongoDB CRUD operations, and ES6 features through a movie management system.

---

## 🚀 Features

### Python Backend

* Custom pagination system
* Metadata pagination response
* Page navigation (next/prev)
* Total pages calculation

### MongoDB Operations

* Insert movies
* Retrieve movies
* Filter by genre
* Filter by rating
* Update movie data
* Delete movies
* Count documents
* Sort results

### ES6 Concepts

* const & let
* Spread operator (...)
* Arrow functions
* Template literals

---

## 🛠️ Technologies

* Python 3
* MongoDB
* JavaScript ES6
* Git & GitHub

---

## 📂 Project Structure

```text
movie-api-challenge/
│
├── README.md
├── app.py
├── mongo_queries.js
└── es6_review.js
```

---

## ▶️ Running the Python Code

```bash
python3 app.py
```

Example output:

```python
{
    "page": 1,
    "page_size": 2,
    "next": 2,
    "prev": None,
    "total_pages": 3,
    "data": [...]
}
```

---

## 🗄️ MongoDB Queries

Start MongoDB shell:

```bash
mongosh
```

Execute the commands from:

```text
mongo_queries.js
```

---

## 📜 ES6 Review

Run:

```bash
node es6_review.js
```

---

## 📖 Pagination Discussion

Simple pagination may become inconsistent when records are deleted because document positions shift between requests. This can lead to duplicated or skipped results.

---

## 👨‍💻 Author

Aqil Almuradov

GitHub: https://github.com/Almuradofff
