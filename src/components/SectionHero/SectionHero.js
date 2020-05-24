import React from 'react';
import { string } from 'prop-types';
import { FormattedMessage } from '../../util/reactIntl';
import classNames from 'classnames';
import { NamedLink } from '../../components';

import css from './SectionHero.css';

const SectionHero = props => {
  const { rootClassName, className } = props;

  const classes = classNames(rootClassName || css.root, className);

  return (
    <div className={classes}>
      <div className={css.heroContent}>
        <h1 className={css.heroMainTitle}>
          {/* JJ
          <FormattedMessage id="SectionHero.title" />
          */}
          Best kicks in town!
          </h1>
        <h2 className={css.heroSubTitle}>
          {/* JJ
          <FormattedMessage id="SectionHero.subTitle" />
          */}
          No.1 shoe lover community!
        </h2>
        <NamedLink
          name="SearchPage"
          to={{
            search:
              'address=Finland&bounds=70.0922932%2C31.5870999%2C59.693623%2C20.456500199999937',
          }}
          className={css.heroButton}
        >
        Sell your kicks now!
        {/* JJ
          <FormattedMessage id="SectionHero.browseButton" />
           */}
        </NamedLink>
      </div>
    </div>
  );
};

SectionHero.defaultProps = { rootClassName: null, className: null };

SectionHero.propTypes = {
  rootClassName: string,
  className: string,
};

export default SectionHero;
