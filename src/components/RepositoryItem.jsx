export function RepositoryItem(props){
    return(
        <li>
            <h2>{props.repository.name}</h2>
            <p> {props.repository.description}</p>
            <a href={props.repository.html_url} target="_blank">Acessar repositório</a>
        </li>
    );
}