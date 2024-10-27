import createClient from "../client";

const fetchAboutUs = async () => {
    const data = await createClient
        .fetch(
            `*[_type == "AboutUs"]{
                caption,
                text[]
    }`
        )
        .catch(console.error);
    return data[0];
}

const fetchAboutUsTestimonial = async () => {
    const data = await createClient
        .fetch(
            `*[_type == "Data"]{
                rating,
                rating_content,
                testimonial_title,
                testimonial_content,
                numbers,
                data_name,
                video{
                    asset->{
                _id,
                url
                }
                }
    }`
)
.catch(console.error);
    return data[0];
}

const fetchDescription = async () => {
    const data = await createClient
    .fetch(
        `*[_type == "Online"]{
                Description,
                Gold{
                    Months_1,
                    Discount_1,
                    Months_3,
                    Discount_3,
                    Months_6,
                    Discount_6,
                },
                Silver{
                    Months_1,
                    Discount_1,
                    Months_3,
                    Discount_3,
                    Months_6,
                    Discount_6,
                },
                Bronze{
                    Months_1,
                    Discount_1,
                    Months_3,
                    Discount_3,
                    Months_6,
                    Discount_6,
                },
                PDFfile{
                asset->{
                    url
                }},
                Benefits[]{
                Text,
                Subtext,
                Gold,
                Silver,
                Bronze
                }
                }`
            )
        .catch(console.error);
    const data2 = await createClient
    .fetch(
        `*[_type == "Offline"]{
            Description,
            Gold{
                    Months_1,
                    Discount_1,
                    Months_3,
                    Discount_3,
                    Months_6,
                    Discount_6,
                },
                Silver{
                    Months_1,
                    Discount_1,
                    Months_3,
                    Discount_3,
                    Months_6,
                    Discount_6,
                },
                Bronze{
                    Months_1,
                    Discount_1,
                    Months_3,
                    Discount_3,
                    Months_6,
                    Discount_6,
                },
                PDFfile{
                asset->{
                    url
                }},
                Benefits[]{
                Text,
                Subtext,
                Gold,
                Silver,
                Bronze}
            }`
        )
        .catch(console.error);
    const data3 = await createClient
    .fetch(
        `*[_type == "Consultancy"]{
            Description,
             Gold{
                        Weeks_8,
                        Weeks_12,
                        Weeks_24,
                    },
                    Silver{
                        Weeks_8,
                        Weeks_12,
                        Weeks_24,
                    },
                    Bronze{
                        Weeks_8,
                        Weeks_12,
                        Weeks_24,
                    },
                    PDFfile{
                    asset->{
                        url
                    }},
                    Benefits[]{
                Text,
                Subtext,
                Gold,
                Silver,
                Bronze}
            }`
        )
        .catch(console.error);
    const data4 = await createClient
    .fetch(
        `*[_type == "1_on_1_Training"]{
            Description,
            Gold,
                    Silver,
                    Bronze,
                    PDFfile{
                    asset->{
                        url
                    }},
                    Benefits[]{
                Text,
                Subtext,
                Gold,
                Silver,
                Bronze}
            }`
        )
        .catch(console.error);
    let des = {"Online": data[0], "Offline": data2[0], "Consultancy": data3[0], "1_on_1_Training": data4[0]};
    return des;
}

const fetchGallery = async () => {
    const data = await createClient
        .fetch(
            `*[_type == "Gallery"]{
                title,
                images[]{
                    asset->{
                        url
                    }
                    },
                Socials 
                    }`
        )
        .catch(console.error);
    return data[0];
}

const fetchPackages = async () => {
    const data = await createClient
    .fetch(
        `*[_type == "Packages"]{
                title,
                type,
                level,
                weeks,
                image{
                    asset->{
                        _id,
                        url
                    }
                    },
                desc
    }`
        )
        .catch(console.error);
        return data;
    }

    const fetchTestimonials = async () => {
        const data = await createClient
            .fetch(
                `*[_type == "testimonial"]{
                    testimonial,
                    file{
                        asset->{
                            _id,
                            url
                        },
                    },
                    name,
                    position,
                }`
            ).then()
            .catch(console.error);
        
        return data;
    }

const fetchcommentlink = async () => {
    const data = await createClient
        .fetch(
            `*[_type == "JoinUs"]{
            title,
                whatsapp_link
            }`
        )
        .catch(console.error);
    return data[0];
}

const fetchWhyUs = async () => {
    const data = await createClient
        .fetch(
            `*[_type == "WhyUs"]{
                main_title,
                    titles[],
                    contents[] 
            }`
        )
        .catch(console.error);
    return data[0];
}

export const AboutUs = await fetchAboutUs();
export const packages = await fetchPackages();
export const gallery = await fetchGallery();
export const AboutUsTestimonials = await fetchAboutUsTestimonial();
export const description = await fetchDescription();
export const testimonial = await fetchTestimonials();
const { title, whatsapp_link } = await fetchcommentlink();
export { title, whatsapp_link };
export const whyUs = await fetchWhyUs();