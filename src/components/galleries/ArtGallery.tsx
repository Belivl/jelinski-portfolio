import { motion } from "motion/react";
import { useRef, useMemo, useState } from "react";
import { GalleryAccordion } from "@/components/galleries/GalleryAccordion";
import { SmartImage } from "@/components/ui/SmartImage";
import { SimpleLightbox } from "@/components/gallery/SimpleLightbox";

// Consolidated Art Images Data
const ART_IMAGES = [
  // 2021
  {
    src: "https://ik.imagekit.io/j3l1n5k1/gfx/2021/SatyraInsta_1_U1tQ3Rv-Rv.avif?updatedAt=1769089272113",
    alt: "satyrainsta1",
  },
  {
    src: "https://ik.imagekit.io/j3l1n5k1/gfx/2021/SatyraInsta_2_fUL6MpqxbQ.avif?updatedAt=1769089272047",
    alt: "satyrainsta2",
  },
  {
    src: "https://ik.imagekit.io/j3l1n5k1/gfx/2021/SatyraInsta_3_91A_4DlKMa.avif?updatedAt=1769089272074",
    alt: "satyrainsta3",
  },
  {
    src: "https://ik.imagekit.io/j3l1n5k1/gfx/2020/drawing/IMG_20220825_001426_938_rMuuYAEY0.avif?updatedAt=1769088964080",
    alt: "noise-alt1",
  },
  {
    src: "https://ik.imagekit.io/j3l1n5k1/gfx/2020/drawing/NoiseSilenceV3-alt2_rvkFVrNQE.avif?updatedAt=1769088963730",
    alt: "noisesilencev3",
  },
  {
    src: "https://ik.imagekit.io/j3l1n5k1/gfx/2020/drawing/silenceV2-alt1_j5QaHKB-Q.avif?updatedAt=1769088964151",
    alt: "silencev2",
  },
  {
    src: "https://ik.imagekit.io/j3l1n5k1/gfx/2020/1_-6er9Gvo8.avif?updatedAt=1769088547979",
    alt: "az1",
  },
  {
    src: "https://ik.imagekit.io/j3l1n5k1/gfx/2020/2_lkA7kPFfI.avif?updatedAt=1769088547957",
    alt: "az2",
  },
  {
    src: "https://ik.imagekit.io/j3l1n5k1/gfx/2020/3_JlZFHVu9L.avif?updatedAt=1769088548098",
    alt: "az3",
  },
  // 2020 - Vinci
  {
    src: "https://ik.imagekit.io/j3l1n5k1/gfx/2020/drawing/Leo2_Trans@0.75x_d_gdHiNcC.avif?updatedAt=1769088716034",
    alt: "skullvinci",
  },
  {
    src: "https://ik.imagekit.io/j3l1n5k1/gfx/2020/drawing/Leo1_Trans@0.75x_p2AYpWJ52.avif?updatedAt=1769088716270",
    alt: "manvinci",
  },
  {
    src: "https://ik.imagekit.io/j3l1n5k1/gfx/2020/drawing/Leo3_Trans@0.75x_oV_wz3bgm.avif?updatedAt=1769088716253",
    alt: "watchvinci",
  },
  // 2020 - Mlecznik Digital
  {
    src: "https://ik.imagekit.io/j3l1n5k1/gfx/2020/mlecznik/MleczDigi1_mqdnocaYTM.avif?updatedAt=1769107035442",
    alt: "digital1",
  },
  {
    src: "https://ik.imagekit.io/j3l1n5k1/gfx/2020/mlecznik/MleczDigi2_KenLhUmT3h.avif?updatedAt=1769107035555",
    alt: "digital2",
  },
  {
    src: "https://ik.imagekit.io/j3l1n5k1/gfx/2020/mlecznik/MleczDigi3_l3XubyA5mD.avif?updatedAt=1769107036053",
    alt: "digital3",
  },
  // 2020 - Mlecznik Coffee
  {
    src: "https://ik.imagekit.io/j3l1n5k1/gfx/2020/mlecznik/MleczCoff1_nOQq5lhFp.avif?updatedAt=1769107035929",
    alt: "coffee1",
  },
  {
    src: "https://ik.imagekit.io/j3l1n5k1/gfx/2020/mlecznik/MleczCoff2_gkpPErbskU.avif?updatedAt=1769107036195",
    alt: "coffee2",
  },
  {
    src: "https://ik.imagekit.io/j3l1n5k1/gfx/2020/mlecznik/MleczCoff3_57Iu3ndQJ3.avif?updatedAt=1769107035939",
    alt: "coffee3",
  },
  // 2020 - Mlecznik Ink
  {
    src: "https://ik.imagekit.io/j3l1n5k1/gfx/2020/mlecznik/MleczInk1_831ccf8tZU.avif?updatedAt=1769107036074",
    alt: "ink1",
  },
  {
    src: "https://ik.imagekit.io/j3l1n5k1/gfx/2020/mlecznik/MleczInk2_dj-CeT4ZI.avif?updatedAt=1769107035800",
    alt: "ink2",
  },
  {
    src: "https://ik.imagekit.io/j3l1n5k1/gfx/2020/mlecznik/MleczInk3_twaBltlCIG.avif?updatedAt=1769107035915",
    alt: "ink3",
  },
  // 2020 - Mlecznik Charcoal
  {
    src: "https://ik.imagekit.io/j3l1n5k1/gfx/2020/mlecznik/MleczChar1_PiRdPgE80.avif?updatedAt=1769107035788",
    alt: "charcoal1",
  },
  {
    src: "https://ik.imagekit.io/j3l1n5k1/gfx/2020/mlecznik/MleczChar2_nqt1T6j0J.avif?updatedAt=1769107035815",
    alt: "charcoal2",
  },
  {
    src: "https://ik.imagekit.io/j3l1n5k1/gfx/2020/mlecznik/MleczChar3_87xIT4_au0.avif?updatedAt=1769107035772",
    alt: "charcoal3",
  },
  // 2020 - Mlecznik Marker
  {
    src: "https://ik.imagekit.io/j3l1n5k1/gfx/2020/mlecznik/MleczChar3_87xIT4_au0.avif?updatedAt=1769107035772",
    alt: "marker1",
  },
  {
    src: "https://ik.imagekit.io/j3l1n5k1/gfx/2020/mlecznik/MleczMark2_gIUwWyIxTq.avif?updatedAt=1769107036086",
    alt: "marker2",
  },
  {
    src: "https://ik.imagekit.io/j3l1n5k1/gfx/2020/mlecznik/MleczMark3_OiO6WVwCnx.avif?updatedAt=1769107036340",
    alt: "marker3",
  },
  // 2020 - Mlecznik Pencil
  {
    src: "https://ik.imagekit.io/j3l1n5k1/gfx/2020/mlecznik/MleczPencil1_1eVLF2OnU2.avif?updatedAt=1769107036232",
    alt: "pencil1",
  },
  {
    src: "https://ik.imagekit.io/j3l1n5k1/gfx/2020/mlecznik/MleczPencil2_kRGGBvEzPD.avif?updatedAt=1769107036179",
    alt: "pencil2",
  },
  {
    src: "https://ik.imagekit.io/j3l1n5k1/gfx/2020/mlecznik/MleczPencil3_6DrK1FnV7V.avif?updatedAt=1769107036108",
    alt: "pencil3",
  },
  // 2020 - Other
  {
    src: "https://ik.imagekit.io/j3l1n5k1/gfx/2020/drawing/Exlibris_Trans_g0BgdXxJJ.avif?updatedAt=1769088697182",
    alt: "exlibris",
  },
  {
    src: "https://ik.imagekit.io/j3l1n5k1/gfx/2020/drawing/Lu2_Trans_Dl58heZo1.avif?updatedAt=1769088716076",
    alt: "lu2",
  },
  {
    src: "https://ik.imagekit.io/j3l1n5k1/gfx/2020/drawing/Wrists_a-xyG4C0D.avif?updatedAt=1769088725076",
    alt: "wrists",
  },
  // 2020 - Poses
  {
    src: "https://ik.imagekit.io/j3l1n5k1/gfx/2020/drawing/Pozy7_Trans_dqmNfCEvmG.avif?updatedAt=1769088725122",
    alt: "vii",
  },
  {
    src: "https://ik.imagekit.io/j3l1n5k1/gfx/2020/drawing/Pozy1_Trans_NW-mTMyRu.avif?updatedAt=1769088724727",
    alt: "i",
  },
  {
    src: "https://ik.imagekit.io/j3l1n5k1/gfx/2020/drawing/Pozy3_Trans_khVd08iCE.avif?updatedAt=1769088724964",
    alt: "iii",
  },
  {
    src: "https://ik.imagekit.io/j3l1n5k1/gfx/2020/drawing/Pozy2_Trans__HmsOnZZq.avif?updatedAt=1769088725009",
    alt: "ii",
  },
  {
    src: "https://ik.imagekit.io/j3l1n5k1/gfx/2020/drawing/Pozy8_Trans_NUS8SAQh7d.avif?updatedAt=1769088725111",
    alt: "viii",
  },
  {
    src: "https://ik.imagekit.io/j3l1n5k1/gfx/2020/drawing/Pozy6_Trans_qbobYRl0E.avif?updatedAt=1769088725000",
    alt: "vi",
  },
  {
    src: "https://ik.imagekit.io/j3l1n5k1/gfx/2020/drawing/Pozy5_Trans_nfs_M9W8tB.avif?updatedAt=1769088725115",
    alt: "v",
  },
  {
    src: "https://ik.imagekit.io/j3l1n5k1/gfx/2020/drawing/Pozy5_Trans_nfs_M9W8tB.avif?updatedAt=1769088725115",
    alt: "iv",
  },
];

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
    <div
      className={`perspective-dramatic ${className}`}
      onClick={onClick}
      style={{ cursor: onClick ? "pointer" : "default" }}
    >
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
        className="w-full h-full "
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
          className="group relative w-full h-full  overflow-hidden transition-all ease-out hover:transform-[rotateX(var(--x-rotation))_rotateY(var(--y-rotation))_scale(1.05)] duration-200 hover:z-50"
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

export function ArtGallery() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [initialIndex, setInitialIndex] = useState(0);

  const openLightbox = (alt: string) => {
    const index = ART_IMAGES.findIndex((img) => img.alt === alt);
    if (index !== -1) {
      setInitialIndex(index);
      setLightboxOpen(true);
    }
  };

  const getImg = (alt: string) => ART_IMAGES.find((img) => img.alt === alt)!;

  return (
    <>
      <SimpleLightbox
        images={ART_IMAGES}
        initialIndex={initialIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
      />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="flex flex-col gap-4 w-full"
      >
        <GalleryAccordion year="2021" defaultOpen={true}>
          {/* Row 1 */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="grid grid-cols-3 rounded-xl overflow-hidden border border-white/10"
          >
            {["satyrainsta1", "satyrainsta2", "satyrainsta3"].map((id) => (
              <div
                key={id}
                className="overflow-hidden bg-neutral-900 text-neutral-500 cursor-pointer"
                onClick={() => openLightbox(id)}
              >
                <SmartImage
                  src={getImg(id).src}
                  alt={getImg(id).alt}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </motion.div>

          {/* Row 2 */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="grid grid-cols-3 rounded-xl overflow-hidden border border-white/10"
          >
            {["noise-alt1", "noisesilencev3", "silencev2"].map((id) => (
              <div
                key={id}
                className="overflow-hidden bg-neutral-900 text-neutral-500 cursor-pointer"
                onClick={() => openLightbox(id)}
              >
                <SmartImage
                  src={getImg(id).src}
                  alt={getImg(id).alt}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </motion.div>

          {/* Row 3 */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="grid grid-cols-3 rounded-xl overflow-hidden border border-white/10"
          >
            {["az1", "az2", "az3"].map((id) => (
              <div
                key={id}
                className="overflow-hidden bg-neutral-900 text-neutral-500 cursor-pointer"
                onClick={() => openLightbox(id)}
              >
                <SmartImage
                  src={getImg(id).src}
                  alt={getImg(id).alt}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </motion.div>
        </GalleryAccordion>

        <GalleryAccordion year="2020">
          {/* Da Vinci Sketches */}
          <div className="w-full grid grid-cols-3 rounded-sm border shadow-xl light:border-neutral-500 dark:border-neutral-800 p-8">
            {["skullvinci", "manvinci", "watchvinci"].map((id) => (
              <TiltBox
                key={id}
                className="scale-75"
                onClick={() => openLightbox(id)}
              >
                <SmartImage
                  src={getImg(id).src}
                  alt={getImg(id).alt}
                  className="w-full overflow-hidden object-contain rounded-sm border shadow-xl light:border-neutral-500 dark:border-neutral-500"
                />
              </TiltBox>
            ))}
          </div>

          {/* Mlecznik Digital */}
          <div className="w-full grid grid-cols-3 rounded-sm overflow-hidden border shadow-xl light:border-neutral-500 dark:border-neutral-800">
            {["digital1", "digital2", "digital3"].map((id, index) => {
              const photoSrc =
                index === 0
                  ? "https://ik.imagekit.io/j3l1n5k1/gfx/2020/mlecznik/MleczPhoto10_DVfLp7TF4P.avif?updatedAt=1769107036318"
                  : index === 1
                    ? "https://ik.imagekit.io/j3l1n5k1/gfx/2020/mlecznik/MleczPhoto11_yR7Cu9CkjE.avif?updatedAt=1769107036302"
                    : "https://ik.imagekit.io/j3l1n5k1/gfx/2020/mlecznik/MleczPhoto12_NL_zQGBRg9.avif?updatedAt=1769107036565";

              return (
                <div
                  key={id}
                  className="relative w-full cursor-pointer"
                  onClick={() => openLightbox(id)}
                >
                  <SmartImage
                    alt={`${id}_photo`}
                    className="w-full h-auto object-cover"
                    src={photoSrc}
                  />
                  <SmartImage
                    alt={getImg(id).alt}
                    className="w-full h-auto object-cover absolute top-0 left-0 hover:opacity-0 transition-all duration-500 ease-in-out"
                    src={getImg(id).src}
                  />
                </div>
              );
            })}
          </div>

          {/* Mlecznik Coffee */}
          <div className="w-full grid grid-cols-3 rounded-sm overflow-hidden border shadow-xl light:border-neutral-500 dark:border-neutral-800">
            {["coffee1", "coffee2", "coffee3"].map((id, index) => {
              const photoSrc =
                index === 0
                  ? "https://ik.imagekit.io/j3l1n5k1/gfx/2020/mlecznik/MleczPhoto13_M_kbid8Lku.avif?updatedAt=1769107036269"
                  : index === 1
                    ? "https://ik.imagekit.io/j3l1n5k1/gfx/2020/mlecznik/MleczPhoto14_EMgQcUrZmu.avif?updatedAt=1769107035438"
                    : "https://ik.imagekit.io/j3l1n5k1/gfx/2020/mlecznik/MleczPhoto15_STp8Jjo3Eo.avif?updatedAt=1769107035597";

              return (
                <div
                  key={id}
                  className="relative w-full cursor-pointer"
                  onClick={() => openLightbox(id)}
                >
                  <SmartImage
                    alt={`${id}_photo`}
                    className="w-full h-auto object-cover sepia"
                    src={photoSrc}
                  />
                  <SmartImage
                    alt={getImg(id).alt}
                    className="w-full h-auto object-cover absolute top-0 left-0 hover:opacity-0 transition-all duration-500 ease-in-out"
                    src={getImg(id).src}
                  />
                </div>
              );
            })}
          </div>

          {/* Mlecznik Ink */}
          <div className="w-full grid grid-cols-3 rounded-sm overflow-hidden border shadow-xl light:border-neutral-500 dark:border-neutral-800">
            {["ink1", "ink2", "ink3"].map((id, index) => {
              const photoSrc =
                index === 0
                  ? "https://ik.imagekit.io/j3l1n5k1/gfx/2020/mlecznik/MleczPhoto1_V5mHpKske7.avif?updatedAt=1769107035389"
                  : index === 1
                    ? "https://ik.imagekit.io/j3l1n5k1/gfx/2020/mlecznik/MleczPhoto2_oK7UxBGIWH.avif?updatedAt=1769107036044"
                    : "https://ik.imagekit.io/j3l1n5k1/gfx/2020/mlecznik/MleczPhoto3_9l3anBcPKD.avif?updatedAt=1769107036135";

              return (
                <div
                  key={id}
                  className="relative w-full cursor-pointer"
                  onClick={() => openLightbox(id)}
                >
                  <SmartImage
                    alt={`${id}_photo`}
                    className="w-full h-auto object-cover"
                    src={photoSrc}
                  />
                  <SmartImage
                    alt={getImg(id).alt}
                    className="w-full h-auto object-cover absolute top-0 left-0 hover:opacity-0 transition-all duration-500 ease-in-out"
                    src={getImg(id).src}
                  />
                </div>
              );
            })}
          </div>

          {/* Mlecznik Charcoal */}
          <div className="w-full grid grid-cols-3 rounded-sm overflow-hidden border shadow-xl light:border-neutral-500 dark:border-neutral-800">
            {["charcoal1", "charcoal2", "charcoal3"].map((id, index) => {
              const photoSrc =
                index === 0
                  ? "https://ik.imagekit.io/j3l1n5k1/gfx/2020/mlecznik/MleczPhoto4_yZ990Nt_nI.avif?updatedAt=1769107035371"
                  : index === 1
                    ? "https://ik.imagekit.io/j3l1n5k1/gfx/2020/mlecznik/MleczPhoto5_35btWGIvqX.avif?updatedAt=1769107036177"
                    : "https://ik.imagekit.io/j3l1n5k1/gfx/2020/mlecznik/MleczPhoto6_vKzrBzjlkE.avif?updatedAt=1769107035388";

              return (
                <div
                  key={id}
                  className="relative w-full cursor-pointer"
                  onClick={() => openLightbox(id)}
                >
                  <SmartImage
                    alt={`${id}_photo`}
                    className="w-full h-auto object-cover"
                    src={photoSrc}
                  />
                  <SmartImage
                    alt={getImg(id).alt}
                    className="w-full h-auto object-cover absolute top-0 left-0 hover:opacity-0 transition-all duration-500 ease-in-out"
                    src={getImg(id).src}
                  />
                </div>
              );
            })}
          </div>

          {/* Mlecznik Marker */}
          <div className="w-full grid grid-cols-3 rounded-sm overflow-hidden border shadow-xl light:border-neutral-500 dark:border-neutral-800">
            {["marker1", "marker2", "marker3"].map((id, index) => {
              const photoSrc =
                index === 0
                  ? "https://ik.imagekit.io/j3l1n5k1/gfx/2020/mlecznik/MleczPhoto6_vKzrBzjlkE.avif?updatedAt=1769107035388"
                  : index === 1
                    ? "https://ik.imagekit.io/j3l1n5k1/gfx/2020/mlecznik/MleczPhoto9_rNI5tQjvC.avif?updatedAt=1769107035396"
                    : "https://ik.imagekit.io/j3l1n5k1/gfx/2020/mlecznik/MleczPhoto8_XPe60fMNSY.avif?updatedAt=1769107035722";

              return (
                <div
                  key={id}
                  className="relative w-full cursor-pointer"
                  onClick={() => openLightbox(id)}
                >
                  <SmartImage
                    alt={`${id}_photo`}
                    className="w-full h-auto object-cover"
                    src={photoSrc}
                  />
                  <SmartImage
                    alt={getImg(id).alt}
                    className="w-full h-auto object-cover absolute top-0 left-0 hover:opacity-0 transition-all duration-500 ease-in-out"
                    src={getImg(id).src}
                  />
                </div>
              );
            })}
          </div>

          {/* Mlecznik Pencil */}
          <div className="w-full grid grid-cols-3 rounded-sm overflow-hidden border shadow-xl light:border-neutral-500 dark:border-neutral-800">
            {["pencil1", "pencil2", "pencil3"].map((id) => (
              <SmartImage
                key={id}
                src={getImg(id).src}
                alt={getImg(id).alt}
                className="transition-all duration-500 ease-in-out h-auto cursor-pointer"
                onClick={() => openLightbox(id)}
              />
            ))}
          </div>

          {/* Other 2020 */}
          <div className="w-full grid grid-cols-3 rounded-sm border shadow-xl light:border-neutral-500 dark:border-neutral-800 p-8">
            {["exlibris", "lu2", "wrists"].map((id) => (
              <TiltBox
                key={id}
                className="scale-75"
                onClick={() => openLightbox(id)}
              >
                <SmartImage
                  src={getImg(id).src}
                  alt={getImg(id).alt}
                  className="w-full overflow-hidden object-contain rounded-sm border shadow-xl light:border-neutral-500 dark:border-neutral-500"
                />
              </TiltBox>
            ))}
          </div>

          {/* Poses */}
          <div className="w-full relative aspect-square rounded-sm  border shadow-xl light:border-neutral-500 dark:border-neutral-800 p-8">
            <TiltBox
              className="w-1/4 absolute top-1/18 left-1/16 z-10"
              onClick={() => openLightbox("vii")}
            >
              <SmartImage
                src={getImg("vii").src}
                alt={getImg("vii").alt}
                className="w-full overflow-hidden rounded-sm border shadow-xl light:border-neutral-500 dark:border-neutral-500"
              />
            </TiltBox>

            <TiltBox
              className="w-1/3 absolute top-1/12 left-1/2 -translate-x-1/2 z-10"
              onClick={() => openLightbox("i")}
            >
              <SmartImage
                src={getImg("i").src}
                alt={getImg("i").alt}
                className="w-full overflow-hidden rounded-sm border shadow-xl light:border-neutral-500 dark:border-neutral-500"
              />
            </TiltBox>

            <TiltBox
              className="w-1/4 absolute top-1/24 right-1/50 z-10"
              onClick={() => openLightbox("iii")}
            >
              <SmartImage
                src={getImg("iii").src}
                alt={getImg("iii").alt}
                className="w-full overflow-hidden rounded-sm border shadow-xl light:border-neutral-500 dark:border-neutral-500"
              />
            </TiltBox>

            <TiltBox
              className="w-1/4 absolute top-1/3 left-1/10 z-10"
              onClick={() => openLightbox("ii")}
            >
              <SmartImage
                src={getImg("ii").src}
                alt={getImg("ii").alt}
                className="w-full overflow-hidden rounded-sm border shadow-xl light:border-neutral-500 dark:border-neutral-500"
              />
            </TiltBox>

            <TiltBox
              className="w-1/4 absolute top-35/100 right-1/16 z-10"
              onClick={() => openLightbox("viii")}
            >
              <SmartImage
                src={getImg("viii").src}
                alt={getImg("viii").alt}
                className="w-full overflow-hidden rounded-sm border shadow-xl light:border-neutral-500 dark:border-neutral-500"
              />
            </TiltBox>

            <TiltBox
              className="w-1/4 absolute bottom-1/36 left-1/16 z-10"
              onClick={() => openLightbox("vi")}
            >
              <SmartImage
                src={getImg("vi").src}
                alt={getImg("vi").alt}
                className="w-full overflow-hidden rounded-sm border shadow-xl light:border-neutral-500 dark:border-neutral-500"
              />
            </TiltBox>

            <TiltBox
              className="w-1/4 absolute bottom-1/24 left-1/2 -translate-x-1/2 z-10"
              onClick={() => openLightbox("v")}
            >
              <SmartImage
                src={getImg("v").src}
                alt={getImg("v").alt}
                className="w-full overflow-hidden rounded-sm border shadow-xl light:border-neutral-500 dark:border-neutral-500"
              />
            </TiltBox>

            <TiltBox
              className="w-1/4 absolute bottom-1/40 right-1/24 z-10"
              onClick={() => openLightbox("iv")}
            >
              <SmartImage
                src={getImg("iv").src}
                alt={getImg("iv").alt}
                className="w-full overflow-hidden rounded-sm border shadow-xl light:border-neutral-500 dark:border-neutral-500"
              />
            </TiltBox>
          </div>
        </GalleryAccordion>
      </motion.div>
    </>
  );
}
