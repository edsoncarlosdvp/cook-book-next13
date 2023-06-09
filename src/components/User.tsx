
export const User = async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000))
    const response = await fetch('https://localhost:5001/v1/libary', {
        cache: 'no-store',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Origin': '*',
            'Host': '*'
        }
    })

    const user = await response.json()

    return (
        <div>
            <h1>Perfil do usuário</h1>
            {/* <pre>{JSON.stringify(user, null, 2)}</pre> */}
            <span>Nome: {user.name} </span>
            <span>Biografia: {user.bio}</span>
        </div >
    )
}