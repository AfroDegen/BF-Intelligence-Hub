export const metadata = {
  title: 'BF Intelligence Hub Terminal',
  description: 'Automated Infrastructure Diagnostic Architecture',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
