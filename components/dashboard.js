import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../components/sidebar'; // Import the Sidebar component

function Dashboard() {
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            navigate('/login'); // Redirect if there is no token
        }
    }, [navigate]);

    return (
        <div className="flex">
            <Sidebar /> {/* Render the Sidebar component */}
            <div className="flex-1 min-h-screen p-5 bg-gray-100">
                <h2 className="text-3xl font-bold mb-5">Dashboard</h2>
                {/* Your dashboard content goes here */}
                <p>Welcome to your dashboard!</p>
            </div>
        </div>
    );
}

const apiUrl = process.env.REACT_APP_API_URL + "/api/endpoint";

// Agora, quando você for fazer uma requisição para esse endpoint:
fetch(apiUrl)
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));


export default Dashboard;