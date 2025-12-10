"use client"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { useRouter } from "next/navigation";
import React from "react";

type Props = {
        id: number;
        name: string;
        price: string;
        image: string;
}

const ProductInterceptorDialog = ({id, name, price, image}: Props) => {

        const router = useRouter();

        const [isOpen, setIsOpen] = React.useState(true);

        const onCloseButton  = () => {
                setIsOpen(false);
                router.push('/products');
        }
        return (
                <Dialog open={isOpen} onOpenChange={onCloseButton}>
                        <DialogContent className="max-w-lg">
                                <DialogHeader>
                                        <DialogTitle>{name}</DialogTitle>
                                        <DialogDescription>{price}</DialogDescription>
                                </DialogHeader>
                                <div className="my-4">
                                        <img src={image} alt={name} className="rounded-md mb-4 w-full" />
                                        <p>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                        </p>
                                </div>
                                <DialogFooter>
                                        <DialogClose asChild>
                                                <Button onClick={onCloseButton}>Close</Button>
                                        </DialogClose>
                                </DialogFooter>
                        </DialogContent>
                </Dialog>
        )
}

export default ProductInterceptorDialog