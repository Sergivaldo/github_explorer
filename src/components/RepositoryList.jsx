import { RepositoryItem } from "./RepositoryItem";
import '../styles/repositories.scss';
import { useState } from "react";
import { useEffect } from "react";

export function RepositoryList(){
    const [repositories,setRepositories] = useState([]);

    useEffect(
        ()=>{
            fetch('https://api.github.com/orgs/rocketseat/repos')
            .then(response => response.json())
            .then(data => setRepositories(data))
        }
    ,[]);

    return (
        <section className="repository_list">
            <div>
                <h1>Lista de repositórios</h1>
                <h2>{repositories[0]['owner']['login']}</h2>
                
            </div>
            <ul>
                {repositories.map(repository => {
                    return <RepositoryItem repository = {repository}/>
                })}
            </ul>
        </section>
        
    );
}