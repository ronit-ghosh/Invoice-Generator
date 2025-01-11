import { Card, CardHeader } from './ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs'
import ClientInputs from './Inputs/ClientInputs'
import BillingInputs from './Inputs/BillingInputs'
import { useState } from 'react'



const InputPage = () => {
  const [tabs, setTabs] = useState<'client' | 'bill'>('client')

  function onTabChange(value: string) {
    if (value === 'client' || value === 'bill') {
      setTabs(value)
    }
  }

  return (
    <>
      <div className="overflow-y-auto">
        <Card className='max-w-lg mx-auto border-0'>
          <Tabs defaultValue={'client'} value={tabs} onValueChange={onTabChange}>
            <CardHeader>
              <TabsList>
                <TabsTrigger className='w-full' value='client'>Client Details</TabsTrigger>
                <TabsTrigger className='w-full' value='bill'>Billing Details</TabsTrigger>
              </TabsList>
            </CardHeader>
            <TabsContent value='client'>
              <ClientInputs onTabChange={onTabChange} />
            </TabsContent>
            <TabsContent value='bill'>
              <BillingInputs onTabChange={onTabChange} />
            </TabsContent>
          </Tabs>
        </Card>
      </div>
    </>
  )
}

export default InputPage
