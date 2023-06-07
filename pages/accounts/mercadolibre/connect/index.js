import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { connectMercadolibre } from '@/src/redux/actions/mercadoLibreActions';
import { useSelector, useDispatch } from 'react-redux';

const MercadolibreConnect = () => {

  const dispatch = useDispatch();

  const connectedAccount = useSelector(state => state?.mercadoLibre?.connectedAccount)

  const router = useRouter();
  const { code } = router.query;

  useEffect(() => {
    if (code) {
      dispatch(connectMercadolibre(code));
    }
  }, [code]);

  useEffect(() => {
    if (connectedAccount) {
      router.push('/accounts/mercadolibre');
    }
  }, [connectedAccount]);

  return <div>{code}</div>;
};

export default MercadolibreConnect;
