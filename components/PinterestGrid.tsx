"use client"

import { useEffect, useState, useRef, useCallback } from "react"
import Image from "next/image"
import { Loader2 } from "lucide-react"
import ima from '@/assets/images/3d.png'

// Mock data generator for demo purposes
const generateMockData = (startIndex: number, count: number) => {
    return Array.from({ length: count }, (_, i) => {
        const index = startIndex + i
        const height = Math.floor(Math.random() * 200) + 200 // Random height between 200-400px
        return {
            id: `pin-${index}`,
            title: `Pin Title ${index}`,
            description: `This is a brief description for pin ${index}. It provides context about the image.`,
            imageUrl: `@/assets/images/3d.png?height=${height}&width=400`,
            height,
            user: {
                name: `User ${index % 10}`,
                avatar: `/placeholder.svg?height=40&width=40`,
            },
        }
    })
}

export default function PinterestGrid() {
    const [pins, setPins] = useState<any[]>([])
    const [loading, setLoading] = useState(false)
    const [page, setPage] = useState(1)
    const loaderRef = useRef<HTMLDivElement>(null)

    // Load initial data
    useEffect(() => {
        setPins(generateMockData(0, 20))
    }, [])

    // Infinite scroll handler
    const handleObserver = useCallback(
        (entries: IntersectionObserverEntry[]) => {
            const [target] = entries
            if (target.isIntersecting && !loading) {
                setPage((prev) => prev + 1)
            }
        },
        [loading],
    )

    // Set up intersection observer for infinite scrolling
    useEffect(() => {
        const observer = new IntersectionObserver(handleObserver, {
            rootMargin: "0px 0px 400px 0px",
        })

        if (loaderRef.current) {
            observer.observe(loaderRef.current)
        }

        return () => {
            if (loaderRef.current) {
                observer.unobserve(loaderRef.current)
            }
        }
    }, [handleObserver])

    // Load more data when page changes
    useEffect(() => {
        if (page > 1) {
            loadMorePins()
        }
    }, [page])

    const loadMorePins = async () => {
        setLoading(true)
        // Simulate API delay
        await new Promise((resolve) => setTimeout(resolve, 1000))
        const newPins = generateMockData(pins.length, 10)
        setPins((prev) => [...prev, ...newPins])
        setLoading(false)
    }

    return (
        <main className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-8 text-center">Pinterest-Style Grid</h1>

            {/* Masonry Grid */}
            <div className="grid grid-cols-3 w-full h-screen">
                <div className="">

                </div>
                <div className="">

                </div>

                <div className="">

                </div>
            </div>

            {/* Loading indicator */}
            <div ref={loaderRef} className="flex justify-center my-8">
                {loading && (
                    <div className="flex items-center gap-2">
                        <Loader2 className="h-6 w-6 animate-spin" />
                        <span>Loading more pins...</span>
                    </div>
                )}
            </div>
        </main>
    )
}

