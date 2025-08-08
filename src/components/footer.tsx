const Footer = () => {
  return (
    <footer className="mt-30 pt-8 h-full py-10 bg-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center text-white flex flex-col justify-center sm:flex-row gap-1 font-semibold">
          <p>&copy; {new Date().getFullYear()} Adrian Beria.</p>
          <p>Building the future of web applications.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
