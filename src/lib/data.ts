import egg from "../assets/images/desktop/image-transform.jpg"
import standout from "../assets/images/desktop/image-stand-out.jpg"
import graphicDesignD from "../assets/images/desktop/image-graphic-design.jpg";
import graphicDesignM from "../assets/images/mobile/image-graphic-design.jpg";
import photographyD from "../assets/images/desktop/image-photography.jpg";
import photographyM from "../assets/images/mobile/image-photography.jpg";
import Emily from "../assets/images/image-emily.jpg";
import Thomas from "../assets/images/image-thomas.jpg";
import Jennie from "../assets/images/image-jennie.jpg";
import MilkBottlesD from "../assets/images/desktop/image-gallery-milkbottles.jpg";
import MilkBottlesM from "../assets/images/mobile/image-gallery-milkbottles.jpg";
import OrangeD from "../assets/images/desktop/image-gallery-orange.jpg";
import OrangeM from "../assets/images/mobile/image-gallery-orange.jpg";
import ConeD from "../assets/images/desktop/image-gallery-cone.jpg";
import ConeM from "../assets/images/mobile/image-gallery-cone.jpg";
import SugarCubesD from "../assets/images/desktop/image-gallery-sugarcubes.jpg";
import SugarCubesM from "../assets/images/mobile/image-gallery-sugar-cubes.jpg";
import Facebook from "../assets/images/icon-facebook.svg";
import Instagram from "../assets/images/icon-instagram.svg";
import Twitter from "../assets/images/icon-twitter.svg";
import Pinterest from "../assets/images/icon-pinterest.svg";



export const links = [
    
    {
        id: "1",
        name: "About",
        url:"#about",
        animate: "fade-up",
        delay: "100"
    },
    {
        id: "2",
        name: "Services",
        url:"#services",
        animate: "fade-up",
        delay: "200"
    },
    {
        id: "3",
        name: "Projects",
        url:"#projects",
        animate: "fade-up",
        delay: "300"
    },
    {
        id: "4",
        name: "Contact",
        url:"#contact",
        animate: "fade-up",
        delay: "400"
    },
] as const;

export const aboutInformation = [
    {
        id: "1",
        image: egg,
        alt: "egg with yellow backgroud",
        title: "Transform your brand",
        description: "We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you.",
        cta: "Learn more",
    },
    {
        id: "2",
        image: standout,
        alt: "standout image",
        title: " Stand out to the right audience",
        description: "Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places.",
        cta: "Learn more",
    }
] as const;

export const servicesData = [
    {
        id: "1",
        imageD: graphicDesignD,
        imageM: graphicDesignM,
        alt: "image of a cherry",
        title: "Graphic design",
        description: "Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention.",
    },
    {
        id: "2",
        imageD: photographyD,
        imageM: photographyM,
        alt: "image of an orange",
        title: " Photography",
        description: "Increase your credibility by getting the most stunning, high-quality photos that improve your business image",
    }
]as const ;

export const testimonialsData =[
    {
        id: "1",
        name: "Emily R.",
        image: Emily,
        alt:  "profile picture of Emily",
        role: "Marketing Director",
        text: "We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.",
        animate: "fade-up",
        delay: "100"
    },
    {
        id: "2",
        name: "Thomas S.",
        image: Thomas,
        alt: "profile picture of Thomas",
        role: "Chief Operating Officer",
        text: "Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience.",
        animate: "fade-up",
        delay: "300"
    },
    {
        id: "3",
        name: "Jennie F.",
        image: Jennie,
        alt: "profile picture of Jennie",
        role: "Business Owner",
        text: "Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!",
        animate: "fade-up",
        delay: "400"
    },
]as const;

export const projectData = [
    {
        id: "1",
        alt: "image of milk bottles",
        images: {
            imgD:  MilkBottlesD,
            imgM: MilkBottlesM
        },
        animate: "zoom-in",
        delay: "100"
    },
    {
        id: "2",
        alt: "image of orange fruit",
        images: {
            imgD:  OrangeD,
            imgM: OrangeM
        },
        animate: "zoom-in",
        delay: "300"
    },
    {
        id: "3",
        alt: "image of an icecream cone",
        images: {
            imgD:  ConeD,
            imgM: ConeM
        },
        animate: "zoom-in",
        delay: "500"
    },
    {
        id: "4",
        alt: "image of sugar cubes",
        images: {
            imgD:  SugarCubesD,
            imgM: SugarCubesM
        },
        animate: "zoom-in",
        delay: "700"
    },
] as const;

export const socialsData = [
    {
        id: "1",
        alt: "facebook icon",
        image: Facebook,
        animate: "zoom-i",
        delay: "200"
    },
    {
        id: "2",
        alt: "instagram icon",
        image: Instagram,
        animate: "zoom-i",
        delay: "300"
    },
    {
        id: "3",
        alt: "twitter icon",
        image: Twitter,
        animate: "zoom-i",
        delay: "400"
    },
    {
        id: "4",
        alt: "pinterest icon",
        image: Pinterest,
        animate: "zoom-i",
        delay: "500"
    },
]as const;