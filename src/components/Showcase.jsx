import {useMediaQuery} from "react-responsive";
import {useGSAP} from "@gsap/react";
import gsap from 'gsap';

/**
 * Showcase-Komponente
 * 
 * Diese Komponente zeigt einen animierten Showcase-Bereich mit einem Video-Hintergrund
 * und Text-Content. Auf Desktop-Geräten werden Scroll-Animationen mit GSAP verwendet.
 * 
 * @component
 * @returns {JSX.Element} Eine Section mit Video, Maske und Content-Bereich
 */
const Showcase = () => {
	/**
	 * Media Query Hook zur Erkennung von Tablet-Geräten (max-width: 1024px)
	 * @type {boolean}
	 */
	const isTablet = useMediaQuery({ query: '(max-width: 1024px)'});

	/**
	 * GSAP Animation Hook
	 * Erstellt Scroll-basierte Animationen nur für Desktop-Geräte (nicht auf Tablets/Mobil)
	 * 
	 * Timeline-Effekte:
	 * 1. Skaliert das Masken-Bild auf 110% beim Scrollen
	 * 2. Blendet den Content ein und bewegt ihn nach oben (opacity: 1, y: 0)
	 * 
	 * ScrollTrigger-Konfiguration:
	 * - trigger: '#showcase' - Startet Animation wenn #showcase Element erreicht wird
	 * - start: 'top top' - Beginnt wenn die Oberseite des Elements die Oberseite des Viewports erreicht
	 * - end: 'bottom top' - Endet wenn die Unterseite des Elements die Oberseite des Viewports erreicht
	 * - scrub: true - Koppelt Animation direkt an Scroll-Position
	 * - pin: true - Fixiert das Element während der Animation
	 */
	useGSAP(() => {
		if(!isTablet) {
			// Timeline für synchronisierte Animationen erstellen
			const timeline = gsap.timeline({
				scrollTrigger: {
					trigger: '#showcase',
					start: 'top top',
					end: 'bottom top',
					scrub: true,
					pin: true,
				}
			});

			timeline
				// Zoom-Effekt auf das Masken-Bild anwenden
				.to('.mask img', {
					transform: 'scale(1.1)'
				})
				// Content einblenden und nach oben bewegen
				.to('.content', { 
					opacity: 1, 
					y: 0, 
					ease: 'power1.in' 
				});
		}
	}, [isTablet]) // Re-run wenn sich isTablet ändert

	return (
		<section id="showcase">
			{/* Media Container mit Video und Maske */}
			<div className="media">
				{/* Hintergrund-Video im Loop */}
				<video src="/videos/game.mp4" loop muted autoPlay playsInline />
				
				{/* Maske über dem Video */}
				<div className="mask">
					<img src="/mask-logo.svg" alt="Mask Logo" />
				</div>
			</div>

			{/* Content-Bereich mit Produktinformationen */}
			<div className="content">
				<div className="wrapper">
					{/* Haupt-Beschreibungsbereich */}
					<div className="lg:max-w-md">
						<h2>Rocket Chip</h2>

						<div className="space-y-5 mt-7 pe-10">
							<p>
								Introducing {" "}
								<span className="text-white">
                                    M4, the next generation of Apple silicon
                                </span>
								. M4 powers
							</p>
							<p>
								It drives Apple Intelligence on iPad Pro, so you can write, create, and accomplish more with ease. All in a design that's unbelievably thin, light, and powerful.
							</p>
							<p>
								A brand-new display engine delivers breathtaking precision, color accuracy, and brightness. And a next-gen GPU with hardware-accelerated ray tracing brings console-level graphics to your fingertips.
							</p>
							<p className="text-primary">Learn more about Apple Intelligence</p>
						</div>
					</div>

					{/* Performance-Statistiken */}
					<div className="max-w-3xs space-y-14">
						{/* Performance-Vergleich 1: Rendering */}
						<div className="space-y-2">
							<p>Up to</p>
							<h3>4x faster</h3>
							<p>pro rendering performance than M2</p>
						</div>
						
						{/* Performance-Vergleich 2: CPU */}
						<div className="space-y-2">
							<p>Up to</p>
							<h3>1.5x faster</h3>
							<p>CPU performance than M2</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Showcase