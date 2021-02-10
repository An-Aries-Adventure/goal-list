import React, { Component } from "react";
import {Container, ListGroup, ListGroupItem, Button} from "reactstrap";
import {CSSTransition, TransitionGroup} from "react-transition-group";



class GoalList extends Component {
 state = {
     goals: [ 
     ]
 };

 render(){
     const {goals} = this.state;
        return(
            <Container>
                <Button color ="dark" 
                style={{marginBottom: '2rem'}}
                onClick = {() => {
                   const name = prompt("Enter a Goal") 
                   if(name) {
                    this.setState(state => ({
                        goals:[...state.goals, {id: Math.random(), name: name}]
                    }));
                }
                }} 
                >
                Add a Goal
                </Button>

            <ListGroup>
                <TransitionGroup className="goal-list">
                    {goals.map(({ id, name }) => (
                    <CSSTransition key={id} timeout={500} className ="fade">
                        <ListGroupItem>{name}</ListGroupItem>
                    </CSSTransition>
                    ))}
                </TransitionGroup>
            </ListGroup>
        </Container>
     );
    }
};

export default GoalList;