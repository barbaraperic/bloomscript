export default function handlePointerMove(
    e: React.PointerEvent<HTMLDivElement>,
    ref: React.MutableRefObject<HTMLDivElement[] | null>
) {
    ref?.current?.map((element: HTMLElement) => {
        const rect = element.getBoundingClientRect()

        element.style.setProperty('--x', (e.clientX - rect.left).toString())
        element.style.setProperty('--y', (e.clientY - rect.top).toString())
    })
}
