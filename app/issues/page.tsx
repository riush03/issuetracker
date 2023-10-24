import React from 'react'
import { Flex, Text, Button } from '@radix-ui/themes';
import Link from 'next/link';

const page = () => {
  return (
    <div><Button><Link href='issues/new'>New Issue</Link></Button></div>
  )
}

export default page