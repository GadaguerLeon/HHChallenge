import React, { useState, useEffect } from 'react';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import NavbarComp from './components/Navbar/NavbarComp';
import Sidebar from './components/Sidebar/Sidebar';
import ColorList from './components/ColorList/ColorList';
import colorsData from './data/ColorDBData.json';
import styles from './App.module.scss';


const App = () => {
    const [colors, setColors] = useState("");
    const [filter, setFilter] = useState("");
    const [randomColor, setRandomColor] = useState(null);
    const [showSidebar, setShowSidebar] = useState(false);

    const updateFilterHandler = (value) => {
        setRandomColor(null)
        setFilter(value);
        setShowSidebar(false);
    };

    const randomColorShowHandler = () => {
        setFilter("");
        setRandomColor(colorsData[Math.floor(Math.random()*colorsData.length)]);
        setShowSidebar(false);
    };

    useEffect(() => {
        let filteredColors = colorsData.filter(color => {
            if (filter) {
                return filter === color.colorName.toLowerCase();
            }
            return color;
        });
        setColors(filteredColors);
    }, [filter]);

    return (
        <div><NavbarComp/>
        <div className={styles.App}>
            
            <Sidebar show={showSidebar}
                     hideSidebar={() => setShowSidebar(false)}
                     updateFilter={updateFilterHandler}
                     randomColorShow={randomColorShowHandler} />

            <div className={styles.Content}>
                <IconButton color="primary"
                            component="span"
                            className={styles.SidebarBtn}
                            onClick={() => setShowSidebar(true)}>
                    <MenuIcon />
                </IconButton>
                <ColorList colors={colors}
                           filter={filter}
                           randomColor={randomColor} />
            </div>
        </div>
        </div>
    );
}

export default App;
