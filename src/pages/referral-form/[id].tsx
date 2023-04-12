import React from 'react';
import { useRouter } from 'next/router';

export default function FormStep() {
  const router = useRouter();
  const { id } = router.query;
  return (
    <div>
      <h3>Form form formmmm page {id}</h3>
    </div>
  );
}
