import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { motion, AnimatePresence } from "motion/react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { cafeData } from "../data/cafeData";

// Use ALL photos from the data file — error handler in render will skip dead URLs
const photos = [
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
];

export default function GalleryPage() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [failedUrls, setFailedUrls] = useState<Set<string>>(new Set());

  const validPhotos = photos.filter((url) => !failedUrls.has(url));

  const openLightbox = (i: number) => setLightboxIndex(i);
  const closeLightbox = () => setLightboxIndex(null);
  const prev = () =>
    setLightboxIndex((i) =>
      i !== null ? (i - 1 + validPhotos.length) % validPhotos.length : null,
    );
  const next = () =>
    setLightboxIndex((i) => (i !== null ? (i + 1) % validPhotos.length : null));

  const handleImgError = (url: string) => {
    setFailedUrls((prev) => new Set(prev).add(url));
  };

  return (
    <>
      <Helmet>
        <title>Gallery – Word of Mouth Morningside</title>
        <meta
          name="description"
          content="Explore photos of Word of Mouth Morningside café — our space, food, and coffee in Edinburgh."
        />
      </Helmet>

      {/* ─── PAGE HERO ─── */}
      <div
        style={{
          paddingTop: "clamp(96px, 15vw, 120px)",
          paddingBottom: "clamp(32px, 7vw, 52px)",
          backgroundColor: "var(--color-espresso)",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}>
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse at 50% 0%, rgba(212,168,83,0.07) 0%, transparent 65%)",
            pointerEvents: "none",
          }}
        />
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "0.7rem",
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            color: "var(--color-gold)",
            marginBottom: "10px",
          }}>
          Captured moments
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(2.2rem, 8vw, 4.5rem)",
            fontWeight: 400,
            color: "var(--color-cream)",
            margin: "0 0 10px",
          }}>
          Our{" "}
          <em style={{ fontStyle: "italic", color: "rgba(196,149,106,0.9)" }}>
            Gallery
          </em>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.25 }}
          style={{
            color: "rgba(250,246,240,0.5)",
            fontSize: "0.9rem",
            margin: 0,
          }}>
          {validPhotos.length} photos from our little corner of Morningside
        </motion.p>
      </div>

      {/* ─── MASONRY GRID ─── */}
      <div
        className="page-container"
        style={{ paddingTop: "48px", paddingBottom: "80px" }}>
        <div
          style={{
            columnGap: "12px",
          }}
          className="masonry-grid">
          <style>{`
            .masonry-grid {
              columns: 2;
            }
            @media (min-width: 640px) {
              .masonry-grid { columns: 3; }
            }
            @media (min-width: 900px) {
              .masonry-grid { columns: 4; }
            }
            .masonry-item {
              break-inside: avoid;
              margin-bottom: 12px;
              border-radius: 8px;
              overflow: hidden;
              cursor: pointer;
              position: relative;
              display: block;
            }
            .masonry-item img {
              width: 100%;
              display: block;
              border-radius: 8px;
              transition: transform 0.6s cubic-bezier(0.25,0.46,0.45,0.94);
            }
            .masonry-item:hover img {
              transform: scale(1.05);
            }
            .masonry-item .hover-overlay {
              position: absolute;
              inset: 0;
              background: rgba(28,15,7,0);
              transition: background 0.3s;
              border-radius: 8px;
            }
            .masonry-item:hover .hover-overlay {
              background: rgba(28,15,7,0.25);
            }
          `}</style>

          {validPhotos.map((url, i) => (
            <motion.div
              key={url}
              className="masonry-item"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: Math.min(i * 0.03, 0.5) }}
              onClick={() => openLightbox(i)}
              role="button"
              tabIndex={0}
              aria-label={`Open photo ${i + 1}`}
              onKeyDown={(e) => e.key === "Enter" && openLightbox(i)}>
              <img
                src={url}
                alt={`Word of Mouth Morningside — photo ${i + 1}`}
                loading="lazy"
                onError={() => handleImgError(url)}
              />
              <div className="hover-overlay" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* ─── LIGHTBOX ─── */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22 }}
            onClick={closeLightbox}
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 1000,
              backgroundColor: "rgba(0,0,0,0.93)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "clamp(48px, 8vw, 60px) clamp(48px, 8vw, 60px)",
            }}>
            {/* Close */}
            <button
              onClick={closeLightbox}
              aria-label="Close lightbox"
              style={{
                position: "absolute",
                top: "16px",
                right: "16px",
                width: "44px",
                height: "44px",
                borderRadius: "50%",
                border: "1px solid rgba(250,246,240,0.2)",
                background: "rgba(0,0,0,0.5)",
                color: "white",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backdropFilter: "blur(8px)",
                touchAction: "manipulation",
              }}>
              <X size={18} />
            </button>

            {/* Prev */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
              aria-label="Previous photo"
              style={{
                position: "absolute",
                left: "12px",
                top: "50%",
                transform: "translateY(-50%)",
                width: "44px",
                height: "44px",
                borderRadius: "50%",
                border: "1px solid rgba(250,246,240,0.15)",
                background: "rgba(0,0,0,0.5)",
                color: "white",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backdropFilter: "blur(8px)",
                touchAction: "manipulation",
                zIndex: 10,
              }}>
              <ChevronLeft size={20} />
            </button>

            {/* Image */}
            <motion.img
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.22 }}
              src={validPhotos[lightboxIndex]}
              alt={`Photo ${lightboxIndex + 1}`}
              onClick={(e) => e.stopPropagation()}
              style={{
                maxWidth: "90vw",
                maxHeight: "82vh",
                objectFit: "contain",
                borderRadius: "8px",
                boxShadow: "0 40px 80px rgba(0,0,0,0.6)",
              }}
            />

            {/* Next */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
              aria-label="Next photo"
              style={{
                position: "absolute",
                right: "12px",
                top: "50%",
                transform: "translateY(-50%)",
                width: "44px",
                height: "44px",
                borderRadius: "50%",
                border: "1px solid rgba(250,246,240,0.15)",
                background: "rgba(0,0,0,0.5)",
                color: "white",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backdropFilter: "blur(8px)",
                touchAction: "manipulation",
                zIndex: 10,
              }}>
              <ChevronRight size={20} />
            </button>

            {/* Counter */}
            <div
              style={{
                position: "absolute",
                bottom: "16px",
                left: "50%",
                transform: "translateX(-50%)",
                color: "rgba(255,255,255,0.5)",
                fontSize: "0.78rem",
                fontFamily: "var(--font-body)",
                letterSpacing: "0.06em",
                background: "rgba(0,0,0,0.4)",
                padding: "4px 12px",
                borderRadius: "99px",
                backdropFilter: "blur(8px)",
              }}>
              {lightboxIndex + 1} / {validPhotos.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
