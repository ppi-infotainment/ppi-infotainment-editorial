import { useParams } from 'react-router-dom';
import InfotainmentQRCode from '../../components/InfotainmentQRCode/InfotainmentQRCode';
import RemoteInfotainment from '../../components/RemoteInfotainment/RemoteInfotainment';

function Root() {
  const { id } = useParams();

  return (
    <>
        <RemoteInfotainment systemId={id} duration={5000} />
        <InfotainmentQRCode id={id} />
    </>
  )
}

export default Root;
