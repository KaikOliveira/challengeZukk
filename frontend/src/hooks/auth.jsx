import React, { createContext, useCallback, useContext, useState } from 'react';
import api from '../services/api';

const AuthContext = createContext();

function AuthProvider ({ children })  {
  const [data, setData] = useState(() => {
    const token = localStorage.getItem('@TestZukk:token');
    const user = localStorage.getItem('@TestZukk:user');

    if (token && user) {
      return { token, user: JSON.parse(user) };
    }

    return {};
  });

  const singIn = useCallback(async () => {
    const response = await api.post('/login', {
      user,
      
    });

    const { token, user } = response.data;

    localStorage.setItem('@TestZukk:token', token);
    localStorage.setItem('@TestZukk:user', JSON.stringify(user));

    setData({ token, user });
  }, []);

  return (
    <AuthContext.Provider value={{ user: data.user, singIn }}>
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(){
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}

export { AuthProvider, useAuth };