import ReferralForm from '@/components/referral-form';
import { Inter } from 'next/font/google';
import React from 'react';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  function doRaeMi(): number {
    return 33;
  }
  return <ReferralForm />;
}
