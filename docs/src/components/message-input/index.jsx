import React from 'react';
import _ from 'lodash';
import MessageInput from '../../../../dist/message-input';
import Button from '../../../../dist/button';
import IconEmoji from '../../../../dist/icons/icon-emoji';
import Props from '../props';
import components from '../../../components.json';
import Paper from '../../../../dist/paper';
import example from './example';
import Markdown from '../markdown';

class MessageInputDoc extends React.Component {
  constructor() {
    super();

    this.state = {
      value: '',
      multiLine: ''
    };
  }

  handleChange = event => this.setState({ value: event.currentTarget.value })

  handleMultiLineChange = event => this.setState({ multiLine: event.currentTarget.value })

  sendMessage = () => this.setState({ value: '' })

  sendMultiLineMessage = () => this.setState({ multiLine: '' })

  render() {
    const componentData = _.find(components, component => component.displayName === 'MessageInput');
    const style = {
      paper: {
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        margin: 0,
        padding: '20px'
      }
    };

    return (
      <article className="page">
        <h1>MessageInput</h1>
        <section>
          <h1>Description</h1>
          <p>{componentData.description}</p>
        </section>
        <section>
          <Markdown markdown={example} title="Code example" />
        </section>
        <section>
          <h1>Examples</h1>
          <Paper style={style.paper}>
            <MessageInput
              onChange={this.handleChange}
              placeholder="Type something..."
              value={this.state.value}
              sendMessage={this.sendMessage}
              leftButton={
                <Button iconButton onClick={() => {}}>
                  <IconEmoji />
                </Button>
              }
              rightButton={
                <Button iconButton onClick={() => {}}>
                  <IconEmoji />
                </Button>
              }
            />
            <span dangerouslySetInnerHTML={{ __html: this.state.multiLine.replace(/\n/g, '<br />') }} />
            <MessageInput
              onChange={this.handleMultiLineChange}
              placeholder="Multi line example..."
              value={this.state.multiLine}
              sendMessage={this.sendMultiLineMessage}
              leftButton={
                <Button iconButton onClick={() => {}}>
                  <IconEmoji />
                </Button>
              }
              rightButton={
                <Button iconButton onClick={() => {}}>
                  <IconEmoji />
                </Button>
              }
              multiLine
            />
          </Paper>
        </section>
        <Props props={componentData.props} />
      </article>
    );
  }
}

export default MessageInputDoc;
