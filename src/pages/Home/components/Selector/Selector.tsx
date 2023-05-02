import type { FC } from 'react';
import { useState } from 'react';

import { SELECTOR_TITLE } from '../../../../constants';

import type { IFilter } from '../../../../models/types';

import styles from './Selector.module.css';

interface IProps {
  filter: IFilter;
  options: IFilter[];
  handleClick: (newFilter: IFilter) => void;
}

const Selector: FC<IProps> = ({ filter, options, handleClick }) => {
  const [isOpened, setIsOpened] = useState(false);

  const handleClickSelector = () => {
    setIsOpened(!isOpened);
  };

  const handleClickOption = (newFilter: IFilter) => {
    handleClick(newFilter);
    setIsOpened(false);
  };

  return (
    <div className={styles.selector}>
      <p>{SELECTOR_TITLE}</p>
      <div className={styles.selected} onClick={handleClickSelector}>
        {filter.title}
        {isOpened && (
          <div className={styles.options}>
            {options.map((item, index) => (
              <div
                className={styles.option}
                key={index}
                onClick={() => handleClickOption(item)}
              >
                {item.title}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Selector;
