import {navLinks} from "../constants";
const NavBar = () => {
	return (
		<header>
			<nav>
				<img  src="/logo.svg" alt="Apple logo" />
				<ul>
					{
						navLinks.map((link) => {
							return (<li key={link.label}>
								<a href={`#${link.label.toLowerCase()}`}>
									{link.label}
								</a>
							</li>)
						})
					}
				</ul>
				<div className="flex-center gap-3">
					<button>
						<img src="/search.svg" alt="search icon"/>
					</button>
					<button>
						<img src="/cart.svg" alt="cart icon"/>
					</button>
				</div>
			</nav>
		</header>
	)
}

export default NavBar;