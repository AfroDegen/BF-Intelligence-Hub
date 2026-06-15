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
      <head>
        {/* Force Tailwind CDN inline so your styles render beautifully without local files */}
        <script src="https://cdn.tailwindcss.com"></script>
      </head>
      <body>{children}</body>
    </html>
  );
}
