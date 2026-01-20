import { SmartImage } from "@/components/ui/SmartImage";
import { SameHeightRow } from "../../components/mdx/SameHeightRow";

export function WoodyPost() {
  return (
    <div>
      <div className="BannerWTF bg-(--wood-dark) flex items-center p-16 rounded-3xl w-full gap-9">
        <div className="flex flex-col justify-center items-center p-0 gap-5 grow hover:scale-105 transition-all ease-in-out hover:translate-y-2">
          <h3>FIRE</h3>
          <SmartImage
            className="w-auto h-[80px]"
            width={200}
            height={200}
            src="https://ik.imagekit.io/j3l1n5k1/gfx/project/woody/elements/fire-white_ChMv3IBQ_.avif?updatedAt=1768488946077&ik-s=d07e362ea06041c494d545e4dc3bba159f05312e"
            alt="fire-white"
          />
        </div>
        <div className="flex flex-col justify-center items-center p-0 gap-5 grow hover:scale-105 transition-all ease-in-out hover:translate-y-2">
          <h3>PIZZA</h3>
          <SmartImage
            className="w-auto h-[80px]"
            width={200}
            height={200}
            src="https://ik.imagekit.io/j3l1n5k1/gfx/project/woody/elements/slice-white_cVaueymI3.avif?updatedAt=1768488946039&ik-s=9eb74d3f9070ad84bc7bccac7e7c053adb70d929"
            alt="slice-white"
          />
        </div>
        <div className="flex flex-col justify-center items-center p-0 gap-5 grow hover:scale-105 transition-all ease-in-out hover:translate-y-2">
          <h3>WOOD</h3>
          <SmartImage
            className="w-auto h-[80px]"
            width={200}
            height={200}
            src="https://ik.imagekit.io/j3l1n5k1/gfx/project/woody/elements/plank-white_TkZ1J7zdy.avif?updatedAt=1768488945997&ik-s=f3f5ab148199400e6c8b1c610e109b06f673c40f"
            alt="plank-white"
          />
        </div>
      </div>
      <div className="headingWoody">
        <span className="spanTitle">LOGO ELEMENTS</span>
      </div>
      <div className="flex flex-col flex-wrap">
        <div className="ingridientContainer flex flex-col justify-center items-center gap-12 flex-1 px-16 py-24">
          <div className="flex justify-center items-center gap-12">
            <SmartImage
              className="w-auto h-[80px] hover:scale-110 transition-all ease-in-out hover:rotate-[-15deg]"
              width={200}
              height={200}
              src="https://ik.imagekit.io/j3l1n5k1/gfx/project/woody/elements/salami_2hPJyj3i6.avif?updatedAt=1768489389368&ik-s=b5bed9f5705898836a3a046967f546626de71386"
              alt="salami"
            />
            <SmartImage
              className="w-auto h-[120px] hover:scale-110 transition-all ease-in-out"
              width={200}
              height={200}
              src="https://ik.imagekit.io/j3l1n5k1/gfx/project/woody/elements/mushrooms_DP7ce3BFs.avif?updatedAt=1768489389360&ik-s=a99eb6869fb86a56c36a1b14733c8136829f05cb"
              alt="mushrooms"
            />
            <SmartImage
              className="w-auto h-[80px] hover:scale-110 transition-all ease-in-out hover:rotate-15"
              width={200}
              height={200}
              src="https://ik.imagekit.io/j3l1n5k1/gfx/project/woody/elements/leafs_6bENHk0cL5.avif?updatedAt=1768489389358&ik-s=92529811631c242dafc24da0177d05d9807b52d2"
              alt="leafs"
            />
          </div>
          <h4 className="text-center">
            ingredients referring to Italian flag colors
          </h4>
        </div>
        <div className="ingridientContainer flex flex-col justify-center items-center gap-12 flex-1 px-16 py-24">
          <SmartImage
            className="imgWFT-elements w-[360px] h-auto hover:animate-spin transition-all ease-in-out duration-500"
            width={200}
            height={200}
            src="https://ik.imagekit.io/j3l1n5k1/gfx/project/woody/elements/crust_dW0t-vTTg.avif?updatedAt=1768489389332&ik-s=f1741f7055bd6d1541283fa89ecd821d870ac28b"
            alt="crust"
          />
          <h4 className="text-center">
            the pizza is a resemblance of a natural, organic tree trunk, with
            which the oven is heatedand the edge is similar to a pizzas crust;
            bottom half also looks just like oven’s dome/chamber
          </h4>
        </div>
        <div className="ingridientContainer flex flex-col justify-center items-center gap-12 flex-1 px-16 py-24">
          <SmartImage
            className="imgWFT-elements w-[360px] h-auto hover:scale-110 hover:rotate-12 transition-all ease-in-out"
            width={200}
            height={200}
            src="https://ik.imagekit.io/j3l1n5k1/gfx/project/woody/elements/plank_avyQgRXdG.avif?updatedAt=1768489389420&ik-s=12559f5a94c12d4b57614c87dc9a3df15865a3b3"
            alt="plank"
          />
          <h4 className="text-center">
            wooden plank is what make this pizza special, core value of the
            business that differentiate them
          </h4>
        </div>
        <div className="ingridientContainer flex flex-col justify-center items-center gap-12 flex-1 px-16 py-24">
          <SmartImage
            className="imgWFT-elements w-[360px] h-auto hover:animate-bounce transition-all ease-in-out"
            width={200}
            height={200}
            src="https://ik.imagekit.io/j3l1n5k1/gfx/project/woody/elements/woody-brown_Hz8AaeOoE.avif?updatedAt=1768489389416&ik-s=e606d6ea49768f208d01c2a72662f55d4059179c"
            alt="woody-brown"
          />
          <h4 className="text-center">
            food truck named after the technique of pizza making process
          </h4>
        </div>
        <div className="ingridientContainer flex flex-col justify-center items-center gap-12 flex-1 px-16 py-24">
          <SmartImage
            className="imgWFT-elements w-[360px] h-auto hover:animate-pulse transition-all ease-in-out"
            width={200}
            height={200}
            src="https://ik.imagekit.io/j3l1n5k1/gfx/project/woody/elements/fire-color_gilKfk31qE.avif?updatedAt=1768489389421&ik-s=0a8ebdb29f3aff0e7be256af7bb3d63bcd275e2a"
            alt="fire-color"
          />
          <h4 className="text-center">
            fire flames inspired by kashubian patterns
          </h4>
        </div>
        <div className="ingridientContainer flex flex-col justify-center items-center gap-12 flex-1 px-16 py-24">
          <SmartImage
            className="imgWFT-elements w-[360px] h-auto hover:scale-110 hover:-translate-y-4 transition-all ease-in-out"
            width={200}
            height={200}
            src="https://ik.imagekit.io/j3l1n5k1/gfx/project/woody/elements/brick-oven_71H2mk06sI.avif?updatedAt=1768489389549&ik-s=5facee199031f8d6c0a6d4c81833739b16728965"
            alt="brick-oven"
          />
          <h4 className="text-center">
            brick fundaments of an oven, refers to trucks visuals,
            <br /> shaped like an open chamber to envelop the fire
          </h4>
        </div>
      </div>
      <div className="headingWoody">
        <span className="spanTitle">INGRIDIENTS</span>
      </div>
      <div className="grid grid-cols-3 gap-12 justify-between mb-16 w-full">
        <div className="flex flex-col items-center max-w-[260px] place-self-start gap-12">
          <SmartImage
            className="w-auto h-[80px] scale-y-150 -scale-x-150 transition-all ease-in-out duration-500 hover:rotate-[-15deg] hover:translate-y-[320px]"
            width={200}
            height={200}
            src="https://ik.imagekit.io/j3l1n5k1/gfx/project/woody/elements/leafs_6bENHk0cL5.avif?updatedAt=1768489389358&ik-s=92529811631c242dafc24da0177d05d9807b52d2"
            alt=""
          />
          <div className="max-w-[260px] H5 font-medium text-center uppercase text-wood-cream">
            olive, spinach, arugula, basil
          </div>
        </div>
        <div className="flex flex-col items-center place-self-center max-w-[260px] gap-12">
          <SmartImage
            className="w-auto h-[80px] scale-[200%] transition-all ease-in-out duration-500 hover:rotate-[-15deg] hover:translate-y-[320px]"
            width={200}
            height={200}
            src="https://ik.imagekit.io/j3l1n5k1/gfx/project/woody/elements/mushrooms_DP7ce3BFs.avif?updatedAt=1768489389360&ik-s=a99eb6869fb86a56c36a1b14733c8136829f05cb"
            alt=""
          />
          <div className="H5 font-medium text-center uppercase text-wood-cream">
            champignons, mozzarella
          </div>
        </div>
        <div className="flex flex-col items-center max-w-[260px] place-self-end gap-12">
          <SmartImage
            className="w-auto h-[80px] scale-y-150 -scale-x-150 transition-all ease-in-out duration-500 hover:rotate-[-15deg] hover:translate-y-[320px]"
            width={200}
            height={200}
            src="https://ik.imagekit.io/j3l1n5k1/gfx/project/woody/elements/salami_2hPJyj3i6.avif?updatedAt=1768489389368&ik-s=b5bed9f5705898836a3a046967f546626de71386"
            alt=""
          />
          <div className="H5 font-medium text-center uppercase text-wood-cream">
            sauce, tomatoes, salami
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 w-full justify-center overflow-clip rounded-2xl">
        <div className="w-full flex flex-col justify-start">
          <div className="box w-[260px] h-[600px] bg-[--wood-green] rounded-t-2xl"></div>
          <svg height="600" width="600" className="fill-[--wood-green]">
            <polygon
              points="0,0 0,600 410,600 260,0  "
              style={{ fillRule: "nonzero" }}
            ></polygon>
          </svg>
          <div className="box w-full h-[600px] bg-[--wood-green]"></div>
        </div>
        <div className="w-full flex flex-col justify-start items-center">
          <div className="box w-[260px] h-[600px] bg-[--wood-white] rounded-t-2xl"></div>
          <svg height="600" width="600" className="fill-[--wood-white]">
            <polygon
              points="170,0 95,600 505,600 430,0  "
              style={{ fillRule: "nonzero" }}
            ></polygon>
          </svg>
          <div className="box w-full h-[600px] bg-[--wood-white]"></div>
        </div>
        <div className="w-full flex flex-col justify-end items-end">
          <div className="box w-[260px] h-[600px] bg-[--wood-red] rounded-t-2xl"></div>
          <svg
            height="600"
            width="600"
            className="fill-[--wood-red] -scale-x-100"
          >
            <polygon
              points="0,0 0,600 410,600 260,0  "
              style={{ fillRule: "nonzero" }}
            ></polygon>
          </svg>
          <div className="box w-full h-[600px] bg-[--wood-red]"></div>
        </div>
      </div>
      <div className="H3 uppercase flex justify-center mt-16 text-wood-cream">
        Italian flag
      </div>
      <div className="headingWoody">
        <span className="spanTitle">FIRE</span>
      </div>
      <div className="BannerWTF bg-[--wood-cream] grid grid-rows-2 grid-cols-4 gap-9 rounded-3xl p-16">
        <div className="flex flex-col gap-1 items-center justify-center">
          <SmartImage
            className="w-full h-auto"
            width={200}
            height={200}
            src="https://ik.imagekit.io/j3l1n5k1/gfx/project/woody/fire/wisienka_9E7o7S5YM.avif?updatedAt=1768489419382&ik-s=87031615effa5312ca491e1d566c5ca65e183214"
            alt=""
          />
          <span className="text-wood-dark text-[20px] italic">cherry</span>
        </div>
        <div className="flex flex-col gap-1 items-center justify-center">
          <SmartImage
            className="w-full h-auto"
            width={200}
            height={200}
            src="https://ik.imagekit.io/j3l1n5k1/gfx/project/woody/fire/pak_9LsrGp1kwR.avif?updatedAt=1768489419454&ik-s=1566f3856f9a613c693da3706fbb98bcdcba233a"
            alt=""
          />
          <span className="text-wood-dark text-[20px] italic">bud</span>
        </div>
        <div className="flex flex-col gap-1 items-center justify-center">
          <SmartImage
            className="w-full h-auto"
            width={200}
            height={200}
            src="https://ik.imagekit.io/j3l1n5k1/gfx/project/woody/fire/gwiazda_kZKDR_qP-J.avif?updatedAt=1768489419485&ik-s=6ad8ab55464eaf1ff7f9bbd3f0090d30a374e357"
            alt=""
          />
          <span className="text-wood-dark text-[20px] italic">star</span>
        </div>
        <div className="flex flex-col gap-1 items-center justify-center">
          <SmartImage
            className="w-full h-auto"
            width={200}
            height={200}
            src="https://ik.imagekit.io/j3l1n5k1/gfx/project/woody/fire/lisc%20otsu_9ga6O-uVm.avif?updatedAt=1768489419373&ik-s=4bd5c424504a91914307507a5c1e3b9c199daf9d"
            alt=""
          />
          <span className="text-wood-dark text-[20px] italic">
            thistle leaf
          </span>
        </div>
        <div className="flex flex-col gap-1 items-center justify-center">
          <SmartImage
            className="w-full h-auto"
            width={200}
            height={200}
            src="https://ik.imagekit.io/j3l1n5k1/gfx/project/woody/fire/tulipan3_tPjDDOB-HB.avif?updatedAt=1768489419472&ik-s=b1954e72a7079939497aeb55829af42c62c6bca0"
            alt=""
          />
          <span className="text-wood-dark text-[20px] italic">tulip</span>
        </div>
        <div className="flex flex-col gap-1 items-center justify-center">
          <SmartImage
            className="w-full h-auto"
            width={200}
            height={200}
            src="https://ik.imagekit.io/j3l1n5k1/gfx/project/woody/fire/palmeta_RsnmyPU5jR.avif?updatedAt=1768489419470&ik-s=e786f14f84daa565c1ddcfd7bda571d1f57532fd"
            alt=""
          />
          <span className="text-wood-dark text-[20px] italic">palmetto</span>
        </div>
        <div className="flex flex-col gap-1 items-center justify-center">
          <SmartImage
            className="w-full h-auto"
            width={200}
            height={200}
            src="https://ik.imagekit.io/j3l1n5k1/gfx/project/woody/fire/tulipan1_VSJcLd5782.avif?updatedAt=1768489419459&ik-s=a2a1d4753bb1341e527f45165343c80b26ba4317"
            alt=""
          />
          <span className="text-wood-dark text-[20px] italic">tulip</span>
        </div>
      </div>
      <div className="BannerWTF bg-[--wood-cream] grid grid-flow-col items-center gap-12 rounded-3xl p-16 my-16">
        <SmartImage
          className="w-full h-auto"
          width={200}
          height={200}
          src="https://ik.imagekit.io/j3l1n5k1/gfx/project/woody/fire/fire1_RAjPzM5R4.avif?updatedAt=1768489419395&ik-s=cbd897f8866090de3709bada083583aaa0f1ca30"
          alt=""
        />
        <SmartImage
          className="w-full h-auto"
          width={200}
          height={200}
          src="https://ik.imagekit.io/j3l1n5k1/gfx/project/woody/fire/fire0_YOv7wa5-Eo.avif?updatedAt=1768489419454&ik-s=20cc33b54aea766c477189115e9a32f79ad767d6"
          alt=""
        />
        <SmartImage
          className="w-full h-auto"
          width={200}
          height={200}
          src="https://ik.imagekit.io/j3l1n5k1/gfx/project/woody/fire/firev2_0k314u4Qu.avif?updatedAt=1768489419427&ik-s=898bbe1a21eb26254ec36604bd9c027c033bf26e"
          alt=""
        />
        <SmartImage
          className="w-full h-auto"
          width={200}
          height={200}
          src="https://ik.imagekit.io/j3l1n5k1/gfx/project/woody/fire/firev3_AelaYP6ct2.avif?updatedAt=1768489419394&ik-s=24eb14d00c70d1f6e57c4445ec5f6c0550931d4b"
          alt=""
        />
        <SmartImage
          className="w-full h-auto"
          width={200}
          height={200}
          src="https://ik.imagekit.io/j3l1n5k1/gfx/project/woody/fire/firev4_oMbupp194.avif?updatedAt=1768489419464&ik-s=622a28f84b330d4aee9713b15115481be7ae8f9d"
          alt=""
        />
        <SmartImage
          className="w-full h-auto"
          width={200}
          height={200}
          src="https://ik.imagekit.io/j3l1n5k1/gfx/project/woody/fire/firev5_F_r8EqX50B.avif?updatedAt=1768489419498&ik-s=245c3df83e9677b73ded31ed1b0f8f83b64df250"
          alt=""
        />
        <SmartImage
          className="w-full h-auto"
          width={200}
          height={200}
          src="https://ik.imagekit.io/j3l1n5k1/gfx/project/woody/fire/firev6_BymmV_XVbM.avif?updatedAt=1768489419485&ik-s=e7f066beb15ecfa3a08e17c4c8a2b0615fed2dab"
          alt=""
        />
        <SmartImage
          className="w-full h-auto"
          width={200}
          height={200}
          src="https://ik.imagekit.io/j3l1n5k1/gfx/project/woody/elements/fire-color_gilKfk31qE.avif?updatedAt=1768489389421&ik-s=0a8ebdb29f3aff0e7be256af7bb3d63bcd275e2a"
          alt=""
        />
      </div>
      <div className="BannerWTF bg-[--wood-dark] rounded-3xl p-16">
        <div className="flex flex-col justify-center items-center p-0 gap-5 grow">
          <div className="headingWoody" style={{ padding: "0px" }}>
            <span className="spanTitle">CUSTOM MADE FONT</span>
          </div>
          <SmartImage
            width={800}
            height={200}
            src="https://ik.imagekit.io/j3l1n5k1/gfx/project/woody/customfont_SjlxIK7NRr.avif?updatedAt=1768489308578&ik-s=70bc99d82e41f5d502ea113cc6dc01c39c36b491"
            alt=""
          />
        </div>
      </div>
      <div className="headingWoody">
        <span className="spanTitle">USED FONTS</span>
      </div>
      <div className="fontContainer flex flex-col gap-12">
        <div className="fontWrapper flex flex-row gap-6 w-full justify-between">
          <span className="corbelNormal text-4xl text-wood-cream uppercase">
            CORBEL
          </span>
          <div className="flex flex-col items-end gap-3">
            <p className="corbelNormal text-4xl text-wood-cream uppercase">
              ABCDEFGHIJKLMNOPRSTUWXYZ
            </p>
            <p className="corbelNormal text-4xl text-wood-cream lowercase">
              ABCDEFGHIJKLMNOPRSTUWXYZ
            </p>
          </div>
        </div>
        <div className="fontWrapper flex flex-row gap-6 w-full justify-between">
          <span className="corbelNormal text-4xl text-wood-cream italic uppercase">
            CORBEL Italic{" "}
          </span>
          <div className="flex flex-col items-end gap-3">
            <p className="corbelNormal text-4xl text-wood-cream italic uppercase">
              ABCDEFGHIJKLMNOPRSTUWXYZ
            </p>
            <p className="corbelNormal text-4xl text-wood-cream italic lowercase">
              ABCDEFGHIJKLMNOPRSTUWXYZ
            </p>
          </div>
        </div>
        <div className="fontWrapper flex flex-row gap-6 w-full justify-between">
          <span className="corbelNormal text-4xl text-wood-cream font-bold uppercase">
            CORBEL Bold{" "}
          </span>
          <div className="flex flex-col items-end gap-3">
            <p className="corbelNormal text-4xl text-wood-cream font-bold uppercase">
              ABCDEFGHIJKLMNOPRSTUWXYZ
            </p>
            <p className="corbelNormal text-4xl text-wood-cream font-bold lowercase">
              ABCDEFGHIJKLMNOPRSTUWXYZ
            </p>
          </div>
        </div>
      </div>

      <div className="headingWoody">
        <span className="spanTitle">COLOR PALETTE</span>
      </div>
      <div className="colorPalette font-semibold flex p-0 self-stretch rounded-3xl overflow-hidden h-[820px]">
        <div className="colorStripe flex flex-col justify-end items-center px-9 py-24 grow bg-[--wood-dark]">
          #602626
        </div>
        <div className="colorStripe flex flex-col justify-end items-center px-9 py-24 grow bg-[--wood-brown]">
          #BB8E65
        </div>
        <div className="colorStripe text-wood-dark flex flex-col justify-end items-center px-9 py-24 grow bg-[--wood-cream]">
          #E9BE95
        </div>
        <div className="colorStripe text-wood-dark flex flex-col justify-end items-center px-9 py-24 grow bg-[--wood-light]">
          #F3D8BF
        </div>
        <div className="colorStripe text-wood-dark flex flex-col justify-end items-center px-9 py-24 grow bg-[--wood-white]">
          #FDF7F2
        </div>
        <div className="colorStripe flex flex-col justify-end items-center px-9 py-24 grow bg-[--wood-red]">
          #FF3C3C
        </div>
        <div className="colorStripe flex flex-col justify-end items-center px-9 py-24 grow bg-[--wood-green]">
          #23BE1C
        </div>
      </div>

      <div className="headingWoody">
        <span className="spanTitle">SKETCHES</span>
      </div>
      <div className="sketchContain flex flex-col items-center justify-center p-0 overflow-hidden rounded-3xl w-full bg-[--wood-cream]">
        <SmartImage
          className="w-full h-auto"
          width={800}
          height={200}
          src="https://ik.imagekit.io/j3l1n5k1/gfx/project/woody/sketch/Sketchs_qktzd_jL9.avif?updatedAt=1768489132441&ik-s=d5c4946c67c1dcd3c81cfcc7bb0f90619c927ce9"
          alt=""
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 justify-center items-center gap-9">
          <SmartImage
            className="w-full h-auto"
            width={800}
            height={200}
            src="https://ik.imagekit.io/j3l1n5k1/gfx/project/woody/sketch/logoSketch4_caUysgSkD.avif?updatedAt=null&ik-s=3409a3f7507ea627520c8b8455f4b8c54861d545"
            alt=""
          />
          <SmartImage
            width={800}
            height={200}
            src="https://ik.imagekit.io/j3l1n5k1/gfx/project/woody/sketch/logoSketch3_XnODm18BE.avif?updatedAt=null&ik-s=452f7a139653efd55929fc3aa614863a36a935c8"
            alt=""
          />
          <SmartImage
            width={800}
            height={200}
            src="https://ik.imagekit.io/j3l1n5k1/gfx/project/woody/sketch/logoSketch2_Gcbj8SWlz.avif?updatedAt=null&ik-s=623d69dff8b8e156fa3beb981d1e0d15d00c44f7"
            alt=""
          />
          <SmartImage
            width={800}
            height={200}
            src="https://ik.imagekit.io/j3l1n5k1/gfx/project/woody/sketch/logoSketch1_A58txEg69.avif?updatedAt=null&ik-s=434db1b04a4b596873968011d2fee7b0b47b2b16"
            alt=""
          />
        </div>
      </div>

      <div className="headingWoody">
        <span className="spanTitle">LOGOTYPE</span>
      </div>
      <div className="BannerWTF bg-[--wood-cream] grid grid-flow-col gap-9 rounded-3xl p-16">
        <SmartImage
          className="w-full h-auto hover:animate-bounce transition-all duration-200 ease-in-out"
          width={800}
          height={200}
          src="https://ik.imagekit.io/j3l1n5k1/gfx/project/woody/logotype/woodyv0_PgvQIBbZ6.avif?updatedAt=1768489271850&ik-s=4881588b0be161c8bf15354eebd15094d6d1de2b"
          alt=""
        />

        <SmartImage
          className="w-full h-auto hover:animate-bounce transition-all duration-200 ease-in-out"
          width={800}
          height={200}
          src="https://ik.imagekit.io/j3l1n5k1/gfx/project/woody/logotype/woodyv1_c1LoBG-cJ.avif?updatedAt=1768489271931&ik-s=f7d5ee3184094b8cecc55d5204852244d792bdb6"
          alt=""
        />

        <SmartImage
          className="w-full h-auto hover:animate-bounce transition-all duration-200 ease-in-out"
          width={800}
          height={200}
          src="https://ik.imagekit.io/j3l1n5k1/gfx/project/woody/logotype/woodyv2_Y_tT2y9Mb.avif?updatedAt=1768489271955&ik-s=7bc10c856cd736bf19e2f72392b936e5a953cffa"
          alt=""
        />
        <SmartImage
          className="w-full h-auto hover:animate-bounce transition-all duration-200 ease-in-out"
          width={800}
          height={200}
          src="https://ik.imagekit.io/j3l1n5k1/gfx/project/woody/logotype/woodyv3_E0aHar9ad.avif?updatedAt=1768489271599&ik-s=2fe6e491e8cf09047126ac69519e385c7ed3f1d8"
          alt=""
        />
        <SmartImage
          className="w-full h-auto hover:animate-bounce transition-all duration-200 ease-in-out"
          width={800}
          height={200}
          src="https://ik.imagekit.io/j3l1n5k1/gfx/project/woody/logotype/woodyv4_gNLHnYYZg.avif?updatedAt=1768489271841&ik-s=e59fc02f6515199f7add2bdab48a1db3bf024de6"
          alt=""
        />
        <SmartImage
          className="w-full h-auto hover:animate-bounce transition-all duration-200 ease-in-out"
          width={800}
          height={200}
          src="https://ik.imagekit.io/j3l1n5k1/gfx/project/woody/logotype/woodyv5_iZ5dqeM2z.avif?updatedAt=1768489271898&ik-s=92b4baee7a3202abb0d71fbaab64edc75e2a66d2"
          alt=""
        />

        <SmartImage
          className="w-full h-auto hover:animate-bounce transition-all duration-200 ease-in-out"
          width={800}
          height={200}
          src="https://ik.imagekit.io/j3l1n5k1/gfx/project/woody/logotype/woodyv6_k0NSK1aht.avif?updatedAt=1768489271859&ik-s=0d2a43df8e0c962fb386b03d72e665467c26b012"
          alt=""
        />
      </div>

      <div className="headingWoody">
        <span className="spanTitle">PLANK</span>
      </div>
      <div className="BannerWTF bg-[--wood-cream] grid grid-flow-col gap-9 rounded-3xl p-16">
        <SmartImage
          className="w-auto h-[80px] hover:rotate-15 transition-all duration-200 ease-in-out"
          width={800}
          height={200}
          src="https://ik.imagekit.io/j3l1n5k1/gfx/project/woody/plank/plank0_ucwjXbYZH.avif?updatedAt=1768489076347&ik-s=d7d9ff986e2dc222c76f5e123256d5c51890316e"
          alt=""
        />
        <SmartImage
          className="w-auto h-[80px] hover:rotate-15 transition-all duration-200 ease-in-out"
          width={800}
          height={200}
          src="https://ik.imagekit.io/j3l1n5k1/gfx/project/woody/plank/plankv1_EMdKNoADU.avif?updatedAt=1768489076396&ik-s=4ac067695c422b272c5c02142ba1e2688294eeac"
          alt=""
        />
        <SmartImage
          className="w-auto h-[80px] hover:rotate-15 transition-all duration-200 ease-in-out"
          width={800}
          height={200}
          src="https://ik.imagekit.io/j3l1n5k1/gfx/project/woody/plank/plankv2__yDnomS2J.avif?updatedAt=1768489076377&ik-s=dc8b55cbb1ee4f778961f8a182ad4f64494a36cf"
          alt=""
        />
        <SmartImage
          className="w-auto h-[80px] hover:rotate-15 transition-all duration-200 ease-in-out"
          width={800}
          height={200}
          src="https://ik.imagekit.io/j3l1n5k1/gfx/project/woody/plank/plankv3_E6ohNYCbF.avif?updatedAt=1768489076370&ik-s=8bf0d16787a90bdd112d98e65672de71005de19e"
          alt=""
        />
      </div>

      <div className="headingWoody">
        <span className="spanTitle">LOGO VARIANTS</span>
      </div>
      <div className="BannerWTF bg-[--wood-cream] grid grid-cols-3 gap-24 p-12 rounded-3xl">
        <SmartImage
          className="w-full h-auto hover:scale-110 transition-all duration-200 ease-in-out"
          width={800}
          height={200}
          src="https://ik.imagekit.io/j3l1n5k1/gfx/project/woody/logo/logov0_lrYpB51BAK.avif?updatedAt=1768489292593&ik-s=4b01828d8871c4ee19ade7856f271938467b86c1"
          alt=""
        />
        <SmartImage
          className="w-full h-auto hover:scale-110 transition-all duration-200 ease-in-out"
          width={800}
          height={200}
          src="https://ik.imagekit.io/j3l1n5k1/gfx/project/woody/logo/logov1_beM1VEqvJ.avif?updatedAt=1768489293242&ik-s=f36596ac1a9e1312845e56c449a84917d7b7c403"
          alt=""
        />
        <SmartImage
          className="w-full h-auto hover:scale-110 transition-all duration-200 ease-in-out"
          width={800}
          height={200}
          src="https://ik.imagekit.io/j3l1n5k1/gfx/project/woody/logo/logov2_EMx8Q1U7a.avif?updatedAt=1768489293595&ik-s=645249481abb8a70bd0838362c352cf4cbde6c5c"
          alt=""
        />

        <SmartImage
          className="w-full h-auto hover:scale-110 transition-all duration-200 ease-in-out"
          width={800}
          height={200}
          src="https://ik.imagekit.io/j3l1n5k1/gfx/project/woody/logo/logov4_c0NpHKmHz.avif?updatedAt=1768489293741&ik-s=b1451103f770df2f4804e05abbb0207d6255fd9d"
          alt=""
        />
        <SmartImage
          className="w-full h-auto hover:scale-110 transition-all duration-200 ease-in-out"
          width={800}
          height={200}
          src="https://ik.imagekit.io/j3l1n5k1/gfx/project/woody/logo/logov5_3c5l8xnpiF.avif?updatedAt=1768489293875&ik-s=170891e38702bab1e01c1b01eb7e323e6785d829"
          alt=""
        />
        <SmartImage
          className="w-full h-auto hover:scale-110 transition-all duration-200 ease-in-out"
          width={800}
          height={200}
          src="https://ik.imagekit.io/j3l1n5k1/gfx/project/woody/logo/logov6_TdH2A8JJo.avif?updatedAt=1768489293053&ik-s=37255213bf59f328042325497ba47570b53b7e20"
          alt=""
        />
        <SmartImage
          className="w-full h-auto hover:scale-110 transition-all duration-200 ease-in-out"
          width={800}
          height={200}
          src="https://ik.imagekit.io/j3l1n5k1/gfx/project/woody/logo/logov7_pgr52kHej5.avif?updatedAt=1768489293607&ik-s=bf68d589bdfe02bd06d93c3da87cde586e790678"
          alt=""
        />
        <SmartImage
          className="w-full h-auto hover:scale-110 transition-all duration-200 ease-in-out"
          width={800}
          height={200}
          src="https://ik.imagekit.io/j3l1n5k1/gfx/project/woody/logo/logov8_VrPZHONAQ.avif?updatedAt=1768489293002&ik-s=76f111cf0b81e50ae80cecbc98c4e9a7cd3c2980"
          alt=""
        />

        <SmartImage
          className="w-full h-auto hover:scale-110 transition-all duration-200 ease-in-out"
          width={800}
          height={200}
          src="https://ik.imagekit.io/j3l1n5k1/gfx/project/woody/logo/logov9_-h9ovAAYeB.avif?updatedAt=1768489293148&ik-s=6037dcf59048890fabd9ea0f7f1c4183215386e5"
          alt=""
        />
        <SmartImage
          className="w-full h-auto hover:scale-110 transition-all duration-200 ease-in-out"
          width={800}
          height={200}
          src="https://ik.imagekit.io/j3l1n5k1/gfx/project/woody/logo/logov10_6Ij06mJcf.avif?updatedAt=1768489293140&ik-s=42cca483443791bf67cb55c1c943e1a22ae30e5d"
          alt=""
        />
        <SmartImage
          className="w-full h-auto hover:scale-110 transition-all duration-200 ease-in-out"
          width={800}
          height={200}
          src="https://ik.imagekit.io/j3l1n5k1/gfx/project/woody/logo/logov11_K6hzpx-Pz.avif?updatedAt=1768489293121&ik-s=20517a2cdc6889c46a291f0751682dfb02763923"
          alt=""
        />
        <SmartImage
          className="w-full h-auto hover:scale-110 transition-all duration-200 ease-in-out"
          width={800}
          height={200}
          src="https://ik.imagekit.io/j3l1n5k1/gfx/project/woody/logo/logov12_n-k8xXKyly.avif?updatedAt=1768489293182&ik-s=7a2cd5cc988a420376e75bfc8e181e99afd20549"
          alt=""
        />
      </div>

      <div className="headingWoody">
        <span className="spanTitle">BUSINESS CARD</span>
      </div>

      <div className="sketchContain flex flex-col items-center justify-center p-0 overflow-hidden rounded-3xl w-full bg-[--wood-cream]">
        <div className="rowIMGWTF flex w-full">
          <SmartImage
            className="w-1/2 h-auto"
            src="https://ik.imagekit.io/j3l1n5k1/gfx/project/woody/card/Visa2v7_7556MxFei.avif?updatedAt=1768489348231&ik-s=d6d063447fab64a727180bad1ed5819ac7a0d663"
            alt=""
          />

          <SmartImage
            className="w-1/2 h-auto"
            src="https://ik.imagekit.io/j3l1n5k1/gfx/project/woody/card/Visa2v6_RezF8LoSJ.avif?updatedAt=1768489348304&ik-s=f2eca05b6bd5c4c3d6ddd0993f075884c63a21ab"
            alt=""
          />
        </div>
        <div className="rowIMGWTF flex w-full">
          <SmartImage
            className="w-1/2 h-auto bg-contain"
            src="https://ik.imagekit.io/j3l1n5k1/gfx/project/woody/card/visa-front_ziOsUPV0q.avif?updatedAt=1768489347991&ik-s=e36a4d55bf42912917d6c5e2e11acdbf9501e2af"
            alt=""
          />
          <SmartImage
            className="w-1/2 h-auto bg-contain"
            src="https://ik.imagekit.io/j3l1n5k1/gfx/project/woody/card/visa2_QBlTkFXbm_.avif?updatedAt=1768489348231&ik-s=7bb6d34cdeef7b746d66f54768968677e8f1e0a0"
            alt=""
          />
        </div>
        <div className="rowIMGWTF flex w-full">
          <SmartImage
            className="w-1/2 h-auto bg-contain"
            width={800}
            height={200}
            src="https://ik.imagekit.io/j3l1n5k1/gfx/project/woody/card/Visa2v5_tidqR7zpQV.avif?updatedAt=1768489348277&ik-s=c503eaebc8b684305e40df2563bbeb3603e0dcc6"
            alt=""
          />
          <SmartImage
            className="w-1/2 h-auto bg-contain"
            width={800}
            height={200}
            src="https://ik.imagekit.io/j3l1n5k1/gfx/project/woody/card/Visa2v4_7uUkVuRQOA.avif?updatedAt=1768489348243&ik-s=4d8aeeedfca14a527e5836a1b415eec1cdfe792c"
            alt=""
          />
        </div>
      </div>

      <div className="headingWoody">
        <span className="spanTitle">FLYER DESIGN</span>
      </div>
      <div className="sketchContain flex flex-col items-center justify-center p-0 overflow-hidden rounded-3xl w-full bg-[--wood-cream]">
        <SmartImage
          className="w-full h-auto bg-cover"
          width={800}
          height={200}
          src="https://ik.imagekit.io/j3l1n5k1/gfx/project/woody/flyer/Leafletv2_mWORCKSgQ.avif?updatedAt=1768489433818&ik-s=fbdc6d99b146b64eee4f0a7a47b85c3683717b79"
          alt=""
        />
        <div className="rowIMGWTF flex">
          <SmartImage
            className="w-1/2 h-auto bg-cover"
            width={800}
            height={200}
            src="https://ik.imagekit.io/j3l1n5k1/gfx/project/woody/flyer/A6spec1_iIxtqT-WG.avif?updatedAt=1768489433979&ik-s=d7e894350460cd11393421a790c5f72d2967b5a2"
            alt=""
          />
          <SmartImage
            className="w-1/2 h-auto bg-cover"
            width={800}
            height={200}
            src="https://ik.imagekit.io/j3l1n5k1/gfx/project/woody/flyer/A6spec_BkE-o-M6P.avif?updatedAt=1768489433755&ik-s=47c41f4ea1020993e7933b43fd7f96915c6094fe"
            alt=""
          />
        </div>
      </div>

      <div className="headingWoody">
        <span className="spanTitle">FOOD TRUCK</span>
      </div>
      <div className="sketchContain flex flex-col items-center justify-center p-0 overflow-hidden rounded-3xl w-full bg-[--wood-cream]">
        <SameHeightRow
          images={[
            {
              src: "https://ik.imagekit.io/j3l1n5k1/gfx/project/woody/photo/20210221-IMG_20190821_194912-1_vq3VZvcIa.avif?updatedAt=1768489240048&ik-s=22d279a88496cdb2751363de9000d347c76dd7f5",
              alt: "",
            },
            {
              src: "https://ik.imagekit.io/j3l1n5k1/gfx/project/woody/photo/20190725-truck2_f0O5oqaJs.avif?updatedAt=1768489239924&ik-s=ba669c5f9e9937f0927c4d7f2bf1843ab42ddb34",
              alt: "",
            },
          ]}
        ></SameHeightRow>
        <SameHeightRow
          images={[
            {
              src: "https://ik.imagekit.io/j3l1n5k1/gfx/project/woody/photo/20190730-truck4v2.jpg_NuDikz3msH.avif?updatedAt=1768489239228&ik-s=4c5b96648f59e2cca84db2682aa451d6e472ce36",
              alt: "",
            },
            {
              src: "https://ik.imagekit.io/j3l1n5k1/gfx/project/woody/photo/20190730-truck3v2.jpg_uLr5sVMLk.avif?updatedAt=1768489239652&ik-s=c452f0954d4a33d4221fc571a8f559d17308bc57",
              alt: "",
            },
          ]}
        ></SameHeightRow>
      </div>

      <div className="headingWoody">
        <span className="spanTitle">PIZZA QUATTRO FORMAGGI</span>
      </div>
      <div className="sketchContain flex flex-col items-center justify-center p-0 overflow-hidden rounded-3xl w-full bg-[--wood-cream]">
        <SameHeightRow
          images={[
            {
              src: "https://ik.imagekit.io/j3l1n5k1/gfx/project/woody/photo/20200706-IMG_20200706_191111_XR6jfuVqZ.avif?updatedAt=1768489240330&ik-s=bdf121e8be3f3ba8e71a8b75f0e53a99ea47ea84",
              alt: "",
            },
            {
              src: "https://ik.imagekit.io/j3l1n5k1/gfx/project/woody/photo/20200706-IMG_20200706_191125_2IPXdGWx8.avif?updatedAt=1768489240022&ik-s=abd0138f3556c997caa03b5b3e2c7fb0016e7e13",
              alt: "",
            },
          ]}
        ></SameHeightRow>
        <SameHeightRow
          images={[
            {
              src: "https://ik.imagekit.io/j3l1n5k1/gfx/project/woody/photo/20200706-IMG_20200706_192015__01_JghLHiNCb.avif?updatedAt=1768489239993&ik-s=a04f1470b60bf31e7c132f3e0ddb486964241bac",
              alt: "",
            },
            {
              src: "https://ik.imagekit.io/j3l1n5k1/gfx/project/woody/photo/20200706-IMG_20200706_192246_WrK7EcRd8.avif?updatedAt=1768489241601&ik-s=04114b11b9b7516892c9ecfd4ae686534f0dee2f",
              alt: "",
            },
          ]}
        ></SameHeightRow>
      </div>

      <div className="BannerWTF bg-(--wood-dark) rounded-3xl p-16 py-36 my-16 relative">
        <div className="flex flex-col justify-center items-center p-0 gap-12 grow">
          <div className="headingWoody" style={{ padding: "0px" }}>
            <span className="spanTitle">HAVE A PIZZASTIC DAY</span>
          </div>
          <SmartImage
            className="max-w-[320px] hover:animate-bounce"
            width={800}
            height={200}
            src="https://ik.imagekit.io/j3l1n5k1/gfx/project/woody/elements/truck-white_S-16w3Y-V.avif?updatedAt=1768488946058&ik-s=b8505c45761a54683bf79f371035a68feecaab3a"
            alt=""
          />
        </div>
        <div className="absolute left-0 right-0 top-0 bottom-0 m-16">
          <SmartImage
            className="max-w-[100px] opacity-10 rotate-45 absolute right-0 animate-pulse"
            width={800}
            height={200}
            src="https://ik.imagekit.io/j3l1n5k1/gfx/project/woody/elements/slice-white_cVaueymI3.avif?updatedAt=1768488946039&ik-s=9eb74d3f9070ad84bc7bccac7e7c053adb70d929"
            alt=""
          />
          <SmartImage
            className="max-w-[100px] opacity-10 -rotate-45 absolute left-0 animate-pulse"
            width={800}
            height={200}
            src="https://ik.imagekit.io/j3l1n5k1/gfx/project/woody/elements/drink_-P5wpmR8a.avif?updatedAt=1768488933181&ik-s=b7c0e2270e1d8370fec310a47f9f72f0be059740"
            alt=""
          />
          <SmartImage
            className="max-w-[100px] opacity-10 rotate-135 absolute bottom-0 right-0 animate-pulse"
            width={800}
            height={200}
            src="https://ik.imagekit.io/j3l1n5k1/gfx/project/woody/elements/slice-white_cVaueymI3.avif?updatedAt=1768488946039&ik-s=9eb74d3f9070ad84bc7bccac7e7c053adb70d929"
            alt=""
          />
          <SmartImage
            className="max-w-[100px] opacity-10 -rotate-135 absolute bottom-0 animate-pulse"
            width={800}
            height={200}
            src="https://ik.imagekit.io/j3l1n5k1/gfx/project/woody/elements/drink_-P5wpmR8a.avif?updatedAt=1768488933181&ik-s=b7c0e2270e1d8370fec310a47f9f72f0be059740"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
