'use client'

export default function Modal({ title }: { title: string }) {
    return (
        <div className="animate-slide-up">
            <h2>{title}</h2>
        </div>
    )
}
