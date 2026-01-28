import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
// import { Quote, Star } from "lucide-react";
import React, { useRef } from "react";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/lib/LanguageContext";
import { Link } from "react-router-dom";
import { ArrowRight, Folder } from "lucide-react";

const testimonialsData = [
  {
    id: 1,
    rotation: -2.5,
    color: "#fff9c4", // Yellow
    pinColor: "#ef5350", // Red
    link: "/blog/fizjotusia25",
  },
  {
    id: 2,
    rotation: 1.8,
    color: "#e1f5fe", // Blue
    pinColor: "#BB669C", // Pink pin
  },
  {
    id: 3,
    rotation: -1.2,
    color: "#f1f8e9", // Green
    pinColor: "#6942F5", // Purple pin
    link: "/blog/mad100",
  },
  {
    id: 4,
    rotation: 1.2,
    color: "#FFD6C4", // Green
    pinColor: "#66bb6a", // Green pin
  },
  {
    id: 5,
    rotation: -2,
    color: "#E1FEF0", // Yellow
    pinColor: "#EF9A50", // Orange pin
    link: "/blog/karola24",
  },
  {
    id: 6,
    rotation: 2,
    color: "#E9EAF8", // Green
    pinColor: "#42A5F5", // Blue pin
    link: "/blog/tom25",
  },
];

function TestimonialNote({ item }: { item: (typeof testimonialsData)[0] }) {
  const { t } = useLanguage();
  const cardRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  // Calculate shadow based on tilt for "height" effect
  const shadowX = useTransform(mouseXSpring, [-0.5, 0.5], [20, -20]);
  const shadowY = useTransform(mouseYSpring, [-0.5, 0.5], [20, -20]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const translated = (t.data.testimonials as any)[item.id] || {};

  const variants = {
    hidden: { opacity: 0, y: 30, rotate: item.rotation },
    visible: {
      opacity: 1,
      y: 0,
      rotate: item.rotation,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      variants={variants}
      whileHover={{
        scale: 1.05,
        zIndex: 50,
        transition: { duration: 0.2 },
      }}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="relative group cursor-pointer"
    >
      {/* Dynamic Shadow Layer */}
      <motion.div
        className="absolute inset-4 -z-10 bg-black/30 blur-xl transition-opacity opacity-20 group-hover:opacity-90"
        style={{
          x: shadowX,
          y: shadowY,
          transform: "translateZ(-20px)",
        }}
      />

      {/* Push Pin (Moved outside the clipped note body) */}
      <div
        className="absolute -top-3 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center pointer-events-none"
        style={{ transform: "translateZ(0px)" }}
      >
        {/* Pin Head */}
        <div
          className="w-7 h-7 rounded-full shadow-lg flex items-center justify-center border-b-2 border-black/20 group-hover:-translate-y-5 group-hover:translate-x-2 transition-all duration-100"
          style={{ backgroundColor: item.pinColor }}
        >
          <div className="w-1.5 h-1.5 bg-white/50 rounded-full mb-1 ml-1" />
        </div>
        {/* Pin Shadow */}
        <div className="w-1 h-4 bg-black/40 blur-[1px] -mt-px origin-top rotate-12 group-hover:h-8 group-hover:blur-xs group-hover:-translate-y-5 group-hover:translate-x-2 transition-all duration-100" />
      </div>

      {/* The Sticky Note Body */}
      <div
        style={{
          backgroundColor: item.color,
          boxShadow:
            "inset 0 0 100px rgba(0,0,0,0.05), 5px 5px 15px rgba(0,0,0,0.1)",
          clipPath:
            "polygon(0 0, 100% 0, 100% calc(100% - 32px), calc(100% - 32px) 100%, 0 100%)",
        }}
        className={cn(
          "p-5 md:p-10 rounded-[2px] relative flex flex-col justify-between min-h-[180px] border-b-2 border-r border-black/5",
        )}
      >
        <img
          src="https://ik.imagekit.io/j3l1n5k1/gfx/Paper-Texture-6_vT91pNbx8.jpg"
          alt=""
          className="w-full h-full object-cover absolute top-0 left-0 mix-blend-soft-light opacity-90"
        />
        <img
          src="https://ik.imagekit.io/j3l1n5k1/gfx/Paper-Texture-6_vT91pNbx8.jpg"
          alt=""
          className="w-full h-full object-cover absolute top-0 left-0 mix-blend-darken opacity-20"
        />
        {/* Paper texture overlay */}
        <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-multiply" />

        <div style={{ transform: "translateZ(30px)" }} className="relative">
          <p className="text-gray-800/90 mb-4 leading-relaxed italic font-serif tracking-tight">
            "{translated.text}"
          </p>
        </div>

        <div
          className="border-t border-black/5 pt-3 flex items-end justify-between"
          style={{ transform: "translateZ(20px)" }}
        >
          <div>
            <h4 className="text-gray-900 font-bold text-lg font-serif">
              {translated.name}
            </h4>
            <p className="text-gray-600/70 text-sm font-medium tracking-wide italic">
              {translated.role}
            </p>
          </div>
          {item.link && (
            <Link
              to={item.link}
              target="_blank"
              className="w-fit absolute bottom-0 right-0"
            >
              <div className="text-[10px] font-mono text-black/70  uppercase border border-black/30 px-1 rounded flex items-center gap-1">
                <Folder width={10} height={10} />
                Zdjecia
                <ArrowRight width={10} height={10} />
              </div>
            </Link>
          )}
          <div
            className={`-rotate-10deg text-[10px] absolute bottom-0 left-12 font-mono text-black/20  uppercase border border-black/10 px-1 rounded mr-6`}
          >
            {t.testimonials.approved}
          </div>
        </div>

        {/* Corner Curl Effect */}
        <div
          className="absolute bottom-0 right-0 w-8 h-8 pointer-events-none"
          style={{ transform: "translateZ(31px)" }}
        >
          {/* Inner shadow for the fold */}
          <div
            className="absolute inset-0 bg-black/10 blur-[1px] translate-x-[0.5px] translate-y-[0.5px]"
            style={{ clipPath: "polygon(0 0, 100% 100%, 0 100%)" }}
          />
          {/* The folded paper face */}
          <div
            className="absolute inset-0"
            style={{
              backgroundColor: item.color,
              filter: "brightness(0.92)",
              clipPath: "polygon(0 0, 100% 100%, 0 100%)",
            }}
          />
          {/* Fold edge highlight reflection */}
          <div
            className="absolute inset-0 bg-linear-to-tl from-white/30 to-transparent "
            style={{ clipPath: "polygon(0 0, 100% 100%, 0.5px 0, 0 0.5px)" }}
          />
        </div>
      </div>
    </motion.div>
  );
}

function OrnateGoldFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative p-[12px] md:p-[60px] bg-neutral-900 group/frame select-none">
      {/* Ambient Light Effect */}
      <div className="absolute top-0 left-0 w-full h-1/2 bg-linear-to-b from-white/10 to-transparent pointer-events-none z-30" />
      {/* Outer Wall Shadow */}
      <div className="absolute inset-8 -z-10 shadow-[0_90px_30px_rgba(0,0,0,0.7)] rounded-lg pointer-events-none" />

      {/* Frame Layers */}
      <div className="absolute inset-0 z-20 pointer-events-none overflow-hidden">
        {/* Layer 1: The Very Outer Bezel (Slightly Rounded edge) */}
        <div className="absolute inset-0 border-4 border-[#3a2a0a] shadow-[inset_0_2px_4px_rgba(252,244,217,0.3)]" />

        {/* Layer 2: Main Outer Molding (The Thick Carved Rope) */}
        <div
          className="absolute inset-[4px] border-8 md:border-14 border-transparent"
          style={{
            borderImage: `repeating-linear-gradient(45deg in hsl, hsl(35,34%,25%) 0px, hsl(39,34%,44%) 4px, hsl(46,35%,55%) 6px, hsl(39,34%,44%) 8px, hsl(35,34%,25%) 12px) 14`,
            boxShadow:
              "inset 0 0 10px rgba(0,0,0,0.8), 0 0 10px rgba(0,0,0,0.5)",
          }}
        />

        {/* Layer 3: Main Gilded Flat Surface (Directional Grain) */}
        <div className="absolute md:inset-[18px] inset-[9px]">
          {/* Top Segment (Horizontal Lines) */}
          <div
            className="absolute top-0 left-0 right-0 md:h-[28px] h-[14px]"
            style={{
              clipPath:
                "polygon(0 0, 100% 0, calc(100% - 32px) 100%, 32px 100%)",
              background: `
                repeating-linear-gradient(0deg, transparent 0px, rgba(92, 64, 0, 0.15) 1px, transparent 3px),
                linear-gradient(to bottom in hsl, hsl(42,57%,47%) 0%, hsl(46,85%,92%) 30%, hsl(46,35%,52%) 60%, hsl(41,21%,26%))
              `,
            }}
          />
          {/* Bottom Segment (Horizontal Lines) */}
          <div
            className="absolute bottom-0 left-0 right-0 md:h-[28px] h-[14px]"
            style={{
              clipPath:
                "polygon(32px 0, calc(100% - 32px) 0, 100% 100%, 0 100%)",
              background: `
                repeating-linear-gradient(0deg, transparent 0px, rgba(92, 64, 0, 0.15) 1px, transparent 3px),
                linear-gradient(to top in hsl, hsl(42,57%,47%) 0%, hsl(46,85%,92%) 30%, hsl(46,35%,52%) 60%, hsl(41,21%,26%))
              `,
            }}
          />
          {/* Left Segment (Vertical Lines) */}
          <div
            className="absolute top-0 bottom-0 left-0 md:w-[32px] w-[14px]"
            style={{
              clipPath:
                "polygon(0 0, 100% 28px, 100% calc(100% - 28px), 0 100%)",
              background: `
                repeating-linear-gradient(90deg, transparent 0px, rgba(92, 64, 0, 0.15) 1px, transparent 3px),
                linear-gradient(to right in hsl, hsl(42,57%,47%) 0%, hsl(46,85%,92%) 30%, hsl(46,35%,52%) 60%, hsl(41,21%,26%))
              `,
            }}
          />
          {/* Right Segment (Vertical Lines) */}
          <div
            className="absolute top-0 bottom-0 right-0 md:w-[32px] w-[14px]"
            style={{
              clipPath:
                "polygon(0 28px, 100% 0, 100% 100%, 0 calc(100% - 28px))",
              background: `
                repeating-linear-gradient(90deg, transparent 0px, rgba(92, 64, 0, 0.15) 1px, transparent 3px),
                linear-gradient(to left in hsl, hsl(42,57%,47%) 0%, hsl(46,85%,92%) 30%, hsl(46,35%,52%) 60%, hsl(41,21%,26%))
              `,
            }}
          />

          {/* Bevel highlights - applying to the border area using inset shadows or separate lines if needed */}
          <div className="absolute -inset-px border-t-white/20 border-l-white/10 border-t border-l pointer-events-none" />
          <div className="absolute -inset-px border-b-black/40 border-r-black/30 border-b border-r pointer-events-none" />
        </div>

        {/* Layer 4: Inner Ornate Molding (Beads/Dots) */}

        {/* Layer 5: Final Inner Step (Deep Shadow cast onto the cork) */}
        <div className="absolute md:inset-[56px] inset-[32px] border border-black/30 shadow-[inset_0_8px_20px_rgba(0,0,0,1)]" />

        {/* Mitre Joints (The diagonal seams at the corners) */}
        {[
          "top-0 left-0 origin-top-left rotate-45",
          "top-0 right-0 origin-top-right -rotate-45",
          "bottom-0 left-0 origin-bottom-left -rotate-45",
          "bottom-0 right-0 origin-bottom-right rotate-45",
        ].map((pos, i) => (
          <div
            key={i}
            className={cn(
              "absolute w-[150px] h-px bg-black/20 z-30 opacity-40 mix-blend-multiply",
              pos,
            )}
          />
        ))}
      </div>

      {/* Content Container (The Cork Board) */}
      <div className="relative z-10 border border-black/50 shadow-[0_0_50px_rgba(0,0,0,0.5)]">
        {children}
      </div>
    </div>
  );
}

export function Testimonials() {
  const { t } = useLanguage();
  return (
    <section className="md:py-32 py-12 relative overflow-hidden">
      <div className="container mx-auto px-2 md:px-6 relative z-10 overflow-visible">
        <OrnateGoldFrame>
          <div className="relative py-12 md:py-24 md:px-12 px-6 dark:bg-neutral-900 bg-neutral-100 overflow-hidden">
            {/* Cork Texture Layers */}
            <div className="absolute inset-0 dark:bg-[#8c6239] bg-white mix-blend-multiply opacity-50" />
            <div className="absolute inset-0 opacity-40 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] contrast-150 brightness-75" />

            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
              whileInView={{ opacity: 1, scale: 1, rotate: -1.5 }}
              viewport={{ once: true }}
              className="relative flex items-center justify-center mx-auto md:mb-12 mb-6 md:scale-100 scale-70"
            >
              {/* Paper Scrap for Title (Clipped) */}
              <div className="relative">
                {/* Tape decoration (Outside clipped scrap) */}
                <div className="absolute -top-4 -right-4 w-16 h-8 bg-white/20 backdrop-blur-[2px] border border-white/10 rotate-12 flex items-center justify-center z-20">
                  <div className="w-full h-px bg-black/5" />
                </div>
                <div className="absolute -top-3 -left-4 w-16 h-8 bg-white/20 backdrop-blur-[2px] border border-white/10 -rotate-36 flex items-center justify-center z-20">
                  <div className="w-full h-px bg-black/5" />
                </div>
                <div
                  className="bg-[#fdfdfd] px-12 py-6 shadow-xl relative transform transition-transform hover:rotate-0 text-center"
                  style={{
                    clipPath:
                      "polygon(2% 0%, 98% 1%, 100% 97%, 97% 100%, 1% 98%, 0% 3%)",
                  }}
                >
                  <img
                    src="https://ik.imagekit.io/j3l1n5k1/gfx/Paper-Texture-6_vT91pNbx8.jpg"
                    alt=""
                    className="w-full h-full object-cover absolute top-0 left-0 mix-blend-soft-light opacity-70"
                  />
                  <img
                    src="https://ik.imagekit.io/j3l1n5k1/gfx/Paper-Texture-6_vT91pNbx8.jpg"
                    alt=""
                    className="w-full h-full object-cover absolute top-0 left-0 mix-blend-darken opacity-20"
                  />
                  <div className="inline-block px-4 py-1.5 bg-neutral-900 text-neutral-200 text-xs font-mono mb-6 rounded shadow-lg uppercase tracking-[0.2em]">
                    {t.testimonials.bulletin}
                  </div>
                  <h2 className="text-5xl md:text-7xl font-bold text-neutral-900 tracking-tighter">
                    {t.testimonials.title}
                  </h2>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20, rotate: 1 }}
              whileInView={{ opacity: 1, x: 0, rotate: 0.5 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="max-w-xl mx-auto md:mb-24 mb-12 relative group md:scale-100 scale-80"
            >
              {/* Pin decoration (Outside clipped scrap) */}
              <div className="absolute group-hover:rotate-5 -top-2 left-1/2 -ms-3 w-6 h-6 rounded-full bg-blue-500 shadow-md flex items-center justify-center border-b-4 border-blue-700 z-20">
                <div className="w-1 h-1 bg-white/40 rounded-full" />
              </div>

              {/* Paper Scrap for Description (Clipped) */}
              <div
                className="bg-[#fffef0] p-8 shadow-lg relative border-b-2 border-black/5 group-hover:-rotate-2 transition-all duration-300"
                style={{
                  clipPath: "polygon(0% 2%, 100% 0%, 98% 98%, 1% 100%, 4% 2%)",
                }}
              >
                <img
                  src="https://ik.imagekit.io/j3l1n5k1/gfx/Paper-Texture-6_vT91pNbx8.jpg"
                  alt=""
                  className="w-full h-full object-cover absolute top-0 left-0 mix-blend-soft-light opacity-70"
                />
                <img
                  src="https://ik.imagekit.io/j3l1n5k1/gfx/Paper-Texture-6_vT91pNbx8.jpg"
                  alt=""
                  className="w-full h-full object-cover absolute top-0 left-0 mix-blend-darken opacity-20"
                />
                <p className="text-gray-800 font-medium text-lg leading-relaxed font-serif italic text-center">
                  "{t.testimonials.description}"
                </p>
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={{
                visible: {
                  transition: {
                    staggerChildren: 0.15,
                  },
                },
              }}
              className="grid grid-cols-1 md:grid-cols-3  gap-16 perspective-[1500px] py-12"
            >
              {testimonialsData.map((item) => (
                <TestimonialNote key={item.id} item={item} />
              ))}
            </motion.div>
          </div>
        </OrnateGoldFrame>
      </div>
    </section>
  );
}
