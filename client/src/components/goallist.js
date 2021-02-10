import React, { Component } from "react";
import {Container, ListGroup, ListGroupItem, Button} from "reactstrap";
import {CSSTransition, TransitionGroup} from "react-transition-group";



class GoalList extends Component {
 state = {
     goals: [ 
         {id: 12345, name: "Apply to 10 jobs this week" },
         {id: Math.random(), name: "Make 10 new connections this week" },
         {id: Math.random(), name: "work on react project" },
         {id: Math.random(), name: "set up mastermind" }
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