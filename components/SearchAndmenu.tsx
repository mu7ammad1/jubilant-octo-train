"use client"

import * as React from "react"

import { Button } from "@/components/ui/button"
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"


export function SearchAndmenu() {

    return (
        <Drawer>
            <DrawerTrigger asChild>
                <Button variant={"ghost"} size={"icon"} className="rounded-full">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="stroke-[1.5] " style={{ scale: 1.3 }}><path d="M3 5L19 5" stroke="currentColor" strokeLinecap="square" strokeLinejoin="round"></path><path d="M3 12H7" stroke="currentColor" strokeLinecap="square" strokeLinejoin="round"></path><circle cx="16" cy="15" r="4" stroke="currentColor"></circle><path d="M19 18L21 20" stroke="currentColor" strokeLinecap="square"></path><path d="M3 19H7" stroke="currentColor" strokeLinecap="square" strokeLinejoin="round"></path></svg>
                </Button>

            </DrawerTrigger>
            <DrawerContent>
                <div className="mx-auto w-full h-auto max-w-md">
                    <DrawerHeader>
                        <DrawerTitle>Move Goal</DrawerTitle>
                        <DrawerDescription>Set your daily activity goal.</DrawerDescription>
                    </DrawerHeader>
                    <div className="p-4 pb-0">
                        <Button variant={"secondary"} size={"lg"} className={`rounded-full`}>Submit</Button>
                    </div>
                    <DrawerFooter>
                        <Button variant={"secondary"} size={"lg"} className={`rounded-full`}>Submit</Button>
                        <DrawerClose asChild>
                            <Button variant="outline">Cancel</Button>
                        </DrawerClose>
                    </DrawerFooter>
                </div>
            </DrawerContent>
        </Drawer>
    )
}
