import { motion } from "motion/react";
import { useRef, useMemo, useState } from "react";
import { GalleryAccordion } from "./GalleryAccordion";
import { SmartImage } from "@/components/ui/SmartImage";
import { SimpleLightbox } from "@/components/gallery/SimpleLightbox";

// Consolidated Art Images Data
const ART_IMAGES = [
  // 2021
  {
    id: "satyra1",
    src: "https://ik.imagekit.io/j3l1n5k1/gfx/2021/SatyraInsta_0000s_0000_1_ILfiy1Bmw.avif?updatedAt=1768494648586&ik-s=7c2705f372c369085ef27e468771f03c4b4d54ad",
    alt: "SatyraInsta1",
    year: "2021",
  },
  {
    id: "satyra2",
    src: "https://ik.imagekit.io/j3l1n5k1/gfx/2021/SatyraInsta_0000s_0001_2_uGV0wd9edS.avif?updatedAt=1768494648617&ik-s=7b05c15964b0ff679217f4557737bf73513ea6d5",
    alt: "SatyraInsta2",
    year: "2021",
  },
  {
    id: "satyra3",
    src: "https://ik.imagekit.io/j3l1n5k1/gfx/2021/SatyraInsta_0000s_0002_3_fvpQo_Qt_J.avif?updatedAt=1768494648594&ik-s=640c9bce6b54394b0b90ba7e2073ff9f237b79fb",
    alt: "SatyraInsta3",
    year: "2021",
  },
  {
    id: "noise1",
    src: "https://ik.imagekit.io/j3l1n5k1/gfx/2020/IMG_20220825_001426_938_d0IACy5cL.avif?updatedAt=null&ik-s=5a4e206c2360ea7886d9f328b2e6d562ac250184",
    alt: "noise-alt1",
    year: "2021",
  },
  {
    id: "noise2",
    src: "https://ik.imagekit.io/j3l1n5k1/gfx/2020/NoiseSilenceV3-alt2_MLvAYkpxyh.avif?updatedAt=1768494448743&ik-s=12d72d6e97cfc2dc21abb3ec4f2a8140acb41b48",
    alt: "NoiseSilenceV3",
    year: "2021",
  },
  {
    id: "silence1",
    src: "https://ik.imagekit.io/j3l1n5k1/gfx/2020/silenceV2-alt1_ePByHngJ5r.avif?updatedAt=1768494448733&ik-s=cc4694ed84f3e55d3eedff5479905aeec216b8f6",
    alt: "silenceV2",
    year: "2021",
  },
  {
    id: "az1",
    src: "https://ik.imagekit.io/j3l1n5k1/gfx/2020/1_WkncV_4vN.avif?updatedAt=1768494448454&ik-s=ffb786a3c1b6336161b7be78429816a7de3d131b",
    alt: "az1",
    year: "2021",
  },
  {
    id: "az2",
    src: "https://ik.imagekit.io/j3l1n5k1/gfx/2020/2_kgJln_cLHo.avif?updatedAt=1768494448594&ik-s=9639b20008efab6b4ed8efa0017ae2356417c90c",
    alt: "az2",
    year: "2021",
  },
  {
    id: "az3",
    src: "https://ik.imagekit.io/j3l1n5k1/gfx/2020/3_J1p1g4jcSx.avif?updatedAt=1768494448532&ik-s=ac6306a8055fcb4cbcc6c30334c3cf072815399a",
    alt: "az3",
    year: "2021",
  },
  // 2020 - Vinci
  {
    id: "vinci1",
    src: "https://ik.imagekit.io/j3l1n5k1/gfx/2020/Leo2_Trans@0.75x_gHlkggLLp.avif?updatedAt=1768494104512&ik-s=27755626ed409d67bf30df591f7678013312875f",
    alt: "SkullVinci",
    year: "2020",
  },
  {
    id: "vinci2",
    src: "https://ik.imagekit.io/j3l1n5k1/gfx/2020/Leo1_Trans@0.75x_JxmM4pf_6.avif?updatedAt=1768494104415&ik-s=3c21e0ddbc5c94ccd8e0bd2460bebed74abacd4f",
    alt: "ManVinci",
    year: "2020",
  },
  {
    id: "vinci3",
    src: "https://ik.imagekit.io/j3l1n5k1/gfx/2020/Leo3_Trans@0.75x_vuXUcwoiL.avif?updatedAt=1768494104477&ik-s=454d2ddefad66d72d43dbc032cda150c450c1064",
    alt: "WatchVinci",
    year: "2020",
  },
  // 2020 - Mlecznik Digital
  {
    id: "mlecz_digi1",
    src: "https://ik.imagekit.io/j3l1n5k1/gfx/2020/mlecznik/MleczDigi1_Trans_q1Nx4a_Pl.avif?updatedAt=1768852814182&ik-s=187c32d2c21cdc5d7ca1a4dd64ea1ae512753973",
    alt: "digital1",
    year: "2020",
  },
  {
    id: "mlecz_digi2",
    src: "https://ik.imagekit.io/j3l1n5k1/gfx/2020/mlecznik/MleczDigi2_Trans_hCyx1aa_y.avif?updatedAt=1768852814338&ik-s=ed1c4ccc7968e3e1567e6fa8f5615419a5c7b2c7",
    alt: "digital2",
    year: "2020",
  },
  {
    id: "mlecz_digi3",
    src: "https://ik.imagekit.io/j3l1n5k1/gfx/2020/mlecznik/MleczDigi3_Trans_lUatYU5iM.avif?updatedAt=1768852448362&ik-s=7c094ab439bbed5bd4bb779117fc89bb48dd527e",
    alt: "digital3",
    year: "2020",
  },
  // 2020 - Mlecznik Coffee
  {
    id: "mlecz_coff1",
    src: "https://ik.imagekit.io/j3l1n5k1/gfx/2020/mlecznik/MleczCoff1_Trans_cloSmUsKf.avif?updatedAt=1768852435194&ik-s=620a5e5f1b1b5d876bf55efcf1e940264de58833",
    alt: "coffee1",
    year: "2020",
  },
  {
    id: "mlecz_coff2",
    src: "https://ik.imagekit.io/j3l1n5k1/gfx/2020/mlecznik/MleczCoff2_Trans_7KbWD3Pr4.avif?updatedAt=1768852435215&ik-s=e8f96af800dc08638df244e3c244155dcc443283",
    alt: "coffee2",
    year: "2020",
  },
  {
    id: "mlecz_coff3",
    src: "https://ik.imagekit.io/j3l1n5k1/gfx/2020/mlecznik/MleczCoff3_Trans_yOz9b1Q0q.avif?updatedAt=1768852435180&ik-s=ad06bbcebae64daf62c29dba6899a87c5fd8da4a",
    alt: "coffee3",
    year: "2020",
  },
  // 2020 - Mlecznik Ink
  {
    id: "mlecz_ink1",
    src: "https://ik.imagekit.io/j3l1n5k1/gfx/2020/mlecznik/MleczInk1_Trans_AM7gJK-NN.avif?updatedAt=1768852448338&ik-s=945e1953059af796df9689f4775a03a499c0c240",
    alt: "ink1",
    year: "2020",
  },
  {
    id: "mlecz_ink2",
    src: "https://ik.imagekit.io/j3l1n5k1/gfx/2020/mlecznik/MleczInk2_Trans_3dj-H9ulwa.avif?updatedAt=1768852448427&ik-s=b5fb6c09200482a44f74b1c36750f344dc998095",
    alt: "ink2",
    year: "2020",
  },
  {
    id: "mlecz_ink3",
    src: "https://ik.imagekit.io/j3l1n5k1/gfx/2020/mlecznik/MleczInk3_Trans_qM__i6cn2C.avif?updatedAt=1768852448328&ik-s=9982763bd625b74db549a97cb9aaeccbb8cd8462",
    alt: "ink3",
    year: "2020",
  },
  // 2020 - Mlecznik Charcoal
  {
    id: "mlecz_char1",
    src: "https://ik.imagekit.io/j3l1n5k1/gfx/2020/mlecznik/MleczChar1_Trans_kii-61U0Q.avif?updatedAt=1768852448389&ik-s=57e2c7d8f356afef48b4ea51be3152a95822d682",
    alt: "charcoal1",
    year: "2020",
  },
  {
    id: "mlecz_char2",
    src: "https://ik.imagekit.io/j3l1n5k1/gfx/2020/mlecznik/MleczChar2_Trans_MuUwmxF7q.avif?updatedAt=1768852448442&ik-s=f05a3329a4f1f95567220cbd0d636a0c51db0d1f",
    alt: "charcoal2",
    year: "2020",
  },
  {
    id: "mlecz_char3",
    src: "https://ik.imagekit.io/j3l1n5k1/gfx/2020/mlecznik/MleczChar3_Trans_p438VwTfR.avif?updatedAt=1768853132455&ik-s=27199ab31f931bb0ed15a2b810b085b192f58505",
    alt: "charcoal3",
    year: "2020",
  },
  // 2020 - Mlecznik Marker
  {
    id: "mlecz_mark1",
    src: "https://ik.imagekit.io/j3l1n5k1/gfx/2020/mlecznik/MleczMark1_Trans_v7rhGTsCZ.avif?updatedAt=null&ik-s=f4d61a8bc5970746c94a8e1ee9e6de587a064892",
    alt: "marker1",
    year: "2020",
  },
  {
    id: "mlecz_mark2",
    src: "https://ik.imagekit.io/j3l1n5k1/gfx/2020/mlecznik/MleczMark2_Trans_AJavO5uQdC.avif?updatedAt=1768852448467&ik-s=cd8da086e6311856b174e0a249986fec3a0d1475",
    alt: "marker2",
    year: "2020",
  },
  {
    id: "mlecz_mark3",
    src: "https://ik.imagekit.io/j3l1n5k1/gfx/2020/mlecznik/MleczMark3_Trans_yQBihI7xS.avif?updatedAt=1768852448229&ik-s=7296c3c4b0291ae7e2f0ace6aeca90435207bd8f",
    alt: "marker3",
    year: "2020",
  },
  // 2020 - Mlecznik Pencil
  {
    id: "mlecz_pencil1",
    src: "https://ik.imagekit.io/j3l1n5k1/gfx/2020/mlecznik/MleczPencil1_Trans_e42LyviQl.avif?updatedAt=1768852448200&ik-s=f3e6fce1ac2797ff8554d14a0e3e80eaa95c8024",
    alt: "pencil1",
    year: "2020",
  },
  {
    id: "mlecz_pencil2",
    src: "https://ik.imagekit.io/j3l1n5k1/gfx/2020/mlecznik/MleczPencil2_Trans_-8JVWHOYF.avif?updatedAt=1768852448471&ik-s=e06b98b273ba956d25c3c00c7bb2971709baf90c",
    alt: "pencil2",
    year: "2020",
  },
  {
    id: "mlecz_pencil3",
    src: "https://ik.imagekit.io/j3l1n5k1/gfx/2020/mlecznik/MleczPencil3_Trans_rgekudtZJ.avif?updatedAt=1768852448388&ik-s=ebde96d14faddbee4f3e33655caf4b4361e8f03c",
    alt: "pencil3",
    year: "2020",
  },
  // 2020 - Other
  {
    id: "exlibris",
    src: "https://ik.imagekit.io/j3l1n5k1/gfx/2020/Exlibris_Trans_ACSrbSLcnj.avif?updatedAt=1768494041855&ik-s=ad850e21f1570d84e70576b1dac179665b7465e2",
    alt: "exlibris",
    year: "2020",
  },
  {
    id: "lu2",
    src: "https://ik.imagekit.io/j3l1n5k1/gfx/2020/Lu2_Trans_ST1jzTUHmq.avif?updatedAt=1768494041783&ik-s=87976ab20d3d01a460bbd5dfd3079324e5285f44",
    alt: "lu2",
    year: "2020",
  },
  {
    id: "wrists",
    src: "https://ik.imagekit.io/j3l1n5k1/gfx/2020/Wrists_dWZu_KKmPF.avif?updatedAt=1768494041851&ik-s=ebec5c5f87e2b800d25069f895fa19e0e37d8193",
    alt: "wrists",
    year: "2020",
  },
  // 2020 - Poses
  {
    id: "pose7",
    src: "https://ik.imagekit.io/j3l1n5k1/gfx/2020/Pozy7_Trans_IZNIys_nB.avif?updatedAt=1768494041481&ik-s=7720fe73d022d11d226b6bf3c3bcc1168d4e3b89",
    alt: "VII",
    year: "2020",
  },
  {
    id: "pose1",
    src: "https://ik.imagekit.io/j3l1n5k1/gfx/2020/Pozy1_Trans_ZE5egpQ4zG.avif?updatedAt=1768494042074&ik-s=0c5fd4140a7d16590114e4bcf2f19be4ab338ac5",
    alt: "I",
    year: "2020",
  },
  {
    id: "pose3",
    src: "https://ik.imagekit.io/j3l1n5k1/gfx/2020/Pozy3_Trans_W0gGl4O_Kt.avif?updatedAt=1768494042029&ik-s=b86480cb4fc6482ab4b888b9c28f578c5d8e746e",
    alt: "III",
    year: "2020",
  },
  {
    id: "pose2",
    src: "https://ik.imagekit.io/j3l1n5k1/gfx/2020/Pozy2_Trans_HLVuYUWu-K.avif?updatedAt=1768494041713&ik-s=88facdcc57e331f01a9513b8dfa54da208115a87",
    alt: "II",
    year: "2020",
  },
  {
    id: "pose8",
    src: "https://ik.imagekit.io/j3l1n5k1/gfx/2020/Pozy8_Trans_DO7-pTSKX.avif?updatedAt=1768494041635&ik-s=c01429e49ce943605838bbd9c0caedac7aeb3ba3",
    alt: "VIII",
    year: "2020",
  },
  {
    id: "pose6",
    src: "https://ik.imagekit.io/j3l1n5k1/gfx/2020/Pozy6_Trans_JoJmGut2SO.avif?updatedAt=1768494041778&ik-s=75e90e3f40c1aec0e903a47bbb76ea947c8c78c3",
    alt: "VI",
    year: "2020",
  },
  {
    id: "pose5",
    src: "https://ik.imagekit.io/j3l1n5k1/gfx/2020/Pozy5_Trans_pR2jw2XM4K.avif?updatedAt=1768494041766&ik-s=584016b4f759e49c387fc120533e009d706ee231",
    alt: "V",
    year: "2020",
  },
  {
    id: "pose4",
    src: "https://ik.imagekit.io/j3l1n5k1/gfx/2020/Pozy4_Trans_Nj6-MThMhh.avif?updatedAt=1768494041719&ik-s=93d16be4b01b095ef0e76f8ae119bad12c1cb5c8",
    alt: "IV",
    year: "2020",
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

  const openLightbox = (id: string) => {
    const index = ART_IMAGES.findIndex((img) => img.id === id);
    if (index !== -1) {
      setInitialIndex(index);
      setLightboxOpen(true);
    }
  };

  const getImg = (id: string) => ART_IMAGES.find((img) => img.id === id)!;

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
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 rounded-xl overflow-hidden border border-white/10"
          >
            {["satyra1", "satyra2", "satyra3"].map((id) => (
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
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 rounded-xl overflow-hidden border border-white/10"
          >
            {["noise1", "noise2", "silence1"].map((id) => (
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
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 rounded-xl overflow-hidden border border-white/10"
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
            {["vinci1", "vinci2", "vinci3"].map((id) => (
              <TiltBox
                key={id}
                className="scale-75"
                onClick={() => openLightbox(id)}
              >
                <SmartImage
                  src={getImg(id).src}
                  alt={getImg(id).alt}
                  className="w-full overflow-hidden rounded-sm border shadow-xl light:border-neutral-500 dark:border-neutral-500"
                />
              </TiltBox>
            ))}
          </div>

          {/* Mlecznik Digital */}
          <div className="w-full grid grid-cols-3 rounded-sm overflow-hidden border shadow-xl light:border-neutral-500 dark:border-neutral-800">
            {["mlecz_digi1", "mlecz_digi2", "mlecz_digi3"].map((id, index) => {
              // Note: We need the corresponding 'photo' for the background image
              // The original code paired photoXX with digiXX.
              // Assuming consistent ordering or mapping.
              // Let's hardcode the photo logic since 'ART_IMAGES doesn't explicitly link them'
              // Wait, I can just use the mapped method for now, but preserving the hover effect is tricky if I consolidated everything.
              // The original had a 'photo' behind the 'digi' art.
              // For simplicity in this refactor, I will assume the user wants the SimpleLightbox on CLICK.
              // I will keep the hover effect structure.

              // Mapping based on index for simplicity or ID matching
              const photoSrc =
                index === 0
                  ? "https://ik.imagekit.io/j3l1n5k1/gfx/2020/mlecznik/MleczPhoto10_Ux3nBwa1P.avif?updatedAt=1768852516069&ik-s=949ceedbfcfb93117a89e556957ed022d379cae0"
                  : index === 1
                    ? "https://ik.imagekit.io/j3l1n5k1/gfx/2020/mlecznik/MleczPhoto11_h8IVTJDML.avif?updatedAt=1768852516136&ik-s=7e31d5b2add439b10f30fea415a33537363ae9c5"
                    : "https://ik.imagekit.io/j3l1n5k1/gfx/2020/mlecznik/MleczPhoto12_fJ7Ok-Ku_.avif?updatedAt=1768852516246&ik-s=54e4d46a4887a3969ac69f3e4cce71827e1069a2";

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
            {["mlecz_coff1", "mlecz_coff2", "mlecz_coff3"].map((id, index) => {
              const photoSrc =
                index === 0
                  ? "https://ik.imagekit.io/j3l1n5k1/gfx/2020/mlecznik/MleczPhoto13_3hr-3NTsZT.avif?updatedAt=1768852515989&ik-s=05336a7bb0a4af0edb29f2595a8420134f42030b"
                  : index === 1
                    ? "https://ik.imagekit.io/j3l1n5k1/gfx/2020/mlecznik/MleczPhoto14_9vPPnxSKu.avif?updatedAt=null&ik-s=177d09aa526b17bbcae600401aeb0590315f7afb"
                    : "https://ik.imagekit.io/j3l1n5k1/gfx/2020/mlecznik/MleczPhoto15_T9aw3S2Qt.avif?updatedAt=null&ik-s=09461b1b1599f4e37528200f2ae90e1da5fe0d5d";

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

          {/* Mlecznik Ink */}
          <div className="w-full grid grid-cols-3 rounded-sm overflow-hidden border shadow-xl light:border-neutral-500 dark:border-neutral-800">
            {["mlecz_ink1", "mlecz_ink2", "mlecz_ink3"].map((id, index) => {
              const photoSrc =
                index === 0
                  ? "https://ik.imagekit.io/j3l1n5k1/gfx/2020/mlecznik/MleczPhoto1_tvLdZz_lU.avif?updatedAt=null&ik-s=f5367e9182772ea81b93ce065a758c1f6041f584"
                  : index === 1
                    ? "https://ik.imagekit.io/j3l1n5k1/gfx/2020/mlecznik/MleczPhoto2_q0VWEpoWo.avif?updatedAt=1768852516206&ik-s=3acce11329f11ed7c2cd9335f52984fb2b0e6cb4"
                    : "https://ik.imagekit.io/j3l1n5k1/gfx/2020/mlecznik/MleczPhoto3_dPsmKoCl2.avif?updatedAt=1768852516238&ik-s=3fd9f8fb30f445b38da1554bb4a4bfa61a9172a1";

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
            {["mlecz_char1", "mlecz_char2", "mlecz_char3"].map((id, index) => {
              const photoSrc =
                index === 0
                  ? "https://ik.imagekit.io/j3l1n5k1/gfx/2020/mlecznik/MleczPhoto4_7taXllwRe.avif?updatedAt=null&ik-s=57420af69d725079750d7d2167abe7949baae6ad"
                  : index === 1
                    ? "https://ik.imagekit.io/j3l1n5k1/gfx/2020/mlecznik/MleczPhoto5_nBErM3MQi.avif?updatedAt=1768852516207&ik-s=249c2e50b9b2272d79106777340468d3e6149c4c"
                    : "https://ik.imagekit.io/j3l1n5k1/gfx/2020/mlecznik/MleczPhoto6_IYzUppsp8.avif?updatedAt=null&ik-s=757fc643e271e028f72dbb45e39b159d93e952b1";

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
            {["mlecz_mark1", "mlecz_mark2", "mlecz_mark3"].map((id, index) => {
              const photoSrc =
                index === 0
                  ? "https://ik.imagekit.io/j3l1n5k1/gfx/2020/mlecznik/MleczPhoto7_UI7Iyxf-o.avif?updatedAt=1768852516190&ik-s=0fbbaa19d2bf2ca7c84827743cd4764646d0f5d8"
                  : index === 1
                    ? "https://ik.imagekit.io/j3l1n5k1/gfx/2020/mlecznik/MleczPhoto9_Fb_Ll1BW5.avif?updatedAt=null&ik-s=30cdeb78fd4fff5a41ba7fdb3306688866c5ba6c"
                    : "https://ik.imagekit.io/j3l1n5k1/gfx/2020/mlecznik/MleczPhoto8_HFfDMN5zg.avif?updatedAt=null&ik-s=4ad8baabe6f8450bcc15062c608f3b7267cd58c7";

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
            {["mlecz_pencil1", "mlecz_pencil2", "mlecz_pencil3"].map((id) => (
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
                  className="w-full overflow-hidden rounded-sm border shadow-xl light:border-neutral-500 dark:border-neutral-500"
                />
              </TiltBox>
            ))}
          </div>

          {/* Poses */}
          <div className="w-full relative aspect-square rounded-sm  border shadow-xl light:border-neutral-500 dark:border-neutral-800 p-8">
            <TiltBox
              className="w-1/4 absolute top-1/18 left-1/16 z-10"
              onClick={() => openLightbox("pose7")}
            >
              <SmartImage
                src={getImg("pose7").src}
                alt={getImg("pose7").alt}
                className="w-full overflow-hidden rounded-sm border shadow-xl light:border-neutral-500 dark:border-neutral-500"
              />
            </TiltBox>

            <TiltBox
              className="w-1/3 absolute top-1/12 left-1/2 -translate-x-1/2 z-10"
              onClick={() => openLightbox("pose1")}
            >
              <SmartImage
                src={getImg("pose1").src}
                alt={getImg("pose1").alt}
                className="w-full overflow-hidden rounded-sm border shadow-xl light:border-neutral-500 dark:border-neutral-500"
              />
            </TiltBox>

            <TiltBox
              className="w-1/4 absolute top-1/24 right-1/50 z-10"
              onClick={() => openLightbox("pose3")}
            >
              <SmartImage
                src={getImg("pose3").src}
                alt={getImg("pose3").alt}
                className="w-full overflow-hidden rounded-sm border shadow-xl light:border-neutral-500 dark:border-neutral-500"
              />
            </TiltBox>

            <TiltBox
              className="w-1/4 absolute top-1/3 left-1/10 z-10"
              onClick={() => openLightbox("pose2")}
            >
              <SmartImage
                src={getImg("pose2").src}
                alt={getImg("pose2").alt}
                className="w-full overflow-hidden rounded-sm border shadow-xl light:border-neutral-500 dark:border-neutral-500"
              />
            </TiltBox>

            <TiltBox
              className="w-1/4 absolute top-35/100 right-1/16 z-10"
              onClick={() => openLightbox("pose8")}
            >
              <SmartImage
                src={getImg("pose8").src}
                alt={getImg("pose8").alt}
                className="w-full overflow-hidden rounded-sm border shadow-xl light:border-neutral-500 dark:border-neutral-500"
              />
            </TiltBox>

            <TiltBox
              className="w-1/4 absolute bottom-1/36 left-1/16 z-10"
              onClick={() => openLightbox("pose6")}
            >
              <SmartImage
                src={getImg("pose6").src}
                alt={getImg("pose6").alt}
                className="w-full overflow-hidden rounded-sm border shadow-xl light:border-neutral-500 dark:border-neutral-500"
              />
            </TiltBox>

            <TiltBox
              className="w-1/4 absolute bottom-1/24 left-1/2 -translate-x-1/2 z-10"
              onClick={() => openLightbox("pose5")}
            >
              <SmartImage
                src={getImg("pose5").src}
                alt={getImg("pose5").alt}
                className="w-full overflow-hidden rounded-sm border shadow-xl light:border-neutral-500 dark:border-neutral-500"
              />
            </TiltBox>

            <TiltBox
              className="w-1/4 absolute bottom-1/40 right-1/24 z-10"
              onClick={() => openLightbox("pose4")}
            >
              <SmartImage
                src={getImg("pose4").src}
                alt={getImg("pose4").alt}
                className="w-full overflow-hidden rounded-sm border shadow-xl light:border-neutral-500 dark:border-neutral-500"
              />
            </TiltBox>
          </div>
        </GalleryAccordion>
      </motion.div>
    </>
  );
}
