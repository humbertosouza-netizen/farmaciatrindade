import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const title = searchParams.get('title') || 'Drogarias Legítima Trindade';
    const subtitle = searchParams.get('subtitle') || 'O melhor preço de São Gonçalo';

    return new ImageResponse(
      (
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#2A2F85',
            backgroundImage: 'linear-gradient(135deg, #2A2F85 0%, #1E2370 100%)',
            fontFamily: 'Inter, sans-serif',
          }}
        >
          {/* Logo area */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: '40px',
            }}
          >
            <div
              style={{
                width: '80px',
                height: '80px',
                backgroundColor: '#009B3A',
                borderRadius: '20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginRight: '20px',
              }}
            >
              <div
                style={{
                  color: 'white',
                  fontSize: '32px',
                  fontWeight: 'bold',
                }}
              >
                L
              </div>
            </div>
            <div
              style={{
                color: 'white',
                fontSize: '24px',
                fontWeight: 'bold',
              }}
            >
              Drogarias Legítima
            </div>
          </div>

          {/* Main content */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              maxWidth: '800px',
              padding: '0 40px',
            }}
          >
            <h1
              style={{
                color: 'white',
                fontSize: '48px',
                fontWeight: 'bold',
                margin: '0 0 20px 0',
                lineHeight: 1.2,
              }}
            >
              {title}
            </h1>
            
            <p
              style={{
                color: '#E5E7EB',
                fontSize: '24px',
                margin: '0 0 40px 0',
                lineHeight: 1.4,
              }}
            >
              {subtitle}
            </p>

            {/* CTA buttons */}
            <div
              style={{
                display: 'flex',
                gap: '20px',
                marginTop: '20px',
              }}
            >
              <div
                style={{
                  backgroundColor: '#009B3A',
                  color: 'white',
                  padding: '12px 24px',
                  borderRadius: '12px',
                  fontSize: '18px',
                  fontWeight: '600',
                }}
              >
                WhatsApp
              </div>
              <div
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.2)',
                  color: 'white',
                  padding: '12px 24px',
                  borderRadius: '12px',
                  fontSize: '18px',
                  fontWeight: '600',
                  border: '2px solid rgba(255, 255, 255, 0.3)',
                }}
              >
                Ligar
              </div>
            </div>
          </div>

          {/* Footer */}
          <div
            style={{
              position: 'absolute',
              bottom: '40px',
              left: '40px',
              right: '40px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <div
              style={{
                color: '#9CA3AF',
                fontSize: '16px',
              }}
            >
              São Gonçalo - RJ
            </div>
            <div
              style={{
                color: '#9CA3AF',
                fontSize: '16px',
              }}
            >
              (21) 98147-1332
            </div>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    );
  } catch (e: unknown) {
    console.log(`${e instanceof Error ? e.message : 'Unknown error'}`);
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}
