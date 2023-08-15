/* eslint-disable @next/next/no-img-element */
'use client';

import { Heading } from '@/components/core/heading';
import { Section } from '@/components/core/section';

const ErrorComponent = (props: { error: Error }) => {
  const { error } = props;
  return (
    <Section id={'error'} className={'w-full h-full'}>
      <Heading shadow={'red'} from={'orange'} to={'red'} className={'mb-16'}>
        Something went wrong
      </Heading>
      <p>Unfortunately an unexpected error occurred.</p>
    </Section>
  );
};

export default ErrorComponent;

