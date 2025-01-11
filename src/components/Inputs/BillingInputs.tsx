import { Card, CardContent, CardFooter, CardHeader } from '../ui/card'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { ArrowLeft, Download, File } from 'lucide-react'
import { useRecoilState } from 'recoil'
import { billingInputAtom, clientInputAtom } from '../../store/atom'

export interface BillingItem {
    item: number;
    name: string;
    desc: string;
    quantity: string;
    price: string;
    discount: string;
}

const BillingInputs = ({ onTabChange }: { onTabChange: (v: 'client' | 'bill') => void }) => {

    const [clientInputs, setClientInputs] = useRecoilState(clientInputAtom)

    const [inputs, setInputs] = useRecoilState(billingInputAtom)

    function handleAddItems() {
        setInputs([...inputs, { name: '', desc: '', quantity: '', price: '' }])
    }
    function handleInputChange(index: number, field: keyof BillingItem, value: string) {
        const updatedInputs = [...inputs];
        updatedInputs[index] = { ...updatedInputs[index], [field]: value };
        setInputs(updatedInputs);
    }

    return (
        <Card className='max-w-xl mx-auto border-0'>
            <CardHeader className='text-xl font-bold'>Billing Details</CardHeader>
            <CardContent className='flex flex-col gap-3'>
                {
                    inputs.map((input, index) => (
                        <>
                            <Input
                                key={index}
                                id='name'
                                placeholder='Service name'
                                value={input.name}
                                onChange={(e) => handleInputChange(index, 'name', e.target.value)}
                            />
                            <Input
                                id='desc'
                                placeholder='Service Description'
                                className='h-14 items-start'
                                value={input.desc}
                                onChange={(e) => handleInputChange(index, 'desc', e.target.value)}
                            />
                            <Input
                                id='qty'
                                placeholder='Quantity'
                                value={input.quantity}
                                onChange={(e) => handleInputChange(index, 'quantity', e.target.value)}
                            />
                            <div className="border-b pb-3">
                                <Input
                                    id='price'
                                    placeholder='Price'
                                    value={input.price}
                                    onChange={(e) => handleInputChange(index, 'price', e.target.value)}
                                />
                            </div>
                        </>
                    ))
                }
                <Button onClick={handleAddItems}>Add Item</Button>
                <CardFooter className='border-t pt-3'>
                    <Input
                        id='discount'
                        placeholder='Discount'
                        value={clientInputs.discount}
                        onChange={(e) => setClientInputs({ ...clientInputs, discount: e.target.value })} />
                </CardFooter>
                <Button onClick={() => onTabChange('client')}> <ArrowLeft /> Previous</Button>
                <div className="flex justify-center gap-3">
                    <Button> Preview <File /> </Button>
                    <Button>
                        Download <Download />
                    </Button>
                </div>
            </CardContent>
        </Card>
    )
}

export default BillingInputs
