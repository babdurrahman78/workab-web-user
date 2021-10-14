import React, { useState } from 'react'
import styled from 'styled-components'
import { Link, useHistory } from 'react-router-dom';
import Navbar from "../components/Navbar";
import axios from 'axios';
import swal from 'sweetalert';

const StyledScreen = styled.div`
    background-color: #5579A4;
    max-width: 1440px;
    margin: auto;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`

const StyledContainer = styled.div`
    width: 420px;
    height: 260px;
    background-color: #FFFFFF;
    border-radius: 30px;
    padding-top: 64px;
`

const StyledForm = styled.form`
    width: 414px;
    margin: auto;
    width: 275px;
`

const StyledInput = styled.input`
    display: block;
    width: 275px;
    height: 53px;
    margin: 0 auto 3px;
    text-align: center;
    border: 4px solid #5579A4;
    border-radius: 10px;
    color: #5579A480;
    font-size: 16px;
    outline: none;
    font-weight: 700;

    &::placeholder {
        color: #5579A480;
    }
`

const StyledParagraph = styled.p`
    float: right;
    font-size: 8px;
    font-weight: 700;
    color: #5579A480;
    margin: 0 0 5px 0;
    cursor: pointer;
`

const StyledButton = styled.button`
    clear: both;
    margin: auto;
    display: block;
    width: 108px;
    height: 59px;
    font-size: 16px;
    color: #FFFFFF;
    background-color: #5579A4;
    border: none;
    border-radius: 10px;
    font-weight: 700;
    cursor: pointer;
`

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #ffffff;
`;

export default function Login() {
    const history = useHistory();

    const [loginInput, setLogin] = useState({
        username: '',
        password: '',
        error_list: [],
    })

    const handleInput = (e) => {
        e.persist()
        setLogin({ ...loginInput, [ e.target.name ] : e.target.value })
    }

    const loginSubmit = (e) => {
        e.preventDefault()

        const data  = {
            username: loginInput.username,
            password: loginInput.password,
        }

        axios.get('/sanctum/csrf-cookie').then(response => {
            axios.post('/api/login', data).then(res => {
                
                // console.log(res.data.meta);
                if (res.data.meta.code === 200) {
                    localStorage.setItem('token', res.data.data.access_token);
                    localStorage.setItem('name', res.data.data.user.username);

                    swal("Berhasil", "Selamat Datang Kembali", "success");
                    history.push('/user/dashboard');
                } else if (res.data.meta.code === 401) {
                    swal("Peringatan", "Username / Kata Sandi salah", "warning");
                } else {
                    setLogin({ ...loginInput, error_list: res.data.data.validation_errors });
                }
            });
        });
    }

    return (
        <div>
            <Navbar />
            <StyledScreen>
                <StyledContainer>
                    <StyledForm onSubmit={ loginSubmit }>
                        <StyledInput
                            name="username"
                            onChange={ handleInput }
                            value={ loginInput.username }
                            placeholder="USERNAME"
                        />
                        {
                            loginInput.error_list.username ?
                                <span className="invalid-feedback">{ loginInput.error_list.username }</span>
                            :
                                ''
                        }
                        <StyledInput
                            name="password"
                            type="password"
                            onChange={ handleInput }
                            value={ loginInput.password }
                            placeholder="PASSWORD"
                        />
                        {
                            loginInput.error_list.password ?
                                <span className="invalid-feedback">{ loginInput.error_list.password }</span>
                            :
                                ''
                        }
                        <StyledParagraph>
                            Lupa Password
                        </StyledParagraph>
                        <StyledButton>
                            {/* <StyledLink> */}
                                MASUK
                            {/* </StyledLink> */}
                        </StyledButton>
                    </StyledForm>
                </StyledContainer>
            </StyledScreen>
        </div>
    )
}
