import { useState } from "react"
import OTPBox from "../../src/components/apps/auth/OtpBox"
import { Grid, Box, Typography, Button } from "@mui/material";
import NextLink from "next/link";
import Image from "next/image";
import img1 from "../../assets/images/backgrounds/login-bg.svg";
import LogoIcon from "../../src/layouts/logo/LogoIcon";
import { verifyUserEmail } from "../../src/redux/actions/authActions";
import { withRouter } from "next/router";
import { connect } from "react-redux";



const Otp = ({ verifyUserEmail, user, router }) => {

  const [otp, setOtp] = useState('')


  const onSubmitForm = async (e) => {
    await verifyUserEmail(user._id, otp, router)
  }

  return (
    <Grid container sx={{ height: "100vh", justifyContent: "center" }}>
      <Grid
        item
        xs={12}
        sm={12}
        lg={6}
        sx={{
          background: (theme) =>
            `${theme.palette.mode === "dark" ? "#1c1f25" : "#ffffff"}`,
        }}
      >
        <Box
          sx={{
            position: "relative",
          }}
        >
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            sx={{
              position: {
                xs: "relative",
                lg: "absolute",
              },
              height: { xs: "auto", lg: "100vh" },
              right: { xs: "auto", lg: "-50px" },
              margin: "0 auto",
            }}
          >
            <Image src={img1} alt="bg" maxwidth="812" />
          </Box>

          <Box
            display="flex"
            alignItems="center"
            sx={{
              p: 4,
              position: "absolute",
              top: "0",
            }}
          >
            <LogoIcon />
          </Box>
        </Box>
      </Grid>
      <Grid item xs={12} sm={8} lg={6} display="flex" alignItems="center">
        <Grid container spacing={0} display="flex" justifyContent="center">
          <Grid item xs={12} lg={9} xl={6}>
            <Box
              sx={{
                p: 4,
              }}
            >
              <OTPBox action={setOtp} length={6} />
              <Button
                color="secondary"
                variant="contained"
                size="large"
                fullWidth
                sx={{
                  pt: "10px",
                  pb: "10px",
                  mt: "30px"
                }}
                type="submit"
                onClick={(e) => onSubmitForm(e)}
              >
                Verificar codigo
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}
Otp.layout = "Blank";
const mapStateToProps = (state) => ({
  user: state.authReducer.user,
  isAuthenticated: state.authReducer.isAuthenticated,
  loading: state.authReducer.loading
})


export default connect(mapStateToProps, {
  verifyUserEmail
})(withRouter(Otp))