import MyProjectsJson from '../assets/data.json'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ProgressBar from 'react-bootstrap/ProgressBar';

export default function Projects() {
    return (
        <section>
            <Card style={{ width: '18rem' }}>
                <h2>Made by {MyProjectsJson.user}</h2>
                { //Måsvingar för där vi skriver javascript
                    //I article, för key prop: Alt att man lägger till ett id i json-filen so, man skriver där
                    MyProjectsJson.projects.map(proj => {
                        return (
                            <ListGroup variant="flush" key={proj.name}>
                                <ListGroup.Item variant="primary">
                                    <article> 
                                        <Card.Header>
                                            <h3>Project name: {proj.name}</h3>
                                        </Card.Header>
                                        <p>Description: {proj.description}</p>
                                        <ProgressBar animated now={proj.progress} />
                                    </article>
                                </ListGroup.Item>
                            </ListGroup>
                        )
                    })
                }
            </Card>
        </section>
    );
}