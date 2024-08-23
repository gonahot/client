
import { NavLinks } from '@/app/ui/Navlinks';



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div lang="en">
      <div>
        <NavLinks />
        <main>
          {children}
        </main>
      </div>
    </div>
  );
}
