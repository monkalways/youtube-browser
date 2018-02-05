import React from 'react';
import { Menu } from 'semantic-ui-react';

const Header = () => {
    return (
        <div>
            <Menu size='large'>
                <Menu.Item header color='blue' active header>Youtube Browser</Menu.Item>
            </Menu>
        </div>
    );
}

export default Header;