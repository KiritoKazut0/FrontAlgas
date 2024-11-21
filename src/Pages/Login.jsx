import './Login.css'
import Typography from '@mui/joy/Typography';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Button from '@mui/joy/Button';
import Link from '@mui/joy/Link';
import { Box, Checkbox } from '@mui/joy';
import GoogleIcon from '../Components/Ui/GoogleIcon/GoogleIcon';
import Divider from '@mui/joy/Divider';
 import FontLogin from '../assets/FontLogin.jpg'
import ControlForm from '../Components/Ui/ControlForm/ControlForm';
import useField from '../Hooks/useField';
import Authentication from '../Service/auth/Login';
import AlertError from '../Components/Ui/AlertError/AlertError';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function Login() {

    const email = useField({ type: 'email' });
    const password = useField({ type: 'password' });
    const [errorLogged, setMessageErrorLogged] = useState(false);
    const navigate = useNavigate();

    const handlerClick = async () => {
        try {
            const { token, data } = await Authentication({
                email: email.value,
                password: password.value
            });

            if (token && data) {
                localStorage.setItem('username', data.name);
                localStorage.setItem('email', data.email);
                localStorage.setItem('token', token);
                navigate('/message');
            } else {
                setMessageErrorLogged(true)
            }
        } catch (error) {
            console.log(error)
            setMessageErrorLogged(true)
        }
    }


    return (
        <div className='Container-Login-Form'>
            <form className='Form-Login' onSubmit={(event) => {
                event.preventDefault();
                handlerClick();
            }}>
                <Box >
                    <Typography level='h3' sx={{ mb: 1 }}> Sign in</Typography>
                    <Typography level='body-md'>Ready to explore ChatUp?
                        <Link level='title-sm' marginLeft={'5px'}>  Sing up!</Link> </Typography>
                </Box>

                <Button sx={{
                    gap: "10px", background: "none", ":hover": {
                        background: "#c4d2e885"
                    },
                    mt: 2,
                    mb: 1
                }}>
                    <GoogleIcon />
                    <Typography level='body-sm'> Continue with Google</Typography>
                </Button>

                <Divider sx={{ mt: 1 }}>
                    or
                </Divider>

                <FormControl
                    onBlur={email.onBlur}
                    onChange={email.onChange}
                >
                    <ControlForm
                        name={'Email'}
                        type={'email'}
                        placeholder={'johndoe@email.com'}
                    >
                    </ControlForm>

                    {email.messageError && (
                        <AlertError message= {email.messageError}/>
                    )}

                </FormControl>

                <FormControl onBlur={password.onBlur} onChange={password.onChange} >
                    <ControlForm name={'Password'} type={'password'} placeholder={'password'} />
                    {password.messageError && (
                        <AlertError message= {password.messageError}/>
                    )}
                </FormControl>

                <Button sx={{ mt: 2, mb: 1 }} type='submit'>Sign in</Button>

                <FormControl sx={{ display: 'flex', flexDirection: 'row', mt: 2, justifyContent: "space-between" }}>
                    <FormLabel sx={{ display: 'flex' }}>
                        <Checkbox size='sm' />
                        <Typography level='body-sm' marginLeft={'5px'}> Remember me </Typography>
                    </FormLabel>

                    <Typography level='body-sm' >
                        <Link> Forgot your password? </Link>
                    </Typography>
                </FormControl>

                {errorLogged && (
                        <AlertError message= {'Credenciales Incorrectas, Intentalo Nuevamente'}/>
                    )}
            </form>

            <img src={FontLogin}  className='Font-login' />
        </div>
    );
}