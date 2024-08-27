import React, { useState } from 'react';
import './style.css';

const Profile = () => {
  const [editMode, setEditMode] = useState(false);
  const [user, setUser] = useState({
    avatar: 'https://via.placeholder.com/150',
    name: 'João Silva',
    email: 'joaomksilva@gmail.com',
    address: 'Rua dos Bobos, 0, Nada, Brasil',
    phone: '(11) 1234-5678',
  });

  const [editUser, setEditUser] = useState({ ...user });

  const handleEditToggle = () => {
    setEditMode(!editMode);
  };

  const handleSave = () => {
    setUser(editUser);
    setEditMode(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditUser({
      ...editUser,
      [name]: value,
    });
  };

  return (
    <div className="profile-container">
      <div className="profile-card">
        <div className="profile-avatar">
          <img src="https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg" alt="Avatar" />
        </div>
        <div className="profile-details">
          <h2>
            {editMode ? (
              <input 
                type="text" 
                name="name" 
                value={editUser.name} 
                onChange={handleChange} 
              />
            ) : (
              user.name
            )}
          </h2>
          <p>
            Email: {editMode ? (
              <input 
                type="email" 
                name="email" 
                value={editUser.email} 
                onChange={handleChange} 
              />
            ) : (
              user.email
            )}
          </p>
          <p>
            Endereço: {editMode ? (
              <input 
                type="text" 
                name="address" 
                value={editUser.address} 
                onChange={handleChange} 
              />
            ) : (
              user.address
            )}
          </p>
          <p>
            Telefone: {editMode ? (
              <input 
                type="text" 
                name="phone" 
                value={editUser.phone} 
                onChange={handleChange} 
              />
            ) : (
              user.phone
            )}
          </p>
          <div className="profile-buttons">
            {editMode ? (
              <button onClick={handleSave}>Salvar</button>
            ) : (
              <button onClick={handleEditToggle}>Editar</button>
            )}
          </div>
        </div>
      </div>
      <div className="order-history">
        <h3>Histórico de Pedidos</h3>
        <ul>
          <li><u> <b>Pulverizador Costal Balance 20L</b> 20/07/2024 </u></li>
        </ul>
      </div>
    </div>
  );
};

export default Profile;