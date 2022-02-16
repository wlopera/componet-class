import UserFinder from "./components/UserFinder";
import UserContext from "./store/users-context";

const DUMMY_USERS = [
  { id: "u1", name: "Andrés" },
  { id: "u2", name: "Carlos" },
  { id: "u3", name: "Daniel" },
  { id: "u4", name: "William" },
  { id: "u5", name: "Camila" },
  { id: "u6", name: "Tom" },
  { id: "u7", name: "Charlot" },
];

function App() {
  const userContext = {
    users: DUMMY_USERS,
  };

  return (
    <div className="app">
      <h1>Ventana de usuarios</h1>
      <hr />
      <UserContext.Provider value={userContext}>
        <UserFinder />
      </UserContext.Provider>
    </div>
  );
}

export default App;
