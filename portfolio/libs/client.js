import { createClient} from "microcms-js-sdk"
export const client = createClient({
    serviceDomain: "motodesign",
    apiKey:process.env.API_KEY,
})

if (!process.env.API_KEY) {
    throw new Error("MICROCMS_SERVICE_DOMAIN is required");
}

export const getWorks = async () => {
    const works = await client.getList({
    endpoint: "works"
    });
    return works.contents;
}