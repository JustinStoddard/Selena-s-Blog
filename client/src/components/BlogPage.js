import React from 'react';
import { connect } from 'react-redux';
import { Segment } from 'semantic-ui-react';

class BlogPage extends React.Component {
  state = {name: '', subject: '', description: '', liked: 0}
  
  render() {
    return(
      <div>
        <Segment>
          <h1>BlogPage Component</h1>
        </Segment>
      </div>
    )
  }
}

export default connect()(BlogPage);