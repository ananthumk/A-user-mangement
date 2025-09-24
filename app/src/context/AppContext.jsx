import React, { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export const url = 'http://localhost:5000/';

export const AppProvider = ({ children }) => {
  const [showAddUser, setShowAddUser] = useState(false);
  const [showEditUser, setShowEditUser] = useState(false);
  const [showDeleteUser, setDeleteUser] = useState(false);
  const [selectedUserId, setSelectedUserId] = useState(null);

  return (
    <AppContext.Provider value={{
      url,
      showAddUser,
      setShowAddUser,
      showEditUser,
      setShowEditUser,
      showDeleteUser,
      setDeleteUser,
      selectedUserId,
      setSelectedUserId
    }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
