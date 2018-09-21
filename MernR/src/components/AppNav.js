import React, { Component } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Container } from 'reactstrap';
import LogoIMG from '../components/LogoIMG';
export default class AppNav extends Component {
	state = {
		isOpen: false
	};

	toggle = () => {
		this.setState({ isOpen: !this.state.isOpen });
	};

	render() {
		return (
			<div>
				<LogoIMG />
				<Navbar expand="sm" className="mb-5">
					<Container>
						<NavbarBrand href="/">Market List</NavbarBrand>
						<NavbarToggler onClick={this.toggle} />
						<Collapse is  Open={this.state.isOpen} navbar>
							<Nav className="ml-auto" navbar>
								<NavItem>
									<NavLink href="https://twitter.com/ijeoma_s_mathew"> @CodaBae </NavLink>
								</NavItem>
							</Nav>
						</Collapse>
					</Container>
				</Navbar>
			</div>
		);
	}
}
