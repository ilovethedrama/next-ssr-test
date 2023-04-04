import { Inter } from 'next/font/google';
import React, { useState } from 'react';

const inter = Inter({ subsets: ['latin'] });

export default function DoRaeMi() {
  const [stuff, newStuff] = useState();

  function DeerBaby(): number {
    return 3;
  }
  return <button onClick={() => DeerBaby()}>{stuff}</button>;
}
