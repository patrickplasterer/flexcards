import { NavBar } from '@/components/ui/navbar'
import { ClerkProvider } from '@clerk/nextjs';

export default function MainLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
        <ClerkProvider>
            {children}
        <ClerkProvider />
    );
  }