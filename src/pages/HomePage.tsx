import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion } from "motion/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Star,
  MapPin,
  Clock,
  ArrowRight,
  Coffee,
  Leaf,
  Heart,
} from "lucide-react";
import { cafeData } from "../data/cafeData";
import ReviewCard from "../components/ReviewCard";
import SectionHeader from "../components/SectionHeader";
import Carousel from "../components/Carousel";
import { useScrollReveal } from "../hooks/useScrollReveal";
import type { Review } from "../types";

gsap.registerPlugin(ScrollTrigger);

// Crisp Unsplash hero — cosy café interior, Edinburgh-feel warm tones
const HERO_BG =
  "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=1600&q=85&auto=format&fit=crop";

// All google-hosted café photos for carousels
const galleryPhotos = [
  "https://lh3.googleusercontent.com/gps-cs-s/AHVAwerroMrGeC0Jbzyq3ZkHeTJD0pP0gpXO62klgiFDQwASpfhSyfzstILoaXUHmx0gdEExO82E7RU5Z0uljdK7BG-lxpXJe84i3PLTIQlErLPPbCzZSU5SVlQV9oj-WtceWHF9OQQ8=w1600-h1200",
  "https://lh3.googleusercontent.com/gps-cs-s/AHVAweqv1PUF5xILXeHlxH0ka94jPn3ib_HVgGw6tttyO6VC0bazEgNwPMry-08AxbBIcSur6YzuuvpwdKXnK1F0Tw5ea4MwmeWTNLb9MT8HQxhPKkIb0pYHjgf8Mtei5s9xrnE0yE25m_ekw-yk=w1600-h1200",
  "https://lh3.googleusercontent.com/gps-cs-s/AHVAweporhEVOq_0d59fDik4RzjC0lHPqKl7cAjpTjJRqsNwtCXlfVJxtIDgqYGxkrQ7xrvame7YtVKhzaF0J8v6fl2TT8JJGF7sLW-EXLH4GYT3RO25McrYiEn9IWC4bZcDtFo2Nmq02g=w1600-h1200",
  "https://lh3.googleusercontent.com/gps-cs-s/AHVAweoZgVK1EAI-piANYFddQPCDyyBbiDX3R7oKXu6odypxZPDTgmhrl_FcHValXWNgIsQ2hbYwcU4IPMeaxTKDa68-QWhf-eB9RUuNq6FDw_TebpTeLiUibfsAKILzNYLI_15b06RH=w1600-h1200",
  "https://lh3.googleusercontent.com/gps-cs-s/AHVAwer3-7rUk5xYXoXPJdVGibOufevFNdNSC3PoX5vN6IlBbbxp6arCPmauVlRR904c68StuxzW_-vYbSBg_sWTLTT5k6TMSZ13m9gKzvhUqsoo7os3Kz1GN-2N7irqeyumTYH5cHl4=w1600-h1200",
  "https://lh3.googleusercontent.com/geougc-cs/ABOP9ptNlLAgRnDAMMqQOi9jwKUtrBlFBZVkOP3ibOfxJrViJRIXYDGJgP_NOrrvYZej5hRLxoZDi1_iiqo3oiXvTxpGHiCgHsreqzNoUxTZOrg5hrBgCpm0tHttyX5hEEHHezvNecIK=w1600-h1200",
  "https://lh3.googleusercontent.com/gps-cs-s/AHVAweqRzBxeuCN75qaniIwKoz3vCMfEit6K9VPj4nw2o6YulSajSmutR1y7aYU8hRpdEn2KklXOdvgkH3tTNcxhxhAUPvRgJHqgCqrgWV99u4eQOBFjN4XmB6TyuQA1TuNpG8OepM8h1w=w1600-h1200",
  "https://lh3.googleusercontent.com/gps-cs-s/AHVAweqwhdd-oOUN0Xxlw1LkF-S8S2SsOVYS7fvigGha-5dv8Xb3LSVxMkUVvspaD7tXdso9NkmGur7cUfkIp8pjoRAFZUaFToWglSSkWHacVbmD8o0JXjTNGvo0l6U_xUFiA3itYwpB=w1600-h1200",
  "https://lh3.googleusercontent.com/geougc-cs/ABOP9puM6SerRLfgUUXR3ugfeZus1pRIRo48590VSImsiS_nuTlFrU-sZufjGODYaEa81UUx7xZbswA6o7vHwRuOymSMCvmIv4ERfoAAeI_TaOAHYdKgG294a2kLzlyqsxBjDx2by8uP=w1600-h1200",
  "https://lh3.googleusercontent.com/geougc-cs/ABOP9puYbIqYDxcqDYdDBChn5tQHiH99Aw7_NaiSHOCUXIaMQoHZ278Evxst7oDVNz3IZRAQyqbZYUT5MBOHfMDl5gYhGlVyAs-pCvWmm2yD-922Hwm0RixN8xV_fId2O08Nr039BKs5=w1600-h1200",
  "https://lh3.googleusercontent.com/geougc-cs/ABOP9pvzBOuMjFOsh06dKWk683GPxqsLPwga0GrKK2LUCrYc6hi-kX016A8iBTSP6fm508h0DB3yobSsq9BbVykXjAgt2gWQpys6GYqI4kwPBnN7yt0osR_-es0VCLmlcRbXLkhkObVdlQ=w1600-h1200",
  "https://lh3.googleusercontent.com/gps-cs-s/AHVAwerrJQ9CCX0YFpkw2mXr5VlWO8LMd0izicWgxFbvewNmVjH38PstKE4oyaPAgGaYRbg-NWogcNos9chWXP3V8RkBeLa5c92A4NToeafBv8TN27B6ambwTW73AFjt901AvwF0-B8Y_w=w1600-h1200",
  "https://lh3.googleusercontent.com/gps-cs-s/AHVAweqqID5yEqB2OwJFZfYz12HBU9sfnO3EkKMEBCvqdgH3jvzVycoRgktj7iF0nAX2KSx7306KQFhHy1QKNWBMpDuZp9vXIW3XNH2D6wrLpCi9OTTnJQfVMOw2PX7osOgglPlK_PU=w1600-h1200",
  "https://lh3.googleusercontent.com/a-/ALV-UjUhORJatx3JY2Ix5JKhGgzF3FlypjrPgP4nu0-mN6SWbm5wE8E_=w1600-h1200",
  "https://lh3.googleusercontent.com/geougc-cs/ABOP9psvzQWi0-JZVwi82wGWeUia111v62tiGNSoF8yTWPgE1pXiIpSso4RD-hL5gCT5284C0jZ2s3ZXtJy_ACsoxBQX3R2RboFZSFl34U7xusuuvxbEwLQPOPObUBODXJQ8Q-Q1ddtQ=w1600-h1200",
  "https://lh3.googleusercontent.com/gps-cs-s/AHVAweoEWHDN48kRtEy6EqP-T2Krke7rX0UvNjM3Mfo4uTkKHDU69UuV5JujzEEWNrHcGcUr4xFKUzgIwOox6RD0oZrKuXtE2rP6pyXRw9qKdNsm4T3oKKJsZyZzK5Zcfh7GBNhaMmf0=w1600-h1200",
  "https://lh3.googleusercontent.com/geougc-cs/ABOP9psu8axaJT1iwhnQHWEnicAlKsCFWDrNxAFV0Ql5drGdMWqHEVdycLasPTjzoGrnH5T-aAl5WnIuvVVlC1K9AXw2W4_5F2We_r6AjQLre-uxZ10jusaTrcZaM0_NJuBO7RrCWZY=w1600-h1200",
  "https://lh3.googleusercontent.com/geougc-cs/ABOP9ptosec6EO-aGKfcU7v7DzjYD_2dw-EZeoI6d9OoBApY8ssr9kc8gwQ6BN4s-8EALtghDsNtBBfWYDu5enYbHXESoBw9lEK9o2rv4V5B8TquZHLCpOajzd1ju0lNk-JUrR6F3C0h2A=w1600-h1200",
  "https://lh3.googleusercontent.com/geougc-cs/ABOP9pvXeqLp54Aem-60SmNBpUSx_6iUlrQm11A5yclQJmeuicnXp03F2308LiSF6t5NRg3lyZHYz4pQf9gX3edkfdsNilLbk1E9BziDngnrHqzEEn2z1j-qQjJRxnkh6F49i0xM9k4MDA=w1600-h1200",
  "https://lh3.googleusercontent.com/geougc-cs/ABOP9pucHg7TTL1lUjEka2aYYOguFP-PUUdKzWVCCdsTmDYRvMI8BUBazAwWzzeE6_Sp_kkc1oSC55KReD3ksAHgjytSZtfjtabz8zqskaVnKJ-r0g2JsKc74jlCAIfmogN932D30Q=w1600-h1200",
  "https://lh3.googleusercontent.com/geougc-cs/ABOP9pvcXjYJta-6AJWn1p1zZpGn1m3sbm0uF_JXvizmylfYB20f-trVfP8HIF51Taf_h6uddBo0oEFR0ftoYQuejRMRM8athJ4l0wSdGUTNBcN6Adtv7y7auJU6owzozCRVXtx3xOxB=w1600-h1200",
  "https://lh3.googleusercontent.com/geougc-cs/ABOP9pup6pCjnhTKB2rRzPzyyDyJsdMu4s5UvJpLpUNZvwop4W-MA5QcnhlUHRza5LU820Gg4hjQ5l4mwLkw-liayZHSFQj6DVklXJXjS1wc8hJ2x_tqESuuCpocXE3Uu7UMiFiG2js=w1600-h1200",
  "https://lh3.googleusercontent.com/geougc-cs/ABOP9ptxuSWnZfBqsZpXomgAD1EojtC-gJl5VoUI2Wf8giPm2OvrrnlSEd7KupWyAjX6gi6xr6pGelry9fi1iagF--gXxa40Ogwmqxo1nzZPACjsJAOGQxI7oADawLRjKitk-isGt9mP=w1600-h1200",
  "https://lh3.googleusercontent.com/geougc-cs/ABOP9puyza2o767TobCUqMSwXv1ojjlJKEHC5yykR67zPNVvmE5uzQWWW38SKW6-5swRZ_yWMEe-0rbLfrwS1YSQ7Qc24mds78jhOc8_FuEtKPvW1W7auySG2weFo8PUF-4lOfhVPReF=w1600-h1200",
  "https://lh3.googleusercontent.com/gps-cs-s/AHVAwerrEiWFnQmmz1nGSPg0mHDPjOi0uH0ViUq3oVhppu0t0fquqDKiKw0QId048u5_nKboqdwo88YuVDbTnR9UOWEJnb-FfwEY25F7OnvRQ8_xAObGylKcm_y6dfqb2vQYZDoKVmo=w1600-h1200",
  "https://lh3.googleusercontent.com/gps-cs-s/AHVAweqL4D42-Yunu-gF75_ENw-Qaqq6Tm1hBpyQDeLf9yd1JpYP9w_rV5yyyxYaVaGebS7nR2Lxs0pVzj_ds2VyvP8RhuShiNlCjbqxRbPEBl3F7-xz4n2fhTthlHjSlFHtB7iLpV0=w1600-h1200",
  "https://lh3.googleusercontent.com/gps-cs-s/AHVAwepd44eLKIWpbXxEohiZi9nIESDampZT1UcM8akjIEAA_gdeCeHSNcrfkEZGkrJzfmF6i_xByOcIWZrVs_9BTXugktiJTfsZg-E2YAMR4LPcCNnKYxE3OOtbZi_fixGpIitI9bfQ=w1600-h1200",
  "https://lh3.googleusercontent.com/gps-cs-s/AHVAwerJUbM5W3KX6_USqN5IhXEW-0Ti4OdHuvBnfiL3u5i2a-osDBIOZBLnyluHyEM4nHdaNsFqCv6Rgi75ipU4p8PKmKgK9RfqojuwYKXfnugXGbYzHrDH6t8QVbbs-pZKcA_x95jPVw=w1600-h1200",
  "https://www.facebook.com/photo.php?fbid=849956100470217&set=pb.100063675036205.-2207520000&type=3",
  "https://scontent.fkhi11-2.fna.fbcdn.net/v/t39.30808-6/310603211_596173499181813_845427597773261094_n.jpg?stp=dst-jpg_s206x206_tt6&_nc_cat=105&ccb=1-7&_nc_sid=6809ec&_nc_ohc=uxxWY_aG498Q7kNvwE8wZfw&_nc_oc=AdmlRJ7H4lFlNvPXhWYIhgq7hduGVNPUbR62c6a48J_Ma_JNi7pdh3B9bHfPWZQEY4M&_nc_zt=23&_nc_ht=scontent.fkhi11-2.fna&_nc_gid=xDM66Qf6zf9iH28TkURhug&_nc_ss=8&oh=00_AfzeAopmEPABqTPuUeuJqu3hN-VaOVQbm-AtiSLkwvLvMg&oe=69BF96D5",
  "https://scontent.fkhi11-1.fna.fbcdn.net/v/t39.30808-6/494291034_1328368139295675_5270953907398784203_n.jpg?stp=dst-jpg_s206x206_tt6&_nc_cat=110&ccb=1-7&_nc_sid=a934a8&_nc_ohc=j38QoNBWnaYQ7kNvwGDha0x&_nc_oc=AdnbvJzXWppR2dQb_vu9ryh8db0h-eSL94un-OhrvC0SLPjId5Z4ih9NUKs8KFrgGYY&_nc_zt=23&_nc_ht=scontent.fkhi11-1.fna&_nc_gid=xDM66Qf6zf9iH28TkURhug&_nc_ss=8&oh=00_AfyoeinkLgLYD2yoLxjzq1ioISLq7MgkCh3Z4t23X8zexg&oe=69BF73C3",
  "https://scontent.fkhi11-1.fna.fbcdn.net/v/t39.30808-6/492412541_1320270496772106_4469931425836025200_n.jpg?stp=c315.0.811.811a_dst-jpg_s206x206_tt6&_nc_cat=110&ccb=1-7&_nc_sid=8f740e&_nc_ohc=IVtq745YmN0Q7kNvwHHiy0s&_nc_oc=AdlINxzBuaqfOQXLgRYo-icokS8h-PUR0LF26MkCfjiugXwjWCES7entLrP5MEf0AdM&_nc_zt=23&_nc_ht=scontent.fkhi11-1.fna&_nc_gid=xDM66Qf6zf9iH28TkURhug&_nc_ss=8&oh=00_Afw56FwFuoPluscNCePrUkgBpO1wEG3GdW3jpsQlCevUIQ&oe=69BF8D5B",
  "https://scontent.fkhi11-1.fna.fbcdn.net/v/t39.30808-6/468858569_1124626232570568_6584709689812272091_n.jpg?stp=c0.119.1440.1440a_dst-jpg_s206x206_tt6&_nc_cat=107&ccb=1-7&_nc_sid=177950&_nc_ohc=Eg6mSdTqALsQ7kNvwGO_BWU&_nc_oc=Adm2Wgdq-SfdlgKtHuv9GOk_jcGXb9sMIXvG7LQ_vRpeXV17xu64k4HMNJTQYV-NTTU&_nc_zt=23&_nc_ht=scontent.fkhi11-1.fna&_nc_gid=xDM66Qf6zf9iH28TkURhug&_nc_ss=8&oh=00_AfwxoxtXnxY2S3SHREecBkCfPjEv67t8-2lV0IIZizaoFA&oe=69BF7551",
  "https://scontent.fkhi11-1.fna.fbcdn.net/v/t1.6435-9/181454175_310673397299193_2740333166785768709_n.jpg?stp=dst-jpg_s206x206_tt6&_nc_cat=100&ccb=1-7&_nc_sid=177950&_nc_ohc=6JdYojXttIUQ7kNvwH797GJ&_nc_oc=Adl2xT-P6QwNf9t_jAKdPvZtqy13Mei8O4XxEKYmwmP_A0e4sGVBhhLRPlF4ssrV-xk&_nc_zt=23&_nc_ht=scontent.fkhi11-1.fna&_nc_gid=xDM66Qf6zf9iH28TkURhug&_nc_ss=8&oh=00_AfxswlLJNL6x1cKCGk2OgyClIxjF30iH_GE6QuJVo8BGKw&oe=69E13B20",
  "https://scontent.fkhi11-1.fna.fbcdn.net/v/t1.6435-9/172740788_297225891977277_4971618154163430097_n.jpg?stp=dst-jpg_s206x206_tt6&_nc_cat=107&ccb=1-7&_nc_sid=177950&_nc_ohc=gyeM34EBnMwQ7kNvwHBOv5Q&_nc_oc=AdkpHuUrqHZyMKpkXEQCXAD_ETHGxSfXaBLLBKTQMm8aWfDmmptq1v6VUs95rwB9jjE&_nc_zt=23&_nc_ht=scontent.fkhi11-1.fna&_nc_gid=xDM66Qf6zf9iH28TkURhug&_nc_ss=8&oh=00_AfxroMrTBXgWSUVgrZAgFui5Qu83sevdZwkNUwlgepDlEA&oe=69E13AC0",
  "https://scontent.fkhi11-2.fna.fbcdn.net/v/t1.6435-9/164349408_284149516618248_1482221521223716349_n.jpg?stp=c0.94.1440.1440a_dst-jpg_s206x206_tt6&_nc_cat=102&ccb=1-7&_nc_sid=177950&_nc_ohc=T0Vwxpj2QN4Q7kNvwEBayP2&_nc_oc=AdmzDy62RaSL8H7pOjeE9-dns3Ya_4WZZ2ZXfYJ-x6tRh0Oa4ojFNr__KK_Ah03zgmU&_nc_zt=23&_nc_ht=scontent.fkhi11-2.fna&_nc_gid=8WbGFqpbFnIN8fuCiiOZ9Q&_nc_ss=8&oh=00_AfzvSqWea9cAXnZhzXSMZk7vwXzchlAYhuBkFxJYnLTULg&oe=69E1181B",
  "https://scontent.fkhi11-1.fna.fbcdn.net/v/t1.6435-9/161989606_280056790360854_2432439176277776772_n.jpg?stp=c0.119.1440.1440a_dst-jpg_s206x206_tt6&_nc_cat=100&ccb=1-7&_nc_sid=177950&_nc_ohc=iAGXigvzPEAQ7kNvwGnXx6W&_nc_oc=Adk_q92risG_Z-VnnwcP5_ksaMnQj51wsL8EHcvTlk0Qsq6zjij7iZtrggQManY7Brk&_nc_zt=23&_nc_ht=scontent.fkhi11-1.fna&_nc_gid=8WbGFqpbFnIN8fuCiiOZ9Q&_nc_ss=8&oh=00_AfwEUFAvLAWwJKgSD4MCOGw9cAZTJyjoXFYesLLy-HYziA&oe=69E10E3E",
  "https://scontent.fkhi11-2.fna.fbcdn.net/v/t1.6435-9/109810656_161920742174460_4988442870291106157_n.jpg?stp=c0.67.1846.1846a_dst-jpg_s206x206_tt6&_nc_cat=109&ccb=1-7&_nc_sid=5df8b4&_nc_ohc=piZayWNswmcQ7kNvwHZywcF&_nc_oc=AdncZcxkf82xjLfegTqyDMseLgnAF88UPRWUANhclFhOuCLg0UypP8CV4l3wRJdEEFQ&_nc_zt=23&_nc_ht=scontent.fkhi11-2.fna&_nc_gid=wTdjjEIvoRwN5ZKdKGRJUg&_nc_ss=8&oh=00_AfyhwJ33HE2Xy5Kh-S6A6A967aT2yHJCVgEaSjK2eHex4w&oe=69E1156C",
  "https://scontent.fkhi11-2.fna.fbcdn.net/v/t1.6435-9/98205728_127167018983166_7866965006217117696_n.jpg?stp=c256.0.1536.1536a_dst-jpg_s206x206_tt6&_nc_cat=101&ccb=1-7&_nc_sid=5df8b4&_nc_ohc=qXOcFfehzp8Q7kNvwGETdUZ&_nc_oc=AdlEiLLUSHbU5xjSWtJLhnWpAaIadeSYPqQ5alkdVr519vn4Xa-RkWbb-XXCRZ8weik&_nc_zt=23&_nc_ht=scontent.fkhi11-2.fna&_nc_gid=wTdjjEIvoRwN5ZKdKGRJUg&_nc_ss=8&oh=00_AfwHBncH2OjTpuGa-yP4olkwnTIGxqRscYOmGlCedlbk1g&oe=69E10E9E",
].filter((u) => u.includes("googleusercontent") || u.includes("geougc"));

// Reviews: 4+ stars, has real text, deduped
const carouselReviews: Review[] = cafeData.reviews
  .filter(
    (r) => r.text && r.text.length > 20 && r.reviewer && parseInt(r.stars) >= 4,
  )
  .filter(
    (r, i, arr) =>
      arr.findIndex((x) => x.text === r.text && x.reviewer === r.reviewer) ===
      i,
  );

export default function HomePage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const heroImgRef = useRef<HTMLDivElement>(null);

  const aboutSection = useScrollReveal();
  const featuresSection = useScrollReveal();
  const gallerySection = useScrollReveal();
  const reviewsSection = useScrollReveal();
  const ctaSection = useScrollReveal();

  useEffect(() => {
    if (!heroImgRef.current) return;
    const ctx = gsap.context(() => {
      gsap.to(heroImgRef.current, {
        yPercent: 22,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <>
      <Helmet>
        <title>Word of Mouth Morningside – Edinburgh Café</title>
        <meta
          name="description"
          content="A beloved neighbourhood café at 41 Morningside Rd, Edinburgh. Exceptional coffee, homemade food, and staff that treat every guest like family. Open 7 days, 9AM–4:30PM."
        />
        <meta property="og:title" content="Word of Mouth Morningside" />
        <meta
          property="og:description"
          content="Neighbourhood café in Edinburgh's Morningside. Coffee, food, cakes, and community."
        />
        <meta property="og:image" content={HERO_BG} />
      </Helmet>

      {/* ─── HERO ─── */}
      <section
        ref={heroRef}
        style={{
          position: "relative",
          height: "100svh",
          minHeight: "560px",
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}>
        <div
          ref={heroImgRef}
          style={{
            position: "absolute",
            inset: "-25%",
            backgroundImage: `url(${HERO_BG})`,
            backgroundSize: "cover",
            backgroundPosition: "center 40%",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to bottom, rgba(20,10,4,0.52) 0%, rgba(20,10,4,0.3) 50%, rgba(20,10,4,0.75) 100%)",
          }}
        />
        <div
          style={{
            position: "relative",
            zIndex: 2,
            textAlign: "center",
            padding: "0 20px",
            width: "100%",
            maxWidth: "820px",
          }}>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "clamp(0.62rem, 2vw, 0.72rem)",
              fontWeight: 400,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "var(--color-gold)",
              marginBottom: "14px",
            }}>
            Morningside · Edinburgh · Est. 2020
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.35 }}
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2.6rem, 11vw, 6rem)",
              fontWeight: 400,
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
              color: "var(--color-cream)",
              margin: "0 0 8px",
            }}>
            Word of Mouth
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1rem, 4.5vw, 1.9rem)",
              fontWeight: 300,
              fontStyle: "italic",
              color: "rgba(250,246,240,0.72)",
              margin: "0 0 24px",
            }}>
            where every cup tells a story
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.65 }}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              background: "rgba(212,168,83,0.15)",
              border: "1px solid rgba(212,168,83,0.3)",
              borderRadius: "999px",
              padding: "7px 16px",
              marginBottom: "28px",
              backdropFilter: "blur(8px)",
            }}>
            <Star size={13} fill="var(--color-gold)" stroke="none" />
            <span
              style={{
                color: "var(--color-cream)",
                fontSize: "0.85rem",
                fontWeight: 500,
              }}>
              {cafeData.rating}
            </span>
            <span
              style={{ color: "rgba(250,246,240,0.5)", fontSize: "0.78rem" }}>
              · {cafeData.reviewCount} reviews
            </span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
            style={{
              display: "flex",
              gap: "12px",
              justifyContent: "center",
              flexWrap: "wrap",
            }}>
            <Link
              to="/menu"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                backgroundColor: "var(--color-gold)",
                color: "var(--color-espresso)",
                padding: "13px 24px",
                borderRadius: "4px",
                fontFamily: "var(--font-body)",
                fontSize: "clamp(0.8rem, 2.5vw, 0.875rem)",
                fontWeight: 600,
                textDecoration: "none",
                minHeight: "44px",
                touchAction: "manipulation",
                transition: "background 0.2s",
              }}>
              View Menu <ArrowRight size={15} />
            </Link>
            <Link
              to="/contact"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                border: "1px solid rgba(250,246,240,0.4)",
                color: "var(--color-cream)",
                padding: "13px 24px",
                borderRadius: "4px",
                fontFamily: "var(--font-body)",
                fontSize: "clamp(0.8rem, 2.5vw, 0.875rem)",
                fontWeight: 400,
                textDecoration: "none",
                backdropFilter: "blur(8px)",
                minHeight: "44px",
                touchAction: "manipulation",
                transition: "border-color 0.2s",
              }}>
              <MapPin size={15} /> Find Us
            </Link>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          style={{
            position: "absolute",
            bottom: "28px",
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "6px",
          }}>
          <span
            style={{
              fontSize: "0.6rem",
              letterSpacing: "0.12em",
              color: "rgba(250,246,240,0.4)",
              textTransform: "uppercase",
            }}>
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
            style={{
              width: "1px",
              height: "28px",
              background:
                "linear-gradient(to bottom, rgba(212,168,83,0.6), transparent)",
            }}
          />
        </motion.div>
      </section>

      {/* ─── INFO STRIP ─── */}
      <section
        style={{
          backgroundColor: "var(--color-espresso-light)",
          borderTop: "1px solid rgba(212,168,83,0.2)",
          borderBottom: "1px solid rgba(212,168,83,0.2)",
        }}>
        <div
          className="info-strip"
          style={{ maxWidth: "1280px", margin: "0 auto" }}>
          {[
            {
              icon: <Clock size={15} />,
              label: "Open Daily",
              value: "9 AM – 4:30 PM",
            },
            {
              icon: <MapPin size={15} />,
              label: "Location",
              value: "Morningside, Edinburgh",
            },
            {
              icon: <Star size={15} />,
              label: "Rating",
              value: `${cafeData.rating} / 5`,
            },
            {
              icon: <Coffee size={15} />,
              label: "Speciality",
              value: "Coffee & Food",
            },
          ].map(({ icon, label, value }, i) => (
            <div
              key={label}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                padding: "clamp(14px,3vw,20px) clamp(12px,3vw,20px)",
                borderRight: i < 3 ? "1px solid rgba(212,168,83,0.1)" : "none",
                minWidth: 0,
              }}>
              <span style={{ color: "var(--color-gold)", flexShrink: 0 }}>
                {icon}
              </span>
              <div style={{ minWidth: 0 }}>
                <p
                  style={{
                    margin: 0,
                    fontSize: "0.6rem",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: "rgba(250,246,240,0.4)",
                    fontFamily: "var(--font-body)",
                  }}>
                  {label}
                </p>
                <p
                  style={{
                    margin: 0,
                    fontSize: "clamp(0.72rem, 2vw, 0.88rem)",
                    color: "var(--color-cream)",
                    fontFamily: "var(--font-body)",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                  }}>
                  {value}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── ABOUT ─── */}
      <section
        ref={aboutSection.ref}
        style={{ padding: "clamp(56px, 10vw, 130px) 0" }}>
        <div
          className="page-container grid-2col"
          style={{ alignItems: "center" }}>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={aboutSection.isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}>
            <p
              className="deco-line"
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.7rem",
                fontWeight: 500,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "var(--color-gold)",
                marginBottom: "14px",
              }}>
              Our Story
            </p>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(1.9rem, 5vw, 3.2rem)",
                fontWeight: 400,
                lineHeight: 1.1,
                color: "var(--color-espresso)",
                margin: "0 0 18px",
              }}>
              A place to slow down{" "}
              <em
                style={{
                  fontStyle: "italic",
                  color: "var(--color-coffee-mid)",
                }}>
                & savour
              </em>
            </h2>
            <p
              style={{
                fontSize: "clamp(0.88rem, 2vw, 1rem)",
                lineHeight: 1.8,
                color: "var(--color-warm-gray)",
                marginBottom: "14px",
              }}>
              Tucked into the quiet elegance of Morningside, Word of Mouth is
              more than a café — it's your neighbourhood living room. We opened
              with one belief: great coffee and honest food, served with genuine
              warmth, can make any morning better.
            </p>
            <p
              style={{
                fontSize: "clamp(0.88rem, 2vw, 1rem)",
                lineHeight: 1.8,
                color: "var(--color-warm-gray)",
                marginBottom: "28px",
              }}>
              Our menu is seasonal and simple — crafted fresh every morning with
              locally sourced ingredients. Whether you're a regular or a
              first-timer, we'll always treat you like family.
            </p>
            <Link
              to="/menu"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                color: "var(--color-coffee)",
                fontFamily: "var(--font-body)",
                fontSize: "0.875rem",
                fontWeight: 500,
                textDecoration: "none",
                borderBottom: "1px solid var(--color-latte)",
                paddingBottom: "2px",
              }}>
              Explore our menu <ArrowRight size={14} />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={aboutSection.isInView ? { opacity: 1, x: 0 } : {}}
            transition={{
              duration: 0.8,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gridTemplateRows:
                "clamp(150px, 28vw, 220px) clamp(110px, 20vw, 170px)",
              gap: "8px",
            }}>
            {galleryPhotos.slice(0, 4).map((url, i) => (
              <div
                key={i}
                className="img-zoom"
                style={{
                  borderRadius: "8px",
                  overflow: "hidden",
                  gridColumn: i === 0 ? "1 / -1" : undefined,
                  gridRow: i === 0 ? "1" : "2",
                }}>
                <img
                  src={url}
                  alt={`Word of Mouth café ${i + 1}`}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                  }}
                  loading="lazy"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── FEATURES ─── */}
      <section
        ref={featuresSection.ref}
        style={{
          backgroundColor: "var(--color-cream-dark)",
          padding: "clamp(56px, 10vw, 112px) 0",
        }}>
        <div className="page-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={featuresSection.isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}>
            <SectionHeader
              eyebrow="Why we're loved"
              title="More than just"
              titleItalic="coffee"
              subtitle="Everything we do is guided by one principle: make people feel at home."
            />
          </motion.div>
          <div className="grid-features">
            {[
              {
                icon: <Coffee size={20} />,
                title: "Exceptional Coffee",
                desc: "Sourced from ethical roasters, dialled in daily. From silky flat whites to clean filter coffees.",
              },
              {
                icon: <Leaf size={20} />,
                title: "Fresh & Seasonal",
                desc: "Our kitchen works with local suppliers every morning to create food that's honest and delicious.",
              },
              {
                icon: <Heart size={20} />,
                title: "True Hospitality",
                desc: "You'll be remembered. Our staff create connections that turn first visits into lasting rituals.",
              },
              {
                icon: <Star size={20} />,
                title: "4.8★ Community Loved",
                desc: "191 five-star reviews and counting. See what your neighbours are saying about us.",
              },
            ].map(({ icon, title, desc }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                animate={featuresSection.isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.08 + i * 0.1 }}
                style={{
                  background: "white",
                  borderRadius: "12px",
                  padding: "clamp(18px,4vw,28px) clamp(16px,3vw,24px)",
                  border: "1px solid rgba(196,149,106,0.15)",
                  boxShadow: "0 2px 12px rgba(28,15,7,0.05)",
                }}>
                <div
                  style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "10px",
                    background: "rgba(212,168,83,0.12)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--color-coffee)",
                    marginBottom: "14px",
                  }}>
                  {icon}
                </div>
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "clamp(1rem, 3vw, 1.2rem)",
                    fontWeight: 500,
                    color: "var(--color-espresso)",
                    margin: "0 0 8px",
                  }}>
                  {title}
                </h3>
                <p
                  style={{
                    margin: 0,
                    fontSize: "clamp(0.82rem, 2vw, 0.88rem)",
                    lineHeight: 1.65,
                    color: "var(--color-warm-gray)",
                  }}>
                  {desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── GALLERY CAROUSEL ─── */}
      <section
        ref={gallerySection.ref}
        style={{
          padding: "clamp(56px, 10vw, 112px) 0",
          backgroundColor: "var(--color-cream)",
        }}>
        <div className="page-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={gallerySection.isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}>
            <SectionHeader
              eyebrow="Our Space"
              title="A glimpse"
              titleItalic="inside"
              subtitle="Step into the warmth of Word of Mouth — photos straight from our corner of Edinburgh."
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={gallerySection.isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}>
            <Carousel
              items={galleryPhotos}
              itemsPerView={{ mobile: 1, tablet: 2, desktop: 3 }}
              autoPlay
              autoPlayInterval={3500}
              renderItem={(url, i) => (
                <div
                  key={i}
                  className="img-zoom"
                  style={{
                    borderRadius: "10px",
                    overflow: "hidden",
                    aspectRatio: "4/3",
                    width: "100%",
                    boxShadow: "0 4px 16px rgba(28,15,7,0.08)",
                  }}>
                  <img
                    src={url}
                    alt={`Café gallery ${i + 1}`}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      display: "block",
                    }}
                    loading="lazy"
                    draggable={false}
                  />
                </div>
              )}
            />
          </motion.div>
          <div style={{ textAlign: "center", marginTop: "28px" }}>
            <Link
              to="/gallery"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                color: "var(--color-coffee)",
                fontFamily: "var(--font-body)",
                fontSize: "0.875rem",
                fontWeight: 500,
                textDecoration: "none",
                borderBottom: "1px solid var(--color-latte)",
                paddingBottom: "2px",
              }}>
              See full gallery <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── REVIEWS CAROUSEL ─── */}
      <section
        ref={reviewsSection.ref}
        style={{
          backgroundColor: "var(--color-espresso)",
          padding: "clamp(56px, 10vw, 112px) 0",
        }}>
        <div className="page-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={reviewsSection.isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}>
            <SectionHeader
              eyebrow="What people say"
              title="Heard through the"
              titleItalic="neighbourhood"
              dark
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={reviewsSection.isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}>
            <Carousel
              items={carouselReviews}
              itemsPerView={{ mobile: 1, tablet: 2, desktop: 3 }}
              autoPlay
              autoPlayInterval={5000}
              dark
              renderItem={(review, i) => (
                <div key={i}>
                  <ReviewCard review={review} variant="dark" />
                </div>
              )}
            />
          </motion.div>
          <div style={{ textAlign: "center", marginTop: "36px" }}>
            <Link
              to="/reviews"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                border: "1px solid rgba(212,168,83,0.4)",
                color: "var(--color-gold)",
                padding: "12px 24px",
                borderRadius: "4px",
                fontFamily: "var(--font-body)",
                fontSize: "0.85rem",
                fontWeight: 400,
                textDecoration: "none",
                minHeight: "44px",
                touchAction: "manipulation",
              }}>
              Read all {cafeData.reviewCount} reviews <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section
        ref={ctaSection.ref}
        style={{
          padding: "clamp(56px, 10vw, 112px) 0",
          textAlign: "center",
          background:
            "linear-gradient(135deg, var(--color-cream) 0%, var(--color-cream-dark) 100%)",
        }}>
        <div className="page-container">
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={ctaSection.isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.7 }}
            style={{ maxWidth: "560px", margin: "0 auto" }}>
            <p
              className="deco-line"
              style={{
                justifyContent: "center",
                fontFamily: "var(--font-body)",
                fontSize: "0.7rem",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "var(--color-gold)",
                marginBottom: "12px",
              }}>
              Come find us
            </p>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(1.9rem, 6vw, 3.5rem)",
                fontWeight: 400,
                lineHeight: 1.1,
                color: "var(--color-espresso)",
                margin: "0 0 14px",
              }}>
              Your morning ritual{" "}
              <em
                style={{
                  fontStyle: "italic",
                  color: "var(--color-coffee-mid)",
                }}>
                awaits
              </em>
            </h2>
            <p
              style={{
                fontSize: "clamp(0.88rem, 2vw, 1rem)",
                color: "var(--color-warm-gray)",
                lineHeight: 1.7,
                marginBottom: "28px",
              }}>
              Open every day. No reservations needed. Just follow the smell of
              freshly brewed coffee down Morningside Road.
            </p>
            <div
              style={{
                display: "flex",
                gap: "12px",
                justifyContent: "center",
                flexWrap: "wrap",
              }}>
              <Link
                to="/contact"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  backgroundColor: "var(--color-espresso)",
                  color: "var(--color-cream)",
                  padding: "13px 24px",
                  borderRadius: "4px",
                  fontFamily: "var(--font-body)",
                  fontSize: "clamp(0.82rem, 2.5vw, 0.875rem)",
                  fontWeight: 500,
                  textDecoration: "none",
                  minHeight: "44px",
                  touchAction: "manipulation",
                }}>
                <MapPin size={15} /> Get Directions
              </Link>
              <a
                href={`tel:${cafeData.phone}`}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  border: "1px solid rgba(28,15,7,0.25)",
                  color: "var(--color-espresso)",
                  padding: "13px 24px",
                  borderRadius: "4px",
                  fontFamily: "var(--font-body)",
                  fontSize: "clamp(0.82rem, 2.5vw, 0.875rem)",
                  fontWeight: 400,
                  textDecoration: "none",
                  minHeight: "44px",
                  touchAction: "manipulation",
                }}>
                Call Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
