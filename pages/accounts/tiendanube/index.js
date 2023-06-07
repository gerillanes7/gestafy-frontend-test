import useSnackbar from "@/src/hooks/useSnackbar"
import { Button } from "@mui/material"

const TiendaNube = () => {
    const { showMessage } = useSnackbar();

    
    return (
        <Button onClick={() => showMessage('holis', 'success')}>
            click
        </Button>
    )
}

export default TiendaNube