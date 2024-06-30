export default defineEventHandler(async (event) => {

    //handle query params
    //const { name } = useQuery(event)

    // api call with private key
    const { data } = await $fetch('')

    return data

})