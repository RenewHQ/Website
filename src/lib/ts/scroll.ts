/**
 * Scrolls to the specified element with a smooth animation, taking into account the height of the navbar if applicable.
 *
 * @function
 * @name scrollTo
 *
 * @param {string} selector - The CSS selector of the element to scroll to.
 *
 * @returns {void}
 */
export function scrollTo(selector: string): void {
	const element = document.querySelector(selector);
	if (element) {
		const navbar = document.getElementById("navbar");
		if (navbar && selector.startsWith("#")) {
			// The navbar is fixed, so we need to account for its height.
			const navbarHeight =
				navbar.getBoundingClientRect().top + navbar.getBoundingClientRect().height;
			const scrollPosition = element.getBoundingClientRect().top - navbarHeight + window.scrollY;

			window.scrollTo({ top: scrollPosition, behavior: "smooth" });
		} else {
			element.scrollIntoView({ behavior: "smooth" });
		}
	}
}