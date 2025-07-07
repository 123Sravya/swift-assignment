import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function CommentsDashboard() {
  const [comments, setComments] = useState([]);
  const [search, setSearch] = useState("");
  const [sortColumn, setSortColumn] = useState(null);
  const [sortOrder, setSortOrder] = useState(null);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/comments")
      .then((res) => res.json())
      .then(setComments);
  }, []);

  const handleSort = (col) => {
    if (sortColumn !== col) {
      setSortColumn(col);
      setSortOrder("asc");
    } else if (sortOrder === "asc") {
      setSortOrder("desc");
    } else {
      setSortColumn(null);
      setSortOrder(null);
    }
  };

  const filtered = comments.filter(
    (c) =>
      c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.email.toLowerCase().includes(search.toLowerCase()) ||
      c.body.toLowerCase().includes(search.toLowerCase())
  );

  const sorted = sortColumn
    ? [...filtered].sort((a, b) => {
        const valA = a[sortColumn];
        const valB = b[sortColumn];

        if (typeof valA === "string" && typeof valB === "string") {
          return sortOrder === "asc"
            ? valA.toLowerCase().localeCompare(valB.toLowerCase())
            : valB.toLowerCase().localeCompare(valA.toLowerCase());
        }

        if (typeof valA === "number" && typeof valB === "number") {
          return sortOrder === "asc" ? valA - valB : valB - valA;
        }

        return 0;
      })
    : filtered;

  const start = (page - 1) * pageSize;
  const paginated = sorted.slice(start, start + pageSize);

  return (
    <div>
      <header>
        <span>SWIFT</span>
        <span className="btn" onClick={() => navigate("/profile")}>Ervin Howell</span>
      </header>
      <div className="container">
        <div className="flex mb-4 justify-between items-center">
          <div>
            <button className="btn" onClick={() => handleSort("postId")}>Sort Post ID</button>
            <button className="btn" onClick={() => handleSort("name")}>Sort Name</button>
            <button className="btn" onClick={() => handleSort("email")}>Sort Email</button>
          </div>
          <input
            className="search input"
            placeholder="Search name, email, comment"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <br></br>
        <br></br>
        <table className="table">
          <thead>
            <tr>
              <th onClick={() => handleSort("postId")}>Post ID</th>
              <th onClick={() => handleSort("name")}>Name</th>
              <th onClick={() => handleSort("email")}>Email</th>
              <th>Comment</th>
            </tr>
          </thead>
          <tbody>
            {paginated.map((c) => (
              <tr key={c.id}>
                <td>{c.postId}</td>
                <td>{c.name}</td>
                <td>{c.email}</td>
                <td>{c.body}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <br></br>
    
        <div className="pagination-container">
          <span className="pagination-info">
            {start + 1}-{Math.min(start + pageSize, filtered.length)} of {filtered.length} items
          </span>
          <div className="pagination-buttons">
            {Array.from({ length: Math.ceil(filtered.length / pageSize) }, (_, i) => (
              <button
                key={i}
                className={i + 1 === page ? "btn" : ""}
                onClick={() => setPage(i + 1)}
              >
                {i + 1}
              </button>
            ))}
          </div>
          <select value={pageSize} onChange={(e) => setPageSize(Number(e.target.value))}>
            {[10, 50, 100].map((size) => (
              <option key={size} value={size}>{size}/Page</option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}

export default CommentsDashboard;
