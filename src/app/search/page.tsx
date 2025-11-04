import { Button } from "@/shared/components/ui/button"
import { Input } from "@/shared/components/ui/input"
import { InputGroup, InputGroupAddon, InputGroupInput } from "@/shared/components/ui/input-group"
import { NativeSelect, NativeSelectOption } from "@/shared/components/ui/native-select"
import { Filter, MapPin, Search } from "lucide-react"

function SearchPage() {
    return (
        <div className="bg-background py-5">
            <div className="container">
                <div className="bg-background-light p-5 rounded-md flex gap-5">
                    <InputGroup>
                        <InputGroupAddon>
                            <Search />
                        </InputGroupAddon>
                        <InputGroupInput
                            placeholder='Search by specialty or name'
                        />
                    </InputGroup>
                    <NativeSelect className='bg-white w-full'>
                        <NativeSelectOption value={""}>All Industries</NativeSelectOption>
                        <NativeSelectOption value={"Visa & Immigration"}>Visa & Immigration</NativeSelectOption>
                        <NativeSelectOption value={"IT & TECH"}>IT & Tech</NativeSelectOption>
                        <NativeSelectOption value={"Mortgage and Finance"}>Mortgage and Finance</NativeSelectOption>
                    </NativeSelect>
                    <InputGroup>
                        <InputGroupAddon>
                            <MapPin />
                        </InputGroupAddon>
                        <InputGroupInput
                            placeholder='Search by specialty or name'
                        />
                    </InputGroup>
                    <Button
                        size={"sm"} 
                        className='h-11  text-base font-semibold'
                    >
                        <Search className='size-4.5' />
                        Search
                    </Button>
                </div>
                <div className="grid grid-cols-[300px_1fr] gap-5 mt-5">
                    <div className="p-5 rounded-md bg-background-light flex flex-col gap-5">
                        <h1 className="flex items-center gap-2 text-lg font-semibold">
                            <Filter />
                            Filters
                        </h1>
                        <Input />
                    </div>
                    <div>
                        <h1 className="text-2xl font-semibold">Search Results</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchPage