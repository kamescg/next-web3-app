import React from 'react'
import { default as NextHead } from 'next/head'
import { SITE_DESCRIPTION, SITE_EMOJI, SITE_NAME, SITE_TITLE } from 'utils/config'

interface Props {
  title?: string
  description?: string
}

export function Head(props: Props) {
  return (
    <NextHead>
      <title>{props.title ?? `${SITE_TITLE}`}</title>
      <meta name="description" content={props.description ?? SITE_DESCRIPTION} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </NextHead>
  )
}
