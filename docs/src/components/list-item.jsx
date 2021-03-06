import React from 'react';
import _ from 'lodash';
import faker from 'faker';
import ListItem from '../../../dist/list-item';
import List from '../../../dist/list';
import Button from '../../../dist/button';
import { IconClose } from '../../../dist/icons';
import Badge from '../../../dist/badge';
import AdminBadge from '../../../dist/admin-badge';
import components from '../../components.json';
import Props from './props';
import Paper from '../../../dist/paper';
import IconMenu from '../../../dist/icon-menu';
import MenuItem from '../../../dist/menu-item';
import IconRocket from '../../../dist/icons/icon-rocket';
import Markdown from './markdown';

const usage = `
  \`\`\`js
  import ListItem from 'anchor-ui/list-item';
  \`\`\`
`;

const ListItemDoc = () => {
  const componentData = _.find(components, component => component.displayName === 'ListItem');
  const style = {
    paper: {
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'center',
      margin: 0,
      padding: '20px'
    },
    list: {
      width: '250px'
    }
  };

  return (
    <article className="page">
      <h1>ListItem</h1>
      <section>
        <h1>Description</h1>
        <p>{componentData.description}</p>
      </section>
      <Markdown markdown={usage} title="Code example" />
      <section>
        <h1>Examples</h1>
        <Paper style={style.paper}>
          <List style={style.list}>
            <ListItem
              primaryText="Default item"
            />
            <ListItem
              primaryText="Default item"
              secondaryText="Secondary text"
            />
            <ListItem
              primaryText="Default item with some very very long text"
              secondaryText="Very very very long Secondary text"
              rightButton={
                <Button iconButton onClick={() => {}}>
                  <IconClose />
                </Button>
              }
              avatar={faker.internet.avatar()}
            />
            <ListItem
              primaryText="Active item"
              secondaryText="Secondary text"
              active
            />
            <ListItem
              primaryText="With avatar"
              secondaryText="10/50"
              avatar={faker.internet.avatar()}
            />
            <ListItem
              primaryText="With rightButton"
              secondaryText="10/50"
              rightButton={
                <Button iconButton onClick={() => {}}>
                  <IconClose />
                </Button>
              }
            />
            <ListItem
              primaryText="With IconMenu"
              secondaryText="10/50"
              avatar={faker.internet.avatar()}
              rightButton={
                <IconMenu
                  style={style.iconMenu}
                  icon={<IconRocket />}
                  header="Items"
                  headerStyle={style.headerStyle}
                  secondaryMenuItems={[<MenuItem icon={<IconRocket />} text="An item" onClick={() => {}} />, <MenuItem text="Another item" onClick={() => {}} />]}
                  dividerText="More items"
                >
                  <MenuItem text="Active item" onClick={() => {}} active />
                  <MenuItem text="Inactive item" onClick={() => {}} />
                </IconMenu>
              }
            />
            <ListItem
              primaryText="With badge"
              secondaryText="10/50"
              avatar={faker.internet.avatar()}
              badge={<Badge value={4} maxValue={9} />}
            />
            <ListItem
              primaryText="Muted"
              secondaryText="10/50"
              avatar={faker.internet.avatar()}
              muted
            />
            <ListItem
              primaryText="Blocked"
              secondaryText="10/50"
              avatar={faker.internet.avatar()}
              blocked
            />
            <ListItem
              primaryText="With textBadge"
              secondaryText="Male"
              textBadge={<span><AdminBadge /> <AdminBadge inverted text="Custom" /></span>}
              avatar={faker.internet.avatar()}
            />
          </List>
        </Paper>
      </section>
      <Props props={componentData.props} />
    </article>
  );
};

export default ListItemDoc;
