import React, { FC } from 'react';
import Typography from '@material-ui/core/Typography';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import slugify from 'slugify';

import * as Types from './types';

import useStyles from './styles';

const Accordion: FC<Types.Props> = ({
  headline,
  subline,
  children,
  expanded,
  onChange,
}) => {
  const classes = useStyles({});

  if (!headline || !children) return null;

  const identifier = slugify(headline, {
    replacement: '-',
    remove: /[*+~.()'"!:@]/g,
    lower: true,
  });
  return (
    <>
      <ExpansionPanel
        className={classes.noSpacing}
        expanded={expanded}
        onChange={onChange}
      >
        <ExpansionPanelSummary
          className={classes.summary}
          expandIcon={<ExpandMoreIcon />}
          aria-controls={`${identifier}-content`}
          id={`${identifier}-header`}
        >
          <Typography className={classes.heading}>{headline}</Typography>
          {subline && (
            <Typography className={classes.secondaryHeading}>
              {subline}
            </Typography>
          )}
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className={classes.content}>
          {children}
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </>
  );
};

export default Accordion;
