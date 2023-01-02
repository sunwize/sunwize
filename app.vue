<template>
    <NuxtPage />
</template>

<script setup>
function generateSocialMeta({ title, description, image, url }) {
    return [
        {
            hid: "og:title",
            property: "og:title",
            content: title,
        },
        {
            hid: "og:description",
            property: "og:description",
            content: description,
        },
        {
            hid: "og:image",
            property: "og:image",
            content: image,
        },
        {
            hid: "og:url",
            property: "og:url",
            content: url,
        },
        // Twitter
        {
            hid: "twitter:title",
            name: "twitter:title",
            content: title,
        },
        {
            hid: "twitter:description",
            name: "twitter:description",
            content: description,
        },
        {
            hid: "twitter:image",
            name: "twitter:image",
            content: image,
        },
        {
            hid: "twitter:image:alt",
            name: "twitter:image:alt",
            content: "Colin Clisson",
        },
        {
            hid: "card",
            name: "twitter:card",
            content: "summary_large_image",
        },
    ];
}

function generateGoogleAnalytics() {
    return [
        {
            async: true,
            src: "https://www.googletagmanager.com/gtag/js?id=G-MLHG2G84NB",
        },
        {
            innerHTML: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', 'G-MLHG2G84NB');
            `,
        },
    ];
}

useHead({
    title: "Colin Clisson",
    htmlAttrs: {
        lang: "en",
    },
    meta: [
        {
            hid: "description",
            name: "description",
            content: "As a front-end engineer, I specialize in creating interactive and user-friendly web applications using HTML, CSS, and JavaScript. Take a look at my recent projects to learn more about my skills and experience.",
        },
        {
            hid: "author",
            name: "author",
            content: "Colin Clisson",
        },
        {
            hid: "keywords",
            name: "keywords",
            content: "Web, Developer, Development, Engineer, Application, Software",
        },
        {
            hid: "viewport",
            name: "viewport",
            content: "width=device-width, initial-scale=1.0",
        },
        // Social media
        ...generateSocialMeta({
            title: "Colin Clisson",
            description: "As a front-end engineer, I specialize in creating interactive and user-friendly web applications using HTML, CSS, and JavaScript. Take a look at my recent projects to learn more about my skills and experience.",
            image: "https://res.cloudinary.com/dh0ymuppr/image/upload/v1672608952/portfolio/avatar.jpg",
            url: "https://colinclisson.com",
        }),
    ],
    script: [
        {
            innerHTML: JSON.stringify({
                "@context": "https://schema.org/",
                "@type": "Web developer",
                "name": "Colin Clisson",
                "author": {
                    "@type": "Person",
                    "name": "Colin Clisson",
                },
                "description": "Front-end developer who builds complex web application",
            }),
            type: "application/ld+json",
        },
        ...generateGoogleAnalytics(),
    ],
});
</script>
