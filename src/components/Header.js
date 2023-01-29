const Title = () => {
    return (
      <a href="/">
        <img
          className="logo"
          alt="logo"
          src="https://www.coffeepressthailand.com/wp-content/uploads/2020/04/customer-foodvilla.png"
        />
      </a>
    );
  };
  const Header = () => {
    return (
      <div className="header">
        <Title />
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Cart</li>
          </ul>
        </div>
      </div>
    );
  };
  
  export default Header;