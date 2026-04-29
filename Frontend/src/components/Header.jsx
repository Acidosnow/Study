function Header({ children, Title, ...props }) {
  return (
    <>
      <header {...props}>
        <h2>{Title}</h2>
        {children}
      </header>
    </>
  );
}

export default Header;
