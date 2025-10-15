import {navLinks} from "../constants";
export const NavBar = () => {
	return (
		<header>
			<nav>
				<img  src="/logo.svg" alt="Apple logo" />
				<ul>
					{
						navLinks.map((links, index)=>{
							return (<li key={index}>
								<a href={links.label}>
									{links.label}
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