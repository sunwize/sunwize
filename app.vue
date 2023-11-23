<template>
    <NuxtPage />
</template>

<script setup>
function generateMeta({ title, description, image, url }) {
    return [
        {
            hid: "description",
            name: "description",
            content: description,
        },
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

useHead({
    title: "Colin Clisson | Full Stack Developer",
    htmlAttrs: {
        lang: "en",
    },
    meta: [
        {
            hid: "author",
            name: "author",
            content: "Colin Clisson",
        },
        {
            hid: "keywords",
            name: "keywords",
            content: "Full stack, Web, Developer, Engineer, Vue, Nuxt, React",
        },
        {
            hid: "viewport",
            name: "viewport",
            content: "width=device-width, initial-scale=1.0",
        },
        // Social media
        ...generateMeta({
            title: "Colin Clisson | Full Stack Developer",
            description: "As a full stack developer, I create interactive and user-friendly web applications using HTML, CSS, and JavaScript.",
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
                "description": "As a full stack developer, I create interactive and user-friendly web applications using HTML, CSS, and JavaScript.",
            }),
            type: "application/ld+json",
        },
    ],
});
</script>
