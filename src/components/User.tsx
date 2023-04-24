
export const User = async () => {
    await new Promise((resolve) => setTimeout(resolve, 3000))
    const response = await fetch('https://api.github.com/users/edsoncarlosdvp', {
        cache: 'no-store'
    })

    const user = await response.json()

    return (
        <div>
            <h1>Perfil do usuário</h1>
            <pre>{JSON.stringify(user, null, 2)}</pre>
        </div >
    )
}