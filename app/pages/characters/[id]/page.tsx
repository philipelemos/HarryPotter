
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

interface PageDatailProps {
  params: {
    id: string;
  }
}

function CharacterDetailPage({ params }: PageDatailProps) {
  return (
    <div>
      <h1>{params.id}</h1>
    </div>
  );
};

export default CharacterDetailPage;