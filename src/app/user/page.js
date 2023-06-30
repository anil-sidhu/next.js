export default function Page(){
    return(
        <div>
            <h1>
                User Page
            </h1>
        </div>
    )
}

export function generateMetadata(){
    return{
        title:"user page title",
        description:"user page description "
    }
}