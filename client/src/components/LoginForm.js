import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';

import { loginUser } from '../utils/nbaAPI';
import Auth from '../utils/auth';

const LoginForm = () => {
    const [userFormData, setUserFormData] =
    useState({ email: '', password: '' });
    const [validated] = useState(false);
    const [showAlert, setShowAlert] =
    useState(false);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUserFormData({ ...userFormData,
        [name]: value });
    };

    const handleFormSubmit = async (event)
    => {
        event.preventDefault();
    }
}