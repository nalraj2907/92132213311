import React, { useState } from 'react';

export default function App() {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [tokenData, setTokenData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  function handleLogin(e) {
    e.preventDefault();
    setLoading(true);
    setError(null);
 
    setTimeout(() => {
      if (formData.username === 'nalraj' && formData.password === 'password') {
        const fakeResponse = {
          token_type: "Bearer",
          access_token:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJuYWxyYWpuMjAwNEBnbWFpbC5jb20iLCJleHAiOjE3NTQxMTM2ODAsImlhdCI6MTc1NDExMjc4MCwiaXNzIjoiQWZmb3JkIE1lZGljYWwgVGVjaG5vbG9naWVzIFByaXZhdGUgTGltaXRlZCIsImp0aSI6ImZiZjljZDAzLWQyOWUtNDUxMS1iMzFkLTk4NDk0YmNiOWJmNyIsImxvY2FsZSI6ImVuLUlOIiwibmFtZSI6Im5hbHJhaiIsInN1YiI6ImJlMjQ5MjE3LTMxMDUtNDA0ZS05NGFiLTQ2MGI4OGEzYWQyMyJ9LCJlbWFpbCI6Im5hbHJham4yMDA0QGdtYWlsLmNvbSIsIm5hbWUiOiJuYWxyYWoiLCJyb2xsTm8iOiI5MjEzMjIxMzMxMSIsImFjY2Vzc0NvZGUiOiJyQlBmU1MiLCJjbGllbnRJRCI6ImJlMjQ5MjE3LTMxMDUtNDA0ZS05NGFiLTQ2MGI4OGEzYWQyMyIsImNsaWVudFNlY3JldCI6InN0dGFjc0hlQXhHRFZxV04ifQ._X8RpYQKIq0ePonfZNRVEol1XIJ97u-rM0Gzq9DJh84",
          expires_in: 1754113680,
        };
        setTokenData(fakeResponse);
      } else {
        setError('Invalid username or password');
      }
      setLoading(false);
    }, 1000);
  }

  if (tokenData) {
    return (
      <div style={{ padding: '2rem', fontFamily: 'Arial, sans-serif', height: '100vh', background: '#f0f2f5' }}>
        <h2>Logged In Successfully!</h2>
        <p><strong>Token Type:</strong> {tokenData.token_type}</p>
        <p><strong>Access Token (start):</strong> {tokenData.access_token.slice(0, 40)}...</p>
        <p><strong>Expires In:</strong> {tokenData.expires_in}</p>
        <button onClick={() => setTokenData(null)}>Logout</button>
      </div>
    );
  }

  return (
    <div
      style={{
        height: '100vh',
        width: '100vw',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: 'Arial, sans-serif',
        background: '#f0f2f5',
        margin: 0, // Just in case
        padding: 0,
      }}
    >
      <div
        style={{
          maxWidth: 400,
          width: '90%',
          padding: 24,
          background: 'white',
          borderRadius: 8,
          boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
        }}
      >
        <h2 style={{ textAlign: 'center', marginBottom: 24 }}>Login</h2>
        <form onSubmit={handleLogin}>
          <div style={{ marginBottom: 12 }}>
            <label>
              Username:
              <input
                type="text"
                value={formData.username}
                onChange={(e) =>
                  setFormData({ ...formData, username: e.target.value })
                }
                required
                style={{ width: '100%', padding: 8, marginTop: 4, boxSizing: 'border-box' }}
              />
            </label>
          </div>
          <div style={{ marginBottom: 12 }}>
            <label>
              Password:
              <input
                type="password"
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
                required
                style={{ width: '100%', padding: 8, marginTop: 4, boxSizing: 'border-box' }}
              />
            </label>
          </div>
          <button
            type="submit"
            disabled={loading}
            style={{
              width: '100%',
              padding: '10px 0',
              fontWeight: 'bold',
              cursor: loading ? 'not-allowed' : 'pointer',
            }}
          >
            {loading ? 'Logging in...' : 'Login'}
          </button>
          {error && (
            <p style={{ color: 'red', marginTop: 12 }}>{error}</p>
          )}
        </form>
      </div>
    </div>
  );
}
