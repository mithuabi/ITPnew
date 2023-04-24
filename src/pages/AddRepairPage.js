import { useState } from "react";
import { Helmet } from 'react-helmet-async';
import { styled, useTheme } from '@mui/material/styles';
import { Container, Typography, Button, TextField, Grid, Box } from '@mui/material';
import { makeStyles } from '@mui/styles';
import '../styles/add-repair.css';

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1), width: '100%',
        },
    },
}));

export default function AddRepairPage() {
    const theme = useTheme();

    const FormContainer = styled(Container)(({theme}) => ({
        padding: theme.spacing(3), backgroundColor: '#ffffff', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)', borderRadius: 4,
    }));

    const AddButton = styled(Button)(({theme}) => ({
        marginBottom: theme.spacing(3),
    }));

    const classes = useStyles();

    const [formValues, setFormValues] = useState({
        name: '',
        category: '',
        type: '',
        client: '',
        technician: '',
        serialNumber: '',
        model: '',
        problem: '',
        expectedDate: '',
        picture: '',
        sendSms: '',
        sendEmail: '',
        status: '',
    });

    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormValues((prevState) => ({...prevState, [name]: value}));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formValues);
    };

    return (
        <>
            <Helmet>
                <title> Dashboard | Happy Mobile </title>
            </Helmet>
            <Container maxWidth="xl">
                <Typography variant="h4" sx={{mb: 5}}>
                    Hi, Welcome back
                </Typography>

                <FormContainer maxWidth="sm">
                    <AddButton variant="contained" color="success">+Add button</AddButton>
                    <Box component="form" onSubmit={handleSubmit} className={classes.root}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    label="Name*"
                                    variant="outlined"
                                    placeholder="Enter Repair Name"
                                    name="name"
                                    value={formValues.name}
                                    onChange={handleChange}
                                    required
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    label="Category"
                                    variant="outlined"
                                    placeholder="Enter Category"
                                    name="category"
                                    value={formValues.category}
                                    onChange={handleChange}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    label="Type*"
                                    variant="outlined"
                                    placeholder="Enter Repair Type"
                                    name="type"
                                    value={formValues.type}
                                    onChange={handleChange}
                                    required
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    label="Client"
                                    variant="outlined"
                                    placeholder="Enter Client Name"
                                    name="client"
                                    value={formValues.client}
                                    onChange={handleChange}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    label="Technion*"
                                    variant="outlined"
                                    placeholder="Enter Technician"
                                    name="technician"
                                    value={formValues.technician}
                                    onChange={handleChange}
                                    required
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    label="Serial Number"
                                    variant="outlined"
                                    placeholder="Enter Serial Number"
                                    name="serialNumber"
                                    value={formValues.serialNumber}
                                    onChange={handleChange}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    label="Model*"
                                    variant="outlined"
                                    placeholder="Enter Repair Model"
                                    name="model"
                                    value={formValues.model}
                                    onChange={handleChange}
                                    required
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    label="Expected fixed date*"
                                    variant="outlined"
                                    placeholder="DD/MM/YYY"
                                    name="expectedDate"
                                    value={formValues.expectedDate}
                                    onChange={handleChange}
                                    required
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    label="Picture*"
                                    variant="outlined"
                                    placeholder="upload picture"
                                    name="picture"
                                    value={formValues.picture}
                                    onChange={handleChange}
                                    required
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    label="Send SMS Automatically On status change*"
                                    variant="outlined"
                                    placeholder="--Choose option--"
                                    name="sendSms"
                                    value={formValues.sendSms}
                                    onChange={handleChange}
                                    required
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    label="Send email Automatically On status change*"
                                    variant="outlined"
                                    placeholder="--Choose option--"
                                    name="sendEmail"
                                    value={formValues.sendEmail}
                                    onChange={handleChange}
                                    required
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    label="status*"
                                    variant="outlined"
                                    placeholder="--Select Status--"
                                    name="status"
                                    value={formValues.status}
                                    onChange={handleChange}
                                    required
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    label="Problem*"
                                    variant="outlined"
                                    placeholder="Type here Problem"
                                    name="problem"
                                    value={formValues.problem}
                                    onChange={handleChange}
                                    required
                                    multiline
                                    rows={(formValues.problem.length) > 75 ? 3 : 2}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6} className="submit-btn-container">
                                <Button type="submit" variant="contained" color="primary">Submit</Button>
                            </Grid>
                        </Grid>
                    </Box>
                </FormContainer>
                {/* <Container maxWidth={false} className="form-container"></Container> */}
            </Container>
        </>
    );
}
