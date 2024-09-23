import { useState, useRef } from 'react';
import { Button, TextField, Typography, Link } from '@mui/material';
import { styled } from '@mui/system';
import axios from '../../utils/axios';

    const Container = styled('div')`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    justify-content: center;
    background-color: #f8f9fa;
    `;

    const Card = styled('div')`
    max-width: 400px;
    margin: auto;
    padding: 2rem;
    background: white;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    text-align: center;
    `;

    const OTPInput = styled(TextField)`
    width: 60px;
    height: 60px;
    margin: 0 5px;
    text-align: center;
    font-size: 1.5rem;
    `;

    const Banner = styled('div')`
    position: fixed;
    bottom: 0;
    right: 0;
    width: 100%;
    background-color: #2d3748;
    color: #e2e8f0;
    padding: 0.75rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 1000;
    `;

const PhoneVerification = () => {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [otp, setOtp] = useState(['', '', '', '']);
    const [isOtpSent, setIsOtpSent] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const inputRefs = useRef([]);

    const handlePhoneNumberChange = (e) => {
        setPhoneNumber(e.target.value);
    };

    const handlePhoneNumberSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);
        try {
            const response = await axios.post('/api/send-otp', { phoneNumber });
            console.log('Response:', response);
            if (response.status === 200) {
                setIsOtpSent(true);
            } else {
                throw new Error('Failed to send OTP');
            }
        } catch (error) {
            console.error('Error:', error);
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    const handleChange = (e, index) => {
        const value = e.target.value;
        if (/\D/.test(value)) return;

        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);

        if (index < otp.length - 1 && value) {
            inputRefs.current[index + 1]?.focus();
        }
    };

    const handleKeyDown = (e, index) => {
        if (e.key === 'Backspace' && !otp[index] && index > 0) {
            inputRefs.current[index - 1]?.focus();
        }
    };

    const handlePaste = (e) => {
        e.preventDefault();
        const pastedData = e.clipboardData.getData('text');
        if (/^\d{4}$/.test(pastedData)) {
            setOtp(pastedData.split(''));
            inputRefs.current[3]?.focus();
        }
    };

    const handleOtpSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);
        try {
            const response = await axios.post('/api/verify-otp', {
                phoneNumber,
                otp: otp.join(''),
            });
            if (response.status === 200) {
                
                alert('OTP Verified Successfully!');
            } else {
                throw new Error('Failed to verify OTP');
            }
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <Container>
            <Card>
                {!isOtpSent ? (
                    <>
                        <Typography variant="h5" gutterBottom>
                            Enter Your Phone Number
                        </Typography>
                        <Typography variant="body2" color="textSecondary" paragraph>
                            We'll send a verification code to this number.
                        </Typography>
                        <form onSubmit={handlePhoneNumberSubmit}>
                            <TextField
                                type="tel"
                                value={phoneNumber}
                                onChange={handlePhoneNumberChange}
                                label="Phone Number"
                                fullWidth
                                required
                                margin="normal"
                            />
                            <Button
                                type="submit"
                                variant="contained"
                                color="primary"
                                fullWidth
                                style={{ marginTop: '1rem' }}
                                disabled={loading}
                            >
                                {loading ? 'Sending...' : 'Send Verification Code'}
                            </Button>
                            {error && <Typography color="error">{error}</Typography>}
                        </form>
                    </>
                ) : (
                    <>
                        <Typography variant="h5" gutterBottom>
                            Mobile Phone Verification
                        </Typography>
                        <Typography variant="body2" color="textSecondary" paragraph>
                            Enter the 4-digit verification code that was sent to your phone number.
                        </Typography>
                        <form onSubmit={handleOtpSubmit} onPaste={handlePaste}>
                            <div className="flex justify-center mb-4">
                                {otp.map((value, index) => (
                                    <OTPInput
                                        key={index}
                                        inputRef={(el) => (inputRefs.current[index] = el)}
                                        type="text"
                                        value={value}
                                        onChange={(e) => handleChange(e, index)}
                                        onKeyDown={(e) => handleKeyDown(e, index)}
                                        inputProps={{ maxLength: 1 }}
                                    />
                                ))}
                            </div>
                            <Button
                                type="submit"
                                variant="contained"
                                color="primary"
                                fullWidth
                                style={{ marginTop: '1rem' }}
                                disabled={loading}
                                >

                                {loading ? 'Verifying...' : 'Verify Account'}
                            </Button>
                            {error && <Typography color="error">{error}</Typography>}
                        </form>
                        <Typography variant="body2" color="textSecondary" style={{ marginTop: '1rem' }}>
                            Didn't receive code? <Link href="#0" color="primary">Resend</Link>
                        </Typography>
                    </>
                )}
            </Card>
            <Banner>
                <Button color="inherit" onClick={() => {/*close */ }}>
                    <svg className="w-4 h-4" viewBox="0 0 16 16">
                        <path d="M12.72 3.293a1 1 0 00-1.415 0L8.012 6.586 4.72 3.293a1 1 0 00-1.414 1.414L6.598 8l-3.293 3.293a1 1 0 101.414 1.414l3.293-3.293 3.293 3.293a1 1 0 001.414-1.414L9.426 8l3.293-3.293a1 1 0 000-1.414z" />
                    </svg>
                </Button>
            </Banner>
        </Container>
    );
};

export default PhoneVerification;


