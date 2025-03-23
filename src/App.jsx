import React, { useState, useEffect, useMemo, useCallback } from "react";
import SearchBar from "./components/SearchBar";
import UserList from "./components/UserList";
import UserCard from "./components/UserCard";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  // Naudotoju duomenu gavimas
  useEffect(() => {
    const fetchUsers = async () => {
      setIsLoading(true);
      try {
        // Bandome gauti duomenis is API
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        let fetchedUsers = await response.json();

        // Jei API grazina maziau nei 100 naudotoju, sugeneruojame papildomus
        if (fetchUsers.length < 100) {
          const additionalUsers = Array.from(
            { length: 100 - fetchUsers.length },
            (_, i) => {
              const id = fetchUsers.length + i + 1;
              return {
                id,
                name: `User ${id}`,
                email: `user${id}@example.com`,
                address: { city: `City ${Math.floor(id / 5) + 1}` },
              };
            }
          );
          fetchUsers = [...fetchUsers, ...additionalUsers];
        }
        setUsers(fetchUsers);
      } catch (error) {
        console.error("Error fetching users:", error);

        // Jei API nepasiekiamas, sugeneruojame dirbtini masyva
        const artificialUsers = Array.from({ length: 100 }, (_, i) => {
          const id = i + 1;
          return {
            id,
            name: `User ${id}`,
            email: `user${id}@example.com`,
            address: { city: `City ${Math.floor(id / 5) + 1}` },
          };
        });
        setUsers(artificialUsers);
      } finally {
        setIsLoading(false);
      }
    };

    fetchUsers();
  }, []);

  // Optimizuota paieskos funkcija su useCallback
  const handleSearch = useCallback((term) => {
    setSearchTerm(term);
  }, []);

  // Optimizuotas filtravimas su useMemo
  const filteredUsers = useMemo(() => {
    return users.filter((user) =>
      user.name.toLowerCase().includes(searchTerm.toLocaleLowerCase())
    );
  }, [users, searchTerm]);

  // Optimizuota funkcija valyti paieska
  const clearSearch = useCallback(() => {
    setSearchTerm("");
  }, []);

  return (
    <div className="app">
      <h1>Naudotoju paieska</h1>
      <SearchBar
        searchTerm={searchTerm}
        onSearch={handleSearch}
        onClear={clearSearch}
      />

      {isLoading ? (
        <div className="loading">Kraunami duomenys...</div>
      ) : (
        <UserList users={filteredUsers} />
      )}
    </div>
  );
}
export default App;
