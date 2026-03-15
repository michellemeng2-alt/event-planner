import React, { createContext, useState } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [events, setEvents] = useState([]);

  const login = (userData) => setUser(userData);
  const logout = () => setUser(null);
  const addEvent = (event) => setEvents([...events, { ...event, id: Date.now() }]);
  const deleteEvent = (id) => setEvents(events.filter(ev => ev.id !== id));
  const updateEvent = (updated) => {
    setEvents(events.map(ev => ev.id === updated.id ? updated : ev));
  };

  return (
    <AppContext.Provider 
      value={{ 
        user, 
        login, 
        logout, 
        events, 
        addEvent, 
        deleteEvent, 
        updateEvent
      }}
    >
      {children}
    </AppContext.Provider>
  );
};