import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import FormContainer from "../components/FormContainer";
import Loader from "../components/Loader";
import { useLoginMutation } from "../slices/usersApiSlice";
import { setCredentials } from '../slices/authSlice';
import {toast} from 'react-toastify';

const LoginScreen = () => {
<<<<<<< Updated upstream
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [login, { isLoading }] = useLoginMutation();

  const { userInfo } = useSelector((state) => state.auth);

  const { search } = useLocation();
  const sp = new URLSearchParams(search);
  const redirect = sp.get("redirect") || '/';

  useEffect(() => {
    if (userInfo) {
      navigate(redirect);
    }
  }, [userInfo, redirect, navigate]); 

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await login({email, password}).unwrap();
      dispatch(setCredentials({ ...res, }));
      navigate(redirect);
    } catch (err) {
      toast.error(err?.data?.message || err.error);
    }
  };
=======
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [login, { isLoading }] = useLoginMutation();
    const { userInfo } = useSelector((state) => state.auth);
    const { search } = useLocation();
    const sp = new URLSearchParams(search);
    const redirect = sp.get("redirect") || '/';

    useEffect(() => {
        if (userInfo) {
            navigate(redirect);
        }
    }, [userInfo, redirect, navigate]);

    useEffect(() => {
        // Load Facebook SDK
        const loadFacebookSDK = () => {
            if (window.FB) {
                return;
            }
            window.fbAsyncInit = function() {
                window.FB.init({
                    appId      : '1463147267922919',
                    cookie     : true,
                    xfbml      : true,
                    version    : 'v19.0'
                });
                window.FB.AppEvents.logPageView();
                // Check login status
                window.FB.getLoginStatus(function(response) {
                    statusChangeCallback(response);
                });
            };
            (function(d, s, id){
                var js, fjs = d.getElementsByTagName(s)[0];
                if (d.getElementById(id)) { return; }
                js = d.createElement(s); js.id = id;
                js.src = "https://connect.facebook.net/en_US/sdk.js";
                fjs.parentNode.insertBefore(js, fjs);
            }(document, 'script', 'facebook-jssdk'));
        };
        loadFacebookSDK();
    }, []);

    const submitHandler = async (e) => {
        e.preventDefault();
        try {
            const res = await login({ email, password }).unwrap();
            dispatch(setCredentials({ ...res }));
            navigate(redirect);
        } catch (err) {
            toast.error(err?.data?.message || err.error);
        }
    };

    const handleGoogleSuccess = (credentialResponse) => {
        console.log("Google Credential:", credentialResponse);
        const token = credentialResponse.credential;
        dispatch(setCredentials({ token }));
        toast.success("Logged in with Google!");
        navigate(redirect);
    };

    const handleGoogleFailure = (error) => {
        console.error("Google Login Failed:", error);
        toast.error("Google login failed. Please try again.");
    };

    const statusChangeCallback = (response) => {
        console.log('FB login status:', response);
        if (response.status === 'connected') {
            // Handle successful login
            toast.success("Logged in with Facebook!");
            dispatch(setCredentials({
                token: response.authResponse.accessToken,
                user: response.authResponse.userID
            }));
            navigate(redirect);
        } else {
            toast.error("Facebook login failed. Please try again.");
        }
    };

    const handleFacebookLogin = () => {
        window.FB.login(statusChangeCallback, {scope: 'public_profile,email'});
    };

    return (
        <GoogleOAuthProvider clientId="847391184628-4dibegrof0mvc9athot7mulh744hro9l.apps.googleusercontent.com">
            <FormContainer>
                <h1>Sign In</h1>
                <Form onSubmit={submitHandler}>
                    <Form.Group controlId="email" className="my-3">
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="Enter email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            autoComplete="email"
                        />
                    </Form.Group>
>>>>>>> Stashed changes

  return (
    <FormContainer>
      <h1>Sign In</h1>

      <Form onSubmit={submitHandler}>
        <Form.Group controlId="email" className="my-3">
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId="password" className="my-3">
          <Form.Label>password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>

<<<<<<< Updated upstream
        <Button type="submit" variant="primary" className="mt-2" disabled={ isLoading }>
          Sign In
        </Button>

        { isLoading && <Loader /> }
      </Form>

      <Row className="py-3">
        <Col>
          New Customer? <Link to={ redirect ? `/register?redirect=${redirect}` : '/register'}>Register</Link>
        </Col>
      </Row>
    </FormContainer>
  );
=======
                <Button onClick={handleFacebookLogin} className="mt-3" variant="primary">
                    Sign in with Facebook
                </Button>

                <GoogleLogin
                    key="google-login"
                    clientId="847391184628-4dibegrof0mvc9athot7mulh744hro9l.apps.googleusercontent.com"
                    onSuccess={handleGoogleSuccess}
                    onError={handleGoogleFailure}
                    scope="https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile"
                    buttonText="Sign in with Google"
                />

                <Row key="register-link" className="py-3">
                    <Col>
                        New Customer? <Link to={redirect ? `/register?redirect=${redirect}` : '/register'}>Register</Link>
                    </Col>
                </Row>
            </FormContainer>
        </GoogleOAuthProvider>
    );
>>>>>>> Stashed changes
};

export default LoginScreen;
