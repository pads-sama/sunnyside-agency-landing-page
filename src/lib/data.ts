import egg from "../assets/images/desktop/image-transform.jpg"
import standout from "../assets/images/desktop/image-stand-out.jpg"
import graphicDesignD from "../assets/images/desktop/image-graphic-design.jpg";
import graphicDesignM from "../assets/images/mobile/image-graphic-design.jpg";
import photographyD from "../assets/images/desktop/image-photography.jpg";
import photographyM from "../assets/images/mobile/image-photography.jpg";
import Emily from "../assets/images/image-emily.jpg";
import Thomas from "../assets/images/image-thomas.jpg";
import Jennie from "../assets/images/image-jennie.jpg";



export const links = [
    
    {
        id: "1",
        name: "About",
        url:"#about"
    },
    {
        id: "2",
        name: "Services",
        url:"#services"
    },
    {
        id: "3",
        name: "Projects",
        url:"#projects"
    },
    {
        id: "4",
        name: "Contact",
        url:"#contact"
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
        text: "We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit."
    },
    {
        id: "2",
        name: "Thomas S.",
        image: Thomas,
        alt: "profile picture of Thomas",
        role: "Chief Operating Officer",
        text: "Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience."
    },
    {
        id: "3",
        name: "Jennie F.",
        image: Jennie,
        alt: "profile picture of Jennie",
        role: "Business Owner",
        text: "Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!"
    },
]as const;