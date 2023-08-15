import Seo from '@/components/Seo';
import Container from '@/components/Container';
import { AiFillAlert } from 'react-icons/ai';
import { NextPage, NextPageContext } from 'next';
import ErrorActions from '@/components/ErrorActions';

type Props = {
  statusCode?: number;
};

const Error: NextPage<Props> = ({ statusCode }) => {
  return (
    <>
      <Seo
        title={`Error ${statusCode}`}
        description="Looks like something went wrong on the server side, that rarely happens!"
      />
      <Container>
        <h1 className="text-5xl font-bold font-venice">
          <AiFillAlert />
          An error{' '}
          <span className="bg-gradient-to-r from-pink-500 to-golden-500 bg-clip-text text-transparent">
            {statusCode}
          </span>{' '}
          occurred
        </h1>
        <p className="py-6">
          Looks like something went wrong on the server side, that rarely
          happens!
        </p>
        <ErrorActions />
      </Container>
    </>
  );
};

Error.getInitialProps = ({ res, err }: NextPageContext) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;
