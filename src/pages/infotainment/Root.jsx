import { useParams } from 'react-router-dom';
import InfotainmentQRCode from '../../components/InfotainmentQRCode/InfotainmentQRCode';

export default function Root() {
  const { id } = useParams();

//   React.useEffect(() => {
//     getProfile(handle)
//       .then(setUser);
//   }, [handle])

  return (
    <div>
        Hello world! ID: {id}
        <InfotainmentQRCode />
    </div>
  )
}