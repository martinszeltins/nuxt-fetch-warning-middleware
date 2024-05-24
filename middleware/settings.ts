export default defineNuxtRouteMiddleware(async () => {
    // Load settings
    const { data: settings } = await useFetch('/api/settings')

    console.log(settings.value)
})
