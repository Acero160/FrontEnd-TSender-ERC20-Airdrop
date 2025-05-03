"use client";

import HomeContent from '@/components/HomeContent';
import { useAccount } from 'wagmi';

export default function Home() {
  const { isConnected } = useAccount();
  return (
    <div>
      {isConnected ? (
        <div>
          <HomeContent />
        </div>
      ) : (
        <div className="flex items-center justify-center h-screen">
          <p className="text-4xl font-semibold text-gray-600 animate-pulse">
            Please connect a wallet...
          </p>
        </div>
      )}
    </div>
  );
}