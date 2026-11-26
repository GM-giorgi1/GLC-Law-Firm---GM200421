import React from 'react';

export interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fill?: boolean;
  priority?: boolean;
  quality?: number | string;
  unoptimized?: boolean;
  fallbackSrc?: string;
}

const PUBLIC_WEBP_SOURCES: Record<string, string> = {
  '/CRIM.jpg': '/CRIM.webp',
  '/HERO_GUBE.jpeg': '/HERO_GUBE.webp',
  '/GUBE.jpeg': '/GUBE.webp',
  '/GUBE1.jpeg': '/GUBE1.webp',
  '/wallpaper.jpg': '/wallpaper.webp',
  '/legal_walpaper1.jpg': '/legal_walpaper1.webp',
  '/lawwallpaper.jpg': '/lawwallpaper.webp',
  '/legal_wallpaper.jpg': '/legal_wallpaper.webp',
  '/law temple wallpapaer.jpg': '/law temple wallpapaer.webp',
  '/CARD1.png': '/CARD1.webp',
  '/CARD2.png': '/CARD2.webp',
  '/CARD3.png': '/CARD3.webp',
  '/CARD4.png': '/CARD4.webp',
  '/GM.png': '/GM.webp',
  '/GM1.png': '/GM1.webp',
  '/GM2.png': '/GM2.webp',
  '/GM3.png': '/GM3.webp',
  '/GM4.png': '/GM4.webp',
  '/GM5.png': '/GM5.webp',
  '/TEMPLE0.png': '/TEMPLE0.webp',
  '/TEMPLE1.png': '/TEMPLE1.webp',
  '/TEMPLE2.png': '/TEMPLE2.webp',
  '/TEMPLE3.png': '/TEMPLE3.webp',
  '/corporate.png': '/corporate.webp',
  '/courtroom.png': '/courtroom.webp',
  '/criminalhero.png': '/criminalhero.webp',
  '/detention.png': '/detention.webp',
  '/evidence.png': '/evidence.webp',
  '/investigation.png': '/investigation.webp',
  '/family.png': '/family.webp',
  '/family1.png': '/family1.webp',
  '/family2.png': '/family2.webp',
  '/family3.png': '/family3.webp',
  '/family4.png': '/family4.webp',
  '/family5.png': '/family5.webp',
  '/family6.png': '/family6.webp',
  '/family7.png': '/family7.webp',
  '/family8.png': '/family8.webp',
  '/realestate.png': '/realestate.webp',
  '/realestate0.png': '/realestate0.webp',
};

function resolvePreferredSrc(src?: string): string | undefined {
  if (typeof src !== 'string') return src;
  return PUBLIC_WEBP_SOURCES[src] ?? src;
}

const Image = React.forwardRef<HTMLImageElement, ImageProps>(function Image(
  {
    fill,
    priority,
    quality,
    unoptimized,
    fallbackSrc,
    style,
    className = '',
    src,
    onError,
    decoding,
    loading,
    fetchPriority,
    ...props
  },
  ref
) {
  const [currentSrc, setCurrentSrc] = React.useState(() => resolvePreferredSrc(src));

  React.useEffect(() => {
    setCurrentSrc(resolvePreferredSrc(src));
  }, [src]);

  const fillStyle: React.CSSProperties = fill
    ? {
        position: 'absolute',
        height: '100%',
        width: '100%',
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
        ...style,
      }
    : style || {};

  return (
    <img
      ref={ref}
      src={currentSrc}
      style={fillStyle}
      className={className}
      loading={loading ?? (priority ? 'eager' : 'lazy')}
      fetchPriority={fetchPriority ?? (priority ? 'high' : 'auto')}
      decoding={decoding ?? 'async'}
      onError={(e) => {
        if (typeof currentSrc === 'string') {
          if (typeof src === 'string' && PUBLIC_WEBP_SOURCES[src] === currentSrc && currentSrc !== src) {
            setCurrentSrc(src);
            return;
          }
          if (currentSrc.startsWith('/.tempmediaStorage/')) {
            setCurrentSrc(currentSrc.replace('/.tempmediaStorage/', '/'));
            return;
          }
          if (currentSrc.includes('assets/')) {
            const fileName = currentSrc.split('/').pop()?.split('?')[0];
            if (fileName && currentSrc !== `/${fileName}`) {
              setCurrentSrc(`/${fileName}`);
              return;
            }
          }
          if (fallbackSrc && currentSrc !== fallbackSrc) {
            setCurrentSrc(fallbackSrc);
            return;
          }
          if (currentSrc !== '/HERO_GUBE.jpeg') {
            setCurrentSrc('/HERO_GUBE.jpeg');
          }
        }
        onError?.(e);
      }}
      {...props}
    />
  );
});

export default Image;
