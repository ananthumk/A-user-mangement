import React, { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export const url = 'https://a-user-mangement.onrender.com/';

export const AppProvider = ({ children }) => {
  const [showAddUser, setShowAddUser] = useState(false);
  const [showEditUser, setShowEditUser] = useState(false);
  const [showDeleteUser, setDeleteUser] = useState(false);
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [filterType, setFilterType] = useState('')
  const [searchQuery, setSearchQuery] = useState('')
  const [usersPerPage, setUsersPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

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
      setSelectedUserId,
      usersPerPage,
      setUsersPerPage,
      currentPage,
      setCurrentPage,
      filterType,
      setFilterType,
      searchQuery,
      setSearchQuery
    }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
