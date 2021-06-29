import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import Pagination from '@material-ui/lab/Pagination';
import ColorTile from '../ColorTile/ColorTile';
import styles from './ColorList.module.scss';

const ColorList = ({ colors, filter, randomColor }) => {
    const [visibleColors, setVisibleColors] = useState([]);
    const [pageCount, setPageCount] = useState(1);
    const [page, setPage] = useState(1);
    
    const itemsShowPerPage = 12;

    const handlePageChange = (event, value) => {
        const totalResults = (value * itemsShowPerPage);
        const prevResults =  (itemsShowPerPage * (value - 1));
        setPage(value);

        setVisibleColors([...colors].slice(prevResults, totalResults));
    };

    useEffect(() => {
        const value = Math.ceil(colors.length / itemsShowPerPage);
        setPageCount(value);

        setVisibleColors([...colors].slice(0, itemsShowPerPage));

        if (randomColor) {
            setVisibleColors([randomColor]);
        }

        // eslint-disable-next-line
    }, [colors, randomColor]);


    return (
        <div className={styles.RootWrapper}>
            <Grid container spacing={4} className={styles.ColorsList}>
                { visibleColors.map(color => (
                    <Grid item xs={12} sm={6} md={4} lg={3} key={color.id}>
                        <ColorTile color={color} />
                    </Grid>
                ))}
            </Grid>

            { (!randomColor && pageCount > 1) && <Pagination count={pageCount} page={page} onChange={handlePageChange} className={styles.Pagination} /> }
        </div>
    );
};

export default ColorList;
