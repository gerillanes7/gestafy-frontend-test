import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';
import NextLink from 'next/link';

const NewAccount = ({ marketPlacePlatform }) => {
    const [connectionUrl, setConnectionUrl] = useState('');

    const checkMarketPlacePlatform = () => {
        if (marketPlacePlatform === 'mercadolibre') {
            const ML_APP_ID = '2619518835358112'; // TODO: CHANGE FOR AN ENV VARIABLE
            const ML_REDIRECT_URI = 'http://localhost:3000/accounts/mercadolibre/connect'; // TODO: CHANGE FOR A ENV VARIABLE

            const ML_URL = `https://auth.mercadolibre.com.ar/authorization?response_type=code&client_id=${ML_APP_ID}&redirect_uri=${ML_REDIRECT_URI}`;

            setConnectionUrl(ML_URL);
        }
    }

    useEffect(() => {
        checkMarketPlacePlatform()
    }, [marketPlacePlatform]);



    return (
        <>
            {connectionUrl && (
                <NextLink href={connectionUrl}>
                    <Button sx={{ mb: 2 }} variant="outlined" startIcon={<LibraryAddIcon />}>
                        Vincular cuenta
                    </Button>
                </NextLink>
            )}
        </>
    );
};

export default NewAccount;