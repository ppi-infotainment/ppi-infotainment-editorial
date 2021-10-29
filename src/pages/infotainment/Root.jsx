import { useParams } from 'react-router-dom';
import InfotainmentQRCode from '../../components/InfotainmentQRCode/InfotainmentQRCode';

function Root() {
  const { id } = useParams();

  return (
    <div>
        Hello world! ID: {id}
        <InfotainmentQRCode id />
    </div>
  )
}

export default Root;