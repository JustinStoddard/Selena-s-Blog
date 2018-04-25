import React, { Component } from 'react';
import { 
  Button, 
  Card, 
  Grid, 
  Header, 
  Image, 
  Segment, 
  Divider, 
  Icon 
} from 'semantic-ui-react';

class Home extends React.Component {
  render() {
    return (
      <div>
        <Header as='h1' textAlign='center'>Home Component</Header>
        <Grid>
          <Grid.Row>
            <Grid.Column width={3}>
              <Card>
                <Card.Content>
                    <h1>This is the profile card</h1>
                </Card.Content>
              </Card>
            </Grid.Column>

            <Grid.Column width ={10}>
              <Segment>
                <h1>Header</h1>
                <p>This is where either the posts or the home page will be placed, depending on where a user is on a page.</p>
              </Segment>
            </Grid.Column>

            <Grid.Column width={3}> 
              <Card>
                <Card.Content>
                    <h1>Post archive. Or ads ribbon.</h1>
                </Card.Content>
              </Card>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    )
  }
}

export default Home;
