import React, { useEffect } from 'react';
import Image from "next/image";
import {
    Typography,
    Box,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
} from '@mui/material';

import DashboardCard from '../Cards/DashboardCard';
import FeatherIcon from "feather-icons-react";
import NextLink from "next/link";

// import img1 from '../../../assets/images/users/1.jpg';
// import img2 from '../../../assets/images/users/2.jpg';
// import img3 from '../../../assets/images/users/3.jpg';
// import img4 from '../../../assets/images/users/4.jpg';
// import img5 from '../../../assets/images/users/5.jpg';
import NewAccount from './NewAccount';

import { useDispatch, useSelector } from 'react-redux';
import ReputationTermostat from './ReputationThermostat';
import { getMarketplaceAccounts } from '@/src/redux/actions/marketAppsActions';

const products = [
    {
        imgsrc: '',
        name: 'Sunil Joshi',
        post: 'Web Designer',
        pname: 'Elite Admin',
        priority: 'Low',
        budget: '3.9',
    },
    {
        imgsrc: '',
        name: 'Andrew McDownland',
        post: 'Project Manager',
        pname: 'Real Homes WP Theme',
        priority: 'Medium',
        budget: '24.5',
    },
    {
        imgsrc: '',
        name: 'Christopher Jamil',
        post: 'Project Manager',
        pname: 'MedicalPro WP Theme',
        priority: 'High',
        budget: '12.8',
    },
    {
        imgsrc: '',
        name: 'Nirav Joshi',
        post: 'Frontend Engineer',
        pname: 'Hosting Press HTML',
        priority: 'Critical',
        budget: '2.4',
    },
    {
        imgsrc: '',
        name: 'Micheal Doe',
        post: 'Content Writer',
        pname: 'Helping Hands Theme',
        priority: 'Moderate',
        budget: '9.3',
    },
];


const ConnectedAccounts = ({ market }) => {

    const dispatch = useDispatch();

    const accounts = useSelector(state => state.marketApps.accounts)

    useEffect(() => {
        dispatch(getMarketplaceAccounts(market))
    }, [])

    return (
        <DashboardCard
            title={`Administra tus cuentas de ${market}`}
            subtitle={`Administra tus cuentas de ${market}`}
            customdisplay="block"
            custommargin="10px"
        >
            <Box
                sx={{
                    overflow: 'auto',
                    mt: -3,
                }}
            >

                <Box display="flex" flexDirection="column" alignItems="center" textAlign="center">
                    <NewAccount marketPlacePlatform={'mercadolibre'} />
                    <Typography
                        variant="body1"
                        sx={{
                            mb: {
                                xs: '10px',
                            },
                        }}
                    >
                        {!accounts?.length && `Aún no tienes cuentas de ${market} vinculadas. Vinculá tu cuenta y comenzá a disfrutar de Flexy, la plataforma que usan los mejores vendedores`}
                    </Typography>

                </Box>

                <Table
                    aria-label="simple table"
                    sx={{
                        whiteSpace: 'nowrap',
                    }}
                >
                    <TableHead>
                        <TableRow>
                            <TableCell>
                                <Typography variant="h5">Cuenta</Typography>
                            </TableCell>
                            <TableCell>
                                <Typography variant="h5">Reputación</Typography>
                            </TableCell>
                            <TableCell align="right">
                                <Typography variant="h5">Ventas</Typography>
                            </TableCell>
                            <TableCell align="right">
                                <Typography variant="h5">Desvincular</Typography>
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {accounts?.map((account) => (
                            <TableRow key={account.id}>
                                <TableCell>
                                    <Box display="flex" alignItems="center">
                                        <Image
                                            src={products[0].imgsrc}
                                            alt={products[0].imgsrc}
                                            width="40"
                                            height="40"
                                            className='roundedCircle'
                                        />
                                        <Box
                                            sx={{
                                                ml: 2,
                                            }}
                                        >
                                            <Typography variant="h6" fontWeight="600">
                                                {account.nickname}
                                            </Typography>
                                            <Typography color="textSecondary" variant="h6" fontWeight="400">
                                                #{account.id}
                                            </Typography>
                                        </Box>
                                    </Box>
                                </TableCell>
                               
                                <TableCell>
                                    <ReputationTermostat reputationLevel={account.seller_reputation.level_id}/>
                                </TableCell>
                                <TableCell align="right">
                                    <Typography variant="h6">{account.seller_reputation.transactions.total}</Typography>
                                </TableCell>
                                <TableCell align="right">
                                    {/* <NextLink href='https://appstore.mercadolibre.com.ar/apps/permissions' passHref>
                                        <a target="_blank" rel="noopener noreferrer">
                                            <FeatherIcon icon="trash" width="20" height="20" />
                                        </a>
                                    </NextLink> */}

                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Box>
        </DashboardCard>
    )
};


export default ConnectedAccounts
