import { useEffect, useState } from 'react';
import {Wrapper, Background, InputContainer, ButtonContainer} from './styles';
import { useNavigate, Link } from 'react-router-dom';

import background from '../../assets/images/background-login.jpg';
import logoInter from '../../assets/images/Inter-orange.png';

import Card from '../../components/Card';
import Input from '../../components/Input';
import Button from '../../components/Button';

import useAuth from '../../hooks/useAuth';

const SignUp = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();
    const {userSignUp} = useAuth();

    const handleToSingUn = async () => {
        const data = {
            firstName,
            lastName,
            email,
            password
        };

        const response = await userSignUp(data);

        if(response.id) {
            navigate('/dashboard');
            return;
        }      
    }
    return (
        <Wrapper>
            <Background image={background}/>
            <Card width="403px" height="auto">
                <img src={logoInter} width={172} height={61} alt="logo inter" />

                <InputContainer>
                    <Input placeholder="NOME" value={firstName} onChange={e => setFirstName(e.target.value)}/>
                    <Input placeholder="SOBRENOME" value={lastName} onChange={e => setLastName(e.target.value)}/>
                    <Input placeholder="EMAIL" value={email} onChange={e => setEmail(e.target.value)}/>
                    <Input placeholder="SENHA" type="password" value={password} onChange={e => setPassword(e.target.value)}/>
                </InputContainer>

                <ButtonContainer>
                    <Button type="button" onClick={handleToSingUn}>CADASTRE-SE</Button>
                    <p>Já tem uma conta? <Link to="/signin">Entre Já</Link></p>
                </ButtonContainer>
            </Card>
        </Wrapper>
    )
}

export default SignUp;
