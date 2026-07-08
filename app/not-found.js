export default function GlobalNotFound() {
  return (
    <html lang="en">
      <head>
        <title>404 - Not Found</title>
      </head>
      <body style={{ 
        display: 'flex', 
        flexDirection: 'column',
        alignItems: 'center', 
        justifyContent: 'center', 
        minHeight: '100vh',
        fontFamily: 'sans-serif',
        background: '#0a0a0a', // تقدر تحط لون البورتفوليو الغامق بتاعك هنا
        color: '#fff'
      }}>
        <h1 style={{ fontSize: '4rem', margin: 0 }}>404</h1>
        <p style={{ color: '#a0a0a0' }}>Page Not Found</p>
      </body>
    </html>
  );
}