import React from 'react';
import styles from './StatusLine.module.css';

const StatusLine = props => {
    return <div className={styles.root}>{props.message}</div>;
};

export default StatusLine;
