import React from 'react'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import MessageForm from './Form';
interface BottomSheetProps {
  trigger: React.ReactNode;
}

const Bottomsheet = ({trigger}:BottomSheetProps) => {
  return (
    <Sheet>
  <SheetTrigger asChild>
    {trigger}
  </SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetTitle>Request For Resume by filling the form</SheetTitle>
      <SheetDescription>
        <MessageForm/>
      </SheetDescription>
    </SheetHeader>
  </SheetContent>
</Sheet>
  )
}

export default Bottomsheet;