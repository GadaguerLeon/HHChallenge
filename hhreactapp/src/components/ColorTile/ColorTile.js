import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import styles from './ColorTile.module.scss';

const ColorTile = ({ color }) => {
    return (
        <Card className={styles.RootWrapper}>
            <CardContent className={styles.ColorBox} style={{ backgroundColor: color.colorHexValue }} />
            <CardActions>
                <span className={styles.Hex}>{ color.colorHexValue }</span>
            </CardActions>
        </Card>
    );
};

export default ColorTile;
