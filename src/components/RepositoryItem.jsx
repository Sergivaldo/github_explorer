export function RepositoryItem(props){
    return(
        <li>
            <h2>{props.repository.name}</h2>
            <p> {props.repository.description}</p>
            <div>
                <div>
                    <span><strong>Forks</strong>{props.repository.forks}</span>
                    <span><strong>Watchers</strong>{props.repository.watchers}</span>
                </div>
                <a href={props.repository.html_url} target="_blank">Acessar repositório</a>
            </div>
            
        </li>
    );
}