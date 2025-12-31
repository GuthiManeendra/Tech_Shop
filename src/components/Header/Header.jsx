import "./Header.css";

export const Header = () => {
  return (
    <div className="main">
      <h1 className="logo">Tech-shop</h1>

      <section>
        <span className="icons">
          <i className="bi bi-search"></i>
          <i className="bi bi-cart"></i>
          <i className="bi bi-person"></i>
        </span>
      </section>
    </div>
  );
};
