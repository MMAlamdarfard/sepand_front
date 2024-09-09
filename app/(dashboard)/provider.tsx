'use client';

import { NextUIProvider } from '@nextui-org/react';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const Providers = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const path = usePathname();
  const [isChecked, setIsChecked] = useState(false); // State to check if the token has been validated

  useEffect(() => {
    const accessToken = sessionStorage.getItem('access');
    
    if ((!accessToken || accessToken === "") && !path.includes("/login")) {
      router.replace("/login");
    } else if (path.includes("/login") && accessToken) {
      router.replace("/");
    } else {
      setIsChecked(true); // Set this to true when the check is done
    }
  }, [path]);

  if (!isChecked) {
    return null; // Return null until the token check is complete
  }

  return (
    <NextUIProvider>
      {children}
    </NextUIProvider>
  );
};

export default Providers;
