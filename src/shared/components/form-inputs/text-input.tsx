"use client"

import * as React from "react"
import {
    IconCheck,
    IconCopy,
    IconInfoCircle,
    IconStar,
} from "@tabler/icons-react"

import { useCopyToClipboard } from "@/shared/hooks/use-copy-to-clipboard"
import {
    InputGroup,
    InputGroupAddon,
    InputGroupButton,
    InputGroupInput,
} from "@/shared/components/ui/input-group"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/shared/components/ui/popover"
import { FormField } from "../ui/form"
import { Control, ControllerFieldState, ControllerRenderProps, FieldValues, Path, UseFormReturn } from "react-hook-form"

export function InputGroupButtonExample() {
    const { copyToClipboard, isCopied } = useCopyToClipboard()
    const [isFavorite, setIsFavorite] = React.useState(false)

    return (
        <div className="grid w-full max-w-sm gap-6">
            <InputGroup>
                <InputGroupInput placeholder="https://x.com/shadcn" readOnly />
                <InputGroupAddon align="inline-end">
                    <InputGroupButton
                        aria-label="Copy"
                        title="Copy"
                        size="icon-xs"
                        onClick={() => {
                            copyToClipboard("https://x.com/shadcn")
                        }}
                    >
                        {isCopied ? <IconCheck /> : <IconCopy />}
                    </InputGroupButton>
                </InputGroupAddon>
            </InputGroup>
            <InputGroup className="[--radius:9999px]">
                <Popover>
                    <PopoverTrigger asChild>
                        <InputGroupAddon>
                            <InputGroupButton variant="secondary" size="icon-xs">
                                <IconInfoCircle />
                            </InputGroupButton>
                        </InputGroupAddon>
                    </PopoverTrigger>
                    <PopoverContent
                        align="start"
                        className="flex flex-col gap-1 rounded-xl text-sm"
                    >
                        <p className="font-medium">Your connection is not secure.</p>
                        <p>You should not enter any sensitive information on this site.</p>
                    </PopoverContent>
                </Popover>
                <InputGroupAddon className="text-muted-foreground pl-1.5">
                    https://
                </InputGroupAddon>
                <InputGroupInput id="input-secure-19" />
                <InputGroupAddon align="inline-end">
                    <InputGroupButton
                        onClick={() => setIsFavorite(!isFavorite)}
                        size="icon-xs"
                    >
                        <IconStar
                            data-favorite={isFavorite}
                            className="data-[favorite=true]:fill-blue-600 data-[favorite=true]:stroke-blue-600"
                        />
                    </InputGroupButton>
                </InputGroupAddon>
            </InputGroup>
            <InputGroup>
                <InputGroupInput placeholder="Type to search..." />
                <InputGroupAddon align="inline-end">
                    <InputGroupButton variant="secondary">Search</InputGroupButton>
                </InputGroupAddon>
            </InputGroup>
        </div>
    )
}

interface TextInputContextProps {
    field: ControllerRenderProps<FieldValues, Path<FieldValues>>,
    fieldState: ControllerFieldState
}

const TextInputContext = React.createContext<TextInputContextProps | undefined>(undefined)

const useTextInputContext = <TFieldValues extends FieldValues = FieldValues>() => {
    const context = React.useContext(TextInputContext)
    if (!context) {
        throw new Error('useTextInputContext must be used within a TextInputProvider')
    }
    return context
}

type TextInputProps<TFieldValues extends FieldValues = FieldValues> = React.PropsWithChildren<{
    control: Control<TFieldValues>
    name: Path<TFieldValues>
    className?: string
}>


export function TextInput({ 
    control, 
    name,
    className,
    children
}: TextInputProps) {
    return (
        <FormField 
            control={control}
            name={name}
            render={({ field, fieldState }) => (
                <TextInputContext.Provider value={{ field, fieldState }}>
                    <div className={className}>
                        {children}
                    </div>
                </TextInputContext.Provider>
            )}
        />
        
    )
}