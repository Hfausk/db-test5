import Foods from "./displayUsers"

fetch('/api/get')
.then((response) => response.json())
.then((data) => console.log(data))

const Index = () => (



    <div>
        <h1>Home Page</h1>
        <Foods></Foods>
    </div>
)

export default Index