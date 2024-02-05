import Image from "next/image";
import Link from "next/link";
import NewsletterCTA from "@/components/NewsletterCTA";
import { PiArrowSquareOutFill } from "react-icons/pi";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import React from "react";

const CardItems = () => {
    const cardItems = [
        {
            title: "Airbnb Help Center",
            description: "Help for Airbnb Guests and Hosts",
            img: "/images/airbnb.jpeg",
            link: "https://www.airbnb.com/help?audience=guest",
            path: "/{slug}",
        },
        {
            title: "Official Apple Support",
            description: "Support for apple products and software",
            img: "/images/apple.jpeg",
            link: "https://support.apple.com/",
            path: "/{slug}",
        },
        {
            title: "BigCommerce Help Center",
            description: "Help Center for customers and partners",
            img: "/images/bigcommerce.jpeg",
            link: "https://support.bigcommerce.com/s/?language=en_US",
            path: "/{slug}",
        },
        {
            title: "Care Help Center",
            description: "For Care families, caregivers & partners",
            img: "/images/care.jpeg",
            link: "https://help.care.com/s/",
            path: "/{slug}",
        },
        {
            title: "Credit Karma Help Center",
            description: "Provides support to Credit Karma users",
            img: "/images/creditkarma.jpeg",
            link: "https://support.creditkarma.com/s/",
            path: "/{slug}",
        },
        {
            title: "Ecobee Support",
            description: "Help Center for Ecobee products",
            img: "/images/ecobee.jpeg",
            link: "https://support.ecobee.com/s/",
            path: "/{slug}",
        },
        {
            title: "Figma Help Center",
            description: "Help for designers and product teams",
            img: "/images/figma.jpeg",
            link: "https://help.figma.com/hc/en-us",
            path: "/{slug}",
        },
        {
            title: "Hulu Help Center",
            description: "Hulu Help Center for Customers",
            img: "/images/hulu.jpeg",
            link: "https://help.hulu.com/s/",
            path: "/{slug}",
        },

        {
            title: "Lumino Health",
            description: "Help for Lumino Health customers",
            img: "/images/luminohealth.jpeg",
            link: "https://luminohealth.sunlife.ca/s/",
            path: "/{slug}",
        },
        {
            title: "Nextdoor Help Center",
            description: "Help for Nextdoor users",
            img: "/images/nextdoor.jpeg",
            link: "https://help.nextdoor.com/s/",
            path: "/{slug}",
        },
        {
            title: "Salesforce Help Center",
            description: "Help for Salesforce customers & partners",
            img: "/images/salesforce.jpeg",
            link: "https://help.salesforce.com/s/",
            path: "/{slug}",
        },
        {
            title: "Sonos Help & Support",
            description: "Support and chat for sonos products",
            img: "/images/sonos.jpeg",
            link: "https://support.sonos.com/en-in/home",
            path: "/{slug}",
        },
        {
            title: "Square Support",
            description: "Support for Square customers",
            img: "/images/square-support.jpeg",
            link: "https://squareup.com/help/us/en",
            path: "/{slug}",
        },
        {
            title: "Xero Central",
            description: "Expert help for Xero customers",
            img: "/images/xerocentral.jpeg",
            link: "https://central.xero.com/s/",
            path: "/{slug}",
        },
    ];
    return (
        <section>
            <div className="container mb-40 grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
                {cardItems.map((item, index) => (
                    <React.Fragment key={index}>
                        {" "}
                        {index === 6 && (
                            <div className="col-span-full row-span-2 my-4">
                                <NewsletterCTA />
                            </div>
                        )}
                        <div className="h-auto w-full">
                            <div className="group relative">
                                <div className="absolute right-5 top-5 hidden group-hover:block">
                                    <Link
                                        className="flex h-9 w-9 items-center justify-center rounded-sm bg-[theme(colors.zinc.950/.6)]"
                                        href={item.link}
                                    >
                                        <span className="sr-only">
                                            Visit Website
                                        </span>
                                        <PiArrowSquareOutFill className="text-2xl text-white" />
                                    </Link>
                                </div>
                                <div className="mb-4 aspect-[4/5]">
                                    <Card className="mb-2 h-full overflow-hidden rounded bg-white shadow-sm transition duration-300 hover:shadow-[0_20px_25px_-5px_rgba(0,0,0,0.3)] hover:shadow-black/10 dark:bg-zinc-800">
                                        <Link href={item.path}>
                                            <CardHeader>
                                                <Image
                                                    src={item.img}
                                                    alt={item.title}
                                                    width="380"
                                                    height="380"
                                                    className="h-full w-full max-w-full object-cover object-top"
                                                />
                                            </CardHeader>
                                        </Link>
                                    </Card>
                                </div>
                                <CardContent>
                                    <CardTitle>{item.title}</CardTitle>
                                    <CardDescription>
                                        {item.description}
                                    </CardDescription>
                                </CardContent>
                            </div>
                        </div>
                    </React.Fragment>
                ))}
            </div>
        </section>
    );
};
export default CardItems;
