import { useState } from "react";
import { SmartImage } from "@/components/ui/SmartImage";
import { motion } from "motion/react";
import { SameHeightRow } from "@/components/ui/SameHeightRow";
import { useMemo, useRef } from "react";
import { SimpleLightbox } from "@/components/gallery/SimpleLightbox";

const TiltBox = ({
  children,
  className,
  onClick,
}: {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}) => {
  const boundingRef = useRef<DOMRect | null>(null);

  // Randomized duration for floating effect
  const duration = useMemo(() => 3 + Math.random() * 2, []);
  const delay = useMemo(() => Math.random() * 2, []);

  return (
    <div className={`perspective-dramatic ${className}`}>
      {/* Container for idle floating animation */}
      <motion.div
        animate={{
          y: [-2, 2],
          rotateZ: [-0.5, 0.5],
        }}
        transition={{
          duration: duration,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
          delay: delay,
        }}
        className="w-full h-full"
      >
        {/* Container for interactive tilt effect */}
        <div
          onMouseLeave={() => (boundingRef.current = null)}
          onMouseEnter={(ev) => {
            boundingRef.current = ev.currentTarget.getBoundingClientRect();
          }}
          onMouseMove={(ev) => {
            if (!boundingRef.current) return;
            const x = ev.clientX - boundingRef.current.left;
            const y = ev.clientY - boundingRef.current.top;
            const xPercentage = x / boundingRef.current.width;
            const yPercentage = y / boundingRef.current.height;
            const xRotation = (xPercentage - 0.5) * 20;
            const yRotation = (0.5 - yPercentage) * 20;

            ev.currentTarget.style.setProperty(
              "--x-rotation",
              `${yRotation}deg`,
            );
            ev.currentTarget.style.setProperty(
              "--y-rotation",
              `${xRotation}deg`,
            );
            ev.currentTarget.style.setProperty("--x", `${xPercentage * 100}%`);
            ev.currentTarget.style.setProperty("--y", `${yPercentage * 100}%`);
          }}
          onClick={onClick}
          className={`group relative w-full h-full transition-all ease-out hover:transform-[rotateX(var(--x-rotation))_rotateY(var(--y-rotation))_scale(1.05)] duration-200 hover:z-50 ${onClick ? "cursor-pointer" : ""}`}
          style={{ transformStyle: "preserve-3d" }}
        >
          {children}
          {/* Lighting overlay that follows the cursor */}
          <div className="pointer-events-none absolute inset-0 group-hover:bg-[radial-gradient(at_var(--x)_var(--y),rgba(255,255,255,0.3)_20%,transparent_80%)] rounded-lg" />
        </div>
      </motion.div>
    </div>
  );
};

export function CoronaPost() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [initialIndex, setInitialIndex] = useState(0);

  const openLightbox = (index: number) => {
    setInitialIndex(index);
    setLightboxOpen(true);
  };

  const imagePath = [
    {
      src: "https://ik.imagekit.io/j3l1n5k1/gfx/project/corona/Michal_Jelinski_MGLS3_IG1_grupa2_plik3_vrxLzDbIx.avif?updatedAt=1769087748316",
      alt: "Michal_Jelinski_MGLS3_IG1_grupa2_plik3",
    },
    {
      src: "https://ik.imagekit.io/j3l1n5k1/gfx/project/corona/Michal_Jelinski_MGLS3_IG1_grupa2_Package_y4qrLs2u_.avif?updatedAt=1769087736291",
      alt: "Michal_Jelinski_MGLS3_IG1_grupa2_Package",
    },
    {
      src: "https://ik.imagekit.io/j3l1n5k1/gfx/project/corona/TestRenderV2-2_kregW60ch.avif?updatedAt=1769087736039",
      alt: "TestRenderV2-2",
    },
    {
      src: "https://ik.imagekit.io/j3l1n5k1/gfx/project/corona/Michal_Jelinski_MGLS3_IG1_grupa2_Package1_O8huhvcFUf.avif?updatedAt=1769087736104",
      alt: "Michal_Jelinski_MGLS3_IG1_grupa2_Package1",
    },
    {
      src: "https://ik.imagekit.io/j3l1n5k1/gfx/project/corona/Michal_Jelinski_MGLS3_IG1_grupa2_plik4_9VYl9tZHf.avif?updatedAt=1769087737063",
      alt: "Michal_Jelinski_MGLS3_IG1_grupa2_plik4",
    },
    {
      src: "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1764864539/gfx/2021/corona%20fighters/CardF-Bottle_jywret.png",
      alt: "CardF-Bottle",
    },
    {
      src: "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1764864530/gfx/2021/corona%20fighters/CardF-Drugstore_ut34zo.png",
      alt: "CardF-Drugstore",
    },
    {
      src: "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1764864482/gfx/2021/corona%20fighters/CardF-Gloves_vv0cie.png",
      alt: "CardF-Gloves",
    },
  ];

  return (
    <>
      <SimpleLightbox
        images={imagePath}
        initialIndex={initialIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
      />
      <div className="flex flex-col gap-9 rounded-md w-full">
        <div className="grid place-items-center py-24">
          <div
            onClick={() => openLightbox(0)}
            className="cursor-pointer contents"
          >
            <SmartImage
              className="w-[60%]"
              src={imagePath[0].src}
              alt={imagePath[0].alt}
            />
          </div>
        </div>
        <SameHeightRow
          gap={16}
          roundEvery={true}
          images={[imagePath[1], imagePath[2], imagePath[3]]}
          onImageClick={(idx) => openLightbox(1 + idx)}
        ></SameHeightRow>
        <div className="grid place-items-center">
          <div
            onClick={() => openLightbox(4)}
            className="cursor-pointer contents"
          >
            <SmartImage
              className="w-full"
              src={imagePath[4].src}
              alt={imagePath[4].alt}
            />
          </div>
        </div>
        <div className="w-full grid grid-cols-3 gallery-card p-8">
          <TiltBox className="scale-75" onClick={() => openLightbox(5)}>
            <SmartImage
              src={imagePath[5].src}
              alt={imagePath[5].alt}
              className="w-full overflow-hidden rounded-sm border shadow-xl light:border-neutral-500 dark:border-neutral-500"
            />
          </TiltBox>
          <TiltBox className="scale-75" onClick={() => openLightbox(6)}>
            <SmartImage
              src={imagePath[6].src}
              alt={imagePath[6].alt}
              className="w-full overflow-hidden rounded-sm border shadow-xl light:border-neutral-500 dark:border-neutral-500"
            />
          </TiltBox>
          <TiltBox className="scale-75" onClick={() => openLightbox(7)}>
            <SmartImage
              src={imagePath[7].src}
              alt={imagePath[7].alt}
              className="w-full overflow-hidden rounded-sm border shadow-xl light:border-neutral-500 dark:border-neutral-500"
            />
          </TiltBox>
        </div>
        <div>
          <h3>Video</h3>
        </div>
        <div className="grid grid-flo-row gap-8"></div>
      </div>
    </>
  );
}
