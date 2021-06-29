import React from 'react';
import Button from '@material-ui/core/Button';
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from '@material-ui/icons/Close';
import styles from './Sidebar.module.scss';

const Sidebar = ({ show, hideSidebar, updateFilter, randomColorShow }) => {
    const items = ["red", "orange", "yellow", "green", "blue", "purple", "brown", "gray"];

    return (
        <div className={[styles.RootWrapper, show ? styles.Show : ""].join(' ')}>
            <div>
                <IconButton color="primary"
                            component="button"
                            onClick={hideSidebar}
                            className={styles.CloseBtn}>
                    <CloseIcon />
                </IconButton>
            </div>

            <Button variant="contained" onClick={randomColorShow} className={styles.RandomColorBtn}>Random Color</Button>

            <ul className={styles.ItemsList}>
                <li className={styles.Item} onClick={() => updateFilter("")}>All</li>
                { Array.isArray(items) && items.map(item => (
                    <li key={item} className={styles.Item} onClick={() => updateFilter(item)}>{ item }</li>
                )) }
            </ul>
        </div>
    );
};

export default Sidebar;
