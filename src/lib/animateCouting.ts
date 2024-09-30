import { gsap } from 'gsap'

export function animateCounting(element: HTMLElement, duration: number = 2) {
    // Read the text content and convert it to an integer
    const targetNumber = parseInt(element.textContent || '0', 10)

    // Ensure the target number is valid
    if (isNaN(targetNumber)) {
        console.error('Invalid number in element:', element)
        return
    }

    // Set initial text to 0
    element.textContent = '0'

    // Animate the counting
    gsap.to(
        {},
        {
            duration: duration,
            // this function is called every frame
            onUpdate: function () {
                // get the progress of the animation
                const progress = this.progress()
                // calculate the current number based on the progress
                const currentNumber = Math.round(targetNumber * progress)
                // update the text content of the element
                element.textContent = currentNumber.toString()
            },
        }
    )
}
