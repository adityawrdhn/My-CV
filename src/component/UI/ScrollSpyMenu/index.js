import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import Scrollspy from 'react-scrollspy'
import AnchorLink from './AnchorLink'
import { Link } from 'react-router-dom'
import { DrawerContext } from 'context/DrawerContext'

const ScrollSpyMenu = ({ className, menuItems, drawerClose, ...props }) => {
    const { dispatch } = useContext(DrawerContext)
    const scrollItems = []
    menuItems.forEach(item => {
        scrollItems.push(item.path.slice(1))
    })
    const addAllClasses = ['scrollspy__menu']

    if (className) {
        addAllClasses.push(className)
    }

    const toggleDrawer = () => {
        dispatch({
            type: 'TOGGLE',
        })
    }

    return (
        <Scrollspy
            items={scrollItems}
            className={addAllClasses.join(' ')}
            drawerClose={drawerClose}
            {...props}
        >
            {menuItems.map((menu, index) => (
                <li key={index}>
                    {menu.staticLink ? (
                        <Link href={menu.path} key={index}>
                            <a>
                                <em>{index + 1}</em>
                                <i> · </i>
                                <span>{menu.label}</span>
                            </a>
                        </Link>
                    ) : drawerClose ? (
                        <AnchorLink
                            key={index}
                            href={menu.path}
                            offset={props.offset}
                            onClick={toggleDrawer}
                        >
                            <span className="scrollspy__menu__ticker">
                                <em>{index + 1}</em>
                                <i> · </i>
                                <span>{menu.label}</span>
                            </span>
                        </AnchorLink>
                    ) : (
                        <AnchorLink key={index} href={menu.path} offset={props.offset}>
                            <span className="scrollspy__menu__ticker">
                                <em>{index + 1}</em>
                                <i> · </i>
                                <span>{menu.label}</span>
                            </span>
                        </AnchorLink>
                    )}
                    <hr />
                </li>
            ))}
        </Scrollspy>
    )
}

ScrollSpyMenu.propTypes = {
    className: PropTypes.string,
    menuItems: PropTypes.array.isRequired,
    currentClassName: PropTypes.string,
    scrolledPastClassName: PropTypes.string,
    componentTag: PropTypes.string,
    style: PropTypes.object,
    offset: PropTypes.number,
    rootEl: PropTypes.string,
    onUpdate: PropTypes.func,
}

ScrollSpyMenu.defaultProps = {
    componentTag: 'ul',
    currentClassName: 'is-active',
}

export default ScrollSpyMenu
