import dynamic from "next/dynamic";

// Dynamically import the MarqueeSlider with no SSR to prevent hydration issues
const MarqueeSlider = dynamic(() => import("./MarqueeSlider"), {
  ssr: false,
  loading: () => (
    <div className="bg-accent-orange text-white py-3 overflow-hidden">
      <div className="px-[27px]">
        <span className="text-xs font-mono whitespace-nowrap inline-block leading-6">
          Loading market data...
        </span>
      </div>
    </div>
  ),
});

interface MarqueeSliderWrapperProps {
  items: string[];
  backgroundColor?: string;
  textColor?: string;
  speed?: number;
  className?: string;
  itemClassName?: string;
  pauseOnHover?: boolean;
}

export default function MarqueeSliderWrapper(props: MarqueeSliderWrapperProps) {
  return <MarqueeSlider {...props} />;
}