/**
 * Usage:
 * This function creates a binary transition effect on the text content of an HTML element.
 * It replaces the original text with random 0s and 1s, gradually revealing the original text sequentially.
 * It respects line breaks within the HTML content.
 *
 * Example:
 * const element = document.getElementById('myElement');
 * binaryTransition(element, 2000, 60); // 2 second duration, 60 fps
 */
export function binaryTextTransitionEffect(
    element: HTMLElement, // The element to apply the effect to
    duration: number = 600, // Duration of the animation in milliseconds
    fps: number = 15 // Frames per second for the animation
): void {
    // Check if the provided element is a valid HTMLElement
    if (!(element instanceof HTMLElement)) {
        console.error('Element is not an HTMLElement')
        return
    }

    // Store the original HTML content of the element
    const originalHTML = element.innerHTML

    // Parse the original HTML to extract text nodes and <br> elements
    const parser = new DOMParser()
    const doc = parser.parseFromString(originalHTML, 'text/html')
    const textNodes = Array.from(doc.body.childNodes).filter(
        (node) => node.nodeType === Node.TEXT_NODE || node.nodeName === 'BR'
    )

    // Create initial binary representation of the text
    let currentHTML = textNodes
        .map((node) => {
            if (node.nodeName === 'BR') return '<br>'
            return Array.from(node.textContent || '')
                .map(() => (Math.random() < 0.5 ? '0' : '1'))
                .join('')
        })
        .join('')

    // Set the initial binary content to the element
    element.innerHTML = currentHTML

    // Calculate animation parameters
    const interval = 1000 / fps
    const totalFrames = Math.floor(duration / interval)
    let frame = 0
    let revealIndex = 0

    // Animation function
    const animate = () => {
        // Check if animation is complete
        if (frame >= totalFrames) {
            element.innerHTML = originalHTML
            return
        }

        let newHTML = ''
        let currentIndex = 0

        // Generate new HTML content for this frame
        textNodes.forEach((node) => {
            if (node.nodeName === 'BR') {
                newHTML += '<br>'
                return
            }

            const nodeText = node.textContent || ''
            for (let i = 0; i < nodeText.length; i++) {
                if (currentIndex < revealIndex) {
                    // Reveal original character if within reveal index
                    newHTML += nodeText[i]
                } else {
                    // Otherwise, use random binary digit
                    newHTML += Math.random() < 0.5 ? '0' : '1'
                }
                currentIndex++
            }
        })

        // Update element with new HTML content
        element.innerHTML = newHTML
        currentHTML = newHTML

        // Increment frame and calculate new reveal index
        frame++
        revealIndex = Math.floor((frame / totalFrames) * currentHTML.length)

        // Schedule next animation frame
        setTimeout(animate, interval)
    }

    // Start the animation
    animate()
}
