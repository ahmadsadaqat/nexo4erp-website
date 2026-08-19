import React from 'react'
import Script from 'next/script'

type JsonLdProps = {
  data: Record<string, unknown> | Record<string, unknown>[]
}

export default function JsonLd({ data }: JsonLdProps) {
  const json = JSON.stringify(data).replace(/</g, '\\u003c')

  return (
    <Script
      id='json-ld-schema'
      type='application/ld+json'
      dangerouslySetInnerHTML={{ __html: json }}
    />
  )
}
