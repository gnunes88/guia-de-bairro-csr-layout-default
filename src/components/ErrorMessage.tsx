import React from 'react';

interface Props {
  message: string;
}

export function ErrorMessage({ message }: Props) {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-red-600 mb-4">Ops!</h2>
        <p className="text-gray-600">{message}</p>
      </div>
    </div>
  );
}