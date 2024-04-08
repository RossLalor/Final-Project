const SigneeseLayout = ({ children }: { children: React.ReactNode }) => {
    return (
      <div className="min-h-screen flex items-center justify-center bg-cover bg-[url('../images/background.svg')]">
        {children}
      </div>
    );
  };
  
  export default SigneeseLayout;
  