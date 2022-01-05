import { useEffect } from 'react';
import { useRouter } from 'next/dist/client/router';

export default function Custom404() {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push('/');
    }, 2000);
  }, []);
  return (
    <div className="bg-primary flex justify-center items-center h-screen text-fourth font-Monument flex-wrap flex-col  ">
      <div className=" mx-6 text-center">
        <p>Ooops...</p>
        <p>Halaman yang anda cari tidak ditemukan </p>
      </div>
    </div>
  );
}
