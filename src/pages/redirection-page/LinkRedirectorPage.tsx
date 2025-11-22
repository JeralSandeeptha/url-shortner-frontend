import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { redirect } from '../../api/redirect-services/redirect/redirect';

const LinkRedirectorPage = () => {
  const { shortId } = useParams<{ shortId: string }>();
  const navigate = useNavigate();

  useEffect(() => {
    if (shortId) {
      redirect({
        shortId: shortId,
        navigate: navigate,
      });
    }
  }, [shortId]);

  return (
    <div style={{ padding: '50px', textAlign: 'center' }}>
      Redirecting... If nothing happens, please check the link.
    </div>
  );
};

export default LinkRedirectorPage;
