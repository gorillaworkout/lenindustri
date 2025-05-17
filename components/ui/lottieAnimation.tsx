// components/LottieAnimation.tsx
import { useEffect, useRef } from 'react';
import lottie from 'lottie-web';

type LottieAnimationProps = {
  jsonPath: string;
  className?: string;
};

const LottieAnimation = ({ jsonPath, className = '' }: LottieAnimationProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const animation = lottie.loadAnimation({
      container: containerRef.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: jsonPath,
    });

    animation.addEventListener('data_failed', () => {
      console.error('Failed to load animation data:', jsonPath);
    });

    return () => animation.destroy(); // Clean up on unmount
  }, [jsonPath]);

  return <div ref={containerRef} className={className} />;
};

export default LottieAnimation;
