import Head from 'next/head';
import React from 'react';

export function MetaHead({
  title,
}: {
  title: string;
}): JSX.Element {
  return (
    <Head>
      <title>{title}</title>
      <meta
        name='description'
        content='An itneractive interview with Bruno Noriller'
      />
      <meta
        name='keywords'
        content='fullstack, developer, software, frontend, backend, javascript, typescript'
      />
      <meta
        name='author'
        content='Bruno Noriller'
      />
      <meta
        name='viewport'
        content='width=device-width, initial-scale=1.0'
      />
      <link rel='icon' href='/favicon.ico' />
    </Head>
  );
}
