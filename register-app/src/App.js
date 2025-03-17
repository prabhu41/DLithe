import React, { useState, useEffect, createContext, useContext } from "react";
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from "react-router-dom";
import "./App.css";

// Context API for global user state
const UserContext = createContext();

const Main = () => {
  const navigate = useNavigate();
  return (
    <div className="container">
      <h2>Welcome to Bank App</h2>
      <button onClick={() => navigate("/register")}>Register</button>
    </div>
  );
};

const Register = () => {
  const { setUser } = useContext(UserContext);
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleRegister = () => {
    if (name.trim()) {
      setUser({ name, balance: 5000, transactions: [] });
      navigate("/services");
    }
  };

  return (
    <div className="container">
      <h2>Register</h2>
      <input
        type="text"
        placeholder="Enter Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={handleRegister}>Proceed</button>
    </div>
  );
};

const Services = () => {
  const navigate = useNavigate();
  return (
    <div className="container">
      <h2>Our Services</h2>
      <button onClick={() => navigate("/transaction")}>View Transactions</button>
    </div>
  );
};

const Transaction = () => {
  const { user, setUser } = useContext(UserContext);
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("deposit");

  if (!user) return <div className="container"><h2>Please Register First</h2></div>;

  const handleTransaction = () => {
    const value = parseFloat(amount);
    if (isNaN(value) || value <= 0) return alert("Enter a valid amount!");

    let newBalance = user.balance;
    let newTransactions = [...user.transactions];

    if (type === "deposit") {
      newBalance += value;
      newTransactions.push({ type: "Deposit", amount: value });
    } else {
      if (value > user.balance) return alert("Insufficient funds!");
      newBalance -= value;
      newTransactions.push({ type: "Withdraw", amount: value });
    }

    setUser({ ...user, balance: newBalance, transactions: newTransactions });
    setAmount("");
  };

  return (
    <div className="container">
      <h2>Transactions</h2>
      <p><strong>User:</strong> {user.name}</p>
      <p><strong>Balance:</strong> ${user.balance}</p>
      
      <div className="transaction-form">
        <input
          type="number"
          placeholder="Enter Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <select value={type} onChange={(e) => setType(e.target.value)}>
          <option value="deposit">Deposit</option>
          <option value="withdraw">Withdraw</option>
        </select>
        <button onClick={handleTransaction}>Submit</button>
      </div>

      <h3>Transaction History</h3>
      <ul>
        {user.transactions.length === 0 ? (
          <p>No transactions yet.</p>
        ) : (
          user.transactions.map((txn, index) => (
            <li key={index} className={txn.type.toLowerCase()}>
              {txn.type}: ${txn.amount}
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

const Profile = () => {
  const { user } = useContext(UserContext);
  return (
    <div className="container">
      <h2>Profile</h2>
      {user ? (
        <>
          <p>Name: {user.name}</p>
          <p>Balance: ${user.balance}</p>
        </>
      ) : (
        <p>No User Found</p>
      )}
    </div>
  );
};

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    console.log("User Updated:", user);
  }, [user]);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <Router>
        <div className="app">
          <h1>Bank App</h1>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/profile">Profile</Link>
            <Link to="/transaction">Transactions</Link>
          </nav>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/register" element={<Register />} />
            <Route path="/services" element={<Services />} />
            <Route path="/transaction" element={<Transaction />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </div>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
