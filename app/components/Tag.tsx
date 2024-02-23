export default function TagComponent({ mutate }: { mutate: boolean }) {
    return (
        <span
            className={`py-1 font-semibold px-4 rounded-md relative ${
                mutate
                    ? 'bg-gradient-to-r from-pink-500 to-orange-500'
                    : 'bg-gradient-to-r from-indigo-500 to-sky-500'
            } `}
        >
            {mutate
                ? 'Mutates the original array'
                : 'Does not mutate the original array'}
        </span>
    )
}
