import React from 'react';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="bg-slate-950 h-full">
      <div className=""> {children} </div>
    </main>
  );
};

export default Layout;
