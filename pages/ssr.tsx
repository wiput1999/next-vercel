import React from 'react'
import { GetServerSideProps } from 'next'

type Data = {
  name: string
}

export const getServerSideProps: GetServerSideProps<Data> = async () => {
  return {
    props: {
      name: 'Bill Gates',
    },
  }
}

export default function SSR({ name }: Data): JSX.Element {
  return <div>SSR Page {name}</div>
}
