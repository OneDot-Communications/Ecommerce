import React from 'react';

const Profile: React.FC = () => {
  const user = {
    name: 'Sham',
    email: 'shamcurry3030@gmail',
    bio: 'Full Stack Developer | JavaScript Wizard | Problem Solver',
    location: 'coimbatore, India',
    avatar: 'https://i.pravatar.cc/150?img=12',
  };

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <img src={user.avatar} alt="Sham Avatar" style={styles.avatar} />
        <h2 style={styles.name}>{user.name}</h2>
        <p style={styles.location}>📍 {user.location}</p>
        <p style={styles.bio}>{user.bio}</p>
        <p style={styles.email}>📧 {user.email}</p>
        <button style={styles.button}>Follow Sham</button>
      </div>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  page: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #6e8efb, #a777e3)',
    fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
    padding: '20px',
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: '20px',
    padding: '40px 30px',
    maxWidth: '400px',
    width: '100%',
    textAlign: 'center',
    boxShadow: '0 15px 30px rgba(0,0,0,0.2)',
    transition: 'transform 0.3s ease',
  },
  avatar: {
    width: '120px',
    height: '120px',
    borderRadius: '50%',
    objectFit: 'cover',
    border: '4px solid #a777e3',
    marginBottom: '20px',
  },
  name: {
    fontSize: '2rem',
    margin: '0',
    color: '#333',
  },
  location: {
    fontSize: '1rem',
    color: '#888',
    marginTop: '8px',
    marginBottom: '10px',
  },
  bio: {
    fontSize: '1.05rem',
    color: '#555',
    marginBottom: '15px',
    fontStyle: 'italic',
  },
  email: {
    fontSize: '0.95rem',
    color: '#666',
    marginBottom: '25px',
  },
  button: {
    backgroundColor: '#6e8efb',
    color: '#fff',
    padding: '12px 25px',
    border: 'none',
    borderRadius: '8px',
    fontSize: '1rem',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
};

export default Profile;