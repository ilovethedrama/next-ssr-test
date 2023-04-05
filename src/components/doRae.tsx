import { Inter } from 'next/font/google';
import React, { useState } from 'react';

const inter = Inter({ subsets: ['latin'] });

export default function DoRaeMi() {
  const [stuff, setNewStuff] = useState(0);

  function DeerBaby() {
    return setNewStuff(35);
  }
  return <button onClick={() => DeerBaby()}>{stuff}</button>;
}
