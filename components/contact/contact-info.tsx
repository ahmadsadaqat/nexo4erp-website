import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export function ContactInfo() {
  return (
    <Card className='h-full border-border'>
      <CardHeader>
        <CardTitle className='text-pretty'>Contact details</CardTitle>
      </CardHeader>
      <CardContent className='grid gap-4'>
        <div className='grid gap-1'>
          <p className='text-sm text-muted-foreground'>Email</p>
          <p className='font-medium'>
            <a
              href='mailto:info@nexo4erp.com'
              className='text-primary hover:underline'
            >
              info@nexo4erp.com
            </a>
          </p>
        </div>
        <div className='grid gap-1'>
          <p className='text-sm text-muted-foreground'>Phone</p>
          <p className='font-medium'>
            <a
              href='tel:+923229400079'
              className='text-primary hover:underline'
            >
              +92 322 9400079
            </a>
          </p>
        </div>
        <div className='grid gap-1'>
          <p className='text-sm text-muted-foreground'>Hours</p>
          <p className='font-medium'>Mon–Fri, 9:00–17:00</p>
        </div>
        <div className='rounded-lg bg-primary/10 p-4'>
          <p className='text-sm text-muted-foreground'>
            Prefer email? We typically reply within one business day.
          </p>
        </div>
      </CardContent>
    </Card>
  )
}
