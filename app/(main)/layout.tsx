import { NavBar } from '@/components/ui/navbar'

export default function MainLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
        <>
        <div className='flex flex-col h-screen'>
            <NavBar />
            <div className="flex flex-col grow p-1 overflow-hidden">
            {children}
            </div>
        </div>
        </>
    );
  }