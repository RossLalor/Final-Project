const SigneeseLayout = ({ children }: { children: React.ReactNode }) => {
    return (
      <div className="glass backdrop-blur-[3px] min-h-screen flex items-center justify-center bg-cover bg-[url('../images/background.svg')]">
        {children}
      </div>
    );
  };
  
  export default SigneeseLayout;
  