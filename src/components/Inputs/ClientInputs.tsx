import { Card, CardContent, CardFooter, CardHeader } from '../ui/card'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { ArrowRight } from 'lucide-react'
import DatePicker from './DatePicker'
import DueDatePicker from './DueDatePicker'
import { useRecoilState } from 'recoil'
import { clientInputAtom } from '../../store/atom'

export interface ClientInputs {
  clientName: string
  businessName: string
  clientAddress: string
  city: string
  stateName: string
  contact: string
  date: string
  dueDate: string
  terms: string
  discount: string
}

const ClientInputs = ({ onTabChange }: { onTabChange: (v: 'client' | 'bill') => void }) => {

  const [inputs, setInputs] = useRecoilState(clientInputAtom)

  const handleDateInput = (value: string) => setInputs({ ...inputs, date: value })
  const handleDueDateInput = (value: string) => setInputs({ ...inputs, dueDate: value })

  return (
    <Card className='max-w-xl mx-auto border-0'>
      <CardHeader className='text-xl font-bold'>Client Details</CardHeader>
      <CardContent className='flex flex-col gap-3'>
        <Input
          id='name'
          placeholder='PDF Name'
          value={inputs.saveName}
          onChange={(e) => setInputs({ ...inputs, saveName: e.target.value })} />
        <Input
          id='name'
          placeholder='Client name'
          value={inputs.clientName}
          onChange={(e) => setInputs({ ...inputs, clientName: e.target.value })} />
        <Input
          id='email'
          placeholder='Business name'
          value={inputs.businessName}
          onChange={(e) => setInputs({ ...inputs, businessName: e.target.value })} />
        <Input
          id='address'
          placeholder='Address'
          value={inputs.clientAddress}
          onChange={(e) => setInputs({ ...inputs, clientAddress: e.target.value })} />
        <Input
          id='city'
          placeholder='City'
          value={inputs.city}
          onChange={(e) => setInputs({ ...inputs, city: e.target.value })} />
        <Input
          id='state'
          placeholder='State'
          value={inputs.stateName}
          onChange={(e) => setInputs({ ...inputs, stateName: e.target.value })} />
        <Input
          id='contact'
          placeholder='Contact number'
          value={inputs.contact}
          onChange={(e) => setInputs({ ...inputs, contact: e.target.value })} />
        <div className="flex gap-1">
          <Input
            id='date'
            placeholder='Invoice Date'
            value={inputs.date} />
          <DatePicker
            handleDateInput={handleDateInput} />
        </div>
        <div className="flex gap-1">
          <Input
            id='duedate'
            placeholder='Invoice Due Date'
            value={inputs.dueDate} />
          <DueDatePicker
            handleDueDateInput={handleDueDateInput} />
        </div>
        <CardFooter className='border-t pt-3'>
          <Input
            id='terms'
            placeholder='Terms'
            value={inputs.terms}
            onChange={(e) => setInputs({ ...inputs, terms: e.target.value })} />
        </CardFooter>
        <Button onClick={() => onTabChange('bill')}>Next <ArrowRight /></Button>
      </CardContent>
    </Card>
  )
}

export default ClientInputs
