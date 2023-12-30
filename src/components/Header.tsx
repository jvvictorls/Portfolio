function Header() {
  return (
    <header className="min-w-full shadow-lg bg-blue-800 text-white p-6 ">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">João Victor Leal Silva</h1>
        <div className="flex space-x-4">
          <a
            href="https://github.com/jvvictorls"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/joão-victor-silva-022a481b1"
            target="_blank"
            rel="noopener noreferrer"
          >
            Linkedin
          </a>
          <p>Contato</p>
        </div>
      </div>
    </header>
  );
}
export default Header;
