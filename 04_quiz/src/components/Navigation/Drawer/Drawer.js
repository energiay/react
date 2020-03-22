import React, { Component } from 'react'
import classes from './Drawer.module.css'
import Backdrop from '../../Backdrop/Backdrop'
import { NavLink } from 'react-router-dom'

const links = [
	1, 2
]

class Drawer extends Component {

	renderLinks() {
		return links.map((link, index) => {
			return (
				<li key={index} onClick={this.props.onClose}>
					<NavLink to={'/question/' + index}>Вопрос {link}</NavLink>
				</li>
			)
		})
	}


	render() {
		const cls = [classes.Drawer]

		if (!this.props.isOpen) {
			cls.push(classes.close)
		}

		return (
			<React.Fragment>
				<nav className={cls.join(' ')}>
					<ul>
						{this.renderLinks()}
						<li onClick={this.props.onClose}>
							<NavLink to="/end">Результат</NavLink>
						</li>
					</ul>
				</nav>
				{this.props.isOpen ? <Backdrop onClick={this.props.onClose} /> : null}
			</React.Fragment>
		)
	}
}

export default Drawer