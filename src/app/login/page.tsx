import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import Image from 'next/image';

export default function Login() {
  return (
    <div className='h-screen grid place-items-center p-4'>
      <div className='w-full max-w-md'>
        <Card>
          <CardHeader>
            <CardTitle className='text-xl font-bold text-center'>
              Sign in to your account
            </CardTitle>
            <CardDescription className='text-center'>
              Access your account securely
            </CardDescription>
          </CardHeader>
          <CardContent className='mt-8'>
            <Button className='w-full flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 shadow-sm'>
              <Image
                src='/icons8-google.svg'
                alt='Google Logo'
                width={30}
                height={30}
              />
              <span className='font-medium'>Sign in with Google</span>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
